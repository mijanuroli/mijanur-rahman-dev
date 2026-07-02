"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle between light, dark, and system
  const toggleTheme = () => {
    const current = theme || "system";
    if (current === "dark") {
      setTheme("light");
    } else if (current === "light") {
      setTheme("system");
    } else {
      setTheme("dark");
    }
  };

  // Show a minimal placeholder during hydration
  if (!mounted) {
    return (
      <div 
        className={cn("w-9 h-9 border border-border rounded-sm bg-surface", className)} 
        suppressHydrationWarning 
      />
    );
  }

  // Get current theme for icon display
  const currentTheme = resolvedTheme || "dark";

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-9 h-9 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-150 relative",
        className
      )}
      aria-label="Toggle theme"
      suppressHydrationWarning
      title={theme === "system" ? "System theme" : theme === "dark" ? "Dark theme" : "Light theme"}
    >
      {/* System icon (shown when system theme is active) */}
      <Monitor 
        className={`h-4 w-4 transition-all duration-200 ${
          theme === "system" 
            ? "opacity-100 rotate-0 scale-100" 
            : "opacity-0 rotate-90 scale-0 absolute"
        }`} 
      />
      
      {/* Sun icon (shown in light mode) */}
      <Sun 
        className={`h-4 w-4 transition-all duration-200 ${
          theme === "light" 
            ? "opacity-100 rotate-0 scale-100" 
            : "opacity-0 -rotate-90 scale-0 absolute"
        }`} 
      />
      
      {/* Moon icon (shown in dark mode) */}
      <Moon 
        className={`h-4 w-4 transition-all duration-200 ${
          theme === "dark" 
            ? "opacity-100 rotate-0 scale-100" 
            : "opacity-0 -rotate-90 scale-0 absolute"
        }`} 
      />
    </button>
  );
}