import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md transition-colors">
        <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md transition-colors"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500 hover:text-yellow-600" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 hover:text-gray-900" />
      )}
    </button>
  );
};
