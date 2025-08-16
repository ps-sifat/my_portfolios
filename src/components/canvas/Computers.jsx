import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import Desk from "../../../public/Desk";
import { canvas } from "framer-motion/client";

// const computer = useGLTF("/desktop_pc/scene.gltf");

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [30, 4, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight />
      <pointLight position={[0, 5, 2]} intensity={1.5} castShadow />
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Desk
          scale={0.8}
          position={[2, -1.5, 0]}
          // rotation={[0, Math.PI / 4, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
