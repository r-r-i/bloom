// Modules
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
// Models
// Components
import ParticleSphere from './sphereLogic';
// CSS
import './sphere.css'
// Services

const RotatingParticleSphere: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/view');
  };

  return (
    <Canvas style={{ background: 'black' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />

      <ParticleSphere />
      <OrbitControls />

      <Html position={[-3, 0.4, 0]} style={{ pointerEvents: 'auto' }}>
        <div className="bloom-text">bloom</div>
        <span 
          onClick={handleClick} 
          className="enter-text"
        >
          enter
        </span>
      </Html>
    </Canvas>
  );
};

export default RotatingParticleSphere;