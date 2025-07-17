import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { ModeToggle } from '../shared/mode-toggle';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';

const Layout: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:bg-[#1A2A3A]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Top right controls - fixed, visible, modern */}
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-white dark:bg-gray-900 shadow-lg rounded-xl px-4 py-2 border border-gray-200 dark:border-gray-800">
          <Button
            size="sm"
            variant={currentLang === 'en' ? 'default' : 'outline'}
            onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </Button>
          <Button
            size="sm"
            variant={currentLang === 'ru' ? 'default' : 'outline'}
            onClick={() => i18n.changeLanguage('ru')}
          >
            RU
          </Button>
          <ModeToggle />
        </div>
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout; 