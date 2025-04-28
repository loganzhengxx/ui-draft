import React from 'react';
import { BellIcon, SearchIcon } from 'lucide-react';
const Header: React.FC = () => {
  return <header className="bg-white border-b border-gray-200 py-3 px-4 md:px-6 flex items-center justify-between">
      <div className="relative w-full max-w-md mr-4">
        <input type="text" placeholder="Search inventory, orders..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="flex items-center">
        <button className="p-2 rounded-lg hover:bg-gray-100 relative">
          <BellIcon size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>;
};
export default Header;