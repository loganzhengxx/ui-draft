import React from 'react';
import { SaveIcon, UserIcon, BellIcon, ShieldIcon, DatabaseIcon } from 'lucide-react';
const Settings: React.FC = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      </div>
      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button className="border-b-2 border-blue-500 py-4 px-6 text-blue-600 font-medium">
              General
            </button>
            <button className="border-b-2 border-transparent py-4 px-6 text-gray-500 hover:text-gray-700 font-medium">
              Notifications
            </button>
            <button className="border-b-2 border-transparent py-4 px-6 text-gray-500 hover:text-gray-700 font-medium">
              Security
            </button>
            <button className="border-b-2 border-transparent py-4 px-6 text-gray-500 hover:text-gray-700 font-medium">
              Integrations
            </button>
          </nav>
        </div>
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <UserIcon size={20} className="mr-2 text-gray-500" />
              Account Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input type="text" id="name" defaultValue="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input type="email" id="email" defaultValue="john.doe@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select id="role" defaultValue="manager" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="admin">Administrator</option>
                  <option value="manager">Warehouse Manager</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <input type="text" id="department" defaultValue="Warehouse Operations" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <BellIcon size={20} className="mr-2 text-gray-500" />
              Notification Preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input id="low-stock" type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="low-stock" className="ml-2 block text-sm text-gray-700">
                  Low stock alerts
                </label>
              </div>
              <div className="flex items-center">
                <input id="new-orders" type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="new-orders" className="ml-2 block text-sm text-gray-700">
                  New order notifications
                </label>
              </div>
              <div className="flex items-center">
                <input id="shipment-updates" type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="shipment-updates" className="ml-2 block text-sm text-gray-700">
                  Shipment status updates
                </label>
              </div>
              <div className="flex items-center">
                <input id="system-alerts" type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="system-alerts" className="ml-2 block text-sm text-gray-700">
                  System alerts and maintenance notifications
                </label>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <ShieldIcon size={20} className="mr-2 text-gray-500" />
              Security Settings
            </h2>
            <div className="space-y-4">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Change Password
              </button>
              <div className="flex items-center">
                <input id="2fa" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="2fa" className="ml-2 block text-sm text-gray-700">
                  Enable two-factor authentication
                </label>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <DatabaseIcon size={20} className="mr-2 text-gray-500" />
              Data Management
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="auto-backup" className="block text-sm font-medium text-gray-700 mb-1">
                  Automatic Backup Frequency
                </label>
                <select id="auto-backup" defaultValue="daily" className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div>
                <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100">
                  Export Inventory Data
                </button>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
              <SaveIcon size={18} className="mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default Settings;