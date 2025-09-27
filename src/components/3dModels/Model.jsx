import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import {
  useGLTF,
  MeshTransmissionMaterial,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

export default function CopilotModel() {
  const { scene, materials } = useGLTF("/models/portfolio.glb");
  const ref = useRef();
  const [globalMouse, setGlobalMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Smooth rotation tracking with delay
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  // Track mouse position across entire page
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setGlobalMouse({ x, y });

      // More responsive rotation tracking like GitHub Copilot
      targetRotation.current.x = -y * 0.6; // Increased sensitivity
      targetRotation.current.y = x * 0.9; // Increased sensitivity
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle click bounce effect
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
  };

  // Enhanced material setup with better colors and effects
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        // Create enhanced materials based on object names
        const material = child.material.clone();

        if (child.name && child.name.toLowerCase().includes("chick")) {
          // Golden chick with metallic finish
          material.color.set("#FFD700");
          material.metalness = 0.3;
          material.roughness = 0.4;
          material.emissive.set("#332200");
          material.emissiveIntensity = 0.1;
        } else if (child.name && child.name.toLowerCase().includes("bunny")) {
          // Clean white bunny with soft appearance
          material.color.set("#FFFFFF");
          material.metalness = 0.1;
          material.roughness = 0.6;
          material.emissive.set("#001122");
          material.emissiveIntensity = 0.05;
        } else {
          // Default enhanced material
          const currentColor = material.color.getHex();
          if (currentColor === 0x000000 || currentColor === 0x808080) {
            material.color.set("#E5E7EB");
          }
          material.metalness = 0.2;
          material.roughness = 0.5;
        }

        // Add subsurface scattering effect for organic look
        material.transparent = true;
        material.opacity = 0.95;
        material.needsUpdate = true;
        child.material = material;

        // Enable shadows
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(({ clock, mouse }) => {
    if (ref.current) {
      const time = clock.elapsedTime;

      // Smooth responsive rotation interpolation with natural delay
      const lerpFactor = 0.08; // Perfect balance - responsive but not sudden
      currentRotation.current.x = THREE.MathUtils.lerp(
        currentRotation.current.x,
        targetRotation.current.x,
        lerpFactor
      );
      currentRotation.current.y = THREE.MathUtils.lerp(
        currentRotation.current.y,
        targetRotation.current.y,
        lerpFactor
      );

      // Reduced bouncing speed - slower floating animation
      ref.current.position.y =
        Math.sin(time * 0.4) * 0.15 + Math.sin(time * 0.8) * 0.05;

      // Apply smooth responsive rotation
      ref.current.rotation.x = currentRotation.current.x;
      ref.current.rotation.y =
        currentRotation.current.y + Math.sin(time * 0.2) * 0.05;

      // Reduced breathing/scaling animation with click bounce
      const baseScale = clicked ? 0.9 : 0.8; // Click bounce effect
      const breathingScale = baseScale + Math.sin(time * 0.6) * 0.02;
      ref.current.scale.setScalar(breathingScale);

      // Smooth dynamic tilt based on rotation with delay
      const targetTilt = Math.sin(currentRotation.current.y * 2) * 0.08;
      ref.current.rotation.z = THREE.MathUtils.lerp(
        ref.current.rotation.z,
        targetTilt,
        0.05
      );

      // Smooth forward/backward movement based on mouse X with delay
      const targetZ = currentRotation.current.x * 0.1;
      ref.current.position.z = THREE.MathUtils.lerp(
        ref.current.position.z,
        targetZ,
        0.04
      );
    }
  });

  return (
    <group
      ref={ref}
      position={[0, 0, 0]}
      rotation={[0.1, Math.PI / 3, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick} // Add click handler
    >
      {/* Environment map for realistic reflections */}
      <Environment preset="studio" />

      {/* Contact shadows for grounding */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.4}
        scale={5}
        blur={2}
        far={4}
        color="#000000"
      />

      {/* Main model */}
      <primitive
        object={scene}
        scale={hovered ? 0.85 : 0.8}
        position={[0, 0, 0]}
      />

      {/* Subtle glow effect */}
      <pointLight
        position={[0, 1, 1]}
        intensity={0.5}
        color="#60a5fa"
        distance={3}
      />
    </group>
  );
}
