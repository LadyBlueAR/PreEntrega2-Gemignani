import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {
    return(
        <article>
            <div className="card" style={{width: "200px"}}>
                <img className="card-img-top" src={img} style={{width:"100%"}}/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Precio: ${price}</p>
                    <p className="card-text">Stock Disponible: {stock}</p>
                    <Link to={`/item/${id}`}>Ver Detalle</Link>
                </div>
            </div>
        </article>
    )
}

export default Item 