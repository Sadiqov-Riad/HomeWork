import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    if (theme === 'system') {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const update = () => setResolvedTheme(mql.matches ? 'dark' : 'light');
      update();
      mql.addEventListener('change', update);
      return () => mql.removeEventListener('change', update);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);

  // Исправленная логика: если сейчас system и resolvedTheme === 'dark', следующий клик = light
  let nextTheme: 'light' | 'dark' | 'system';
  if (theme === 'light') {
    nextTheme = 'dark';
  } else {
    nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
  }
  const handleClick = () => setTheme(nextTheme);

  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
      <Sun className={
        `h-[1.2rem] w-[1.2rem] transition-all ${resolvedTheme === 'light' ? '' : 'scale-0 rotate-90 absolute'}`
      } />
      <Moon className={
        `h-[1.2rem] w-[1.2rem] transition-all ${resolvedTheme === 'dark' ? '' : 'scale-0 rotate-90 absolute'}`
      } />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}