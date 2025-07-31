import { FaHome, FaBus, FaBusAlt, FaUserAlt, FaChartBar} from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoMdSettings, IoIosHelpCircle} from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import{ SidebarProps } from '../types'


const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()
  
  const menuItems = [
    { path: '/', icon: FaHome, label: 'Dashboard' },
    { path: '/booking', icon: IoTicket, label: 'Booking' },
    { path: '/schedule', icon: RiCalendarScheduleFill, label: 'Schedule' },
    { path: '/bus-management', icon: FaBus, label: 'Bus Management' },
    { path: '/customer-management', icon: FaUserAlt, label: 'Customer Management' },
    { path: '/report', icon: FaChartBar, label: 'Report' },
  ]
  
  const bottomMenuItems = [
    { path: '/settings', icon: IoMdSettings, label: 'Settings' },
    { path: '/help-support', icon: IoIosHelpCircle, label: 'Help & Support' },
  ]

  const isActive = (path: string) => location.pathname === path
  return (
    <>
      {/* Overlay для мобильной версии */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        bg-gray-800 fixed h-full px-4 py-2 z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className='my-2 mb-4'>
          <h1 className='text-3xl text-white font-bold ml-3'>
            <FaBusAlt className='inline-block mr-2 -mt-2' />
            EasyBus
          </h1>
        </div>
        <hr className="text-white"/>
        <ul className='mt-5 text-white font-bold'>
          {menuItems.map((item) => {
            const IconComponent = item.icon
            return (
            <li key={item.path} className="mb-2 rounded py-1">
              <Link to={item.path}
              className={`px-3 block rounded py-2 ${isActive(item.path) ? 'bg-blue-500 text-white': 'hover:bg-blue-500 hover:text-white'}`} onClick={() => window.innerWidth < 768 && onClose?.()}>
                <IconComponent className="inline-block w-6 h-6 mr-2 -mt-2" />
                {item.label}
              </Link>
            </li>)
          })}
          <hr className="text-white pb-4"/>
          {bottomMenuItems.map((item) => {
            const IconComponent = item.icon
            return (
            <li key={item.path} className=" mb-2 rounded py-1">
              <Link to={item.path}
              className={`px-3 block rounded py-2 ${isActive(item.path) ? 'bg-blue-500 text-white': 'hover:bg-blue-500 hover:text-white'}`} onClick={() => window.innerWidth < 768 && onClose?.()}>
                <IconComponent className="inline-block w-6 h-6 mr-2 -mt-2" />
                {item.label}
              </Link>
            </li>)
          })}
        </ul>
      </div>
    </>
  )
}

export default Sidebar