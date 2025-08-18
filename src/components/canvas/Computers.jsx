import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvesLoader from "../CanvesLoader";
import Desk from "../../../public/Desk";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Media query for mobile devices (max-width: 500px)
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Update when screen size changes
    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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

        {/* Switch Desk model config based on device */}
        <Desk
          scale={isMobile ? 0.8 : 0.9} // bigger on mobile than before
          position={isMobile ? [0, -0.9, 0] : [2, 0, 0]} // lift it slightly for balance
        />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
