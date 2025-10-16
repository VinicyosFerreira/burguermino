import { createContext, useReducer } from 'react';
import { cartReducer, initialState } from '../reducer/CartReducer';

export const CartContext = createContext({});
export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};
