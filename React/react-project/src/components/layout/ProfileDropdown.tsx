import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';

export const ProfileDropdown: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-auto bg-white dark:bg-[#171717] shadow-lg rounded-xl px-2 py-1.5 md:px-2 md:py-1.5 border border-gray-200 dark:border-gray-800">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#262626] h-10">
            <Avatar className="w-7 h-7 md:w-8 md:h-8">
              <AvatarImage src="/api/placeholder/32/32" alt="Adam Smith" />
              <AvatarFallback className="bg-blue-600 text-white text-xs md:text-sm font-medium">
                AS
              </AvatarFallback>
            </Avatar>
            <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">Adam Smith</span>
            <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 md:w-56">
          <DropdownMenuLabel>{t('profile.myAccount')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>{t('profile.profile')}</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>{t('profile.settings')}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <LanguageSwitcher />
          <DropdownMenuSeparator />
          <ThemeSwitcher />
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>{t('profile.logout')}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}; 