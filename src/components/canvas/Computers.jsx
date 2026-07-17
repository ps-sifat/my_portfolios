import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvesLoader from "../CanvesLoader";
import Desk from "./Desk";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Media query for mobile/tablet screens (max-width: 48rem)
    const mediaQuery = window.matchMedia("(max-width: 48rem)");

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Update when screen size changes
    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (isMobile) return null; // Do not load 3D assets or mount WebGL canvas on mobile/tablet to save memory/performance!

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ 
        position: isMobile ? [20, 2, 5] : [30, 4, 5], 
        fov: isMobile ? 32 : 25 
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight />
      <pointLight position={[0, 5, 2]} intensity={1.5} castShadow />
      <Suspense fallback={<CanvesLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

        {/* Switch Desk model config based on device */}
        <Desk
          scale={isMobile ? 1.3 : 0.9} // Significantly larger scale on mobile so it is visible
          position={isMobile ? [0, -1.2, 0] : [2, 0, 0]} // Positioned lower for mobile balance
        />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
