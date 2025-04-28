import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
const ChartVisualizations: React.FC = () => {
  const {
    inventoryItems,
    orders
  } = useAppContext();
  // Prepare category distribution data
  const categoryData = inventoryItems.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.quantity;
    return acc;
  }, {} as Record<string, number>);
  const pieData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value
  }));
  // Prepare monthly order data (mock data for demonstration)
  const monthlyOrderData = [{
    month: 'Jan',
    orders: 65
  }, {
    month: 'Feb',
    orders: 59
  }, {
    month: 'Mar',
    orders: 80
  }, {
    month: 'Apr',
    orders: 81
  }, {
    month: 'May',
    orders: 56
  }, {
    month: 'Jun',
    orders: 55
  }];
  // Colors for pie chart
  const COLORS = ['#3B82F6', '#10B981', '#6366F1', '#F59E0B', '#EF4444'];
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Inventory by Category */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium mb-4">Inventory by Category</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" labelLine={false} label={({
              name,
              percent
            }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Monthly Orders Trend */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium mb-4">Monthly Orders Trend</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyOrderData} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="orders" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Stock Levels */}
      <div className="bg-white rounded-lg shadow p-4 lg:col-span-2">
        <h3 className="text-lg font-medium mb-4">Current Stock Levels</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={inventoryItems} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="quantity" fill="#3B82F6" />
              <Bar dataKey="threshold" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>;
};
export default ChartVisualizations;