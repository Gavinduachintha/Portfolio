import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

export default function TerminalWindow() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    // Gather real client metrics
    let memAmount = "42.3"; // Fallback
    if (window.performance && window.performance.memory) {
      memAmount = (
        window.performance.memory.usedJSHeapSize /
        (1024 * 1024)
      ).toFixed(1);
    }

    let loadTime = 120; // Fallback
    if (window.performance) {
      const navEntry = window.performance.getEntriesByType?.("navigation")?.[0];
      if (navEntry) {
        loadTime = Math.round(navEntry.domComplete || performance.now());
      }
    }

    const cores = navigator.hardwareConcurrency || 4;

    const dynamicTerminalLines = [
      "$ system status portfolio.client",
      "● portfolio.client - Running",
      "   Active: active (running)",
      `   Memory: ${memAmount} MB | Cores: ${cores}`,
      `   Load Time: ${loadTime}ms`,
      "$ curl -I gavindu.dev/api/status",
      "HTTP/2 200 OK",
      "✓ All systems operational 🚀",
    ];

    const fullText = dynamicTerminalLines.join("\n");
    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex >= fullText.length) {
        return;
      }
      currentIndex++;
      setTypedText(fullText.substring(0, currentIndex));
    };

    const interval = setInterval(typeNextChar, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Terminal Window */}
      <div className="backdrop-blur-xl bg-neutral-900/95 border border-neutral-700/50 rounded-xl overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-800/50 border-b border-neutral-700/50">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            backend@dev: ~/workspace
          </span>
          <Terminal className="w-4 h-4 text-neutral-500" />
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm min-h-[320px] flex flex-col text-left">
          {typedText.split("\n").map((line, index, arr) => {
            const isLast = index === arr.length - 1;
            let content;

            if (line.startsWith("$")) {
              content = (
                <>
                  <span className="text-[#4fda8e] mr-2">$</span>
                  <span className="text-blue-300">{line.substring(2)}</span>
                </>
              );
            } else if (line.startsWith("●")) {
              content = (
                <>
                  <span className="text-[#4fda8e] mr-2">●</span>
                  <span className="text-white">{line.substring(2)}</span>
                </>
              );
            } else if (line.startsWith("   Active:")) {
              content = (
                <>
                  <span className="text-neutral-500">{"   Active: "}</span>
                  <span className="text-[#4fda8e]">{line.substring(11)}</span>
                </>
              );
            } else if (line.startsWith("   Memory:")) {
              if (line.includes("| Cores:")) {
                const parts = line.split("| Cores:");
                content = (
                  <>
                    <span className="text-neutral-500">{"   Memory: "}</span>
                    <span className="text-yellow-300">
                      {parts[0].substring(11)}
                    </span>
                    <span className="text-neutral-500">{"| Cores:"}</span>
                    <span className="text-yellow-300">{parts[1]}</span>
                  </>
                );
              } else {
                content = (
                  <>
                    <span className="text-neutral-500">{"   Memory: "}</span>
                    <span className="text-yellow-300">
                      {line.substring(11)}
                    </span>
                  </>
                );
              }
            } else if (line.startsWith("   Load Time:")) {
              content = (
                <>
                  <span className="text-neutral-500">{"   Load Time: "}</span>
                  <span className="text-yellow-300">{line.substring(14)}</span>
                </>
              );
            } else if (line.startsWith("HTTP/2")) {
              content = (
                <>
                  <span className="text-purple-400">{"HTTP/2 "}</span>
                  <span className="text-[#4fda8e]">{line.substring(7)}</span>
                </>
              );
            } else if (line.startsWith("✓")) {
              content = (
                <>
                  <span className="text-[#4fda8e] mr-2">✓</span>
                  <span className="text-white">{line.substring(2)}</span>
                </>
              );
            } else {
              content = <span className="text-neutral-400">{line}</span>;
            }

            return (
              <div key={index} className="leading-relaxed whitespace-pre-wrap">
                {content}
                {isLast && (
                  <span className="animate-pulse text-white ml-2">▊</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Status Indicator */}
      <div className="absolute -bottom-4 -right-4 border border-neutral-600 hover:bg-[#3ea4af] text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold">System Online</span>
      </div>
    </div>
  );
}
