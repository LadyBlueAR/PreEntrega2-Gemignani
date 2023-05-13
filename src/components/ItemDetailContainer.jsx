import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//import { getProductoById } from "../asyncMock";

import { getDoc, doc} from 'firebase/firestore'
import { db } from '../services/firebase/fireBaseConfig'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

   useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = {id: response.id, ...data}
                setProductos(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })    
   }, [itemId])

    return(
        <div>
            <ItemDetail {...productos} />
        </div>
    )
}


export default ItemDetailContainer