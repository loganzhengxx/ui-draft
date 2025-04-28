import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './navigation/BottomNav';
const Layout: React.FC = () => {
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>
      <BottomNav />
    </div>;
};
export default Layout;