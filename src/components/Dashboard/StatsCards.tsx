import React from 'react';
import { PackageIcon, AlertCircleIcon, TruckIcon, BarChart3Icon } from 'lucide-react';
interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: React.ReactNode;
  color: string;
}
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  color
}) => {
  return <div className="bg-white rounded-lg shadow p-5 border-l-4" style={{
    borderLeftColor: color
  }}>
      <div className="flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          {change && <p className={`text-xs mt-2 ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {change} from last month
            </p>}
        </div>
        <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{
        backgroundColor: `${color}20`
      }}>
          <div style={{
          color
        }}>
            {icon}
          </div>
        </div>
      </div>
    </div>;
};
const StatsCards: React.FC = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <StatCard title="Total Inventory" value="482" change="+6%" icon={<PackageIcon size={24} />} color="#3B82F6" />
      <StatCard title="Low Stock Items" value="12" change="+2" icon={<AlertCircleIcon size={24} />} color="#EF4444" />
      <StatCard title="Pending Orders" value="18" change="-4%" icon={<TruckIcon size={24} />} color="#F59E0B" />
      <StatCard title="Monthly Turnover" value="32%" change="+8%" icon={<BarChart3Icon size={24} />} color="#10B981" />
    </div>;
};
export default StatsCards;