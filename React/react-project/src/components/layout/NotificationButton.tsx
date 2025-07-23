import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

export const NotificationButton: React.FC = () => (
  <div className="pointer-events-auto bg-white dark:bg-[#171717] shadow-lg rounded-xl px-2 py-1.5 md:px-2 md:py-1.5 border border-gray-200 dark:border-gray-800">
    <Button variant="ghost" size="icon" className="relative h-10 w-10 md:h-10 md:w-10 hover:bg-gray-100 dark:hover:bg-[#262626]">
      <Bell className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white" />
      <span className="sr-only">Notifications</span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
    </Button>
  </div>
); 