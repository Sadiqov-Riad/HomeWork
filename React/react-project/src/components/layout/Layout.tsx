import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { ModeToggle } from '../shared/mode-toggle';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Bell } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '../ui/sheet';
import { Menu } from 'lucide-react';
import { SidebarMenuContent } from './Sidebar';
import { SidebarProvider, SidebarContent } from '../ui/sidebar';

const Layout: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Top right controls - fixed, visible, modern */}
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-white dark:bg-gray-900 shadow-lg rounded-xl px-4 py-2 border border-gray-200 dark:border-gray-800">
          <div className="flex flex-row items-center justify-between w-full gap-8">
            <div className="flex flex-row items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="min-w-[56px]"
                  >
                    {currentLang.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => i18n.changeLanguage('en')}>
                    EN
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => i18n.changeLanguage('ru')}>
                    RU
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <ModeToggle />
              <Button variant="ghost" size="icon" className="ml-1">
                <Bell className="w-6 h-6 md:w-7 md:h-7 text-black dark:text-white" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Avatar className="size-14 bg-blue-100 dark:bg-[color:var(--sidebar-primary)]">
                <AvatarFallback className="text-blue-700 dark:text-[color:var(--sidebar-primary-foreground)] font-bold text-xl">RN</AvatarFallback>
              </Avatar>
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