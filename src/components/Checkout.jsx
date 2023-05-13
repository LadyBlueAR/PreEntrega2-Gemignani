import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <div className="card mx-auto p-4 bg-transparent shadow-lg">
        <h1 className="card-title text-center mb-4 border-bottom">Detalle de Compra</h1>
        {cart.map((item) => (
          <div key={item.id}>
            <div className="d-flex justify-content-between">
              <span className="w-50"><strong>{item.name}</strong></span>
              <span className="w-25 text-center">x {item.cantidad}</span>
              <span className="w-25 text-end">${item.price * item.cantidad}</span>
            </div>
          </div>
        ))}
        <h4 className="text-end mt-5">Total: ${total}</h4>
        <Link to={{ pathname: '/orderConfirmation', state: { total: total } }} className='text-decoration-none'>
          <button className="btn btn-dark d-block mx-auto mt-4 w-100">
            Finalizar Compra
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
