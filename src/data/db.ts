import type { DashboardData } from '../types';

export const mockDb: DashboardData = {
  user: {
    name: 'Andrew',
    role: 'Admin account',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
  },
  card: {
    id: 1,
    number: '5789 **** **** 2847',
    holder: 'Mike Smith',
    expiry: '06/21',
    balance: 2850.75,
    income: 1500.50,
    outcome: 350.60,
    limitUsed: 350.60,
    limitTotal: 4000,
  },
  goals: [
    { id: 1, amount: 550, date: '12/20/20', title: 'Holidays', icon: 'plane' },
    { id: 2, amount: 200, date: '12/20/20', title: 'Renovation', icon: 'tools' },
    { id: 3, amount: 820, date: '12/20/20', title: 'Xbox', icon: 'gamepad' },
  ],
  transactions: [
    { id: 1, receiver: 'Tesco Market', type: 'Shopping', date: '13 Dec 2020', amount: 75.67 },
    { id: 2, receiver: 'ElectroMen Market', type: 'Shopping', date: '14 Dec 2020', amount: 250.00 },
    { id: 3, receiver: 'Fiorgio Restaurant', type: 'Food', date: '07 Dec 2020', amount: 19.50 },
    { id: 4, receiver: 'John Mathew Kayne', type: 'Sport', date: '06 Dec 2020', amount: 350.00 },
    { id: 5, receiver: 'Ann Marlin', type: 'Shopping', date: '31 Nov 2020', amount: 430.00 },
  ],
  statistics: [
    { id: 1, category: 'Shopping', percent: 52, color: 'orange' },
    { id: 2, category: 'Electronics', percent: 21, color: 'green' },
    { id: 3, category: 'Travels', percent: 74, color: 'blue' },
  ],
  contacts: [
    { id: 1, name: 'Ann', avatarUrl: 'https://i.pravatar.cc/150?img=5' },
    { id: 2, name: 'Monica', avatarUrl: 'https://i.pravatar.cc/150?img=9' },
    { id: 3, name: 'John', avatarUrl: 'https://i.pravatar.cc/150?img=12' },
    { id: 4, name: 'Mike', avatarUrl: 'https://i.pravatar.cc/150?img=15' },
    { id: 5, name: 'Mia', avatarUrl: 'https://i.pravatar.cc/150?img=20' },
  ],
};