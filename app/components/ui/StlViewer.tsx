"use client";

import { useRef, useEffect, Suspense } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import * as THREE from "three";
import { RotateCcw } from "lucide-react";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-32 h-1 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#4fda8e] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs font-mono text-neutral-500">
          {Math.round(progress)}%
        </span>
      </div>
    </Html>
  );
}

function StlMesh({ url }: { url: string }) {
  const geometry = useLoader(STLLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;
    const geo = meshRef.current.geometry;
    // Center the geometry around its bounding box center
    geo.computeBoundingBox();
    const box = geo.boundingBox!;
    const center = new THREE.Vector3();
    box.getCenter(center);
    geo.translate(-center.x, -center.y, -center.z);

    // Scale to fit in a unit sphere of radius ~1.5
    geo.computeBoundingSphere();
    const radius = geo.boundingSphere!.radius;
    const scale = 1.5 / radius;
    meshRef.current.scale.setScalar(scale);
  }, [geometry]);

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial color="#b0b8c1" roughness={0.4} metalness={0.3} />
    </mesh>
  );
}

function CameraRig() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, 4);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return null;
}

interface StlViewerProps {
  url: string;
}

export default function StlViewer({ url }: StlViewerProps) {
  const controlsRef = useRef<any>(null);

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="relative w-full h-[420px] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
      {/* Reset button */}
      <button
        onClick={resetCamera}
        title="Reset view"
        className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-400 hover:text-[#4fda8e] hover:border-[#4fda8e]/40 transition-colors"
      >
        <RotateCcw className="w-3.5 h-3.5" />
      </button>

      {/* Interaction hint */}
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-[10px] font-mono text-neutral-600 pointer-events-none select-none whitespace-nowrap">
        drag to rotate · scroll to zoom
      </p>

      <Canvas
        shadows
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 4], fov: 45 }}
      >
        <CameraRig />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-4, -4, -4]} intensity={0.3} />

        <Suspense fallback={<Loader />}>
          <StlMesh url={url} />
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.08}
          minDistance={1}
          maxDistance={20}
          makeDefault
        />
      </Canvas>
    </div>
  );
}
