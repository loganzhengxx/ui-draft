import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboardIcon, PackageIcon, ShoppingCartIcon, WarehouseIcon, SettingsIcon, MenuIcon, XIcon } from 'lucide-react';
const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navItems = [{
    path: '/dashboard',
    name: 'Dashboard',
    icon: <LayoutDashboardIcon size={20} />
  }, {
    path: '/inventory',
    name: 'Inventory',
    icon: <PackageIcon size={20} />
  }, {
    path: '/orders',
    name: 'Orders',
    icon: <ShoppingCartIcon size={20} />
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
      {/* Mobile sidebar toggle */}
      <button className="fixed z-50 bottom-4 right-4 md:hidden bg-blue-600 text-white p-2 rounded-full shadow-lg" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <MenuIcon size={24} /> : <XIcon size={24} />}
      </button>
      {/* Sidebar */}
      <aside className={`
        ${collapsed ? '-translate-x-full' : 'translate-x-0'} 
        transition-transform duration-300 ease-in-out
        md:translate-x-0 md:w-64 bg-white border-r border-gray-200 z-40
        fixed md:static inset-y-0 left-0 w-64 shadow-md md:shadow-none
      `}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-blue-600">WareTrack</h1>
            <p className="text-gray-500 text-sm">Smart Inventory System</p>
          </div>
          <nav className="flex-1 pt-4 pb-4">
            <ul>
              {navItems.map(item => <li key={item.path} className="px-2">
                  <NavLink to={item.path} className={({
                isActive
              }) => `
                      flex items-center px-4 py-2.5 rounded-lg mb-1
                      ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}
                    `} onClick={() => window.innerWidth < 768 && setCollapsed(true)}>
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </NavLink>
                </li>)}
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                JD
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-500">Warehouse Manager</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>;
};
export default Sidebar;