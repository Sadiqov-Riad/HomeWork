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
import { Bell, ChevronDown, User, LogOut, Settings, Globe, Sun, Moon, Menu } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '../ui/sheet';
import { SidebarMenuContent } from './Sidebar';
import { SidebarProvider, SidebarContent } from '../ui/sidebar';
import { useTheme } from '../shared/theme-provider';

/**
 * Основной layout приложения с сайдбаром и верхней панелью управления
 * @returns {JSX.Element}
 */
const Layout: React.FC = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex min-h-screen bg-background text-foreground overflow-x-hidden">
      {!isMobile && <Sidebar />}
      <main className="flex-1 p-4 md:p-8">
        <Outlet />
      </main>
      {/* Top right controls - fixed, visible, modern */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 md:top-6 md:right-6 md:gap-3 pointer-events-none">
        <div className="pointer-events-auto bg-white dark:bg-[#171717] shadow-lg rounded-xl px-2 py-1.5 md:px-2 md:py-1.5 border border-gray-200 dark:border-gray-800">
          <Button variant="ghost" size="icon" className="relative h-10 w-10 md:h-10 md:w-10 hover:bg-gray-100 dark:hover:bg-[#262626]">
            <Bell className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white" />
            <span className="sr-only">Notifications</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </Button>
        </div>
        <div className="pointer-events-auto bg-white dark:bg-[#171717] shadow-lg rounded-xl px-2 py-1.5 md:px-2 md:py-1.5 border border-gray-200 dark:border-gray-800">
          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#262626] h-10">
                <Avatar className="w-7 h-7 md:w-8 md:h-8">
                  <AvatarImage src="/api/placeholder/32/32" alt="Adam Smith" />
                  <AvatarFallback className="bg-blue-600 text-white text-xs md:text-sm font-medium">
                    AS
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">Adam Smith</span>
                <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
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
              
              {/* Language Selector */}
              <div className="px-2 py-1.5">
                <DropdownMenuLabel className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {t('profile.language')}
                </DropdownMenuLabel>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full justify-between h-8 text-xs">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-3 w-3" />
                        {currentLang === 'en' ? t('profile.english') : 
                         currentLang === 'ru' ? t('profile.russian') :
                         currentLang === 'fr' ? t('profile.french') :
                         currentLang === 'es' ? t('profile.spanish') :
                         currentLang === 'ja' ? t('profile.japanese') :
                         currentLang === 'zh' ? t('profile.chinese') :
                         currentLang === 'tr' ? t('profile.turkish') :
                         currentLang === 'it' ? t('profile.italian') :
                         currentLang === 'cs' ? t('profile.czech') :
                         currentLang === 'ko' ? t('profile.korean') : t('profile.english')}
                      </div>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 max-h-60 overflow-y-auto">
                    <DropdownMenuItem onClick={() => i18n.changeLanguage('en')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-3 w-3" />
                        <span>{t('profile.english')}</span>
                      </div>
                      {currentLang === 'en' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => i18n.changeLanguage('ru')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-3 w-3" />
                        <span>{t('profile.russian')}</span>
                      </div>
                      {currentLang === 'ru' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => i18n.changeLanguage('fr')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-3 w-3" />
                        <span>{t('profile.french')}</span>
                      </div>
                      {currentLang === 'fr' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => i18n.changeLanguage('es')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-3 w-3" />
                        <span>{t('profile.spanish')}</span>
                      </div>
                      {currentLang === 'es' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => i18n.changeLanguage('ja')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-3 w-3" />
                        <span>{t('profile.japanese')}</span>
                      </div>
                      {currentLang === 'ja' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => i18n.changeLanguage('zh')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-3 w-3" />
                        <span>{t('profile.chinese')}</span>
                      </div>
                      {currentLang === 'zh' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => i18n.changeLanguage('tr')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-3 w-3" />
                        <span>{t('profile.turkish')}</span>
                      </div>
                      {currentLang === 'tr' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => i18n.changeLanguage('it')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-3 w-3" />
                        <span>{t('profile.italian')}</span>
                      </div>
                      {currentLang === 'it' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => i18n.changeLanguage('cs')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-3 w-3" />
                        <span>{t('profile.czech')}</span>
                      </div>
                      {currentLang === 'cs' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => i18n.changeLanguage('ko')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-3 w-3" />
                        <span>{t('profile.korean')}</span>
                      </div>
                      {currentLang === 'ko' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <DropdownMenuSeparator />
              
              {/* Theme Selector */}
              <div className="px-2 py-1.5">
                <DropdownMenuLabel className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {t('profile.theme')}
                </DropdownMenuLabel>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full justify-between h-8 text-xs">
                      <div className="flex items-center">
                        {theme === 'light' ? (
                          <Sun className="mr-2 h-3 w-3" />
                        ) : theme === 'dark' ? (
                          <Moon className="mr-2 h-3 w-3" />
                        ) : (
                          <Settings className="mr-2 h-3 w-3" />
                        )}
                        {theme === 'system' ? t('profile.system') : theme === 'light' ? t('profile.light') : t('profile.dark')}
                      </div>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem onClick={() => setTheme('light')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Sun className="mr-2 h-3 w-3" />
                        <span>{t('profile.light')}</span>
                      </div>
                      {theme === 'light' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Moon className="mr-2 h-3 w-3" />
                        <span>{t('profile.dark')}</span>
                      </div>
                      {theme === 'dark' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Settings className="mr-2 h-3 w-3" />
                        <span>{t('profile.system')}</span>
                      </div>
                      {theme === 'system' && <span className="text-xs">✓</span>}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>{t('profile.logout')}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* Burger Menu (Mobile) - Left side */}
      {isMobile && (
        <div className="fixed top-4 left-4 z-50 md:top-6 md:left-6 pointer-events-none">
          <div className="pointer-events-auto bg-white dark:bg-[#171717] shadow-lg rounded-xl px-2 py-1.5 md:px-2 md:py-1.5 border border-gray-200 dark:border-gray-800">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden h-10 w-10 hover:bg-gray-100 dark:hover:bg-[#262626]">
                  <Menu className="w-5 h-5 md:w-7 md:h-7 text-black dark:text-white" />
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout; 