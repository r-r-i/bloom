///////////////////////////////////////////////////////////////
///// WRITING CREDIT                                        ///
///// The Awakening - Warhammer 40k FanAnimation            ///
///// by Gabriel Christtiane                                ///
///// youtube: https://www.youtube.com/watch?v=MN0WMa2ayS8  ///
///// his artstation: https://www.artstation.com/gabriel999 ///
///////////////////////////////////////////////////////////////

// Modules
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
// Models
// Components
// CSS
import './astartes.css';
// Services

const AstartesModel = () => {
    const { scene } = useGLTF('/assets/models/astartes/scene.gltf');

    return scene ? <primitive object={scene} scale={3} position={[0, -2, 0.5]} /> : null;
};

const Astartes: React.FC = () => {
    return (
        <>
            <Canvas
                className="canvas"
                camera={{ position: [0, 0.3, 2], fov: 8 }}
            >
                <directionalLight color={'white'} intensity={0.05} position={[0, -5, 5]} />
                <AstartesModel />
            </Canvas>
            <div className="centered-text">
                <p className="paragraph">It is the 41st millennium. Ten thousand years ago, the Emperor of Mankind launched the Great Crusade, reconquering the galaxy in humanity's name and establishing his interstellar Imperium.
                However, those old days of might and glory are long gone. A civil war broke out between the Emperor and his favourite son, Horus, bringing mankind and the galaxy itself to the brink of destruction,
                and although the Imperium emerged victorious in the end, the damage it suffered was irreparable. </p>
                <p className="paragraph">Ever since then, humanity has become stagnant, slowly withering and decaying towards an inevitable end.
                Regardless, its power remains considerable. Millions of worlds, trillions of citizens, vast armies and navies, all held together by... War. In this dark and distant future, there nothing but war. Billions
                of souls hold the line day after day, fighting against the Emperor's enemies, the forces of Chaos and their dark gods, the many races of alien invaders, and humanity itself. Every day, millions fall for
                His eternal glory. </p>
                <p className="paragraph">One of the most powerful force in the Imperium, is the legendary Adeptus Astartes, the Emperor's own Angels of Death. To the common populace of the Imperium, they are known as the Space
                Marines. Once humans, now demigods of the battlefield, genetically altered with added organs and implants, raised and trained to be warriors who know no fear, no remorse, and no fatigue. Clad in majestic
                power armour, proudly baring the markings of their chapters, they wield a deadly arsenal that even the darkest horrors lurking in the depts of the galaxy cannot stand against.</p>
                <p className="paragraph">Twenty legions there once were.
                Out of these, small chapters gradually arose and disappeared, among them the direct descendant of the First Legion, the Dark Angels. Brave, proud and unrelenting, they pursue their goals whatever the cost 
                may be.</p>
            </div>
        </>
    );
};

export default Astartes;
