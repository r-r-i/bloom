// Modules
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'
// Models
// Components
// CSS
// Services

const MovingLight = () => {
    const lightRef = useRef<THREE.PointLight>(null!);
    const speed = 1.5;
    const range = 5;

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const xPosition = Math.sin(time * speed) * range;

        lightRef.current.position.set(xPosition, 2, 4);
    });

    return (
        <pointLight ref={lightRef} intensity={7} distance={4} decay={2} color="grey" /> 
    );
};

export default MovingLight;
