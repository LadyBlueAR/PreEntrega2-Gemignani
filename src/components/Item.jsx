import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article>
      <div className="card shadow-sm" style={{ width: "16rem" }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <h6 className="card-title text-truncate border-bottom" title={name}>{name}</h6>
          <p className="card-text">Precio: ${price}</p>
          <p className="card-text">Stock Disponible: {stock}</p>
          <Link to={`/item/${id}`} className="btn btn-dark w-100">
            Ver Detalle
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Item;