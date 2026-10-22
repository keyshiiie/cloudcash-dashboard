import { useRef, useState, useEffect } from 'react';
import { Plane, Wrench, Gamepad2, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import type { DashboardData } from '../../types';

interface GoalsWidgetProps {
  goals: DashboardData['goals'];
}

export function GoalsWidget({ goals }: GoalsWidgetProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Проверяем, нужен ли скролл (если карточек больше, чем влезает)
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Проверяем при загрузке и при изменении размера окна
  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [goals]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -160 : 160,
        behavior: 'smooth',
      });
    }
  };

  const getGoalIcon = (iconName: string) => {
    switch (iconName) {
      case 'plane': return <Plane className="w-8 h-8 text-[#439A86]" strokeWidth={1.5} />;
      case 'tools': return <Wrench className="w-8 h-8 text-[#E67E22]" strokeWidth={1.5} />;
      case 'gamepad': return <Gamepad2 className="w-8 h-8 text-[#27AE60]" strokeWidth={1.5} />;
      default: return <Plane className="w-8 h-8 text-[#439A86]" strokeWidth={1.5} />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col relative">
      
      {/* Заголовок */}
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xl font-bold text-[#404040]">Goals</h3>
        <button className="bg-[#F2C94C] hover:bg-[#E2B93C] transition-colors rounded-full w-5 h-5 flex items-center justify-center cursor-pointer text-white">
          <Plus className="w-3 h-3" strokeWidth={3} />
        </button>
      </div>

      {/* Контейнер со скроллом и стрелками */}
      <div className="relative flex-1">
        
        {/* СТРЕЛКА ВЛЕВО */}
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-8 top-1/2 -translate-y-1/2 text-[#197BBD] cursor-pointer hover:bg-gray-50 hidden md:block z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        {/* Сам скролл-контейнер (с классом scrollbar-hide) */}
        <div 
          ref={scrollRef} 
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide h-full"
        >
          {goals.map((goal) => (
            <div key={goal.id} className="min-w-[140px] bg-white p-5 shadow-lg border border-transparent flex flex-col justify-between items-start h-full">
              <div>
                <p className="text-xl font-semibold text-[#696969]">${goal.amount}</p>
                <p className="text-[11px] text-[#AEAEAE] mt-0.5">{goal.date}</p>
              </div>
              <div className="mt-6 mb-2">
                {getGoalIcon(goal.icon)}
              </div>
              <p className="text-sm">{goal.title}</p>
            </div>
          ))}
        </div>

        {/* СТРЕЛКА ВПРАВО */}
        {showRightArrow && (
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-8 top-1/2 -translate-y-1/2 text-[#197BBD] cursor-pointer hover:bg-gray-50 hidden md:block z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}
      </div>
    </div>
  );
}