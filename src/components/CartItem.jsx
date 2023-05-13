import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, name, price, cantidad }) => {
  const { eliminarItem } = useContext(CartContext);

  const handleRemove = () => {
    eliminarItem(id);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>${price}</td>
      <td>{cantidad}</td>
      <td>${price * cantidad}</td>
      <td>
        <button onClick={handleRemove} className="btn btn-sm btn-outline-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
