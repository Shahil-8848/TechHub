import { Product } from '@/types/cart';

export const products: Product[] = [
  {
    id: '1',
    name: 'Electric kettle',
    brand: 'SMEG',
    price: 141.99,
    image: 'https://images.unsplash.com/photo-1594495894542-a46cc73e081a?q=80&w=600&auto=format&fit=crop',
    discount: 10,
  },
  {
    id: '2',
    name: 'iPhone 16 Pro 128GB',
    brand: 'APPLE',
    price: 1130.00,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'AirPods Max',
    brand: 'APPLE',
    price: 799.00,
    image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Coffee Machine',
    brand: 'SMEG',
    price: 985.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=600&auto=format&fit=crop',
    discount: 15,
  },
  {
    id: '5',
    name: 'Smart Watch',
    brand: 'APPLE',
    price: 399.00,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Laptop',
    brand: 'DELL',
    price: 450.00,
    image: 'https://images.unsplash.com/photo-1730794545099-14902983739d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },{
    id: '7',
    name: 'iPad Pro 12.9"',
    brand: 'APPLE',
    price: 1099.00,
    image: 'https://images.unsplash.com/photo-1585770536735-27993a080586?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '8',
    name: 'Smart Speaker',
    brand: 'AMAZON',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=600&auto=format&fit=crop',
  }
];
export type PaymentMethodType = "card" | "paypal" | "applepay";

export interface PaymentMethod {
  id: string;
  type: PaymentMethodType;
  label: string;
  lastFour: string;
  icon: string;
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: "1",
    type: "card",
    label: "Visa",
    lastFour: "1234",
    icon: "visa",
  },
  {
    id: "2",
    type: "paypal",
    label: "PayPal",
    lastFour: "",
    icon: "paypal",
  },
  {
    id: "3",
    type: "applepay",
    label: "Apple Pay",
    lastFour: "",
    icon: "applepay",
  },
];
// export const paymentMethods = [
//   {
//     id: '1',
//     type: 'card',
//     label: 'Mastercard',
//     lastFour: '5678',
//     icon: 'credit-card',
//   },
//   {
//     id: '2',
//     type: 'paypal',
//     label: 'PayPal',
//     lastFour: '914T',
//     icon: 'credit-card',
//   },
//   {
//     id: '3',
//     type: 'card',
//     label: 'Visa',
//     lastFour: '1234',
//     icon: 'credit-card',
//   }
// ];

// export const addresses = [
//   {
//     id: '1',
//     name: 'Jason Whitmore',
//     phone: '+1 (513) 555-0184',
//     street: '4285 Maple Grove Lane',
//     city: 'Brooksville',
//     state: 'OH',
//     zip: '43306',
//     country: 'USA',
//   }
// ];