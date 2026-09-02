import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
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
      <div className="relative flex items-center justify-center">
        {/* Outer glowing spinner */}
        <div className="w-16 h-16 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
        <div className="absolute w-10 h-10 rounded-full border-2 border-violet-500/20 border-b-violet-400 animate-reverse-spin" />
        <div className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-glow-cyan animate-pulse" />
      </div>
      <p className="mt-4 text-xs font-mono text-cyan-400 font-medium tracking-widest uppercase">
        {progress !== 0 ? `${progress.toFixed(0)}%` : "INITIALIZING 3D"}
      </p>
    </Html>
  );
}
