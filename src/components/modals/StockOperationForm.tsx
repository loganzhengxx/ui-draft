import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { useAppContext } from '../../context/AppContext';
import { PackageIcon, PackagePlusIcon, PackageMinusIcon } from 'lucide-react';
interface StockOperationFormProps {
  isOpen: boolean;
  onClose: () => void;
}
type OperationType = 'in' | 'out';
const StockOperationForm: React.FC<StockOperationFormProps> = ({
  isOpen,
  onClose
}) => {
  const {
    inventoryItems,
    updateInventoryItem,
    isLoading
  } = useAppContext();
  const [operationType, setOperationType] = useState<OperationType>('in');
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const item = inventoryItems.find(i => i.id === selectedItem);
    if (!item) return;
    const newQuantity = operationType === 'in' ? item.quantity + parseInt(quantity) : item.quantity - parseInt(quantity);
    updateInventoryItem(selectedItem, {
      quantity: newQuantity,
      lastUpdated: new Date().toISOString().split('T')[0]
    });
    onClose();
    resetForm();
  };
  const resetForm = () => {
    setOperationType('in');
    setSelectedItem('');
    setQuantity('');
    setNotes('');
  };
  return <Modal isOpen={isOpen} onClose={onClose} title="Stock Operation">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4 mb-6">
          <button type="button" className={`flex-1 flex flex-col items-center p-4 rounded-lg border-2 ${operationType === 'in' ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-200'}`} onClick={() => setOperationType('in')}>
            <PackagePlusIcon size={24} className="mb-2" />
            <span className="text-sm font-medium">Stock In</span>
          </button>
          <button type="button" className={`flex-1 flex flex-col items-center p-4 rounded-lg border-2 ${operationType === 'out' ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-200'}`} onClick={() => setOperationType('out')}>
            <PackageMinusIcon size={24} className="mb-2" />
            <span className="text-sm font-medium">Stock Out</span>
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Item
          </label>
          <select value={selectedItem} onChange={e => setSelectedItem(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            <option value="">Choose an item</option>
            {inventoryItems.map(item => <option key={item.id} value={item.id}>
                {item.name} - Current Stock: {item.quantity}
              </option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantity
          </label>
          <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" min="1" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notes
          </label>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={3} />
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <Button variant="ghost" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button type="submit" isLoading={isLoading}>
            Confirm {operationType === 'in' ? 'Stock In' : 'Stock Out'}
          </Button>
        </div>
      </form>
    </Modal>;
};
export default StockOperationForm;