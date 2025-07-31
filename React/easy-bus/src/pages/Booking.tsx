import React from 'react'
import { FaEdit, FaTrash, FaChevronDown } from 'react-icons/fa'
import DropdownMenu from '../components/DropDownMenu'
import { bookingData } from '../data/bookingData'
import { monthlyDropdownItems } from '../data/monthsData'

const Booking: React.FC = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800">All Booking List</h1>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                Add New +
              </button>
              <DropdownMenu
                trigger={
                  <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    Monthly
                    <FaChevronDown className="w-3 h-3" />
                  </button>
                }
                items={monthlyDropdownItems}
                position="left"
                menuClassName="w-40"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Passenger</th>
                <th className="text-left p-4 font-semibold text-gray-700">Route</th>
                <th className="text-left p-4 font-semibold text-gray-700">Date</th>
                <th className="text-left p-4 font-semibold text-gray-700">Time</th>
                <th className="text-left p-4 font-semibold text-gray-700 hidden sm:table-cell">Seats</th>
                <th className="text-left p-4 font-semibold text-gray-700 hidden sm:table-cell">Payment</th>
                <th className="text-left p-4 font-semibold text-gray-700 hidden sm:table-cell">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking) => (
                <tr key={booking.id} className="border-t text-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <td className="p-4">
                    <div>
                      <div className="font-semibold text-gray-800">{booking.passenger.name}</div>
                      <div className="text-sm text-gray-500">{booking.passenger.phone}</div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-700">{booking.route}</td>
                  <td className="p-4 text-gray-700">{booking.date}</td>
                  <td className="p-4 text-gray-700">{booking.time}</td>
                  <td className="p-4 text-gray-700 hidden sm:table-cell">{booking.seat}</td>
                  <td className="p-4 hidden sm:table-cell">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-4 hidden sm:table-cell">
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200">
                        <FaEdit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors duration-200">
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Booking