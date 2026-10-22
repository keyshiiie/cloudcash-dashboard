import { ShoppingCart, Monitor, Coffee, Activity } from 'lucide-react';
import type { DashboardData } from '../../types';

interface TransactionsTableProps {
  transactions: DashboardData['transactions'];
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Shopping': return <ShoppingCart className="w-5 h-5 text-gray-400" />;
      case 'Electronics': return <Monitor className="w-5 h-5 text-gray-400" />;
      case 'Food': return <Coffee className="w-5 h-5 text-gray-400" />;
      case 'Sport': return <Activity className="w-5 h-5 text-gray-400" />;
      default: return <ShoppingCart className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="bg-white p-8 shadow-lg border border-gray-100 w-full h-full flex flex-col">
      <h3 className="text-xl font-bold text-[#404040] mb-6">Transaction history</h3>

      <div className="w-full flex-1 flex flex-col">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 pb-4 border-b border-gray-100 text-sm text-[#AEAEAE]">
          <div>Reciever</div>
          <div>Type</div>
          <div>Date</div>
          <div className="text-right">Amount</div>
        </div>

        <div className="flex flex-col flex-1">
          {transactions.map((tx) => (
            <div key={tx.id} className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center py-4 border-b border-[#d5d5d5] last:border-0 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                {getIcon(tx.type)}
                <span className="font-medium text-[#404040]">{tx.receiver}</span>
              </div>
              <div className="text-[#AEAEAE] text-sm">{tx.type}</div>
              <div className="text-[#AEAEAE] text-sm">{tx.date}</div>
              <div className="text-right font-bold text-[#404040]">${tx.amount.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}