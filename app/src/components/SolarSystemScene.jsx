import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Line, ScrollControls, useScroll } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { storyConfig } from '../data/story';
import Planet from './Planet';
import { useStore } from '../store';

const CameraRig = () => {
  const { camera, pointer, viewport } = useThree();
  const scroll = useScroll();
  const transitioningTo = useStore((state) => state.transitioningTo);
  const targetPosition = useRef(new THREE.Vector3(0, 0, 150));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  
  const isMobile = viewport.width < 50; // Approximating mobile breakpoint based on typical WebGL viewport width at Z=85

  useEffect(() => {
    camera.position.set(0, 0, 220);
  }, [camera]);

  useFrame((state, delta) => {
    if (transitioningTo) {
      const planet = storyConfig.planets.find(p => p.id === transitioningTo);
      if (planet) {
        targetPosition.current.set(planet.positionX, 0, planet.size * 2.5 + 15);
        targetLookAt.current.set(planet.positionX, 0, 0);
      }
    } else {
      // Calculate scroll offset (0 to 1)
      const scrollOffset = scroll ? scroll.offset : 0;
      
      // On mobile, use scroll to pan across the system
      // On desktop, center the camera at X=17.5 to fit all planets without scrolling
      const panX = isMobile 
        ? THREE.MathUtils.lerp(110, -70, scrollOffset)
        : 17.5;

      // Gentle parallax mixed with panning
      targetPosition.current.set(
        panX + pointer.x * (isMobile ? 5 : 25),
        pointer.y * (isMobile ? 5 : 15),
        220
      );
      targetLookAt.current.set(panX, 0, 0);
    }
    
    camera.position.lerp(targetPosition.current, delta * (transitioningTo ? 2 : 1.5));
    currentLookAt.current.lerp(targetLookAt.current, delta * (transitioningTo ? 3 : 2));
    camera.lookAt(currentLookAt.current);
    
    // Debug logging
    if (Math.random() < 0.05) {
      // console.log('Camera pos:', camera.position.toArray());
    }
  });
  
  return null;
};

const OrbitalPaths = () => {
  return (
    <group>
      {storyConfig.planets.map(planet => {
        if (planet.isSun) return null;
        
        // Create an elliptical path
        const points = [];
        const radius = Math.abs(planet.positionX - 145); // Distance from sun (Sun is at 145)
        for (let i = 0; i <= 64; i++) {
          const angle = (i / 64) * Math.PI * 2;
          // Sun is at X:145, Z:0
          points.push(new THREE.Vector3(145 + Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
        }
        
        return (
          <Line
            key={planet.id}
            points={points}
            color="#aaccff"
            opacity={0.04}
            transparent
            lineWidth={1}
          />
        );
      })}
    </group>
  );
};

const SolarSystemScene = () => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="fixed inset-0 w-[100vw] h-[100vh] z-10 pointer-events-auto overflow-hidden">
      <Canvas camera={{ position: [0, 0, 220], fov: 50 }} dpr={[1, 2]}>
        <color attach="background" args={['#020204']} />
        <ambientLight intensity={0.25} color="#405070" />
        <pointLight position={[145, 0, 0]} intensity={4000} distance={800} decay={1.2} color="#fff5e6" />
        <directionalLight position={[0, 50, 100]} intensity={0.3} color="#88aadd" />
        
        <ScrollControls horizontal pages={isMobile ? 2.5 : 1} damping={0.2} enabled={isMobile}>
          <CameraRig />
          
          <Suspense fallback={null}>
            <Stars radius={150} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <OrbitalPaths />
            {storyConfig.planets.map((planetData) => (
              <Planet key={planetData.id} data={planetData} />
            ))}
            
            <EffectComposer>
              <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.8} height={300} intensity={1.2} />
            </EffectComposer>
          </Suspense>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default SolarSystemScene;
