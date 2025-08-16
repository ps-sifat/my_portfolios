import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvesLoader from "../CanvesLoader";
import Desk from "../../../public/Desk";

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
      <Suspense fallback={<CanvesLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
        <Desk scale={0.9} position={[2, 0, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
