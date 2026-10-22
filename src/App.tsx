import { useEffect, useState } from 'react';
import { fetchDashboardData } from './api/dashboard';
import type { DashboardData } from './types';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { CardsWidget } from './components/dashboard/CardsWidget';
import { TransactionsTable } from './components/dashboard/TransactionsTable';
import { GoalsWidget } from './components/dashboard/GoalsWidget';
import { OutcomeStats } from './components/dashboard/OutcomeStats';
import { NewTransaction } from './components/dashboard/NewTransaction';

function App() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex min-h-screen bg-white font-sans text-[#404040]">
      
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Header loading={loading} data={data} />

        <div className="p-11 flex-1 grid grid-cols-1 xl:grid-cols-[1.8fr_1fr] gap-6 items-stretch">
          
          {/* ЛЕВАЯ КОЛОНКА (2/3) */}
          <div className="flex flex-col gap-6">
            
            {/* Блок Cards */}
            <div className="flex-1">
              {loading ? (
                <div className="bg-white p-6  shadow-lg border border-gray-100 h-full min-h-[363px] animate-pulse">
                  <div className="h-6 bg-gray-100  w-24 mb-6"></div>
                  <div className="h-[210px] bg-gray-100  w-full max-w-[320px]"></div>
                </div>
              ) : (
                // Добавили анимацию появления
                data && <div className="animate-fade-in-up h-full"><CardsWidget card={data.card} /></div>
              )}
            </div>

            {/* Блок Transaction history */}
            <div className="flex-1">
              {loading ? (
                <div className="bg-white p-8  shadow-sm border border-gray-100 h-full min-h-[400px] animate-pulse">
                  <div className="h-6 bg-gray-100  w-48 mb-6"></div>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-12 bg-gray-50  w-full"></div>
                    ))}
                  </div>
                </div>
              ) : (
                data && <div className="animate-fade-in-up h-full" style={{ animationDelay: '100ms' }}><TransactionsTable transactions={data.transactions} /></div>
              )}
            </div>

          </div>

          {/* ПРАВАЯ КОЛОНКА (1/3) */}
          <div className="flex flex-col gap-6">
            
            {/* Блок Goals */}
            <div className="flex-1">
              {loading ? (
                <div className="bg-white p-6  shadow-sm border border-gray-100 h-full min-h-[220px] animate-pulse">
                  <div className="h-6 bg-gray-100  w-24 mb-6"></div>
                  <div className="flex gap-4">
                    <div className="h-40 bg-gray-100  w-[140px]"></div>
                    <div className="h-40 bg-gray-100  w-[140px]"></div>
                  </div>
                </div>
              ) : (
                data && <div className="animate-fade-in-up h-full" style={{ animationDelay: '150ms' }}><GoalsWidget goals={data.goals} /></div>
              )}
            </div>
            
            {/* Блок Outcome Statistics */}
            <div className="flex-1">
              {loading ? (
                <div className="bg-white p-8  shadow-sm border border-gray-100 h-full min-h-[260px] animate-pulse">
                  <div className="h-6 bg-gray-100  w-48 mb-8"></div>
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-gray-100 -xl"></div>
                        <div className="h-4 bg-gray-100  w-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                data && <div className="animate-fade-in-up h-full" style={{ animationDelay: '200ms' }}><OutcomeStats statistics={data.statistics} /></div>
              )}
            </div>

            {/* Блок New Transaction */}
            <div className="flex-1">
              {loading ? (
                <div className="bg-white p-8  shadow-sm border border-gray-100 h-full min-h-[220px] animate-pulse">
                  <div className="h-6 bg-gray-100  w-48 mb-6"></div>
                  <div className="flex gap-4">
                     <div className="h-12 bg-gray-100  w-12"></div>
                     <div className="h-12 bg-gray-100  w-12"></div>
                     <div className="h-12 bg-gray-100  w-12"></div>
                  </div>
                  <div className="h-12 bg-gray-100  w-full mt-6"></div>
                </div>
              ) : (
                data && <div className="animate-fade-in-up h-full" style={{ animationDelay: '250ms' }}><NewTransaction contacts={data.contacts} /></div>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;