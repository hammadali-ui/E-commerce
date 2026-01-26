import { createContext, useContext, useEffect, useState } from "react";
import { getCart, clearCart as clearCartUtil } from "../utils/cart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCart());


  // const totalQty = cart.reduce((t, i) => t + i.quantity, 0);
  const totalItems = cart.length;


    const clearCart = () => {
    clearCartUtil();     // removes from localStorage
    setCart([]);         // clears state
  };

  return (
    <CartContext.Provider value={{ cart, setCart, clearCart,totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


