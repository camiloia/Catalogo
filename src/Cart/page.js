
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create CartContext
const CartContext = createContext();

// CartProvider component that provides the cart state
export const CartProvider = ({ children }) => {
  const [cart, setCarrito] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    console.log("adcarrt entre")
    setCarrito((prevCart) => prevCart.concat(product));
    //decir q se agreg´´o
    console.log(cart, " cart conteniod");
  };

  //const eliminarProductoCart = (producto) =

  const getTotalQuantity = () => cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};