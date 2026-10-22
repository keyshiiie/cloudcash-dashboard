import { ShoppingCart, Truck, Plane } from 'lucide-react';
import type { DashboardData } from '../../types';

interface OutcomeStatsProps {
  statistics: DashboardData['statistics'];
}

export function OutcomeStats({ statistics }: OutcomeStatsProps) {
  const getStatStyles = (color: string) => {
    switch (color) {
      case 'orange':
        return { iconColor: 'text-[#F2994A]', iconBg: 'bg-[#F2994A]/10', barColor: 'bg-[#F2994A]', icon: <ShoppingCart className="w-5 h-5" /> };
      case 'green':
        return { iconColor: 'text-[#27AE60]', iconBg: 'bg-[#27AE60]/10', barColor: 'bg-[#27AE60]', icon: <Truck className="w-5 h-5" /> };
      case 'blue':
      default:
        return { iconColor: 'text-[#70A6E8]', iconBg: 'bg-[#70A6E8]/10', barColor: 'bg-[#70A6E8]', icon: <Plane className="w-5 h-5" /> };
    }
  };

  return (
    <div className="bg-white p-8 w-full h-full flex flex-col justify-between">
      <h3 className="text-xl font-bold text-[#404040] mb-8">Outcome Statistics</h3>

      <div className="space-y-6 flex-1 flex flex-col justify-center">
        {statistics.map((stat) => {
          const styles = getStatStyles(stat.color);
          return (
            <div key={stat.id} className="flex items-center gap-4">
              <div className={`w-12 h-12 flex items-center justify-center shadow-lg ${styles.iconBg} ${styles.iconColor} shrink-0`}>
                {styles.icon}
              </div>
              <div className="flex-1">
                <div className="h-2 w-full bg-[#F5F5F5] overflow-hidden mb-2">
                  <div className={`h-full ${styles.barColor}`} style={{ width: `${stat.percent}%` }}></div>
                </div>
                <p className="text-sm text-[#AEAEAE]">{stat.category}</p>
              </div>
              <div className="text-xl font-semibold text-[#696969] w-12 text-right shrink-0">
                {stat.percent}%
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}