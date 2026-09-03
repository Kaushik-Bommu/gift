import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const PlanetMesh = ({ textureUrl, color, size, planetId }) => {
  const meshRef = useRef();
  const atmosphereRef = useRef();
  
  // Load texture only if provided
  const texture = textureUrl ? useTexture(textureUrl) : null;

  const scrollY = useRef(0);
  
  React.useEffect(() => {
    const handleScroll = () => { scrollY.current = window.scrollY; };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      let speed = 0.05;
      if (planetId === 'earth') {
         // slow down rotation as we scroll deeper, max scroll ~5000
         const scrollFactor = Math.max(0.1, 1 - (scrollY.current / 4000));
         speed = 0.05 * scrollFactor;
      }
      meshRef.current.rotation.y += delta * speed;
      if (planetId === 'earth') {
        meshRef.current.rotation.y += scrollY.current * 0.00001; // subtle parallax
      }
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y -= delta * 0.03;
      atmosphereRef.current.rotation.z += delta * 0.01;
    }
  });

  return (
    <group>
      {/* Base Planet */}
      <mesh ref={meshRef} scale={1.5}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial 
          map={texture} 
          color={texture ? '#ffffff' : color}
          roughness={0.6}
          metalness={0.2}
        />
      </mesh>

      {/* Atmospheric Glow Shell */}
      <mesh ref={atmosphereRef} scale={1.54}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial 
          color={color}
          transparent={true}
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

const ChapterBackgroundPlanet = ({ planet }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
      <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
        <fog attach="fog" args={['#020204', 20, 60]} />
        
        <ambientLight intensity={0.05} color={planet.color} />
        {/* Cinematic rim light */}
        <directionalLight position={[15, 5, -10]} intensity={2.0} color={planet.color} />
        {/* Soft fill light */}
        <directionalLight position={[-10, -5, 10]} intensity={0.1} color="#ffffff" />
        
        {/* Distant stars */}
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Cosmic dust particles */}
        <Sparkles count={200} scale={40} size={1.5} speed={0.2} opacity={0.2} color={planet.color} />

        {/* Position the planet to the right side of the screen */}
        <group position={[12, 0, -10]}>
           <PlanetMesh 
             textureUrl={planet.texture} 
             color={planet.color} 
             size={planet.size * 1.2} 
             planetId={planet.id}
           />
        </group>
      </Canvas>
      
      {/* HTML Gradients for deeper atmosphere */}
      <div 
        className="absolute inset-0 mix-blend-screen"
        style={{ background: `radial-gradient(circle at 80% 50%, ${planet.color}20, transparent 60%)` }}
      />
      <div 
        className="absolute inset-0"
        style={{ background: `linear-gradient(to bottom, transparent, #020204)` }}
      />
    </div>
  );
};

export default ChapterBackgroundPlanet;
