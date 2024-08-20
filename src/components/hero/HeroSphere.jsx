import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { ThemeContext } from '../../utils/ThemeContext';
import { useContext } from 'react';

const HeroSphere = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={2.35}>
                    <MeshDistortMaterial color="#D32F2F" attach="material" distort={0.5} speed={2} />
                </Sphere>
            </Canvas>
        </>
    )
}

export default HeroSphere