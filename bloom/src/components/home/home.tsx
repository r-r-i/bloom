// Modules
import * as THREE from 'three';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import './home.css'
// Services

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/view');
  }

  useEffect(() => {
    // Create the canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'bg';
    document.body.appendChild(canvas);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#e2dddf');

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.setZ(2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(sizes.width, sizes.height);

    // Handle window resize
    const onResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', onResize);

    // Objects
    const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
    const material = new THREE.PointsMaterial({ size: 0.005 });
    const torus = new THREE.Points(geometry, material);

    scene.add(torus);

    // Clock for animation
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Object rotation
      torus.rotation.y = 0.5 * elapsedTime;

      // Render
      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      document.body.removeChild(canvas);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div className="content">
          <h1>BLOOM</h1>
          <div className='pdiv'>
            <p className='enter' onClick={handleClick}>enter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;