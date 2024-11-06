import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => prevCart.concat(product));
  };

  const getTotalQuantity = () => cart.length;
  return {
    cart,
    addToCart,
    getTotalQuantity,
  };
};


//para usar context
export const useCart = () => {
  return useContext(CartContext);
};