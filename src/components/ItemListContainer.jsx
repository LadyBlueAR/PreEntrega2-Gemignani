import { useState, useEffect } from "react";
import { getProductos, getProductoByCategory } from "../asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        
        const asyncFunc = categoryId ? getProductoByCategory : getProductos

        asyncFunc(categoryId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <div className="d-flex justify-content-center">
                <ItemList productos={productos} />
            </div>            
        </div>
    )

}

export default ItemListContainer
