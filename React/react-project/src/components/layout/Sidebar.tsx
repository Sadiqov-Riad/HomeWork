import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  SidebarProvider, 
  Sidebar as ShadSidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  useSidebar 
} from "../ui/sidebar";
import { 
  Home, 
  Calendar, 
  Clock, 
  Bus, 
  Settings, 
  HelpCircle, 
  Menu
} from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import React from 'react';

const navLinks = [
  { label: 'sidebar.dashboard', icon: Home, to: '/dashboard' },
  { label: 'sidebar.booking', icon: Calendar, to: '/booking' },
  { label: 'sidebar.schedule', icon: Clock, to: '/schedule' },
  { label: 'sidebar.busManagement', icon: Bus, to: '/bus-management' },
  { label: 'sidebar.settings', icon: Settings, to: '/settings' },
  { label: 'sidebar.support', icon: HelpCircle, to: '/support' },
];

function SidebarMenuContent({ onItemClick }: { onItemClick?: () => void }) {
  const { t } = useTranslation();
  const location = useLocation();
  const isMobile = useIsMobile();
  const { toggleSidebar } = useSidebar();
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-100 mb-4">
        <span className="text-2xl font-extrabold tracking-tight text-blue-700 dark:text-[color:var(--sidebar-primary-foreground)]">RideNow</span>
      </div>
      
      <SidebarMenu className="px-3 flex-1">
        {navLinks.map(({ label, icon: Icon, to }, idx) => {
          if (label === 'sidebar.settings') {
            return (
              <React.Fragment key={label}>
                <Separator className="my-2" />
                <SidebarMenuItem>
                  <NavLink
                    to={to}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-150 group text-base font-medium",
                      location.pathname === to
                        ? "bg-blue-100 text-blue-700 shadow dark:bg-[color:var(--sidebar-accent)] dark:text-[color:var(--sidebar-primary-foreground)]"
                        : "text-gray-700 dark:text-[color:var(--sidebar-foreground)]"
                    )}
                    onClick={() => {
                      if (isMobile) {
                        toggleSidebar();
                      }
                      onItemClick?.();
                    }}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5",
                        location.pathname === to
                          ? "text-blue-700 dark:text-[color:var(--sidebar-primary-foreground)]"
                          : "text-gray-400"
                      )}
                    />
                    {t(label)}
                  </NavLink>
                </SidebarMenuItem>
              </React.Fragment>
            );
          }
          return (
            <SidebarMenuItem key={label}>
              <NavLink
                to={to}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-150 group text-base font-medium",
                  location.pathname === to
                    ? "bg-blue-100 text-blue-700 shadow dark:bg-[color:var(--sidebar-accent)] dark:text-[color:var(--sidebar-primary-foreground)]"
                    : "text-gray-700 dark:text-[color:var(--sidebar-foreground)]"
                )}
                onClick={() => {
                  if (isMobile) {
                    toggleSidebar();
                  }
                  onItemClick?.();
                }}
              >
                <Icon
                  className={cn(
                    "w-5 h-5",
                    location.pathname === to
                      ? "text-blue-700 dark:text-[color:var(--sidebar-primary-foreground)]"
                      : "text-gray-400"
                  )}
                />
                {t(label)}
              </NavLink>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </div>
  );
}

export { SidebarMenuContent };

function Sidebar() {
  return (
    <SidebarProvider>
      <ShadSidebar className="backdrop-blur bg-white dark:bg-[#1A2A3A] border border-gray-200/60 dark:border-gray-800/60 min-h-screen w-full max-w-full md:relative md:translate-x-0 flex flex-col">
        <SidebarContent className="h-full flex flex-col">
          <SidebarMenuContent />
        </SidebarContent>
      </ShadSidebar>
    </SidebarProvider>
  );
}

export default Sidebar; 