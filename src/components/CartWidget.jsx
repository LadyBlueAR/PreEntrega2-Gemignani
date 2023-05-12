
import cartImg from './assets/cart.png'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {

  const { cart, cantidadTotal } = useContext(CartContext)
  console.log(cantidadTotal)

  return (
    <div>
      <Link to='/cart' className='CartWidget' style={{ display: cantidadTotal > 0 ? 'block' : 'none'}}>
        <img src={cartImg} alt="cart-img" />
        {cantidadTotal}
      </Link>        
    </div>
  )
}

export default CartWidget