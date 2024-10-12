// Modules
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
// Models
// Components
// CSS
import './richterCurve.css';
// Services

const RichterCurve: React.FC<{ volume: number; onVolumeChange: (value: number) => void; }> = ({ volume }) => {
    const pointsRef = useRef<THREE.Points>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const particlesCount = 1000; // number of particles
    const particlePositions = new Float32Array(particlesCount * 3);
    const particleSize = 0.02; // size of each particle

    const initParticlePositions = () => {
        const radius = 1;
        for (let i = 0; i < particlesCount; i++) {
            const theta = Math.acos(1 - 2 * Math.random());
            const phi = 2 * Math.PI * Math.random();

            const x = radius * Math.sin(theta) * Math.cos(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(theta);

            particlePositions[i * 3] = x;
            particlePositions[i * 3 + 1] = y;
            particlePositions[i * 3 + 2] = z;
        }
    };

    useEffect(() => {
        initParticlePositions();

        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioContextRef.current = audioContext;

        const audioElement = new Audio('/assets/audio/spring_1.mp3');
        audioElement.loop = true;
        audioElement.volume = volume;
        audioRef.current = audioElement;

        const source = audioContext.createMediaElementSource(audioElement);

        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        analyserRef.current = analyser;

        audioElement.play();

        // clean up on unmount
        return () => {
            audioElement.pause();
            audioElement.src = '/assets/audio/spring_1.mp3';
            audioContext.close();
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume; // update audio volume when state changes
        }
    }, [volume]);

    useFrame(() => {
        if (pointsRef.current && analyserRef.current) {
            const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
            analyserRef.current.getByteFrequencyData(dataArray);
            
            // particle positions based on audio data
            for (let i = 0; i < particlesCount; i++) {
                const radius = 1;
                const scaleFactor = dataArray[i % dataArray.length] / 255;
                const extrusionAmount = scaleFactor * 0.75; // extrusion

                // original spherical coordinates
                const theta = Math.acos(1 - 2 * (i / particlesCount));
                const phi = 2 * Math.PI * (i / particlesCount);
                
                // new positions based on extrusion
                const x = (radius + extrusionAmount) * Math.sin(theta) * Math.cos(phi); // X
                const y = (radius + extrusionAmount) * Math.sin(theta) * Math.sin(phi); // Y
                const z = (radius + extrusionAmount) * Math.cos(theta); // Z

                // update particle position
                particlePositions[i * 3] = x; // X
                particlePositions[i * 3 + 1] = y; // Y
                particlePositions[i * 3 + 2] = z; // Z
            }

            // update geometry positions for visualization
            pointsRef.current.geometry.attributes.position.array.set(particlePositions);
            pointsRef.current.geometry.attributes.position.needsUpdate = true;

            pointsRef.current.rotation.y += 0.0008;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={particlePositions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial color="#85ebd9" size={particleSize} />
        </points>
    );
};

const RichterCurveRender: React.FC = () => {
    const [volume, setVolume] = useState(0.5); // volume

    return (
        <>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <RichterCurve volume={volume} onVolumeChange={setVolume} />
                <OrbitControls />
            </Canvas>
            <div className='volume-slider-container'>
                <label htmlFor='volume-slider'>volume:</label>
                <input
                    type="range"
                    className="volume-slider"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    style={{ width: '100px' }}
                />
            </div>

            <div className="text-overlay">
                <div className="text-line">Spring 1</div>
                <div className="text-line">Recomposed: Vivaldi's Four Seasons</div>
                <div className="text-line">Max Richter</div>
            </div>
        </>
    );
};

export default RichterCurveRender;
