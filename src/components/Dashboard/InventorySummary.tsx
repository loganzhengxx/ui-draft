import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
const InventorySummary: React.FC = () => {
  const {
    inventoryItems
  } = useAppContext();
  const navigate = useNavigate();
  // Get low stock items
  const lowStockItems = inventoryItems.filter(item => item.quantity < item.threshold);
  // Get items by category
  const categoryCounts = inventoryItems.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  return <div className="bg-white rounded-lg shadow p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Inventory Summary</h2>
        <button onClick={() => navigate('/inventory')} className="text-blue-600 flex items-center text-sm hover:text-blue-800">
          View All <ArrowRightIcon size={16} className="ml-1" />
        </button>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(categoryCounts).map(([category, count]) => <div key={category} className="bg-gray-50 rounded p-3">
              <p className="text-sm font-medium">{category}</p>
              <p className="text-2xl font-semibold">{count}</p>
            </div>)}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-2">
          Low Stock Items
        </h3>
        {lowStockItems.length > 0 ? <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Threshold
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {lowStockItems.slice(0, 4).map(item => <tr key={item.id}>
                    <td className="px-3 py-2 text-sm">{item.name}</td>
                    <td className="px-3 py-2 text-sm text-red-600 font-medium">
                      {item.quantity}
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-500">
                      {item.threshold}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div> : <p className="text-sm text-gray-500">
            No low stock items at the moment.
          </p>}
      </div>
    </div>;
};
export default InventorySummary;