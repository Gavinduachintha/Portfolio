import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import {
  useGLTF,
  Environment,
  ContactShadows,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import * as THREE from "three";

export default function EnhancedModel({
  position = [0, 0, 0],
  scale = 0.8,
  autoRotate = true,
  interactive = true,
  modelPath = "/models/portfolio.glb",
  placement = "floating", // "floating", "grounded", "minimal"
}) {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();
  const [globalMouse, setGlobalMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Smooth rotation tracking with delay
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  // Track mouse position if interactive
  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setGlobalMouse({ x, y });

      // More responsive rotation tracking like GitHub Copilot
      targetRotation.current.x = -y * 0.5; // Increased sensitivity
      targetRotation.current.y = x * 0.8; // Increased sensitivity
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [interactive]);

  // Handle click bounce effect
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200); // Reset after 200ms
  };

  // Enhanced material setup
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const material = child.material.clone();

        // Enhanced material properties based on object names
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

        // Advanced material properties
        material.transparent = true;
        material.opacity = 0.98;
        material.needsUpdate = true;
        child.material = material;

        // Shadows
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.elapsedTime;
      // Floating animation
      if (placement === "floating") {
        ref.current.position.y =
          position[1] +
          Math.sin(time * 0.4) * 0.15 +
          Math.sin(time * 0.8) * 0.05 +
          Math.sin(time * 1.2) * 0.02;
      } else if (placement === "grounded") {
        ref.current.position.y = position[1] + Math.sin(time * 0.3) * 0.02;
      }

      // Calculate target point in front of camera based on mouse
      // Use camera from useFrame
      const target = new THREE.Vector3(
        globalMouse.x * 2,
        globalMouse.y * 2,
        0.5 // Z slightly in front
      );
      // Interpolate model's look direction for smoothness
      const current = ref.current.getWorldPosition(new THREE.Vector3());
      // Lerp the look target for smooth delay
      current.lerp(target, 0.08); // 0.08 for smooth delay
      // Make the model look at the target
      ref.current.lookAt(current);

      // Breathing and bounce scale
      let modelScale = scale;
      if (placement === "floating") {
        modelScale = clicked ? scale * 1 : scale;
        modelScale *= 1 + Math.sin(time * 0.6) * 0.02;
      } else if (placement === "grounded") {
        modelScale = clicked ? scale * 1 : scale;
      } else if (placement === "minimal") {
        modelScale = clicked ? scale * 1: scale;
      }
      ref.current.scale.setScalar(modelScale);
    }
  });

  const handlePointerEvents = interactive
    ? {
        onPointerOver: () => setHovered(true),
        onPointerOut: () => setHovered(false),
        onClick: handleClick, // Add click handler
      }
    : {};

  return (
    <group position={position}>
      {/* Environment and effects based on placement */}
      {placement !== "minimal" && <Environment preset="studio" />}

      {/* Contact shadows for grounded placement */}
      {placement === "grounded" && (
        <>
          <ContactShadows
            position={[0, -20, 0]}
            opacity={0.3}
            scale={6}
            blur={2.5}
            far={4}
            color="#000000"
          />
          {/* Reflective floor */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[10, 10]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.5}
            />
          </mesh>
        </>
      )}

      {/* Floating version with Float component */}
      {placement === "floating" ? (
        <Float
          speed={0.6} // Reduced for smoother integration with cursor tracking
          rotationIntensity={0.05} // Reduced to not interfere with cursor tracking
          floatIntensity={0.3} // Reduced for subtler floating
          floatingRange={[0, 0.2]} // Smaller range for more controlled movement
        >
          <group
            ref={ref}
            rotation={[0.1, Math.PI / 3, 0]}
            {...handlePointerEvents}
          >
            <primitive object={scene} scale={hovered ? scale * 1.05 : scale} />

            {/* Subtle glow */}
            <pointLight
              position={[0, 1, 1]}
              intensity={0.4}
              color="#60a5fa"
              distance={4}
            />
          </group>
        </Float>
      ) : (
        <group
          ref={ref}
          rotation={
            placement === "grounded" ? [0, 0, 0] : [0.1, Math.PI / 4, 0]
          }
          {...handlePointerEvents}
        >
          <primitive object={scene} scale={hovered ? scale * 1.05 : scale} />

          {placement !== "minimal" && (
            <pointLight
              position={[0, 1, 1]}
              intensity={0.3}
              color="#60a5fa"
              distance={4}
            />
          )}
        </group>
      )}
    </group>
  );
}

// Preload the model
useGLTF.preload("/models/portfolio.glb");
