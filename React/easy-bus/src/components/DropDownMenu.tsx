import React, { useState, useRef, useEffect } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import {DropdownItem, DropdownMenuProps} from '../types'

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  items,
  className = '',
  menuClassName = '',
  position = 'right',
  onItemClick,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set())
  const dropdownRef = useRef<HTMLDivElement>(null)
  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setOpenSubmenus(new Set())
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleSubmenu = (itemId: string) => {
    setOpenSubmenus(prev => {
      const newSet = new Set<string>()
      if (prev.has(itemId)) {
        return newSet
      } else {
        newSet.add(itemId)
        return newSet
      }
    })
  }

  const handleItemClick = (item: DropdownItem) => {
  if (item.children) {
    toggleSubmenu(item.id);
  } else {
    if (item.onClick) {
      item.onClick();
    }

    if (onItemClick) {
      onItemClick(item.id); 
    }

    setIsOpen(false);
    setOpenSubmenus(new Set());
  }
};


  const renderItems = (items: DropdownItem[], isSubmenu = false) => {
    return items.map((item, index) => (
      <React.Fragment key={item.id}>
        {item.hasSeparator && <hr />}
        <li 
          className={`px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${
            index === 0 && !isSubmenu ? 'rounded-tl rounded-tr' : ''
          } ${
            index === items.length - 1 && !isSubmenu ? 'rounded-bl rounded-br' : ''
          }`}
        >
          {item.href ? (
            <a href={item.href} className="flex items-center">
              {item.icon && <span className="inline-block mr-2 mb-1">{item.icon}</span>}
              {item.label}
              {item.children && <FaAngleRight className="ml-auto w-3 h-3" />}
            </a>
          ) : (
            <div 
              className="flex items-center relative"
              onClick={() => handleItemClick(item)}
            >
              {item.icon && <span className="inline-block mr-2 mb-1 transition-transform duration-200">{item.icon}</span>}
              {item.label}
              {item.children && (
                <FaAngleRight className={`ml-auto w-3 h-3 transition-transform duration-300 ${
                  openSubmenus.has(item.id) ? 'rotate-90' : ''
                }`} />
              )}
              
              {item.children && (
                <div className={`absolute right-full top-0 ml-1 bg-white rounded shadow w-32 z-20 transition-all duration-300 origin-left ${
                  openSubmenus.has(item.id) 
                    ? 'opacity-100 scale-100 visible' 
                    : 'opacity-0 scale-95 invisible'
                }`}>
                  <ul className="text-sm text-gray-800">
                    {renderItems(item.children, true)}
                  </ul>
                </div>
              )}
            </div>
          )}
        </li>
      </React.Fragment>
    ))
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      
      <div
        className={`absolute ${position === 'right' ? 'right-0' : 'left-0'} mt-2 rounded shadow w-32 bg-white z-10 transition-all duration-300 origin-top ${
          isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
        } ${menuClassName}`}
      >
        <ul className="text-sm text-gray-800">
          {renderItems(items)}
        </ul>
      </div>
    </div>
  )
}

export default DropdownMenu