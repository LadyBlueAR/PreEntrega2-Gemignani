import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState(0);
  const { agregarItem } = useContext(CartContext);

  const handleOnAdd = (cantidad) => {
    setCantidadAgregada(cantidad);

    const item = {
      id,
      name,
      price,
    };

    agregarItem(item, cantidad);
  };

  return (
    <article>
      <div className="d-flex flex-column align-items-center">
        <h1>{name}</h1>
        <img src={img} alt="" className="my-4 border border-dark shadow-lg" />
        <section className="d-flex flex-column align-items-center">
          <p><strong>Plataforma:</strong> {category}</p>
          <div className="col-3">
            <p style={{textAlign:"justify"}}>{description}</p>
          </div>          
          <p><strong>Precio:</strong> ${price}</p>
        </section>
        <footer className="my-4">
        {cantidadAgregada > 0 ? (
        <Link to="/cart" className="btn btn-dark">
            Terminar Compra
            </Link>
            ) : (
            <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
        )}
</footer>

      </div>
    </article>
  );
};

export default ItemDetail;
