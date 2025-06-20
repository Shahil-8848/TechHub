export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  discount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal' | 'applepay';
  label: string;
  lastFour: string;
  icon: string;
}

export interface Address {
  id: string;
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  paymentMethod: PaymentMethod;
  address: Address;
}