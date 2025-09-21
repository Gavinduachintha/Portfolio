import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

export default function CopilotModel() {
  const { scene } = useGLTF("/models/sitemodel.glb");
  const ref = useRef();
  const [globalMouse, setGlobalMouse] = useState({ x: 0, y: 0 });

  // Track mouse position across entire page
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setGlobalMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Apply colors if materials are missing colors - preserve white bunny and yellow chick
  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      // Check if material has no color or is very dark/gray
      const currentColor = child.material.color.getHex();
      if (
        currentColor === 0x000000 ||
        currentColor === 0x808080 ||
        !child.material.color
      ) {
        // Apply appropriate colors based on mesh name or position
        if (child.name && child.name.toLowerCase().includes("chick")) {
          child.material.color.set("#FFD700"); // Golden yellow for chick
        } else {
          child.material.color.set("#FFFFFF"); // White for bunny
        }
      }
      child.material.needsUpdate = true;
    }
  });

  useFrame(({ clock, mouse }) => {
    if (ref.current) {
      // Gentle floating animation
      ref.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.2;
      // Enhanced mouse follow - more responsive
      ref.current.rotation.y = globalMouse.x * 0.5;
      ref.current.rotation.x = -globalMouse.y * 0.3;
      // Gentle auto rotation
      ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <primitive object={scene} scale={0.8} />
    </group>
  );
}
