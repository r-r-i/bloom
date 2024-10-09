// Modules
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Text } from '@react-three/drei';
import { Points, PointsMaterial, BufferGeometry } from 'three';
import { useNavigate } from 'react-router-dom';
// Components
// Services

const ParticleSphere: React.FC = () => {
  const pointsRef = useRef<Points>(null);
  const [positions, setPositions] = useState<Float32Array>(new Float32Array(0));
  const [initialPositions, setInitialPositions] = useState<Float32Array>(new Float32Array(0));

  const radius = 1;
  const particles = 2000;

  useEffect(() => {
    const spherePositions = new Float32Array(particles * 3); // final positions (on the sphere)
    const startPositions = new Float32Array(particles * 3); // initial random positions

    for (let i = 0; i < particles; i++) {
      // coords for the target sphere shape
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      // final positions (on sphere)
      spherePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
      spherePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      spherePositions[i * 3 + 2] = radius * Math.cos(phi); // z

      // random initial positions ( XYZ )
      startPositions[i * 3] = (Math.random() - 0.5) * 5;
      startPositions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      startPositions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }

    setPositions(spherePositions); // final sphere positions
    setInitialPositions(startPositions); // random starting positions
  }, [particles]);

  // interpolation
  const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

  useFrame(({ clock }) => {
    if (pointsRef.current && initialPositions.length > 0) {
      const time = clock.getElapsedTime();
      const t = Math.min(time / 100, 1); // speed of transition

      const currentPositions = pointsRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particles * 3; i++) {
        // interpolate between initial random position and final sphere position
        currentPositions[i] = lerp(initialPositions[i], positions[i], t);
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true; // inform three of position updates

      // sphere rotation
      pointsRef.current.rotation.y += 0.008;
      pointsRef.current.rotation.x += 0.005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={initialPositions} // start with random particle positions
          count={initialPositions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#85ebd9" />
    </points>
  );
};

export default ParticleSphere;