import React from 'react';
import { useAppContext } from '../context/AppContext';
import { PlusIcon } from 'lucide-react';
const Warehouse: React.FC = () => {
  const {
    warehouseLocations,
    inventoryItems
  } = useAppContext();
  // Calculate usage percentage
  const getUsagePercentage = (occupied: number, capacity: number) => {
    return Math.round(occupied / capacity * 100);
  };
  // Get items in a location
  const getItemsInLocation = (locationName: string) => {
    return inventoryItems.filter(item => item.location === locationName);
  };
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Warehouse Management
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700">
          <PlusIcon size={18} className="mr-2" />
          Add New Location
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warehouseLocations.map(location => {
        const usagePercentage = getUsagePercentage(location.occupied, location.capacity);
        const itemsInLocation = getItemsInLocation(location.name);
        return <div key={location.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {location.name}
                  </h2>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                    {location.zone}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Capacity Usage</span>
                    <span className={`font-medium ${usagePercentage > 90 ? 'text-red-600' : usagePercentage > 70 ? 'text-yellow-600' : 'text-green-600'}`}>
                      {location.occupied} / {location.capacity} (
                      {usagePercentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full ${usagePercentage > 90 ? 'bg-red-600' : usagePercentage > 70 ? 'bg-yellow-500' : 'bg-green-600'}`} style={{
                  width: `${usagePercentage}%`
                }}></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Items ({itemsInLocation.length})
                  </h3>
                  {itemsInLocation.length > 0 ? <div className="max-h-40 overflow-y-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Item
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Qty
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {itemsInLocation.slice(0, 5).map(item => <tr key={item.id}>
                              <td className="px-3 py-2 whitespace-nowrap text-sm">
                                {item.name}
                              </td>
                              <td className="px-3 py-2 whitespace-nowrap text-sm">
                                {item.quantity}
                              </td>
                            </tr>)}
                          {itemsInLocation.length > 5 && <tr>
                              <td colSpan={2} className="px-3 py-2 text-center text-sm text-gray-500">
                                + {itemsInLocation.length - 5} more items
                              </td>
                            </tr>}
                        </tbody>
                      </table>
                    </div> : <p className="text-sm text-gray-500">
                      No items in this location.
                    </p>}
                </div>
              </div>
              <div className="border-t border-gray-200 px-5 py-3 bg-gray-50 flex justify-end">
                <button className="text-sm text-blue-600 hover:text-blue-800 mr-4">
                  View Details
                </button>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Edit
                </button>
              </div>
            </div>;
      })}
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium mb-4">Warehouse Layout</h2>
        <div className="border border-gray-200 rounded-lg p-6 h-80 flex items-center justify-center bg-gray-50">
          <p className="text-gray-500">
            Warehouse floor plan visualization would appear here.
          </p>
        </div>
      </div>
    </div>;
};
export default Warehouse;