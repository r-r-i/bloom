// Modules
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
// Models
// Components
import MovingLight from './movingLight';
// CSS
import './combatMedic.css';
// Services

const CombatMedicModel = () => {
    const { scene } = useGLTF('/assets/models/combatMedic/scene.gltf');
    return <primitive object={scene} scale={0.5} position={[0, -2, 4]} />;
};

const CombatMedic: React.FC = () => {
    return (
        <>
        <Canvas className="canvas" camera={{ position: [0, 2, 5], fov: 75 }} style={{ background: 'black' }}>
            <CombatMedicModel />
            <MovingLight />
        </Canvas>

        <div className="text-overlay">
                <div className="text-line">Combat Medic</div>
                <div className="text-line">gltf 3D model</div>
        </div>
        </>
    );
};

export default CombatMedic;
