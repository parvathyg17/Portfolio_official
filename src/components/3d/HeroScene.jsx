import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import LaptopModel from "./LaptopModel";
import CanvasLoader from "./CanvasLoader";

// Interactive particle cloud that drifts with time and reacts to mouse
function InteractiveParticles({ mouse }) {
  const pointsRef = useRef();

  const [positions, colors] = React.useMemo(() => {
    const count = 180;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c1 = new THREE.Color("#06b6d4");
    const c2 = new THREE.Color("#8b5cf6");
    const c3 = new THREE.Color("#10b981");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const mixed = Math.random() > 0.5 ? c1 : Math.random() > 0.5 ? c2 : c3;
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        (mouse.current[1] || 0) * 0.1,
        0.05
      );
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroScene() {
  const mouse = useRef([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouse.current = [
        (e.clientX / innerWidth) * 2 - 1,
        -(e.clientY / innerHeight) * 2 + 1,
      ];
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none pointer-events-auto">
      <Canvas
        camera={{
          position: [0, 1.2, isMobile ? 5.8 : 4.4],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[6, 8, 5]} intensity={1.4} color="#f8fafc" />
          <pointLight position={[-4, -2, -2]} color="#06b6d4" intensity={2.5} distance={10} />
          <pointLight position={[4, 3, 2]} color="#8b5cf6" intensity={2.2} distance={10} />
          <pointLight position={[0, -3, 2]} color="#10b981" intensity={1.5} distance={8} />

          {/* Ambient Sparkles */}
          <Sparkles
            count={isMobile ? 35 : 75}
            scale={10}
            size={isMobile ? 1.8 : 2.5}
            speed={0.4}
            color="#67e8f9"
          />
          <Sparkles
            count={isMobile ? 25 : 55}
            scale={12}
            size={isMobile ? 1.5 : 2.0}
            speed={0.3}
            color="#c084fc"
          />

          {/* 3D Model with mouse tracking */}
          <group scale={isMobile ? 0.78 : 1.05} position={[0, isMobile ? -0.1 : 0.05, 0]}>
            <LaptopModel mouse={mouse} />
          </group>

          {/* Background interactive particles */}
          <InteractiveParticles mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
}
