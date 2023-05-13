import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import {getDocs, collection, query, where} from 'firebase/firestore';
import { db } from "../services/firebase/fireBaseConfig"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db,'items'), where('category', '==', categoryId))
        : collection(db, 'items')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
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
