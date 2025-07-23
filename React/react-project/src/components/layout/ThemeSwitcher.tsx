import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/components/shared/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Sun, Moon, Settings as SettingsIcon, ChevronDown } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const themes: { value: Theme; label: string; icon: React.ElementType }[] = [
    { value: 'light', label: 'light', icon: Sun },
    { value: 'dark', label: 'dark', icon: Moon },
    { value: 'system', label: 'system', icon: SettingsIcon },
];

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const currentTheme = themes.find(t => t.value === theme) || themes[2];

  return (
    <div className="px-2 py-1.5">
      <DropdownMenuLabel className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
        {t('profile.theme')}
      </DropdownMenuLabel>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="w-full justify-between h-8 text-xs">
            <div className="flex items-center">
              <currentTheme.icon className="mr-2 h-3 w-3" />
              <span>{t(`profile.${currentTheme.label}`)}</span>
            </div>
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          {themes.map(({ value, label, icon: Icon }) => (
            <DropdownMenuItem
              key={value}
              onClick={() => setTheme(value)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <Icon className="mr-2 h-3 w-3" />
                <span>{t(`profile.${label}`)}</span>
              </div>
              {theme === value && <span className="text-xs">✓</span>}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}; 