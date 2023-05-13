import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const OrderConfirmation = () => {
    
  const { total } = useContext(CartContext);

  const orderNumber = Math.floor(Math.random() * 1000000000);
  

  return (
    <div>
      <h1>Gracias por tu compra!</h1>
      <p>Tu número de orden es: {orderNumber}</p>
      <p>El total de tu compra es: ${total}</p>
    </div>
  );
};

export default OrderConfirmation;