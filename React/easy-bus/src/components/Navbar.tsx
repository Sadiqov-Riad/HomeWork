import React, { useState } from 'react'
import {
  FaBars,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaUserAlt,
  FaMoon,
  FaSun,
  FaGlobe,
} from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import { IoMdSettings } from 'react-icons/io'
import{ DropdownItem , NavbarProps} from '../types'
import DropdownMenu from './DropDownMenu'
import SignIn from './SignIn'
import SignUp from './SignUp'


const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const handleMenuItemClick = (id: string) => {
  if (id === 'logout') {
    setIsAuthenticated(false)
  }}
  const [modal, setModal] = useState<'signin' | 'signup' | null>(null)
  const profileMenuItems: DropdownItem[] = [
    {
      id: 'profile',
      label: 'Profile',
      icon: <FaUserAlt className="w-4 h-4" />,
      href: '#'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <IoMdSettings className="w-5 h-5" />,
      href: '#'
    },
    {
      id: 'theme',
      label: 'Theme',
      icon: <FaSun className="w-4 h-4" />,
      children: [
        {
          id: 'light-theme',
          label: 'Light Theme',
          icon: <FaSun className="w-4 h-4" />
        },
        {
          id: 'dark-theme',
          label: 'Dark Theme',
          icon: <FaMoon className="w-4 h-4" />
        }
      ]
    },
    {
      id: 'language',
      label: 'Language',
      icon: <FaGlobe className="w-4 h-4" />,
      children: [
        {
          id: 'english',
          label: 'English'
        },
        {
          id: 'russian',
          label: 'Russian'
        }
      ]
    },
    {
      id: 'logout',
      label: 'Log Out',
      icon: <MdLogout className="w-5 h-5" />,
      hasSeparator: true
    }
  ]

  return (
  <>
    <nav className="bg-gray-800 px-4 py-3 flex justify-between w-full">
      <div className="flex items-center text-xl">
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
        {/* Profile or Auth */}
        {isAuthenticated ? (
          <DropdownMenu
            trigger={
              <button className="text-white">
                <FaUserCircle className="w-6 h-6 mt-1" />
              </button>
            }
            items={profileMenuItems}
            onItemClick={handleMenuItemClick}
          />
        ) : (
          <button
            onClick={() => setModal('signin')}
            className=" text-white px-4 py-2 rounded shadow cursor-cell"
          >
            Sign In / Sign Up
          </button>
        )}
      </div>
    </nav>

    {modal === 'signin' && (
      <SignIn
        onClose={() => setModal(null)}
        onSwitchToSignUp={() => setModal('signup')}
        onAuthSuccess={() => {
          setIsAuthenticated(true)
          setModal(null)
        }}
      />
    )}

    {modal === 'signup' && (
      <SignUp
        onClose={() => setModal(null)}
        onSwitchToSignIn={() => setModal('signin')}
        onRegisterSuccess={() => {
          setIsAuthenticated(true)
          setModal(null)
        }}
      />
    )}
  </>
  )
}

export default Navbar