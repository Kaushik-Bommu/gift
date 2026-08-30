import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sparkles } from '@react-three/drei';

const noiseFunctions = `
// Simplex 3D Noise 
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 1.0/7.0; // N=7
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}

float fbm(vec3 x) {
	float v = 0.0;
	float a = 0.5;
	vec3 shift = vec3(100.0);
	for (int i = 0; i < 5; ++i) {
		v += a * snoise(x);
		x = x * 2.0 + shift;
		a *= 0.5;
	}
	return v;
}
`;

// ==========================================
// 1. HIGH CONTRAST TURBULENT SURFACE SHADER
// ==========================================
const surfaceVertexShader = `
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
void main() {
  vUv = uv;
  vPosition = position;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const surfaceFragmentShader = `
uniform float uTime;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

${noiseFunctions}

void main() {
  // Higher frequency for more aggressive, detailed granulation
  vec3 pos = vPosition * 0.15; 
  
  // Turbulent boiling plasma
  float n1 = fbm(pos + uTime * 0.15);
  float n2 = fbm(pos * 2.0 - uTime * 0.2);
  float n3 = fbm(pos * 4.0 + uTime * 0.25);
  
  float combined = n1 + n2 * 0.5 + n3 * 0.25;
  float t = clamp((combined + 1.0) * 0.5, 0.0, 1.0); // map to 0-1 safely
  
  // Exponentiate for EXTREME contrast (deep blacks/reds vs bright yellows)
  t = pow(t, 1.5); 

  // Realistic cinematic color palette based on reference
  vec3 colorDark = vec3(0.02, 0.0, 0.0); // Almost black/dark red
  vec3 colorMid = vec3(0.8, 0.15, 0.0);  // Deep orange/red
  vec3 colorBright = vec3(1.0, 0.5, 0.0); // Bright orange
  vec3 colorHot = vec3(1.0, 0.95, 0.5);  // White hot yellow
  
  vec3 color = mix(colorDark, colorMid, smoothstep(0.0, 0.35, t));
  color = mix(color, colorBright, smoothstep(0.35, 0.65, t));
  color = mix(color, colorHot, smoothstep(0.65, 1.0, t));
  
  // Add intense glowing limb (fresnel)
  float fresnel = dot(vNormal, vec3(0.0, 0.0, 1.0));
  fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
  
  vec3 edgeColor = vec3(1.0, 0.8, 0.2);
  color += edgeColor * pow(fresnel, 2.5) * 2.0;

  gl_FragColor = vec4(color, 1.0);
}
`;

// ==========================================
// 2. 3D FLAMING PROMINENCES SHADER
// ==========================================
const prominencesVertexShader = `
uniform float uTime;
varying vec3 vPosition;
varying vec3 vNormal;
varying float vNoise;

${noiseFunctions}

