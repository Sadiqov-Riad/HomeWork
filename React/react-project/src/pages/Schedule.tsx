import React, { useState } from 'react';
import { scheduleList } from '../data/scheduleList';
import type { ScheduleStatus } from '../data/scheduleList';

const statusColors: Record<ScheduleStatus, string> = {
  'On Time': 'bg-teal-50 text-teal-600 dark:bg-teal-900/40 dark:text-teal-200',
  'Delayed': 'bg-orange-50 text-orange-500 dark:bg-orange-900/40 dark:text-orange-200',
  'Canceled': 'bg-red-50 text-red-500 dark:bg-red-900/40 dark:text-red-200',
};

const statusFilters: { label: string; value: ScheduleStatus | 'All' }[] = [
  { label: 'All', value: 'All' },
  { label: 'On Time', value: 'On Time' },
  { label: 'Delayed', value: 'Delayed' },
  { label: 'Canceled', value: 'Canceled' },
];

const Schedule: React.FC = () => {
  const [filter, setFilter] = useState<'All' | ScheduleStatus>('All');
  const [today, setToday] = useState('Today');
  const filtered = filter === 'All' ? scheduleList : scheduleList.filter(row => row.status === filter);

  return (
    <div className="rounded-2xl dark:bg-gray-900/40 shadow p-3 mt-14 sm:mt-0 md:p-10 w-full max-w-full overflow-x-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">Schedule</h2>
        <div className="flex gap-2 items-center">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-lg px-6 py-2 flex items-center gap-2 text-base shadow">
            Add New <span className="text-lg">+</span>
          </button>
          <button className="border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 text-base font-medium shadow-sm bg-white dark:bg-black/40 dark:border-gray-700">
            {today} <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {statusFilters.map(({ label, value }) => (
          <button
            key={value}
            className={`px-5 py-2 rounded-full border font-medium transition-colors text-base ${filter === value ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-black/40 text-blue-600 border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30'}`}
            onClick={() => setFilter(value as any)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto mt-6 mb-8 sm:mb-0">
        <table className="min-w-full divide-y divide-gray-700 text-sm sm:text-base dark:text-gray-700 rounded-xl overflow-hidden bg-transparent ">
        <thead>
  <tr className="text-left dark:text-gray-200 text-xs sm:text-sm">
    <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold text-center sm:text-left">Bus Number</th>
    <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold text-center sm:text-left">Route</th>
    <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold text-center sm:text-left">Departure Time</th>
    <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold text-center sm:text-left hidden sm:table-cell">Arrival Time</th>
    <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold text-center sm:text-left hidden sm:table-cell">Driver</th>
    <th className="py-2 px-1 sm:py-3 sm:px-2 font-semibold text-center sm:text-left hidden sm:table-cell" colSpan={2}></th>
  </tr>
</thead>

          <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-center sm:text-left">
            {filtered.map((row, i) => (
              <tr key={i} className="text-gray-900 dark:text-gray-100 text-sm sm:text-base dark:hover:bg-white/5 transition-colors">
                <td className="py-2 px-1 sm:py-3 sm:px-2 whitespace-nowrap border-b border-gray-100 dark:border-gray-600">{row.busNumber}</td>
                <td className="py-2 px-1 sm:py-3 sm:px-2 whitespace-nowrap border-b border-gray-100 dark:border-gray-600">{row.route}</td>
                <td className="py-2 px-1 sm:py-3 sm:px-2 whitespace-nowrap border-b border-gray-100 dark:border-gray-600">{row.departureTime}</td>
                <td className="hidden sm:table-cell py-2 px-1 sm:py-3 sm:px-2 whitespace-nowrap border-b border-gray-100 dark:border-gray-600">{row.arrivalTime}</td>
                <td className="hidden sm:table-cell py-2 px-1 sm:py-3 sm:px-2 pr-4 whitespace-nowrap border-b border-gray-100 dark:border-gray-600 align-middle">
                  <div className="flex items-center gap-2">
                    <img src={row.driver.avatar} alt={row.driver.name} className="w-8 h-8 rounded-full object-cover truncate max-w-[150px] overflow-hidden whitespace-nowrap" />
                  </div>
                </td>
                <td className="text-center hidden sm:table-cell py-2 px-1 sm:py-3 sm:px-2 text-center border-b border-gray-100 dark:border-gray-600">
                  <button className="hover:text-blue-600" title="Edit">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M4 20h4.586a1 1 0 0 0 .707-.293l9.414-9.414a2 2 0 0 0 0-2.828l-2.172-2.172a2 2 0 0 0-2.828 0l-9.414 9.414A1 1 0 0 0 4 20z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </td>
                <td className="text-center hidden sm:table-cell py-2 px-1 sm:py-3 sm:px-2 text-center border-b border-gray-100 dark:border-gray-600">
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

export default Schedule; 