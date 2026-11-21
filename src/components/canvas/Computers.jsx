import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvesLoader from "../CanvesLoader";
import Desk from "./Desk";

// Mounted by Hero on desktop only, so no mobile branches are needed here.
const ComputersCanvas = () => (
  <Canvas
    frameloop="demand"
    dpr={[1, 2]}
    camera={{ position: [30, 4, 5], fov: 25 }}
    gl={{ antialias: true, powerPreference: "high-performance" }}
  >
    <ambientLight />
    <pointLight position={[0, 5, 2]} intensity={1.5} />
    <Suspense fallback={<CanvesLoader />}>
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
      <Desk scale={0.9} position={[2, 0, 0]} />
    </Suspense>
  </Canvas>
);

export default ComputersCanvas;