void main() {
  vNormal = normalize(normalMatrix * normal);
  
  vec3 pos = position * 0.12;
  float noise1 = fbm(pos + uTime * 0.3);
  float noise2 = fbm(pos * 2.0 - uTime * 0.2);
  
  vNoise = clamp((noise1 + noise2 * 0.5) * 0.5 + 0.5, 0.0, 1.0); // 0 to 1
  
  // Physically displace vertices outward to create real 3D irregular flames
  // We cube the noise so only the highest peaks stick out significantly
  float displacement = pow(vNoise, 3.0) * 4.0;
  
  vec3 newPosition = position + normal * displacement;
  vPosition = newPosition;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

const prominencesFragmentShader = `
varying vec3 vPosition;
varying vec3 vNormal;
varying float vNoise;

void main() {
  float fresnel = dot(vNormal, vec3(0.0, 0.0, 1.0));
  fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
  
  // Mask strictly to the outer edge to simulate the limb prominences
  float edgeMask = pow(fresnel, 3.0);
  
  // Colors for the flares
  vec3 colorDark = vec3(0.8, 0.1, 0.0);
  vec3 colorHot = vec3(1.0, 0.9, 0.2);
  
  vec3 color = mix(colorDark, colorHot, pow(vNoise, 2.0));
  
  // The alpha relies heavily on the edge mask and the noise itself
  float alpha = pow(vNoise, 2.5) * edgeMask * 3.0;
  
  gl_FragColor = vec4(color, alpha);
}
`;

// ==========================================
// 3. RADIAL RAYS / OUTER CORONA SHADER
// ==========================================
const raysVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const raysFragmentShader = `
uniform float uTime;
varying vec2 vUv;

${noiseFunctions}

void main() {
  vec2 centered = vUv - 0.5;
  float dist = length(centered);
  
  // Circular mask
  if (dist > 0.5) discard;
  
  // Calculate polar angle safely
  float angle = atan(centered.y, centered.x + 0.00001);
  
  // Radial FBM noise
  float noise = fbm(vec3(angle * 8.0, dist * 6.0 - uTime * 0.1, uTime * 0.05));
  noise = clamp((noise + 1.0) * 0.5, 0.0, 1.0);
  
  // Soft fade from center to edge
  float radialFade = smoothstep(0.5, 0.1, dist);
  
  // Ensure the center is completely hollow so the actual Sun surface shows through clearly
  float innerMask = smoothstep(0.15, 0.25, dist);
  
  float alpha = radialFade * innerMask * pow(noise, 2.0) * 0.6;
  
  vec3 color = mix(vec3(1.0, 0.2, 0.0), vec3(1.0, 0.6, 0.1), noise);
  
  gl_FragColor = vec4(color, alpha);
}
`;

export const Sun = ({ data }) => {
  const surfaceRef = useRef();
  const prominencesRef = useRef();
  const raysRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (surfaceRef.current) {
      surfaceRef.current.uniforms.uTime.value = time;
    }
    if (prominencesRef.current) {
      prominencesRef.current.uniforms.uTime.value = time;
    }
    if (raysRef.current) {
      raysRef.current.uniforms.uTime.value = time;
    }
  });

  const surfaceUniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  const prominencesUniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  const raysUniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  return (
    <group>
      {/* LAYER 1: Deep, high-contrast boiling plasma surface */}
      <mesh>
        <sphereGeometry args={[data.size, 256, 256]} />
        <shaderMaterial
          ref={surfaceRef}
          vertexShader={surfaceVertexShader}
          fragmentShader={surfaceFragmentShader}
          uniforms={surfaceUniforms}
        />
      </mesh>

      {/* LAYER 2: 3D Displaced physical prominences/flames around the edge */}
      {/* Scale is exactly 1.0, because the vertex shader itself pushes the vertices outward */}
      <mesh>
        <sphereGeometry args={[data.size, 128, 128]} />
        <shaderMaterial
          ref={prominencesRef}
          vertexShader={prominencesVertexShader}
          fragmentShader={prominencesFragmentShader}
          uniforms={prominencesUniforms}
          transparent={true}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* LAYER 3: Volumetric Radial Rays & Atmospheric Glow (Billboard) */}
      <mesh scale={[data.size * 5, data.size * 5, 1]} position={[0, 0, -data.size * 0.5]}>
        <planeGeometry args={[1, 1]} />
        <shaderMaterial
          ref={raysRef}
          vertexShader={raysVertexShader}
          fragmentShader={raysFragmentShader}
          uniforms={raysUniforms}
          transparent={true}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* LAYER 4: Tight intense yellow base glow */}
      <mesh scale={1.03}>
        <sphereGeometry args={[data.size, 64, 64]} />
        <meshBasicMaterial 
          color="#ffaa00" 
          transparent={true} 
          opacity={0.4} 
          blending={THREE.AdditiveBlending} 
          depthWrite={false}
        />
      </mesh>
      
      {/* LAYER 5: Tiny floating plasma particles (Flares snapping off) */}
      <Sparkles 
         count={150} 
         scale={data.size * 2.5} 
         size={data.size * 1.8} 
         speed={0.8} 
         opacity={0.6} 
         color="#ff7700"
      />
    </group>
  );
};
