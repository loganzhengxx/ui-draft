import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { SearchIcon, FilterIcon, ArrowUpDownIcon } from 'lucide-react';
import Button from '../components/ui/Button';
const Products: React.FC = () => {
  const {
    inventoryItems
  } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<string>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const filteredItems = inventoryItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.sku.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase()));
  const sortedItems = [...filteredItems].sort((a, b) => {
    const fieldA = a[sortField as keyof typeof a];
    const fieldB = b[sortField as keyof typeof b];
    if (typeof fieldA === 'string' && typeof fieldB === 'string') {
      return sortDirection === 'asc' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
    }
    if (typeof fieldA === 'number' && typeof fieldB === 'number') {
      return sortDirection === 'asc' ? fieldA - fieldB : fieldB - fieldA;
    }
    return 0;
  });
  const handleSort = (field: string) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  return <div className="pb-20">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Products</h1>
        <div className="flex flex-col gap-3">
          <div className="relative">
            <input type="text" placeholder="Search products..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
        {sortedItems.map(item => <div key={item.id} className="bg-white rounded-lg shadow p-4 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">SKU: {item.sku}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.quantity < item.threshold ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                Stock: {item.quantity}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{item.category}</span>
              <span>Location: {item.location}</span>
            </div>
          </div>)}
        {sortedItems.length === 0 && <div className="text-center py-8">
            <p className="text-gray-500">No products found</p>
          </div>}
      </div>
    </div>;
};
export default Products;