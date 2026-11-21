import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useTheme } from "../../context/ThemeContext";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

const STAR_COUNT = 5000;

const Stars = ({ animate }) => {
  const ref = useRef();
  const { isDark } = useTheme();

  // Generated once; never re-created inside the render loop.
  const [sphere] = useState(() => {
    const arr = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.2 * Math.cbrt(Math.random());
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  useFrame((_, delta) => {
    if (!animate || !ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={isDark ? "#f3f3f3" : "#9b8bc4"}
          size={isDark ? 0.002 : 0.0015}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// One fixed star field for the whole page (a single WebGL context).
const StarsCanvas = () => {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? "demand" : "always"}
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false, powerPreference: "low-power" }}
      >
        <Suspense fallback={null}>
          <Stars animate={!reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
