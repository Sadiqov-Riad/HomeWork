import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useIsMobile } from '../../hooks/use-mobile';
import { Header } from './Header';

/**
 * Основной layout приложения с сайдбаром и верхней панелью управления
 * @returns {JSX.Element}
 */
const Layout: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen bg-background text-foreground overflow-x-hidden">
      {!isMobile && <Sidebar />}
      <Header />
      <main className="flex-1 p-4 md:p-5 mt-5 md:mt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 