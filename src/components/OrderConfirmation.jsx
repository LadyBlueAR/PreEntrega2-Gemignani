import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const OrderConfirmation = () => {
    
  const { total } = useContext(CartContext);

  const orderNumber = Math.floor(Math.random() * 1000000000);
  

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg">
            <div className="card-body text-center">
              <h1 className="card-title">¡Gracias por tu compra!</h1>
              <p className="card-text">Tu <strong>número de orden</strong> es: <strong>{orderNumber}</strong></p>
              <p className="card-text">El <strong>total</strong> de tu compra es: <strong>${total}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
