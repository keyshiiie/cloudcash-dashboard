import { ChartLine, List, CreditCard, File, Award, Settings } from 'lucide-react';
import logo from '../../assets/logo.svg';
import premium from '../../assets/premium.svg';

export function Sidebar() {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: ChartLine, active: true },
    { id: 'transactions', label: 'Transactions', icon: List, active: false },
    { id: 'cards', label: 'Cards', icon: CreditCard, active: false },
    { id: 'invoices', label: 'Invoices', icon: File, active: false },
    { id: 'goals', label: 'Goals', icon: Award, active: false },
    { id: 'settings', label: 'Settings', icon: Settings, active: false },
  ];

  return (
    <aside className="w-64 bg-white border-r border-[#d5d5d5] hidden md:flex flex-col h-screen sticky top-0">
      
      {/* Логотип */}
      <div className="p-8">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Cloudcash" className="w-10 h-8 object-contain" />
          <span className="text-xl font-semibold text-[#0F4264] tracking-tight">
            cloudcash
          </span>
        </a>
      </div>

      {/* Меню (убрали flex-1, чтобы оно не растягивалось) */}
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                item.active
                  ? 'bg-[#F0F7FF] text-[#197BBD]' 
                  : 'text-[#C7C7C7] hover:bg-[#F8F8F8] hover:text-[#818181]'
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* БАННЕР ВНИЗУ (mt-auto прижимает его к низу) */}
      <div className="mt-auto p-6 flex flex-col items-center text-center">

        <img src={premium} alt="premium" className="w-70 h-70 object-contain" />

        <p className="text-[13px] text-[#AEAEAE] leading-tight mb-4 px-2">
          Give your money<br />awesome space in cloud
        </p>

        <button className="w-full bg-[#F2C94C] hover:bg-[#E2B93C] transition-colors text-white font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-1 cursor-pointer">
          Upgrade to premium
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      </div>

    </aside>
  );
}