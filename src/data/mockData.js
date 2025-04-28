export const mockInventoryItems = [{
  id: '1',
  name: 'Wireless Headphones',
  sku: 'TECH-WH100',
  category: 'Electronics',
  quantity: 245,
  location: 'A-101',
  threshold: 50,
  lastUpdated: '2023-06-15'
}, {
  id: '2',
  name: 'Ergonomic Office Chair',
  sku: 'FURN-EC200',
  category: 'Furniture',
  quantity: 32,
  location: 'B-203',
  threshold: 10,
  lastUpdated: '2023-06-12'
}, {
  id: '3',
  name: 'Smart Watch Series 7',
  sku: 'TECH-SW700',
  category: 'Electronics',
  quantity: 78,
  location: 'A-105',
  threshold: 25,
  lastUpdated: '2023-06-14'
}, {
  id: '4',
  name: 'Premium Coffee Maker',
  sku: 'APPL-CM300',
  category: 'Appliances',
  quantity: 15,
  location: 'C-302',
  threshold: 5,
  lastUpdated: '2023-06-10'
}, {
  id: '5',
  name: 'Wireless Charging Pad',
  sku: 'TECH-WC150',
  category: 'Electronics',
  quantity: 112,
  location: 'A-102',
  threshold: 30,
  lastUpdated: '2023-06-13'
}];
export const mockOrders = [{
  id: '1',
  orderNumber: 'ORD-2023-0001',
  customer: 'Tech Solutions Inc.',
  status: 'processing',
  items: [{
    itemId: '1',
    quantity: 5
  }, {
    itemId: '3',
    quantity: 2
  }],
  date: '2023-06-15'
}, {
  id: '2',
  orderNumber: 'ORD-2023-0002',
  customer: 'Office Supplies Ltd.',
  status: 'shipped',
  items: [{
    itemId: '2',
    quantity: 10
  }],
  date: '2023-06-14'
}, {
  id: '3',
  orderNumber: 'ORD-2023-0003',
  customer: 'Home Essentials Co.',
  status: 'pending',
  items: [{
    itemId: '4',
    quantity: 3
  }, {
    itemId: '5',
    quantity: 8
  }],
  date: '2023-06-16'
}, {
  id: '4',
  orderNumber: 'ORD-2023-0004',
  customer: 'Retail Innovations',
  status: 'delivered',
  items: [{
    itemId: '1',
    quantity: 12
  }, {
    itemId: '5',
    quantity: 20
  }],
  date: '2023-06-10'
}];
export const mockWarehouseLocations = [{
  id: '1',
  name: 'A-101',
  zone: 'Electronics',
  capacity: 300,
  occupied: 245
}, {
  id: '2',
  name: 'A-102',
  zone: 'Electronics',
  capacity: 300,
  occupied: 112
}, {
  id: '3',
  name: 'A-105',
  zone: 'Electronics',
  capacity: 300,
  occupied: 78
}, {
  id: '4',
  name: 'B-203',
  zone: 'Furniture',
  capacity: 50,
  occupied: 32
}, {
  id: '5',
  name: 'C-302',
  zone: 'Appliances',
  capacity: 100,
  occupied: 15
}];