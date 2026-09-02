import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Html } from "@react-three/drei";

export default function LaptopModel({ mouse }) {
  const groupRef = useRef();
  const screenRef = useRef();
  const ringsRef = useRef();

  // Create a canvas texture for the code screen
  const codeTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 680;
    const ctx = canvas.getContext("2d");

    // Dark IDE background
    ctx.fillStyle = "#070c18";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // IDE Header / Title bar
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, canvas.width, 48);

    // Window control buttons
    ctx.beginPath();
    ctx.arc(24, 24, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#ef4444";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(48, 24, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#eab308";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(72, 24, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#22c55e";
    ctx.fill();

    // Tab title
    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 20px 'JetBrains Mono', monospace";
    ctx.fillText("ParvathiEngine.py — Python 3.12", 110, 32);

    // Code lines
    const lines = [
      { num: "01", text: "from typing import Final, List, Dict", color: "#c084fc" },
      { num: "02", text: "from django.db import models, transaction", color: "#c084fc" },
      { num: "03", text: "import rest_framework as drf", color: "#c084fc" },
      { num: "04", text: "", color: "#64748b" },
      { num: "05", text: "class FullStackArchitect:", color: "#38bdf8" },
      { num: "06", text: "    def __init__(self, name: str = 'Parvathi G'):", color: "#f1f5f9" },
      { num: "07", text: "        self.role: Final = 'Python & Full Stack Dev'", color: "#67e8f9" },
      { num: "08", text: "        self.stack = ['Django', 'React', 'Spring Boot', 'Postgres']", color: "#34d399" },
      { num: "09", text: "        self.status = 'Ready for Next-Gen Scale'", color: "#fbbf24" },
      { num: "10", text: "", color: "#64748b" },
      { num: "11", text: "    async def build_robust_backend(self, req):", color: "#38bdf8" },
      { num: "12", text: "        with transaction.atomic():", color: "#c084fc" },
      { num: "13", text: "            api = drf.APIEndpoint.secure(req)", color: "#f1f5f9" },
      { num: "14", text: "            response = await api.optimize_queries()", color: "#67e8f9" },
      { num: "15", text: "            return {'status': 200, 'data': response}", color: "#34d399" },
      { num: "16", text: "", color: "#64748b" },
      { num: "17", text: "# Initializing high-concurrency pipeline...", color: "#64748b" },
      { num: "18", text: "engine = FullStackArchitect().deploy()", color: "#ec4899" },
    ];

    ctx.font = "20px 'JetBrains Mono', monospace";
    lines.forEach((line, index) => {
      const y = 84 + index * 32;
      // Line number
      ctx.fillStyle = "#334155";
      ctx.fillText(line.num, 20, y);

      // Line code
      ctx.fillStyle = line.color;
      ctx.fillText(line.text, 65, y);
    });

    // Glowing cursor at end
    ctx.fillStyle = "#06b6d4";
    ctx.fillRect(520, 84 + 17 * 32 - 16, 10, 20);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle floating and mouse parallax
      const targetRotationY = (mouse?.current?.[0] || 0) * 0.4;
      const targetRotationX = -(mouse?.current?.[1] || 0) * 0.2;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        delta * 3
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        delta * 3
      );
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.z += delta * 0.3;
      ringsRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* LAPTOP CHASSIS & SCREEN */}
      <group position={[0, 0, 0]}>
        {/* Base Bottom */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[3.2, 0.1, 2.2]} />
          <meshStandardMaterial
            color="#0b1120"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>

        {/* Keyboard Well */}
        <mesh position={[0, 0.005, -0.2]}>
          <boxGeometry args={[2.8, 0.01, 1.2]} />
          <meshStandardMaterial
            color="#070c18"
            metalness={0.9}
            roughness={0.4}
          />
        </mesh>

        {/* Glowing Keyboard Backlight Accent */}
        <mesh position={[0, 0.015, -0.2]}>
          <planeGeometry args={[2.7, 1.1]} />
          <meshBasicMaterial
            color="#06b6d4"
            transparent
            opacity={0.12}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, 0.01, 0.65]}>
          <boxGeometry args={[1.0, 0.005, 0.7]} />
          <meshStandardMaterial
            color="#141e33"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Laptop Screen Lid tilted ~105 degrees */}
        <group position={[0, 0, -1.1]} rotation={[-0.32, 0, 0]}>
          {/* Screen Outer Aluminum Shell */}
          <mesh position={[0, 1.1, 0]}>
            <boxGeometry args={[3.2, 2.2, 0.08]} />
            <meshStandardMaterial
              color="#0b1120"
              metalness={0.85}
              roughness={0.25}
            />
          </mesh>

          {/* Screen Display with Code Editor */}
          <mesh ref={screenRef} position={[0, 1.1, 0.045]}>
            <planeGeometry args={[3.05, 2.05]} />
            <meshBasicMaterial map={codeTexture} toneMapped={false} />
          </mesh>

          {/* Screen Light Glow Plane */}
          <pointLight
            position={[0, 1.1, 0.5]}
            distance={2.5}
            intensity={1.2}
            color="#38bdf8"
          />
        </group>
      </group>

      {/* Orbiting Holographic Rings */}
      <group ref={ringsRef} position={[0, 0.8, -0.2]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.8, 0.015, 16, 64]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.45} />
        </mesh>
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[3.2, 0.012, 16, 64]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.35} />
        </mesh>
      </group>

      {/* Small floating 3D geometric satellites */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[2.2, 1.4, -0.5]}>
          <icosahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial
            color="#06b6d4"
            wireframe
            emissive="#06b6d4"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={2} floatIntensity={1.8}>
        <mesh position={[-2.4, 0.8, -0.3]}>
          <octahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            emissive="#8b5cf6"
            emissiveIntensity={0.8}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[1.8, -0.4, 1.0]}>
          <torusKnotGeometry args={[0.16, 0.05, 64, 8]} />
          <meshStandardMaterial
            color="#10b981"
            metalness={0.9}
            roughness={0.1}
            emissive="#10b981"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>
    </group>
  );
}
