import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import usePrefersColorScheme from "./usePrefersColorScheme";

// Optional helper: sync theme with OS preference on first load.
export default function useThemeWithPreference() {
  const { theme, setTheme } = useTheme();
  const preferred = usePrefersColorScheme();

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      setTheme(preferred);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { theme, setTheme };
}
