import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IProduct } from 'types/products.types';

interface ICartProduct {
  quantity: number;
  product: IProduct;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  cart: ICartProduct[];
  addToCart: (product: IProduct) => void;
  removeOneFromCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ICartProduct[]>([]);
  const localStorageCart = localStorage.getItem('@cart');
  console.log({ localStorageCart });

  function addToCart(product: IProduct) {
    const productIndex = cart.findIndex(
      cartProduct => cartProduct.product.id === product.id,
    );

    const newCart = [...cart];

    if (productIndex === -1) {
      newCart.push({ quantity: 1, product });
      setCart(newCart);
    } else {
      newCart[productIndex].quantity += 1;
      setCart(newCart);
    }

    localStorage.setItem('@cart', JSON.stringify(newCart));
  }

  function removeOneFromCart(productId: string) {
    const productIndex = cart.findIndex(
      cartProduct => cartProduct.product.id === productId,
    );

    if (productIndex === -1) {
      return;
    }

    const newCart = [...cart];
    newCart[productIndex].quantity -= 1;

    if (newCart[productIndex].quantity <= 0) {
      newCart.splice(productIndex, 1);
    }

    setCart(newCart);
    localStorage.setItem('@cart', JSON.stringify(newCart));
  }

  function removeFromCart(productId: string) {
    const newCart = cart.filter(
      cartProduct => cartProduct.product.id !== productId,
    );
    setCart(newCart);
    localStorage.setItem('@cart', JSON.stringify(newCart));
  }

  const context = useMemo(() => {
    return {
      cart,
      addToCart,
      removeOneFromCart,
      removeFromCart,
    };
  }, [cart, addToCart, removeOneFromCart, removeFromCart]);

  useEffect(() => {
    if (localStorageCart) {
      setCart(JSON.parse(localStorageCart));
    }
  }, []);

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }

  return context;
}
