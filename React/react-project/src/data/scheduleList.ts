// Schedule list data for the table
export type ScheduleStatus = 'On Time' | 'Delayed' | 'Canceled';

export interface Driver {
  name: string;
  avatar: string;
  id: string;
}

export interface ScheduleRow {
  busNumber: string;
  route: string;
  departureTime: string;
  arrivalTime: string;
  driver: Driver;
  status: ScheduleStatus;
  liveUpdate: string;
}

export const scheduleList: ScheduleRow[] = [
  {
    busNumber: 'Bus #101',
    route: 'Dha to Khu',
    departureTime: '6:00 AM',
    arrivalTime: '8:30 AM',
    driver: { name: 'Ariyan Chowdhury', avatar: '/api/placeholder/32/32?1', id: '#45784' },
    status: 'On Time',
    liveUpdate: 'The bus on the way',
  },
  {
    busNumber: 'Bus #102',
    route: 'Dha to Raj',
    departureTime: '7:15 AM',
    arrivalTime: '9:45 AM',
    driver: { name: 'Alamgir Ahmed', avatar: '/api/placeholder/32/32?2', id: '#45786' },
    status: 'Delayed',
    liveUpdate: 'The bus on the way',
  },
  {
    busNumber: 'Bus #103',
    route: 'Dha to Pab',
    departureTime: '8:00 AM',
    arrivalTime: '10:00 AM',
    driver: { name: 'Raj Hossain', avatar: '/api/placeholder/32/32?3', id: '#45754' },
    status: 'Delayed',
    liveUpdate: 'The bus on the way',
  },
  {
    busNumber: 'Bus #104',
    route: 'Dha to Khu',
    departureTime: '9:30 AM',
    arrivalTime: '11:30 AM',
    driver: { name: 'Md. Shiraj', avatar: '/api/placeholder/32/32?4', id: '#45786' },
    status: 'Canceled',
    liveUpdate: 'The bus on the way',
  },
  {
    busNumber: 'Bus #105',
    route: 'Dha to Pab',
    departureTime: '10:45 AM',
    arrivalTime: '1:15 PM',
    driver: { name: 'Ataur Rahman', avatar: '/api/placeholder/32/32?5', id: '#45747' },
    status: 'On Time',
    liveUpdate: 'The bus on the way',
  },
  {
    busNumber: 'Bus #105',
    route: 'Dha to Ctg',
    departureTime: '8:00 AM',
    arrivalTime: '10:00 AM',
    driver: { name: 'Arif Rahman', avatar: '/api/placeholder/32/32?6', id: '#45786' },
    status: 'On Time',
    liveUpdate: 'The bus on the way',
  },
  {
    busNumber: 'Bus #106',
    route: 'Dha to Bar',
    departureTime: '9:30 AM',
    arrivalTime: '2:00 PM',
    driver: { name: 'Reaz Hossain', avatar: '/api/placeholder/32/32?7', id: '#45786' },
    status: 'Delayed',
    liveUpdate: 'The bus on the way',
  },
]; 