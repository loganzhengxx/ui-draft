import React, { useState } from 'react';
import { PackagePlusIcon, PackageMinusIcon, ClipboardListIcon, TruckIcon, UsersIcon, BoxIcon, SearchIcon, AlertTriangleIcon } from 'lucide-react';
import StockOperationForm from '../modals/StockOperationForm';
interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  bgColor: string;
}
const QuickAction: React.FC<QuickActionProps> = ({
  icon,
  label,
  onClick,
  bgColor
}) => <button onClick={onClick} className={`${bgColor} text-white p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:opacity-90 transition-opacity`}>
    {icon}
    <span className="text-sm font-medium text-center">{label}</span>
  </button>;
const QuickActions: React.FC = () => {
  const [showStockModal, setShowStockModal] = useState(false);
  return <>
      <div className="bg-white rounded-lg shadow p-4 mt-6">
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickAction icon={<PackagePlusIcon size={24} />} label="Stock In" onClick={() => setShowStockModal(true)} bgColor="bg-blue-600" />
          <QuickAction icon={<PackageMinusIcon size={24} />} label="Stock Out" onClick={() => setShowStockModal(true)} bgColor="bg-green-600" />
          <QuickAction icon={<ClipboardListIcon size={24} />} label="New Order" onClick={() => {}} bgColor="bg-purple-600" />
          <QuickAction icon={<TruckIcon size={24} />} label="Shipments" onClick={() => {}} bgColor="bg-orange-600" />
          <QuickAction icon={<UsersIcon size={24} />} label="Suppliers" onClick={() => {}} bgColor="bg-indigo-600" />
          <QuickAction icon={<BoxIcon size={24} />} label="Products" onClick={() => {}} bgColor="bg-pink-600" />
          <QuickAction icon={<SearchIcon size={24} />} label="Inventory Search" onClick={() => {}} bgColor="bg-teal-600" />
          <QuickAction icon={<AlertTriangleIcon size={24} />} label="Low Stock" onClick={() => {}} bgColor="bg-red-600" />
        </div>
      </div>
      <StockOperationForm isOpen={showStockModal} onClose={() => setShowStockModal(false)} />
    </>;
};
export default QuickActions;