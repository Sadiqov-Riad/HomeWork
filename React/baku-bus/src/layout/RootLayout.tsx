import React, { useEffect, type ReactNode } from 'react';


interface RootLayoutProps {
  children: ReactNode;
  className?: string;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, className = '' }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`w-full lg:px-24 md:px-16 sm:px-7 px-4 ${className}`}>
      {children}
    </div>
  );
};

export default RootLayout;
