import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { SidebarProvider, SidebarContent } from '@/components/ui/sidebar';
import { SidebarMenuContent } from './Sidebar';

export const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="pointer-events-auto bg-white dark:bg-[#171717] shadow-lg rounded-xl px-2 py-1.5 md:px-2 md:py-1.5 border border-gray-200 dark:border-gray-800">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden h-10 w-10 hover:bg-gray-100 dark:hover:bg-[#262626]">
            <Menu className="w-5 h-5 md:w-7 md:h-7 text-black dark:text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 max-w-[80vw]" aria-describedby="sidebar-sheet-desc">
          <SheetTitle className="sr-only">Sidebar</SheetTitle>
          <div id="sidebar-sheet-desc" className="sr-only">Main navigation</div>
          <SidebarProvider>
            <SidebarContent className="h-full ">
              <SidebarMenuContent onItemClick={() => setOpen(false)} />
            </SidebarContent>
          </SidebarProvider>
        </SheetContent>
      </Sheet>
    </div>
  );
}; 