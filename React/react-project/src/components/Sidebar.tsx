import { SidebarProvider, Sidebar as ShadSidebar, SidebarContent, SidebarMenu, SidebarMenuItem, useSidebar } from "./ui/sidebar";
import { Home, Calendar, Clock, Bus, Settings, HelpCircle, Menu } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Dashboard", icon: Home },
  { label: "Booking", icon: Calendar },
  { label: "Schedule", icon: Clock },
  { label: "Bus Management", icon: Bus },
  { label: "Settings", icon: Settings },
  { label: "Support", icon: HelpCircle },
];

function SidebarInner() {
  const activeLink = "Dashboard";
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
      <SidebarMenu>
        {navLinks.map(({ label, icon: Icon }) => (
          <SidebarMenuItem key={label}>
            <a
              href="#"
              className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-colors duration-150 group text-base font-medium ${
                label === activeLink
                  ? "bg-blue-100 text-blue-700 shadow"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              <Icon className={`w-5 h-5 ${label === activeLink ? "text-blue-700" : "text-gray-400 group-hover:text-blue-600"}`} />
              {label}
            </a>
          </SidebarMenuItem>
        ))}
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