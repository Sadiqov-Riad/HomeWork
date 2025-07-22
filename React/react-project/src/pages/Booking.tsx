import React from 'react';

/**
 * Страница бронирования билетов
 * @returns {JSX.Element}
 */
type PaymentStatus = 'Pending' | 'Completed';

interface BookingRow {
  passenger: string;
  phone: string;
  route: string;
  date: string;
  time: string;
  seats: string;
  payment: PaymentStatus;
}

const bookings: BookingRow[] = [
  {
    passenger: 'Md. Shiraj',
    phone: '+1 456 576 897',
    route: 'Dha to Ctg',
    date: '12 Nov 2024',
    time: '12:00 pm',
    seats: 'A1 - A2',
    payment: 'Pending',
  },
  {
    passenger: 'Md. Shiraj',
    phone: '+1 456 576 897',
    route: 'Dha to Ctg',
    date: '12 Nov 2024',
    time: '12:00 pm',
    seats: 'A1 - A2',
    payment: 'Completed',
  },
  {
    passenger: 'Anna Ivanova',
    phone: '+7 999 123 45 67',
    route: 'Moscow to SPB',
    date: '15 Nov 2024',
    time: '09:30 am',
    seats: 'B3',
    payment: 'Pending',
  },
  {
    passenger: 'John Doe',
    phone: '+44 20 7946 0958',
    route: 'London to Oxford',
    date: '18 Nov 2024',
    time: '03:15 pm',
    seats: 'C2 - C3',
    payment: 'Completed',
  },
  {
    passenger: 'Maria Rossi',
    phone: '+39 06 6982 1234',
    route: 'Rome to Milan',
    date: '20 Nov 2024',
    time: '07:00 am',
    seats: 'D1',
    payment: 'Pending',
  },
  {
    passenger: 'Li Wei',
    phone: '+86 10 1234 5678',
    route: 'Beijing to Shanghai',
    date: '22 Nov 2024',
    time: '10:45 am',
    seats: 'E5 - E6',
    payment: 'Completed',
  },
  {
    passenger: 'Jane Smith',
    phone: '+1 234 567 8901',
    route: 'NYC to Boston',
    date: '25 Nov 2024',
    time: '05:30 pm',
    seats: 'F2',
    payment: 'Pending',
  },
  {
    passenger: 'Carlos García',
    phone: '+34 91 123 4567',
    route: 'Madrid to Barcelona',
    date: '28 Nov 2024',
    time: '08:00 am',
    seats: 'G1 - G2',
    payment: 'Completed',
  },
];

const statusStyles: Record<PaymentStatus, string> = {
  Pending: 'bg-orange-50 text-orange-500 dark:bg-orange-900/40 dark:text-orange-200',
  Completed: 'bg-teal-50 text-teal-600 dark:bg-teal-900/40 dark:text-teal-200',
};

const Booking: React.FC = () => {
  return (
    <div className="rounded-2xl dark:bg-gray-900/40  shadow p-3 mt-14  md:p-8 w-full max-w-full overflow-x-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">All Booking List</h2>
        <div className="flex gap-2 items-center">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-lg px-6 py-2 flex items-center gap-2 text-base shadow">
            Add New <span className="text-lg">+</span>
          </button>
          <button className="border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 text-base font-medium shadow-sm bg-white dark:bg-black/40 dark:border-gray-700">
            Monthly <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
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