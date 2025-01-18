"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Monitor, Sun, Moon } from "lucide-react";
import { BoldButton } from "@/components/ui/button";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  // Track what the theme is set to (system/light/dark)
  const { theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);

    if (theme === 'system') {
      const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemThemeChange = () => {
        // Don't manually set theme here - next-themes will handle it
        // Just let the system preference change propagate
      };

      matchMedia.addEventListener('change', handleSystemThemeChange);
      return () => matchMedia.removeEventListener('change', handleSystemThemeChange);
    }
  }, [theme]);

  if (!mounted) {
    return null;
  }

  // Get the icon based on the setting (not the resolved theme)
  const getCurrentIcon = () => {
    switch (theme) {
      case 'system':
        return <Monitor className="h-5 w-5" />;
      case 'light':
        return <Sun className="h-5 w-5" />;
      case 'dark':
        return <Moon className="h-5 w-5" />;
      default:
        return <Monitor className="h-5 w-5" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 p-2" asChild>
        <BoldButton color="primary" size="icon">{getCurrentIcon()}</BoldButton>
        {/* <span className="hidden sm:inline capitalize">
          {theme} {theme === 'system' && `(${resolvedTheme})`}
        </span> */}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2">
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2">
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2">
          <Monitor className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;