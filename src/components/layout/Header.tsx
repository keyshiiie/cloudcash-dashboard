import { Mail, Bell } from 'lucide-react';
import type { DashboardData } from '../../types';

interface HeaderProps {
  loading: boolean;
  data: DashboardData | null;
}

export function Header({ loading, data }: HeaderProps) {
  return (
    <header className="h-36 bg-white flex items-center justify-between px-11">
      <div>
        <h2 className="text-3xl font-bold">Weekly sumup</h2>
        <p className="text-[#AEAEAE] text-sm mt-1">Get summary of your weekly online transactions here.</p>
      </div>
      
      <div className="flex items-center gap-5">
        <div className="flex gap-2 text-[#E3E3E3]">
          <button className="p-2 rounded-full hover:bg-gray-50 hover:text-blue-500 transition-colors">
            <Mail className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-50 hover:text-blue-500 transition-colors">
            <Bell className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex items-center gap-3 border-l border-gray-100">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            {!loading && data?.user.avatarUrl && (
              <img src={data.user.avatarUrl} alt="User" className="w-full h-full object-cover" />
            )}
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold">{loading ? '...' : data?.user.name}</p>
            <p className="text-sm text-[#AEAEAE]">{loading ? '...' : data?.user.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}