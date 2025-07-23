import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { NotificationButton } from './NotificationButton';
import { ProfileDropdown } from './ProfileDropdown';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 md:top-6 md:right-6 md:gap-3 pointer-events-none">
        <NotificationButton />
        <ProfileDropdown />
      </div>
      
      {isMobile && (
        <div className="fixed top-4 left-4 z-50 md:top-6 md:left-6">
          <MobileMenu />
        </div>
      )}
    </>
  );
}; 