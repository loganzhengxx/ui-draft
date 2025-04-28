import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { CheckCircleIcon, TruckIcon, ClockIcon, PackageIcon } from 'lucide-react';
const RecentActivity: React.FC = () => {
  const {
    orders
  } = useAppContext();
  // Sort orders by date (most recent first)
  const recentOrders = [...orders].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircleIcon size={16} className="text-green-500" />;
      case 'shipped':
        return <TruckIcon size={16} className="text-blue-500" />;
      case 'processing':
        return <PackageIcon size={16} className="text-yellow-500" />;
      default:
        return <ClockIcon size={16} className="text-gray-500" />;
    }
  };
  return <div className="bg-white rounded-lg shadow p-5">
      <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {recentOrders.map(order => <div key={order.id} className="flex items-start">
            <div className="mr-3 mt-0.5">{getStatusIcon(order.status)}</div>
            <div>
              <p className="text-sm font-medium">
                Order {order.orderNumber} - {order.customer}
              </p>
              <p className="text-xs text-gray-500">
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)} •{' '}
                {order.date}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {order.items.length} item{order.items.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>)}
        {recentOrders.length === 0 && <p className="text-sm text-gray-500">No recent activity.</p>}
      </div>
    </div>;
};
export default RecentActivity;