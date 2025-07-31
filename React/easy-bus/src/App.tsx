import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { 
  Booking, 
  Schedule, 
  BusManagement, 
  CustomerManagement, 
  Report, 
  Settings, 
  HelpSupport 
} from './pages'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // По умолчанию закрыт на мобильных

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={closeSidebar}
        />
        <div className="flex-1 md:ml-64">
          <Navbar toggleSidebar={toggleSidebar} />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/bus-management" element={<BusManagement />} />
              <Route path="/customer-management" element={<CustomerManagement />} />
              <Route path="/report" element={<Report />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help-support" element={<HelpSupport />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App