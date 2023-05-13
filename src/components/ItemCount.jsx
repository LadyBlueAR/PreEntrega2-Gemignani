import React from 'react'
import { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


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
      <div className='d-flex flex-column justify-content-center m-4'>
        <div className='d-flex justify-content-center mt-5 w-100'>
        <button className='btn btn-outline-dark w-100 mb-2' onClick={restar}><FaChevronDown/></button>
        <h4 className='px-5'>{cantidad}</h4>
        <button className='btn btn-outline-dark w-100 mb-2' onClick={agregar}><FaChevronUp/></button>
        </div>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-dark w-100' onClick={() => onAdd(cantidad)} disabled={!stock} >
                Agregar al carrito
            </button>
        </div>
      </div>
    )
}

export default ItemCount;
