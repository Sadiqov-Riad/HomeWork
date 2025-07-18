import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Bell, ChevronDown, User, LogOut, Settings, Globe, Sun, Moon } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '../ui/sheet';
import { Menu } from 'lucide-react';
import { SidebarMenuContent } from './Sidebar';
import { SidebarProvider, SidebarContent } from '../ui/sidebar';
import { useTheme } from '../shared/theme-provider';

const Layout: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Top right controls - fixed, visible, modern */}
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-white dark:bg-gray-900 shadow-lg rounded-xl px-4 py-2 border border-gray-200 dark:border-gray-800">
          <div className="flex flex-row items-center justify-between w-full gap-8">
            <div className="flex flex-row items-center gap-2">
              <Button variant="ghost" size="icon" className="ml-1">
                <Bell className="w-6 h-6 md:w-7 md:h-7 text-black dark:text-white" />
                <span className="sr-only">Notifications</span>
              </Button>
              
              {/* User Avatar with Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/api/placeholder/32/32" alt="Adam Smith" />
                      <AvatarFallback className="bg-blue-600 text-white text-sm font-medium">
                        AS
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Adam Smith</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  
                  {/* Language Selection */}
                  <DropdownMenuLabel>Language</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => i18n.changeLanguage('en')}>
                    <Globe className="mr-2 h-4 w-4" />
                    <span>English</span>
                    {currentLang === 'en' && <span className="ml-auto text-xs">✓</span>}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => i18n.changeLanguage('ru')}>
                    <Globe className="mr-2 h-4 w-4" />
                    <span>Русский</span>
                    {currentLang === 'ru' && <span className="ml-auto text-xs">✓</span>}
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  
                  {/* Theme Selection */}
                  <DropdownMenuLabel>Theme</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => setTheme('light')}>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                    {theme === 'light' && <span className="ml-auto text-xs">✓</span>}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                    {theme === 'dark' && <span className="ml-auto text-xs">✓</span>}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('system')}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>System</span>
                    {theme === 'system' && <span className="ml-auto text-xs">✓</span>}
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {isMobile && (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="ml-1 md:hidden">
                      <Menu className="w-7 h-7 text-black dark:text-white" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="p-0 max-w-[80vw]" aria-describedby="sidebar-sheet-desc">
                    <SheetTitle className="sr-only">Sidebar</SheetTitle>
                    <div id="sidebar-sheet-desc" className="sr-only">Main navigation</div>
                    <SidebarProvider>
                      <SidebarContent className="h-full flex flex-col">
                        <SidebarMenuContent />
                      </SidebarContent>
                    </SidebarProvider>
                  </SheetContent>
                </Sheet>
              )}
            </div>
          </div>
        </div>

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout; 