import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { useGLTF, Environment, ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";

export default function CopilotLikeModel({
  position = [0, 0, 0],
  scale = 0.8,
  modelPath = "/models/portfolio.glb",
}) {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Direct mouse tracking like GitHub Copilot - no delay, immediate response
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Get mouse position relative to viewport
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle click bounce effect
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 150);
  };

  // Enhanced material setup
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const material = child.material.clone();

        if (child.name && child.name.toLowerCase().includes("chick")) {
          material.color.set("#FFD700");
          material.metalness = 0.4;
          material.roughness = 0.3;
          material.emissive.set("#332200");
          material.emissiveIntensity = 0.15;
        } else if (child.name && child.name.toLowerCase().includes("bunny")) {
          material.color.set("#FFFFFF");
          material.metalness = 0.1;
          material.roughness = 0.5;
          material.emissive.set("#001122");
          material.emissiveIntensity = 0.08;
        } else {
          const currentColor = material.color.getHex();
          if (currentColor === 0x000000 || currentColor === 0x808080) {
            material.color.set("#E5E7EB");
          }
          material.metalness = 0.3;
          material.roughness = 0.4;
        }

        material.transparent = true;
        material.opacity = 0.98;
        material.needsUpdate = true;
        child.material = material;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.elapsedTime;

      // Responsive rotation with smooth delay - perfect balance
      const targetRotationX = -mouse.y * 0.8;
      const targetRotationY = mouse.x * 1.2;

      // Apply rotation with smooth delay for natural movement
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        targetRotationX,
        0.08 // Smooth delay that feels natural
      );
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        targetRotationY,
        0.08 // Smooth delay that feels natural
      );

      // Subtle floating animation
      ref.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1;

      // Click bounce effect
      const clickScale = clicked ? scale * 1.3 : scale;
      const hoverScale = hovered ? 1.05 : 1;
      const breathingScale = 1 + Math.sin(time * 0.8) * 0.02;

      ref.current.scale.setScalar(clickScale * hoverScale * breathingScale);

      // Smooth tilt based on movement with delay
      const targetTilt = Math.sin(targetRotationY * 2) * 0.1;
      ref.current.rotation.z = THREE.MathUtils.lerp(
        ref.current.rotation.z,
        targetTilt,
        0.06
      );

      // Smooth forward/backward movement based on mouse Y with delay
      const targetZ = position[2] + mouse.y * 0.2;
      ref.current.position.z = THREE.MathUtils.lerp(
        ref.current.position.z,
        targetZ,
        0.05
      );
    }
  });

  return (
    <group position={position}>
      <Environment preset="studio" />

      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.2}
        scale={4}
        blur={2}
        far={4}
        color="#000000"
      />

      <group
        ref={ref}
        rotation={[0.1, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <primitive object={scene} scale={1} />

        {/* Dynamic lighting that follows the mouse */}
        <pointLight
          position={[mouse.x * 2, 1 + mouse.y, 1]}
          intensity={0.6}
          color="#60a5fa"
          distance={5}
        />

        {/* Rim light for better definition */}
        <directionalLight
          position={[-mouse.x * 3, 2, -2]}
          intensity={0.3}
          color="#ffffff"
        />
      </group>
    </group>
  );
}

// Preload the model
useGLTF.preload("/models/portfolio.glb");
