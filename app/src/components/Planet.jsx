import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useStore } from '../store';

const PlanetRings = ({ data }) => {
  const ringMap = useTexture(data.ringTexture);
  
  useEffect(() => {
    if (ringMap) {
      /* eslint-disable react/immutability */
      ringMap.colorSpace = THREE.SRGBColorSpace;
      ringMap.needsUpdate = true;
      /* eslint-enable react/immutability */
    }
  }, [ringMap]);

  return (
    <mesh rotation={[Math.PI / 2 + 0.3, 0.4, 0]}>
      <torusGeometry args={[data.size * 1.8, 0.05, 16, 100]} />
      <meshStandardMaterial 
        map={ringMap}
        color="#ffffff" 
        transparent 
        opacity={0.8} 
        side={THREE.DoubleSide}
        roughness={0.8}
      />
    </mesh>
  );
};

const Planet = ({ data }) => {
  const meshRef = useRef();
  const groupRef = useRef();
  const navigate = useNavigate();
  const [localHovered, setLocalHovered] = useState(false);
  const setHoveredPlanet = useStore((state) => state.setHoveredPlanet);
  const setTransitioningTo = useStore((state) => state.setTransitioningTo);
  const transitioningTo = useStore((state) => state.transitioningTo);

  const textureMap = useTexture(data.texture);
  
  useEffect(() => {
    if (textureMap) {
      /* eslint-disable react/immutability */
      textureMap.colorSpace = THREE.SRGBColorSpace;
      textureMap.needsUpdate = true;
      /* eslint-enable react/immutability */
    }
  }, [textureMap]);

  const emissiveColor = useMemo(() => new THREE.Color(data.color), [data.color]);

  const positionX = data.positionX;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += data.isSun ? 0.002 : 0.005;
    }
  });

  const handleClick = () => {
    if (transitioningTo) return;
    setTransitioningTo(data.id);
    setTimeout(() => {
      navigate(`/chapter/${data.id}`);
      setTransitioningTo(null);
    }, 1500);
  };

  const handlePointerOver = (e) => {
    if (transitioningTo) return;
    e.stopPropagation();
    setLocalHovered(true);
    setHoveredPlanet(data.id);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    if (transitioningTo) return;
    setLocalHovered(false);
    setHoveredPlanet(null);
    document.body.style.cursor = 'auto';
  };

  const scale = localHovered ? 1.15 : 1;
  const isFaded = transitioningTo && transitioningTo !== data.id;

  return (
    <group ref={groupRef} position={[positionX, 0, 0]}>
      <mesh
        ref={meshRef}
        scale={[scale, scale, scale]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        visible={!isFaded}
      >
        <sphereGeometry args={[data.size, 64, 64]} />
        {data.isSun ? (
          <meshBasicMaterial 
            map={textureMap} 
            color="#ffffff" 
          />
        ) : (
          <meshStandardMaterial 
            map={textureMap}
            color="#ffffff"
            roughness={data.id === 'earth' ? 0.6 : (data.id === 'venus' ? 0.3 : 0.8)}
            metalness={data.id === 'earth' ? 0.1 : 0.0}
            emissive={emissiveColor}
            emissiveIntensity={localHovered ? 0.25 : 0.0}
          />
        )}
        
        {/* Glow / Bloom layer */}
        {data.isSun ? (
          <mesh scale={[1.08, 1.08, 1.08]}>
            <sphereGeometry args={[data.size, 64, 64]} />
            <meshBasicMaterial color={data.color} transparent opacity={0.4} blending={THREE.AdditiveBlending} />
          </mesh>
        ) : (
          localHovered && (
            <mesh scale={[1.06, 1.06, 1.06]}>
               <sphereGeometry args={[data.size, 64, 64]} />
               <meshBasicMaterial color={data.color} transparent opacity={0.25} blending={THREE.AdditiveBlending} />
            </mesh>
          )
        )}

        {/* Rings */}
        {data.hasRings && <PlanetRings data={data} />}
      </mesh>

      {/* Cinematic Html Label */}
      {localHovered && !transitioningTo && (
        <Html position={[0, -(data.size + 1.0), 0]} center zIndexRange={[100, 0]}>
          <div className="flex flex-col items-center pointer-events-none transform translate-y-1/2 pt-6 relative">
            {/* The vertical line connecting to the planet */}
            <div className="absolute top-0 w-[1px] h-6 bg-primary/40" style={{ boxShadow: `0 0 8px ${data.color}` }} />
            
            <motion.div 
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex flex-col items-center bg-[#020204]/40 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10"
            >
              <span className="font-label-caps text-[14px] text-tertiary-fixed tracking-[0.4em] uppercase opacity-90 mb-1 drop-shadow-lg">
                CHAPTER {data.chapter}
              </span>
              <span className="font-headline-lg text-[28px] text-primary whitespace-nowrap drop-shadow-xl" style={{ textShadow: `0 0 15px ${data.color}` }}>
                {data.name.toUpperCase()}
              </span>
              <span className="font-label-mono text-[14px] text-on-surface-variant mt-1 italic drop-shadow-md tracking-wider uppercase">
                {data.title}
              </span>
            </motion.div>
          </div>
        </Html>
      )}
    </group>
  );
};

export default Planet;
