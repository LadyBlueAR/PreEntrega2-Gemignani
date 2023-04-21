import React from 'react'
import { useState } from 'react'

const ItemCount =({stock, inicial, onAdd})=> {

   const[cantidad, setCantidad] = useState(inicial) 

    const agregar = () => {
        if(cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return(
      <div className='d-flex flex-column align-content-center'>
        <div className='d-flex justify-content-center'>
        <button className='btn px-3 me-2' onClick={restar}>-</button>
        <h4>{cantidad}</h4>
        <button className='btn px-3 ms-2' onClick={agregar}>+</button>
        </div>
        <div>
            <button className='btn' onClick={() => onAdd(cantidad)} disabled={!stock} >
                Agregar al carrito
            </button>
        </div>
      </div>
    )
}

export default ItemCount;
