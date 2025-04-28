import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { TrendingUpIcon, TrendingDownIcon, DollarSignIcon, BoxIcon, UsersIcon, AlertTriangleIcon } from 'lucide-react';
interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    trend: 'up' | 'down';
  };
  icon: React.ReactNode;
  bgColor: string;
}
const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon,
  bgColor
}) => <div className={`${bgColor} rounded-lg p-4 text-white`}>
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm opacity-90">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        {change && <p className="text-sm mt-2 flex items-center">
            {change.trend === 'up' ? <TrendingUpIcon size={16} className="mr-1" /> : <TrendingDownIcon size={16} className="mr-1" />}
            {change.value}
          </p>}
      </div>
      <div className="p-2 bg-white/20 rounded-lg">{icon}</div>
    </div>
  </div>;
const AdvancedStats: React.FC = () => {
  const {
    inventoryItems,
    orders
  } = useAppContext();
  // Calculate inventory value
  const totalInventoryValue = inventoryItems.reduce((total, item) => {
    // Assuming each item has an average value of $100 for demo
    return total + item.quantity * 100;
  }, 0);
  // Calculate low stock items
  const lowStockItems = inventoryItems.filter(item => item.quantity < item.threshold);
  // Calculate monthly orders
  const monthlyOrders = orders.filter(order => {
    const orderDate = new Date(order.date);
    const currentDate = new Date();
    return orderDate.getMonth() === currentDate.getMonth();
  });
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard title="Total Inventory Value" value={`$${totalInventoryValue.toLocaleString()}`} change={{
      value: '+12.5% vs last month',
      trend: 'up'
    }} icon={<DollarSignIcon size={24} className="text-white" />} bgColor="bg-blue-600" />
      <MetricCard title="Total SKUs" value={inventoryItems.length} change={{
      value: '+3 new items',
      trend: 'up'
    }} icon={<BoxIcon size={24} className="text-white" />} bgColor="bg-green-600" />
      <MetricCard title="Monthly Orders" value={monthlyOrders.length} change={{
      value: '-2.3% vs last month',
      trend: 'down'
    }} icon={<UsersIcon size={24} className="text-white" />} bgColor="bg-purple-600" />
      <MetricCard title="Low Stock Alerts" value={lowStockItems.length} change={{
      value: '+4 new alerts',
      trend: 'up'
    }} icon={<AlertTriangleIcon size={24} className="text-white" />} bgColor="bg-red-600" />
    </div>;
};
export default AdvancedStats;