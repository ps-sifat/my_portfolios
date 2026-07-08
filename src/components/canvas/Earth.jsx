import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvesLoader from "../CanvesLoader";

const TechGlobe = () => {
  const globeRef = useRef(null);
  const gridRef = useRef(null);
  const ringRef = useRef(null);

  useFrame((state, delta) => {
    if (globeRef.current) globeRef.current.rotation.y += delta * 0.15;
    if (gridRef.current) gridRef.current.rotation.y -= delta * 0.25;
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.05;
      ringRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group>
      {/* Ambient & Spotlight for depth */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={2.5} color="#804dee" />
      <directionalLight position={[-5, -3, -5]} intensity={1.5} color="#00f2fe" />
      <pointLight position={[0, 0, 0]} intensity={2} color="#bf61ff" />

      {/* Main Core Sphere */}
      <mesh ref={globeRef} scale={2.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#0d0a21"
          roughness={0.2}
          metalness={0.9}
          bumpScale={0.05}
        />
      </mesh>

      {/* Digital Wireframe Grid */}
      <mesh ref={gridRef} scale={2.52}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshBasicMaterial
          color="#804dee"
          wireframe={true}
          transparent={true}
          opacity={0.15}
        />
      </mesh>

      {/* Cyber Orbit Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]} scale={3.3}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00f2fe" transparent opacity={0.6} />
      </mesh>

      {/* Node particles orbiting the globe */}
      <points>
        <sphereGeometry args={[2.9, 16, 16]} />
        <pointsMaterial
          size={0.03}
          color="#bf61ff"
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvesLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <TechGlobe />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;