import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CopilotModel from "../../components/3dModels/Model"; // Adjust path if needed

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "npm install backend-magic\n> Building scalable APIs...\n> Deploying to cloud...\n> Ready! 🚀";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100); // Typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px- py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          {/* <p className="text-lg md:text-xl mb-8 text-neutral-600 dark:text-neutral-400 max-w-lg">
            Crafting robust, scalable systems behind the scenes. Specialized in
            building efficient APIs and cloud solutions.
          </p> */}
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

          {/* 3D Model positioned above terminal's top right corner */}
          <div className="absolute -top-30 -right-30 w-60 h-100 z-10">
            <Canvas
              camera={{ position: [1, 0, 5], fov: 45 }}
              style={{ pointerEvents: "none" }}
            >
              <ambientLight intensity={1.8} />
              <directionalLight position={[10, 10, 5]} intensity={1.2} />
              <pointLight position={[-5, 5, 5]} intensity={0.5} />
              <CopilotModel />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
