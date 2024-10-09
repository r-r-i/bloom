// Modules
import * as THREE from 'three'
// Components
import RotatingParticleSphere from '../particleSphere/rotatingSphere'
// Services

export default function Home() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <RotatingParticleSphere />
        </div>

    )
}