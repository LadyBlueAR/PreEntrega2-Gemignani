import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div>
      <h1>Detalle de Compra</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name} x {item.cantidad} - ${item.price * item.cantidad}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <Link to={{ pathname: '/orderConfirmation', state: { total: total } }}>
            <button>Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default Checkout;