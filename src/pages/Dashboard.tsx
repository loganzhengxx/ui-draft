import React from 'react';
import StatsCards from '../components/Dashboard/StatsCards';
import InventorySummary from '../components/Dashboard/InventorySummary';
import RecentActivity from '../components/Dashboard/RecentActivity';
import AdvancedStats from '../components/Dashboard/AdvancedStats';
import ChartVisualizations from '../components/Dashboard/ChartVisualizations';
import QuickActions from '../components/Dashboard/QuickActions';
const Dashboard: React.FC = () => {
  return <div className="space-y-6 pb-20">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
      <StatsCards />
      <AdvancedStats />
      <QuickActions />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <InventorySummary />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
      <ChartVisualizations />
    </div>;
};
export default Dashboard;