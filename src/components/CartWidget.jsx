import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";

function CartWidget() {
  const { cart, cantidadTotal } = useContext(CartContext);

  return (
    <div className="ml-auto">
      <Link
        to="/cart"
        className="btn btn-dark"
        style={{ display: cantidadTotal > 0 ? "inline-block" : "none" }}
      >
        <BiCart className="mr-2" />
        {cantidadTotal}
      </Link>
    </div>
  );
}

export default CartWidget;
