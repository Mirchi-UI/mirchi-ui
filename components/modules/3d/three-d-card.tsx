"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { Mesh } from "three";

function SpinningMesh({ color = "#4338ca" }: { color?: string }) {
  const mesh = useRef<Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  useFrame((state, delta) => {
    if (mesh.current) {
        mesh.current.rotation.x += delta * 0.5;
        mesh.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.2 : 1}
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={hovered ? "hotpink" : color} wireframe />
    </mesh>
  );
}

interface ThreeDCardProps {
    className?: string;
    title?: string;
    description?: string;
    color?: string;
}

export function ThreeDCard({ className, title = "3D Interactive", description = "Hover over the shape to see it react.", color }: ThreeDCardProps) {
  return (
    <div className={cn("relative h-[300px] w-full rounded-xl border bg-card text-card-foreground shadow overflow-hidden", className)}>
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 2.5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <SpinningMesh color={color} />
            </Canvas>
        </div>
        <div className="relative z-10 p-6 flex flex-col justify-end h-full pointer-events-none">
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    </div>
  );
}
