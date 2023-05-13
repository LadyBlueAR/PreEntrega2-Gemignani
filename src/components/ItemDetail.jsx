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
      <div className="d-flex flex-column align-items-center card w-50 mt-5 m-auto shadow-lg bg-transparent">
        <h1 className="border-bottom">{name}</h1>
        <div className="d-flex align-items-center">
        <img src={img} alt="" className="m-2 shadow border-dark" style={{width:"423px", height:"500px"}} />
        <div className="d-flex flex-column mt-5">
        <section className="d-flex flex-column align-items-center">
          <p><strong>Plataforma:</strong> {category}</p>
          <div className="col-10">
            <p style={{textAlign:"justify"}}>{description}</p>
          </div>          
          <p><strong>Precio:</strong> ${price}</p>
        </section>
        <footer className="my-4">
        {cantidadAgregada > 0 ? (
          <div className="d-flex justify-content-center">
            <Link to="/" className="btn btn-dark m-2 mt-5 w-100">
            Seguir Comprando
            </Link>
            <Link to="/cart" className="btn btn-dark m-2 mt-5 w-100">
            Terminar Compra
            </Link>
          </div>        
            ) : (
            <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
        )}
        </footer>
        </div>  
        </div>        
      </div>
    </article>
  );
};

export default ItemDetail;
