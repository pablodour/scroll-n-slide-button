// ThreeDBackground.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

const RotatingCube = () => {
  const meshRef = useRef<any>();

  // Rotate the cube each frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const ThreeDBackground = () => {
  return (
    <Canvas className="absolute inset-0 z-0">
      {/* Ambient and point lights for basic illumination */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeDBackground;
