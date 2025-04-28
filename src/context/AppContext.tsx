import React, { useState, createContext, useContext } from 'react';
import { mockInventoryItems, mockOrders, mockWarehouseLocations } from '../data/mockData';
interface AppContextType {
  inventoryItems: InventoryItem[];
  orders: Order[];
  warehouseLocations: WarehouseLocation[];
  updateInventoryItem: (id: string, updates: Partial<InventoryItem>) => void;
  updateOrder: (id: string, updates: Partial<Order>) => void;
  isLoading: boolean;
  error: string | null;
  createInventoryItem: (item: Omit<InventoryItem, 'id'>) => void;
  deleteInventoryItem: (id: string) => void;
  createOrder: (order: Omit<Order, 'id'>) => void;
  deleteOrder: (id: string) => void;
  createWarehouseLocation: (location: Omit<WarehouseLocation, 'id'>) => void;
  deleteWarehouseLocation: (id: string) => void;
  clearError: () => void;
}
export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  location: string;
  threshold: number;
  lastUpdated: string;
}
export interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  items: {
    itemId: string;
    quantity: number;
  }[];
  date: string;
}
export interface WarehouseLocation {
  id: string;
  name: string;
  zone: string;
  capacity: number;
  occupied: number;
}
const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>(mockInventoryItems);
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [warehouseLocations] = useState<WarehouseLocation[]>(mockWarehouseLocations);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const updateInventoryItem = (id: string, updates: Partial<InventoryItem>) => {
    setInventoryItems(items => items.map(item => item.id === id ? {
      ...item,
      ...updates
    } : item));
  };
  const updateOrder = (id: string, updates: Partial<Order>) => {
    setOrders(orderList => orderList.map(order => order.id === id ? {
      ...order,
      ...updates
    } : order));
  };
  const createInventoryItem = (item: Omit<InventoryItem, 'id'>) => {
    setIsLoading(true);
    try {
      const newItem = {
        ...item,
        id: `${Date.now()}`
      };
      setInventoryItems(prev => [...prev, newItem]);
    } catch (err) {
      setError('Failed to create inventory item');
    } finally {
      setIsLoading(false);
    }
  };
  const deleteInventoryItem = (id: string) => {
    setIsLoading(true);
    try {
      setInventoryItems(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      setError('Failed to delete inventory item');
    } finally {
      setIsLoading(false);
    }
  };
  const createOrder = (order: Omit<Order, 'id'>) => {
    setIsLoading(true);
    try {
      const newOrder = {
        ...order,
        id: `${Date.now()}`
      };
      setOrders(prev => [...prev, newOrder]);
    } catch (err) {
      setError('Failed to create order');
    } finally {
      setIsLoading(false);
    }
  };
  const deleteOrder = (id: string) => {
    setIsLoading(true);
    try {
      setOrders(prev => prev.filter(order => order.id !== id));
    } catch (err) {
      setError('Failed to delete order');
    } finally {
      setIsLoading(false);
    }
  };
  const createWarehouseLocation = (location: Omit<WarehouseLocation, 'id'>) => {
    setIsLoading(true);
    try {
      const newLocation = {
        ...location,
        id: `${Date.now()}`
      };
      setWarehouseLocations(prev => [...prev, newLocation]);
    } catch (err) {
      setError('Failed to create warehouse location');
    } finally {
      setIsLoading(false);
    }
  };
  const deleteWarehouseLocation = (id: string) => {
    setIsLoading(true);
    try {
      setWarehouseLocations(prev => prev.filter(location => location.id !== id));
    } catch (err) {
      setError('Failed to delete warehouse location');
    } finally {
      setIsLoading(false);
    }
  };
  const clearError = () => setError(null);
  return <AppContext.Provider value={{
    inventoryItems,
    orders,
    warehouseLocations,
    updateInventoryItem,
    updateOrder,
    isLoading,
    error,
    createInventoryItem,
    deleteInventoryItem,
    createOrder,
    deleteOrder,
    createWarehouseLocation,
    deleteWarehouseLocation,
    clearError
  }}>
      {children}
    </AppContext.Provider>;
};
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};