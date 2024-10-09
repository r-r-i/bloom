// Modules
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import ParticleSphere from './particleSphere';
// Components
// Services
const RotatingParticleSphere: React.FC = () => {
  const navigate = useNavigate(); 
  const [isHovered, setIsHovered] = useState(false);

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
        <div style={{ color: '#e2dddf', fontSize: '3em', fontFamily: 'Poppins' }}>bloom</div>
        <span 
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ 
            color: isHovered ? '#85ebd9' : '#e2dddf',
            fontSize: '1.5em', 
            cursor: 'pointer',
            fontFamily: 'Poppins'
          }} 
        >
          enter
        </span>
      </Html>
    </Canvas>
  );
};

export default RotatingParticleSphere;
