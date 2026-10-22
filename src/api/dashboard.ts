import { mockDb } from '../data/db';
import type { DashboardData } from '../types';

export const fetchDashboardData = (): Promise<DashboardData> => {
  return new Promise((resolve) => {
    // Имитация задержки сети в 800мс для отображения Skeleton Loaders
    setTimeout(() => {
      resolve(mockDb);
    }, 800);
  });
};