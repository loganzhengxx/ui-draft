import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { useAppContext } from '../../context/AppContext';
import { InventoryItem } from '../../context/AppContext';
interface InventoryFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: InventoryItem;
}
const InventoryForm: React.FC<InventoryFormProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const {
    createInventoryItem,
    updateInventoryItem,
    warehouseLocations,
    isLoading
  } = useAppContext();
  const [formData, setFormData] = useState<Partial<InventoryItem>>(initialData || {
    name: '',
    sku: '',
    category: '',
    quantity: 0,
    location: '',
    threshold: 0
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData) {
      updateInventoryItem(initialData.id, formData);
    } else {
      createInventoryItem(formData as Omit<InventoryItem, 'id'>);
    }
    onClose();
  };
  return <Modal isOpen={isOpen} onClose={onClose} title={initialData ? 'Edit Item' : 'Add New Item'}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input type="text" value={formData.name} onChange={e => setFormData(prev => ({
          ...prev,
          name: e.target.value
        }))} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              SKU
            </label>
            <input type="text" value={formData.sku} onChange={e => setFormData(prev => ({
            ...prev,
            sku: e.target.value
          }))} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input type="text" value={formData.category} onChange={e => setFormData(prev => ({
            ...prev,
            category: e.target.value
          }))} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input type="number" value={formData.quantity} onChange={e => setFormData(prev => ({
            ...prev,
            quantity: parseInt(e.target.value)
          }))} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" min="0" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Threshold
            </label>
            <input type="number" value={formData.threshold} onChange={e => setFormData(prev => ({
            ...prev,
            threshold: parseInt(e.target.value)
          }))} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" min="0" required />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <select value={formData.location} onChange={e => setFormData(prev => ({
          ...prev,
          location: e.target.value
        }))} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" required>
            <option value="">Select a location</option>
            {warehouseLocations.map(location => <option key={location.id} value={location.name}>
                {location.name} - {location.zone}
              </option>)}
          </select>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="ghost" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button type="submit" isLoading={isLoading}>
            {initialData ? 'Update' : 'Create'} Item
          </Button>
        </div>
      </form>
    </Modal>;
};
export default InventoryForm;