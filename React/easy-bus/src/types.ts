export interface BookingData {
  id: number
  passenger: {
    name: string
    phone: string
  }
  route: string
  date: string
  time: string
  seat: string
  status: 'Pending' | 'Completed'
}

export interface DropdownItem {
  id: string
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  href?: string
  hasSeparator?: boolean
  children?: DropdownItem[]
}

export interface DropdownMenuProps {
  trigger: React.ReactNode
  items: DropdownItem[]
  className?: string
  menuClassName?: string  
  position?: 'left' | 'right'
  onItemClick?: (id: string) => void
}

export type NavbarProps = {
  toggleSidebar: () => void
}

export type SidebarProps = {
  isOpen: boolean
  onClose?: () => void
}

