import ItemCount from "./ItemCount";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
                <ItemCount inicial={1} stock={stock} onAdd={(cantidad) => console.log('cantidad agregada', cantidad)}/>
            </footer>
        </article>
    )
}

export default ItemDetail