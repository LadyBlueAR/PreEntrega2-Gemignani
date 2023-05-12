import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, name, price, cantidad }) => {
  const { eliminarItem } = useContext(CartContext);

  const handleRemove = () => {
    eliminarItem(id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__details">
        <h3 className="cart-item__title">{name}</h3>
        <p className="cart-item__price">${price}</p>
        <p className="cart-item__quantity">Cantidad: {cantidad}</p>
      </div>
      <button onClick={handleRemove} className="cart-item__remove">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
