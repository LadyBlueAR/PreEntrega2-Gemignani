import ItemCount from "./ItemCount";
import { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const { agregarItem } = useContext(CartContext) 

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad)

        const item = {
            id, name, price
        }

        agregarItem(item, cantidad)
        
    }
    return(
        <article>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt="" />
            </picture>
            <section>
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: ${price}</p>
            </section>
            <footer>
               {
                cantidadAgregada > 0 ? (
                    <Link to='/cart' className="Option" >Terminar Compra</Link>
                ) : (
                    <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}/>
                )
               }
            </footer>
        </article>
    )
}

export default ItemDetail