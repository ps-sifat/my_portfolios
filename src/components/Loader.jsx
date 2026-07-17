import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Smooth transition out after 1s
    const timer = setTimeout(() => setIsVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated Spinner - GPU Accelerated */}
        <div className="relative w-16 h-16 perspective">
          {/* Outer ring */}
          <div className="loader-ring loader-ring-outer" />

          {/* Middle ring */}
          <div className="loader-ring loader-ring-middle" />

          {/* Inner circle */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-[#915eff] to-[#0ff] opacity-20 blur-md" />

          {/* Center dot */}
          <div className="absolute inset-5 rounded-full bg-[#915eff] shadow-lg shadow-[#915eff]/50" />
        </div>

        {/* Loading text with optimized animation */}
        <div className="text-center">
          <p className="text-white font-semibold text-lg">
            Loading
            <span className="inline-block ml-1">
              <span className="loader-dot" style={{ "--dot-delay": "0s" }} />
              <span className="loader-dot" style={{ "--dot-delay": "0.2s" }} />
              <span className="loader-dot" style={{ "--dot-delay": "0.4s" }} />
            </span>
          </p>
          <p className="text-secondary text-sm mt-2">
            Rendering your experience
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden mt-4">
          <div className="loader-progress" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
