import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Spinner */}
        <div className="relative w-16 h-16">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#915eff] border-r-[#915eff] animate-spin" />
          
          {/* Middle ring */}
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-[#0ff] animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
          
          {/* Inner circle */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-[#915eff] to-[#0ff] opacity-20 blur-md" />
          
          {/* Center dot */}
          <div className="absolute inset-5 rounded-full bg-[#915eff]" />
        </div>

        {/* Loading text with animation */}
        <div className="text-center">
          <p className="text-white font-semibold text-lg">
            Loading
            <span className="inline-block animate-pulse">
              <span className="inline-block w-1 h-1 mx-0.5 bg-[#915eff] rounded-full animate-bounce"
                style={{ animationDelay: "0s" }} />
              <span className="inline-block w-1 h-1 mx-0.5 bg-[#915eff] rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }} />
              <span className="inline-block w-1 h-1 mx-0.5 bg-[#915eff] rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }} />
            </span>
          </p>
          <p className="text-secondary text-sm mt-2">Rendering your experience</p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-gradient-to-r from-[#915eff] to-[#0ff] rounded-full"
            style={{
              animation: "progress 2s ease-in-out infinite",
            }} />
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
