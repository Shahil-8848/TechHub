import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartItem, Product, PaymentMethod, Address } from '@/types/cart';

interface CartState {
  items: CartItem[];
  selectedAddress: Address | null;
  selectedPaymentMethod: PaymentMethod | null;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setSelectedAddress: (address: Address) => void;
  setSelectedPaymentMethod: (method: PaymentMethod) => void;
  getSubtotal: () => number;
  getTotal: () => number;
  getTotalItems: () => number;
  getTotalWeight: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      selectedAddress: null,
      selectedPaymentMethod: null,
      
      addItem: (product: Product) => {
        const items = get().items;
        const existingItem = items.find(item => item.product.id === product.id);
        
        if (existingItem) {
          set({
            items: items.map(item => 
              item.product.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
          });
        } else {
          set({ items: [...items, { product, quantity: 1 }] });
        }
      },
      
      removeItem: (productId: string) => {
        set({
          items: get().items.filter(item => item.product.id !== productId)
        });
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        set({
          items: get().items.map(item => 
            item.product.id === productId 
              ? { ...item, quantity } 
              : item
          )
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      setSelectedAddress: (address: Address) => {
        set({ selectedAddress: address });
      },
      
      setSelectedPaymentMethod: (method: PaymentMethod) => {
        set({ selectedPaymentMethod: method });
      },
      
      getSubtotal: () => {
        return get().items.reduce((total, item) => {
          return total + (item.product.price * item.quantity);
        }, 0);
      },
      
      getTotal: () => {
        return get().getSubtotal();
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalWeight: () => {
        // Mock weight calculation (0.1kg per item)
        return Math.round(get().items.reduce((total, item) => total + (item.quantity * 0.1), 0) * 10) / 10;
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);