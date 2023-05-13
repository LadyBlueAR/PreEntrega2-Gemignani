import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="btn btn-dark">
          Volver Al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((p) => (
            <CartItem key={p.id} {...p} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-end">
              Total:
            </td>
            <td className="text-end">${total}</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="5" className="text-end">
              <button onClick={() => clearCart()} className="btn btn-outline-danger me-2">
                Limpiar Carrito
              </button>
              <Link to="/checkout" className="btn btn-dark">
                Comprar
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
