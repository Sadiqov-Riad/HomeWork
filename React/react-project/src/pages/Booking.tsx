import React, { useState } from 'react';

/**
 * Страница бронирования билетов
 * @returns {JSX.Element}
 */
import type { PaymentStatus } from '../data/bookingList';
import { bookings } from '../data/bookingList';

const statusStyles: Record<PaymentStatus, string> = {
  Pending: 'bg-orange-50 text-orange-500 dark:bg-orange-900/40 dark:text-orange-200',
  Completed: 'bg-teal-50 text-teal-600 dark:bg-teal-900/40 dark:text-teal-200',
};

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MonthSelector: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Monthly');
  return (
    <div>
      <div className="relative">
        <button
          className="border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 text-base font-medium shadow-sm bg-white dark:bg-black/40 dark:border-gray-700 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
        >
          {selected}
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M7 10l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {open && (
          <ul className="absolute left-0 mt-2 w-full bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => { setSelected('Monthly'); setOpen(false); }}
            >
              Monthly
            </li>
            {months.map((month) => (
              <li
                key={month}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { setSelected(month); setOpen(false); }}
              >
                {month}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Booking: React.FC = () => {
  return (
    <div className="rounded-2xl dark:bg-gray-900/40  shadow p-3 mt-14 sm:mt-0 md:p-8 w-full max-w-full overflow-x-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">All Booking List</h2>
        <div className="flex gap-2 items-center">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-lg px-6 py-2 flex items-center gap-2 text-base shadow">
            Add New <span className="text-lg">+</span>
          </button>
          <MonthSelector />
        </div>
      </div>
      <div className="overflow-x-auto mt-6 mb-8 sm:mb-0">
        <table className="min-w-full divide-y divide-gray-700  text-sm sm:text-base dark:text-gray-700 rounded-xl overflow-hidden bg-transparent ">
          <thead>
            <tr className="text-left dark:text-gray-200 text-xs sm:text-sm">
              <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold">Passenger</th>
              <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold">Route</th>
              <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold">Date</th>
              <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold hidden sm:table-cell">Time</th>
              <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold hidden sm:table-cell">Seats</th>
              <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold hidden sm:table-cell">Payment</th>
              <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold text-center hidden sm:table-cell" colSpan={2}> </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {bookings.map((b, i) => (
              <tr key={i} className="text-gray-900 dark:text-gray-100 text-sm sm:text-base dark:hover:bg-white/5 transition-colors">
                <td className="py-2 px-1 sm:py-3 sm:px-2 whitespace-nowrap border-b border-gray-100 dark:border-gray-600">
                  <div className="font-semibold">{b.passenger}</div>
                  <div className="text-xs text-gray-400">{b.phone}</div>
                </td>
                <td className="py-2 px-1 sm:py-3 sm:px-2 whitespace-nowrap">{b.route}</td>
                <td className="py-2 px-1 sm:py-3 sm:px-2 whitespace-nowrap">{b.date}</td>
                <td className="py-2 px-1 sm:py-3 sm:px-2 whitespace-nowrap hidden sm:table-cell">{b.time}</td>
                <td className="py-2 px-1 sm:py-3 sm:px-2 whitespace-nowrap hidden sm:table-cell">{b.seats}</td>
                <td className="py-2 px-1 sm:py-3 sm:px-2 whitespace-nowrap hidden sm:table-cell">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs sm:text-sm font-medium ${statusStyles[b.payment]}`}>{b.payment}</span>
                </td>
                <td className="py-2 px-1 sm:py-3 sm:px-2 text-center hidden sm:table-cell">
                  <button className="hover:text-blue-600" title="Edit">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M4 20h4.586a1 1 0 0 0 .707-.293l9.414-9.414a2 2 0 0 0 0-2.828l-2.172-2.172a2 2 0 0 0-2.828 0l-9.414 9.414A1 1 0 0 0 4 20z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </td>
                <td className="py-2 px-1 sm:py-3 sm:px-2 text-center hidden sm:table-cell">
                  <button className="hover:text-red-600" title="Delete">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M10 3h4a2 2 0 0 1 2 2v2H8V5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking; 