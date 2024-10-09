// Modules
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points } from 'three';
// Components
// Services

const ParticleSphere: React.FC = () => {
  const pointsRef = useRef<Points>(null);

  const radius = 1;
  const particles = 2000;
  
  const spherePositions = new Float32Array(particles * 3); // final positions (on the sphere)
  const startPositions = new Float32Array(particles * 3);  // initial random positions

  for (let i = 0; i < particles; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = 2 * Math.PI * Math.random();

    spherePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
    spherePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
    spherePositions[i * 3 + 2] = radius * Math.cos(phi); // z

    startPositions[i * 3] = (Math.random() - 0.5) * 5;
    startPositions[i * 3 + 1] = (Math.random() - 0.5) * 5;
    startPositions[i * 3 + 2] = (Math.random() - 0.5) * 5;
  }

  // interpolation
  const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const time = clock.getElapsedTime();
      const t = Math.min(time / 100, 1); // speed of transition

      const currentPositions = pointsRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particles * 3; i++) {
        currentPositions[i] = lerp(startPositions[i], spherePositions[i], t);
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true; // update positions
      pointsRef.current.rotation.y += 0.008;
      pointsRef.current.rotation.x += 0.005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={startPositions} // start with random particle positions
          count={startPositions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#85ebd9" />
    </points>
  );
};

export default ParticleSphere;
