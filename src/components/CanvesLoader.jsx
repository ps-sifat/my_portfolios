import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvesLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" aria-hidden="true"></span>
      <p
        role="status"
        style={{
          fontSize: 14,
          color: "var(--text-primary)",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvesLoader;
