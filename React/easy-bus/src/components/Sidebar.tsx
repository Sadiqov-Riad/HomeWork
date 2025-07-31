import { FaHome, FaBus, FaBusAlt, FaUserAlt, FaChartBar} from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoMdSettings, IoIosHelpCircle} from "react-icons/io";


const Sidebar = () => {
  return (
    <div className='bg-gray-800 fixed h-full px-4 py-2'>
      <div className='my-2 mb-4'>
        <h1 className='text-3xl text-white font-bold ml-3'><FaBusAlt className='inline-block mr-2 -mt-2' />EasyBus</h1>
      </div>
      <hr className="text-white"/>
      <ul className='mt-5 text-white font-bold'>
        <li  className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2 '></FaHome>
            Dashboard
          </a>
        </li>
        <li  className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='px-3'>
            <IoTicket className='inline-block w-6 h-6 mr-2 -mt-2 '></IoTicket>
            Booking
          </a>
        </li>
        <li  className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='px-3'>
            <RiCalendarScheduleFill className='inline-block w-6 h-6 mr-2 -mt-2 '></RiCalendarScheduleFill>
            Schedule
          </a>
        </li>
        <li  className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='px-3'>
            <FaBus className='inline-block w-6 h-6 mr-2 -mt-2 '></FaBus>
            Bus Management
          </a>
        </li>
        <li  className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='px-3'>
            <FaUserAlt  className='inline-block w-6 h-6 mr-2 -mt-2 '></FaUserAlt >
            Customer Management
          </a>
        </li>
        <li  className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='px-3'>
            <FaChartBar className='inline-block w-6 h-6 mr-2 -mt-2 '></FaChartBar>
            Report
          </a>
        </li>
        <hr className="text-white"/>
        <li  className='mb-2 mt-3 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='px-3'>
            <IoMdSettings className='inline-block w-6 h-6 mr-2 -mt-2 '></IoMdSettings>
            Settings
          </a>
        </li>
        <li  className='mb-2 mt-3 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='px-3'>
            <IoIosHelpCircle className='inline-block w-6 h-6 mr-2 -mt-2 '></IoIosHelpCircle>
            Help & Support
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
