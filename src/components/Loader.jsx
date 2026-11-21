import React from "react";

const Loader = ({ fading = false }) => (
  <div
    role="status"
    aria-label="Loading"
    className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ${
      fading ? "opacity-0 pointer-events-none" : "opacity-100"
    }`}
    style={{ background: "color-mix(in srgb, var(--loader-bg) 92%, transparent)" }}
  >
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-16 h-16" aria-hidden="true">
        <div className="loader-ring loader-ring-outer" />
        <div className="loader-ring loader-ring-middle" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-[#915eff] to-[#0ff] opacity-20 blur-md" />
        <div className="absolute inset-5 rounded-full bg-[#915eff] shadow-lg shadow-[#915eff]/50" />
      </div>

      <div className="text-center">
        <p className="text-[var(--text-primary)] font-semibold text-lg">
          Loading
          <span className="inline-block ml-1" aria-hidden="true">
            <span className="loader-dot" style={{ "--dot-delay": "0s" }} />
            <span className="loader-dot" style={{ "--dot-delay": "0.2s" }} />
            <span className="loader-dot" style={{ "--dot-delay": "0.4s" }} />
          </span>
        </p>
        <p className="text-secondary text-sm mt-2">Rendering your experience</p>
      </div>

      <div
        className="w-48 h-1 rounded-full overflow-hidden mt-4"
        style={{ background: "var(--border-subtle)" }}
        aria-hidden="true"
      >
        <div className="loader-progress" />
      </div>
    </div>
  </div>
);

export default Loader;
