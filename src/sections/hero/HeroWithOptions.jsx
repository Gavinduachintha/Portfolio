import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import EnhancedModel from "../../components/3dModels/EnhancedModel";

export default function HeroWithModelOptions() {
  const [typedText, setTypedText] = useState("");
  const [modelPlacement, setModelPlacement] = useState("floating"); // "floating", "grounded", "minimal", "background"

  const fullText =
    "npm install backend-magic\n> Building scalable APIs...\n> Deploying to cloud...\n> Ready! 🚀";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const renderModelByPlacement = () => {
    switch (modelPlacement) {
      case "background":
        return (
          // Large background model
          <div className="absolute inset-0 z-0 opacity-20">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 30 }}
              style={{ width: "100%", height: "100%" }}
            >
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={0.8} />
              <EnhancedModel
                position={[2, 0, 0]}
                scale={2}
                placement="minimal"
                autoRotate={true}
                interactive={false}
              />
            </Canvas>
          </div>
        );

      case "grounded":
        return (
          <div className="absolute -bottom-40 -right-32 w-96 h-96 z-5">
            <Canvas
              camera={{ position: [0, 2, 5], fov: 45 }}
              style={{ pointerEvents: "auto" }}
              shadows
            >
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[10, 10, 5]}
                intensity={1.2}
                castShadow
              />
              <EnhancedModel
                position={[0, 0, 0]}
                scale={1.2}
                placement="grounded"
                interactive={true}
              />
            </Canvas>
          </div>
        );

      case "minimal":
        return (
          <div className="absolute -top-20 -right-20 w-64 h-64 z-10">
            <Canvas
              camera={{ position: [0, 0, 4], fov: 50 }}
              style={{ pointerEvents: "auto" }}
            >
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={0.6} />
              <EnhancedModel
                position={[0, 0, 0]}
                scale={0.7}
                placement="minimal"
                autoRotate={true}
                interactive={true}
              />
            </Canvas>
          </div>
        );

      default: // floating
        return (
          <div
            className="absolute -top-32 -right-24 w-80 h-80 z-10 
                          lg:-top-28 lg:-right-20 lg:w-72 lg:h-72
                          md:-top-20 md:-right-16 md:w-64 md:h-64
                          sm:-top-16 sm:-right-12 sm:w-48 sm:h-48
                          hidden sm:block"
          >
            <Canvas
              camera={{ position: [0, 0, 4], fov: 50 }}
              style={{ pointerEvents: "auto" }}
              shadows
            >
              <ambientLight intensity={0.6} />
              <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
              />
              <pointLight
                position={[-5, 5, 5]}
                intensity={0.8}
                color="#ffffff"
              />
              <pointLight
                position={[5, -5, -5]}
                intensity={0.4}
                color="#64748b"
              />
              <directionalLight
                position={[-5, 5, -5]}
                intensity={0.3}
                color="#3b82f6"
              />
              <EnhancedModel
                position={[0, 0, 0]}
                scale={0.8}
                placement="floating"
                interactive={true}
              />
            </Canvas>
          </div>
        );
    }
  };

  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden">
      {/* Model Placement Controls (for development/testing) */}
      <div className="absolute top-4 right-4 z-50 space-x-2">
        {["floating", "grounded", "minimal", "background"].map((placement) => (
          <button
            key={placement}
            onClick={() => setModelPlacement(placement)}
            className={`px-3 py-1 text-xs rounded ${
              modelPlacement === placement
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {placement}
          </button>
        ))}
      </div>

      {/* Background model if selected */}
      {modelPlacement === "background" && renderModelByPlacement()}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Name and Role */}
        <div className="text-left">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-black dark:text-white leading-tight">
            Hi I'm
            <br />
            <span className="text-neutral-600 dark:text-neutral-400">
              Gavindu
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-neutral-800 dark:text-neutral-200">
            Passionate about Backend developing and a student
          </h2>
          <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View My Work
          </button>
        </div>

        {/* Right Side - Interactive Terminal */}
        <div className="relative">
          <div className="backdrop-blur-xl bg-white/5 dark:bg-black/20 border border-neutral-300/20 dark:border-neutral-700/30 rounded-lg p-6 font-mono text-left shadow-2xl">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                Terminal
              </span>
            </div>
            <pre className="text-neutral-800 dark:text-neutral-300 whitespace-pre-wrap">
              {typedText}
              <span className="animate-pulse">|</span>
            </pre>
          </div>

          {/* Render model based on placement (except background) */}
          {modelPlacement !== "background" && renderModelByPlacement()}
        </div>
      </div>
    </section>
  );
}
