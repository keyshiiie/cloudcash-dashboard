export interface DashboardData {
  user: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  card: {
    id: number;
    number: string;
    holder: string;
    expiry: string;
    balance: number;
    income: number;
    outcome: number;
    limitUsed: number;
    limitTotal: number;
  };
  goals: Array<{
    id: number;
    amount: number;
    date: string;
    title: string;
    icon: string;
  }>;
  transactions: Array<{
    id: number;
    receiver: string;
    type: string;
    date: string;
    amount: number;
  }>;
  statistics: Array<{
    id: number;
    category: string;
    percent: number;
    color: string;
  }>;
  contacts: Array<{
    id: number;
    name: string;
    avatarUrl: string;
  }>;
}