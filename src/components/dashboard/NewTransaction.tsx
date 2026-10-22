import { Plus } from 'lucide-react';
import type { DashboardData } from '../../types';

interface NewTransactionProps {
  contacts: DashboardData['contacts'];
}

export function NewTransaction({ contacts }: NewTransactionProps) {
  return (
    // Мы убрали lg:flex-row, теперь элементы всегда в колонку (flex-col)
    <div className="flex flex-col gap-4 w-full h-full">
      
      {/* ================= ФОРМА ================= */}
      <div className="flex-1 bg-white p-6 shadow-lg border border-gray-100 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#404040] mb-4">New transaction</h3>

          {/* Аватары контактов */}
          <div className="flex items-start gap-3 mb-4 overflow-x-auto pb-2 scrollbar-hide">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex flex-col items-center gap-1 cursor-pointer group shrink-0">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#197BBD] transition-colors">
                  <img src={contact.avatarUrl} alt={contact.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] text-[#AEAEAE] group-hover:text-[#404040] transition-colors">
                  {contact.name}
                </span>
              </div>
            ))}
            
            {/* Кнопка "Add New" */}
            <div className="flex flex-col items-center gap-1 cursor-pointer group shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#F2C94C] flex items-center justify-center text-white shadow-sm group-hover:bg-[#E2B93C] transition-colors">
                <Plus className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-[10px] text-[#AEAEAE] group-hover:text-[#404040] transition-colors">
                Add New
              </span>
            </div>
          </div>
        </div>

        {/* Поле ввода и кнопка */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="0"
              className="w-full h-10 pl-3 pr-8 border border-[#E5E5E5] text-sm text-[#404040] focus:outline-none focus:border-[#197BBD] transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AEAEAE] text-sm">$</span>
          </div>
          
          <button className="bg-[#F2C94C] hover:bg-[#E2B93C] transition-colors text-white text-sm font-medium px-4 flex items-center gap-1 shrink-0 cursor-pointer">
            Send ›
          </button>
        </div>
      </div>

      {/* ================= ОРАНЖЕВЫЙ БАННЕР ================= */}
      <div className="relative bg-gradient-to-br from-[#E86A4A] to-[#D35438] p-6 flex flex-col justify-end text-white w-full shrink-0 overflow-hidden shadow-lg shadow-orange-500/20 min-h-[140px]">
        
        {/* Декоративные круги */}
        <div className="absolute top-2 left-2 w-12 h-12 bg-white/10 rounded-full"></div>
        <div className="absolute top-8 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>

        {/* Текст и стрелка */}
        <div className="relative z-10 flex items-center gap-2">
          <button className="text-lg font-bold leading-tight hover:opacity-100 transition-opacity cursor-pointer self-center">
            Get great loan! ›
          </button>
        </div>
      </div>

    </div>
  );
}