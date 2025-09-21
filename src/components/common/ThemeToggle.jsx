import { useTheme } from "../../context/ThemeContext.jsx";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "light" ? "Switch to Dark" : "Switch to Light";
  return (
    <button
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-neutral-300/60 dark:border-neutral-700/60 bg-white/30 dark:bg-black/30 backdrop-blur-md hover:scale-105 transition-all duration-300"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
