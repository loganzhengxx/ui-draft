import React, { useState, Component } from 'react';
import { SearchIcon, FilterIcon, ArrowUpDownIcon, PhoneIcon, MailIcon } from 'lucide-react';
import Button from '../components/ui/Button';
interface Supplier {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  category: string;
  status: 'active' | 'inactive';
}
const mockSuppliers: Supplier[] = [{
  id: '1',
  name: 'Tech Components Ltd',
  contact: 'John Smith',
  email: 'john@techcomp.com',
  phone: '+1 234-567-8900',
  category: 'Electronics',
  status: 'active'
}, {
  id: '2',
  name: 'Office Supplies Co',
  contact: 'Sarah Johnson',
  email: 'sarah@officesupplies.com',
  phone: '+1 234-567-8901',
  category: 'Office Supplies',
  status: 'active'
}, {
  id: '3',
  name: 'Furniture Wholesale',
  contact: 'Mike Wilson',
  email: 'mike@furniturewholesale.com',
  phone: '+1 234-567-8902',
  category: 'Furniture',
  status: 'inactive'
}];
const Suppliers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Supplier>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const filteredSuppliers = mockSuppliers.filter(supplier => supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) || supplier.contact.toLowerCase().includes(searchTerm.toLowerCase()) || supplier.category.toLowerCase().includes(searchTerm.toLowerCase()));
  const sortedSuppliers = [...filteredSuppliers].sort((a, b) => {
    return sortDirection === 'asc' ? a[sortField].localeCompare(b[sortField]) : b[sortField].localeCompare(a[sortField]);
  });
  const handleSort = (field: keyof Supplier) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  return <div className="pb-20">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Suppliers</h1>
        <div className="flex flex-col gap-3">
          <div className="relative">
            <input type="text" placeholder="Search suppliers..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" icon={<FilterIcon size={18} />} className="flex-1">
              Filter
            </Button>
            <Button variant="secondary" icon={<ArrowUpDownIcon size={18} />} onClick={() => handleSort('name')} className="flex-1">
              Sort
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {sortedSuppliers.map(supplier => <div key={supplier.id} className="bg-white rounded-lg shadow p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{supplier.name}</h3>
                <p className="text-sm text-gray-500">{supplier.contact}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${supplier.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                {supplier.status.charAt(0).toUpperCase() + supplier.status.slice(1)}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <PhoneIcon size={16} className="mr-2" />
                <a href={`tel:${supplier.phone}`} className="hover:text-blue-600">
                  {supplier.phone}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MailIcon size={16} className="mr-2" />
                <a href={`mailto:${supplier.email}`} className="hover:text-blue-600">
                  {supplier.email}
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
              <span className="text-sm text-gray-500">{supplier.category}</span>
              <Button variant="ghost" size="sm">
                View Details
              </Button>
            </div>
          </div>)}
        {sortedSuppliers.length === 0 && <div className="text-center py-8">
            <p className="text-gray-500">No suppliers found</p>
          </div>}
      </div>
    </div>;
};
export default Suppliers;