// Booking list data for the table
export type PaymentStatus = 'Pending' | 'Completed';

export interface BookingRow {
  passenger: string;
  phone: string;
  route: string;
  date: string;
  time: string;
  seats: string;
  payment: PaymentStatus;
}

export const bookings: BookingRow[] = [
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