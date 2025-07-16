import React from 'react';
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

const navLinks = [
  { label: 'sidebar.dashboard', icon: Home, to: '/dashboard' },
  { label: 'sidebar.booking', icon: Calendar, to: '/booking' },
  { label: 'sidebar.schedule', icon: Clock, to: '/schedule' },
  { label: 'sidebar.busManagement', icon: Bus, to: '/bus-management' },
  { label: 'sidebar.settings', icon: Settings, to: '/settings' },
  { label: 'sidebar.support', icon: HelpCircle, to: '/support' },
];

function SidebarInner() {
  const { t } = useTranslation();
  const location = useLocation();
  const isMobile = useIsMobile();
  const { toggleSidebar } = useSidebar();

  return (
    <>
      {/* Header with toggle button on mobile */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-100 mb-4">
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            onClick={toggleSidebar}
            aria-label="Open sidebar"
          >
            <Menu className="w-6 h-6 text-blue-700" />
          </Button>
        )}
        <span className="text-2xl font-extrabold text-blue-700 tracking-tight">RideNow</span>
      </div>
      <SidebarMenu className="px-3">
        {navLinks.map(({ label, icon: Icon, to }) => {
          const isActive = location.pathname === to;
          return (
            <SidebarMenuItem key={label}>
              <NavLink
                to={to}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-150 group text-base font-medium",
                  isActive
                    ? "bg-blue-100 text-blue-700 shadow"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                )}
                onClick={() => {
                  // Close mobile sidebar when clicking a link
                  if (isMobile) {
                    toggleSidebar();
                  }
                }}
              >
                <Icon 
                  className={cn(
                    "w-5 h-5",
                    isActive 
                      ? "text-blue-700" 
                      : "text-gray-400 group-hover:text-blue-600"
                  )} 
                />
                {t(label)}
              </NavLink>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </>
  );
}

function Sidebar() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <ShadSidebar className="bg-white border-r border-gray-200 shadow-xl min-h-screen w-72 max-w-full md:relative md:translate-x-0">
          <SidebarContent>
            <SidebarInner />
          </SidebarContent>
        </ShadSidebar>
      </div>
    </SidebarProvider>
  );
}

export default Sidebar; 