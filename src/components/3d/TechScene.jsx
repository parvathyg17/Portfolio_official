import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Float } from "@react-three/drei";
import * as THREE from "three";

const constellationTechs = [
  { name: "Python", color: "#38bdf8", category: "Backend / Language", size: 0.35, distance: 2.6, speed: 0.6, angle: 0 },
  { name: "Django", color: "#10b981", category: "Web Framework", size: 0.32, distance: 3.1, speed: 0.5, angle: 0.8 },
  { name: "React", color: "#06b6d4", category: "Frontend UI", size: 0.34, distance: 2.7, speed: 0.7, angle: 1.6 },
  { name: "Java", color: "#f97316", category: "Enterprise Core", size: 0.32, distance: 3.3, speed: 0.45, angle: 2.4 },
  { name: "Spring Boot", color: "#84cc16", category: "Java Framework", size: 0.3, distance: 3.6, speed: 0.55, angle: 3.2 },
  { name: "PostgreSQL", color: "#3b82f6", category: "Relational DB", size: 0.33, distance: 2.9, speed: 0.65, angle: 4.0 },
  { name: "REST APIs", color: "#8b5cf6", category: "API Design", size: 0.28, distance: 3.4, speed: 0.5, angle: 4.8 },
  { name: "Docker", color: "#0ea5e9", category: "DevOps", size: 0.29, distance: 3.8, speed: 0.4, angle: 5.5 },
  { name: "AWS", color: "#f59e0b", category: "Cloud Services", size: 0.28, distance: 4.1, speed: 0.35, angle: 1.2 },
  { name: "JavaScript", color: "#facc15", category: "Frontend / Web", size: 0.3, distance: 3.2, speed: 0.6, angle: 2.8 },
  { name: "Git", color: "#f43f5e", category: "Version Control", size: 0.26, distance: 3.5, speed: 0.5, angle: 3.8 },
  { name: "MySQL", color: "#0284c7", category: "Database", size: 0.27, distance: 4.0, speed: 0.42, angle: 4.6 },
  { name: "DRF", color: "#059669", category: "Django REST", size: 0.28, distance: 2.4, speed: 0.75, angle: 5.2 },
];

function TechNode({ tech, isHovered, onHover, onLeave }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
    }
  });

  return (
    <group position={tech.position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(tech);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onLeave();
        }}
        scale={isHovered ? 1.4 : 1.0}
      >
        <dodecahedronGeometry args={[tech.size, 0]} />
        <meshStandardMaterial
          color={tech.color}
          emissive={tech.color}
          emissiveIntensity={isHovered ? 1.2 : 0.4}
          roughness={0.2}
          metalness={0.8}
          wireframe={!isHovered}
        />
      </mesh>

      {/* Orbit Ring Node Glow */}
      {isHovered && (
        <pointLight color={tech.color} intensity={2.0} distance={2.5} />
      )}

      {/* Hover Information Badge */}
      <Html distanceFactor={8} position={[0, tech.size + 0.35, 0]} center>
        <div
          className={`transition-all duration-300 pointer-events-none select-none px-2.5 py-1 rounded-full text-xs font-mono whitespace-nowrap shadow-lg ${
            isHovered
              ? "opacity-100 scale-105 bg-dark-900/90 border border-cyan-400 text-cyan-300 shadow-glow-cyan"
              : "opacity-60 scale-95 bg-dark-950/60 border border-white/10 text-slate-300"
          }`}
        >
          <span className="font-bold">{tech.name}</span>
          {isHovered && (
            <span className="block text-[10px] text-slate-400 font-normal">
              {tech.category}
            </span>
          )}
        </div>
      </Html>
    </group>
  );
}

function ConstellationGroup({ hoveredTech, setHoveredTech }) {
  const groupRef = useRef();

  // Calculate orbital positions based on angles and distances
  const nodes = useMemo(() => {
    return constellationTechs.map((t, idx) => {
      const yOffset = Math.sin(idx * 1.3) * 1.5;
      const x = Math.cos(t.angle) * t.distance;
      const z = Math.sin(t.angle) * t.distance;
      return {
        ...t,
        position: [x, yOffset, z],
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current && !hoveredTech) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Core Energy Sphere */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh>
          <icosahedronGeometry args={[0.9, 2]} />
          <meshStandardMaterial
            color="#06b6d4"
            wireframe
            emissive="#06b6d4"
            emissiveIntensity={0.6}
            transparent
            opacity={0.7}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.65, 32, 32]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.9}
            roughness={0.3}
          />
        </mesh>
        <pointLight color="#06b6d4" intensity={3} distance={5} />
      </Float>

      {/* Orbit Guideline Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.59, 2.61, 64]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.18} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2.3, 0.4, 0]}>
        <ringGeometry args={[3.29, 3.31, 64]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.18} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, -0.3, 0]}>
        <ringGeometry args={[3.99, 4.01, 64]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>

      {/* Orbiting Satellite Tech Nodes */}
      {nodes.map((tech) => (
        <TechNode
          key={tech.name}
          tech={tech}
          isHovered={hoveredTech?.name === tech.name}
          onHover={setHoveredTech}
          onLeave={() => setHoveredTech(null)}
        />
      ))}
    </group>
  );
}

export default function TechScene({ onHoverTech }) {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleHover = (tech) => {
    setHoveredTech(tech);
    if (onHoverTech) onHoverTech(tech);
  };

  const handleLeave = () => {
    setHoveredTech(null);
    if (onHoverTech) onHoverTech(null);
  };

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 2.5, 6.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, -5]} color="#8b5cf6" intensity={1} />
        
        <ConstellationGroup
          hoveredTech={hoveredTech}
          setHoveredTech={handleHover}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
