import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { DashboardData } from '../../types';

interface CardsWidgetProps {
  card: DashboardData['card'];
}

export function CardsWidget({ card }: CardsWidgetProps) {
  const [isActive, setIsActive] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Создаем массив из 3 карт для демонстрации слайдера
  const cards = [
    card,
    { ...card, id: 2, number: '4321 **** **** 1234', balance: 1500.00 },
    { ...card, id: 3, number: '9876 **** **** 5678', balance: 3200.00 },
  ];

  const currentCard = cards[currentIndex];
  const limitPercent = (currentCard.limitUsed / currentCard.limitTotal) * 100;

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prevCard = () => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="bg-white p-8 shadow-lg border border-gray-100 h-full flex flex-col justify-between md:flex-row gap-8 items-start">
      
      {/* ЛЕВАЯ ЧАСТЬ: КАРТА */}
      <div className="flex-1 w-full max-w-[400px] h-full flex flex-col">
        <h3 className="text-2xl font-bold text-[#404040] mb-6">Cards</h3>
        
        <div className="relative group">
          {/* Кнопки навигации */}
          <button 
            onClick={prevCard}
            className="absolute -left-7 top-1/2 -translate-y-1/2 text-[#197BBD] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button 
            onClick={nextCard}
            className="absolute -right-7 top-1/2 -translate-y-1/2 text-[#197BBD] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Сама карта (с анимацией переключения) */}
          <div 
            key={currentIndex} // Смена ключа заставляет React пересоздать элемент (анимация)
            className="relative bg-gradient-to-br from-[#197BBD] to-[#3391D0] p-6 text-white overflow-hidden shadow-xl w-full aspect-[1.58/1] flex flex-col justify-between animate-fade-in-up"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-16 -left-10 w-56 h-56 bg-white/10 rounded-full"></div>

            <div className="relative z-10 flex justify-between items-start">
              <div>
                <p className="text-lg leading-none">cloudcash</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Premium Account</p>
              </div>
            </div>

            <div className="relative z-10 mt-6">
              <p className="text-xl tracking-[0.2em] font-medium mb-5">{currentCard.number}</p>
              <div className="flex justify-between text-xs text-blue-100">
                <div>
                  <p className="text-[9px] mb-0.5">Card holder</p>
                  <p className="text-white text-sm">{currentCard.holder}</p>
                </div>
                <div>
                  <p className="text-[9px] mb-0.5">Expire date</p>
                  <p className="text-white text-sm">{currentCard.expiry}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="h-2 w-full bg-[#F5F5F5] overflow-hidden rounded-full">
            <div className="h-full bg-[#197BBD] rounded-full transition-all duration-500" style={{ width: `${limitPercent}%` }}></div>
          </div>
          <div className="flex justify-between text-xs mt-2">
            <span className="text-[#AEAEAE]">Weekly payment limit</span>
            <span className="font-bold text-[#404040]">${currentCard.limitUsed.toFixed(2)} / ${currentCard.limitTotal}</span>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-px h-full bg-[#d5d5d5] my-2"></div>

      {/* ПРАВАЯ ЧАСТЬ: БАЛАНС */}
      <div className="flex flex-col justify-between h-full w-full md:w-48 shrink-0 pt-10">
        <div className="space-y-6 text-right">
          <div>
            <p className="text-[32px] font-bold text-[#197BBD] leading-none">${currentCard.balance.toFixed(2)}</p>
            <p className="text-sm text-[#AEAEAE] mt-1">Current balance</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#439A86]">${currentCard.income.toFixed(2)}</p>
            <p className="text-sm text-[#AEAEAE]">Income</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#BB4430]">${currentCard.outcome.toFixed(2)}</p>
            <p className="text-sm text-[#AEAEAE]">Outcome</p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button 
                onClick={() => setIsActive(!isActive)}
                className={`relative inline-flex h-6 w-12 items-center transition-colors focus:outline-none cursor-pointer ${isActive ? 'bg-[#EBEBEB]' : 'bg-[#D9D9D9]'}`}
            >
                <span className={`inline-block h-6 w-6 bg-[#CDCDCD] transition-transform duration-300 ease-in-out ${isActive ? 'translate-x-[24px]' : 'translate-x-0'}`} />
            </button>
            <p className="text-sm text-[#AEAEAE]">{isActive ? 'Deactivate card' : 'Deactivated'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}