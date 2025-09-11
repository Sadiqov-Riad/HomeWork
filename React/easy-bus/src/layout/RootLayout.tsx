import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

function RootLayout() {
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false) // По умолчанию закрыт на мобильных
    
    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev)
    }
    
    const closeSidebar = () => {
        setIsSidebarOpen(false)
      }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="flex-1 md:ml-64">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="min-h-screen">
          <Outlet /> {/* Тут будут рендериться страницы */}
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
