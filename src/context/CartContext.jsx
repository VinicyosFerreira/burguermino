import { createContext, useEffect, useReducer } from 'react';
import { cartReducer, initialState } from '../reducer/CartReducer';

export const CartContext = createContext({});

const initialCart = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : initialState;
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, undefined, initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState));
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};
