import React, { useState } from 'react'
import {
  FaBars,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaUserAlt,
} from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import { IoMdSettings } from 'react-icons/io'

type NavbarProps = {
  toggleSidebar: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  
  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between w-full">
      <div className="flex items-center text-xl">
        {/* FaBars отображается только на мобильных устройствах */}
        <FaBars
          className="text-white me-4 cursor-pointer md:hidden"
          onClick={toggleSidebar}
        />
      </div>
      <div className="flex items-center gap-x-5">
        {/* Search */}
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center">
            <input
              type="text"
              className="w-full bg-white px-4 py-1 pl-4 rounded-tl rounded-bl shadow outline-none hidden md:block"
            />
            <button className="p-2 focus:outline-none md:rounded-tr md:rounded-br bg-transparent text-white md:bg-white md:text-black">
              <FaSearch />
            </button>
          </span>
        </div>
        {/* Notification */}
        <div className="text-white">
          <FaBell className="w-6 h-6" />
        </div>
        {/* Profile */}
        <div className="relative">
          <button
            className="text-white"
            onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          >
            <FaUserCircle className="w-6 h-6 mt-1" />
          </button>
          {/* Dropdown */}
          <div
            className={`absolute right-0 mt-2 rounded shadow w-32 bg-white z-10 ${
              isProfileMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <ul className="text-sm text-gray-800">
              <li className="px-4 py-2 hover:bg-gray-100 rounded-tl rounded-tr cursor-pointer">
                <a className="ml-0.5 pt-1" href="#">
                  <FaUserAlt className="inline-block mr-2 mb-1 w-4 h-4" />
                  Profile
                </a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <a href="#">
                  <IoMdSettings className="inline-block mr-2 mb-1 w-5 h-5" />
                  Settings
                </a>
              </li>
              <hr />
              <li className="px-4 py-2 hover:bg-gray-100 rounded-bl rounded-br cursor-pointer">
                <a className="ml-0.5" href="#">
                  <MdLogout className="inline-block mb-1 mr-2 w-5 h-5" />
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar