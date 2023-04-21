import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getProductoById } from "../asyncMock";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)

    const { itemId } = useParams()

   useEffect(() => {
        getProductoById(itemId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
   }, [itemId])

    return(
        <div>
            <ItemDetail {...productos} />
        </div>
    )
}


export default ItemDetailContainer