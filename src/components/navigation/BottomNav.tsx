import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboardIcon, PackageIcon, UsersIcon, PlusIcon, WarehouseIcon, SettingsIcon } from 'lucide-react';
import StockOperationForm from '../modals/StockOperationForm';
const BottomNav: React.FC = () => {
  const [showStockModal, setShowStockModal] = useState(false);
  const navItems = [{
    path: '/dashboard',
    name: 'Dashboard',
    icon: <LayoutDashboardIcon size={20} />
  }, {
    path: '/products',
    name: 'Products',
    icon: <PackageIcon size={20} />
  }, {
    path: '/suppliers',
    name: 'Suppliers',
    icon: <UsersIcon size={20} />
  }, {
    path: '/warehouse',
    name: 'Warehouse',
    icon: <WarehouseIcon size={20} />
  }, {
    path: '/settings',
    name: 'Settings',
    icon: <SettingsIcon size={20} />
  }];
  return <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe-area">
        <div className="relative flex justify-around items-center h-16">
          {navItems.slice(0, 2).map(item => <NavLink key={item.path} to={item.path} className={({
          isActive
        }) => `
                flex flex-col items-center justify-center flex-1 py-1
                ${isActive ? 'text-blue-600' : 'text-gray-600'}
              `}>
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </NavLink>)}
          {/* Center Action Button */}
          <button onClick={() => setShowStockModal(true)} className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white rounded-full p-3 shadow-lg">
            <PlusIcon size={24} />
          </button>
          {navItems.slice(2).map(item => <NavLink key={item.path} to={item.path} className={({
          isActive
        }) => `
                flex flex-col items-center justify-center flex-1 py-1
                ${isActive ? 'text-blue-600' : 'text-gray-600'}
              `}>
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </NavLink>)}
        </div>
      </div>
      <StockOperationForm isOpen={showStockModal} onClose={() => setShowStockModal(false)} />
    </>;
};
export default BottomNav;