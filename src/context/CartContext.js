import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [total, setTotal] = useState(0)

    const agregarItem = (item, cantidad) => {
        if(!isInCart(item.id)) {
            setCart((prev) => [...prev, {...item, cantidad}])
            setCantidadTotal((prev) => prev + cantidad)
        }
    }

    const eliminarItem = (itemId) => {
        const item = cart.find((prod) => prod.id === itemId)
        setCart((prev) => prev.filter((prod) => prod.id !== itemId))
        setCantidadTotal((prev) => prev - item.cantidad)
    }

    const clearCart = () => {
        setCart([])
        setCantidadTotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    useEffect(() => {
        let totalValue = 0
        cart.forEach((item) => {
            totalValue += item.price * item.cantidad
        })
        setTotal(totalValue)
    }, [cart])

   return (
    <CartContext.Provider value={{cart, cantidadTotal, total, agregarItem,eliminarItem,clearCart}}>
        { children }
    </CartContext.Provider>
   )
}

export default CartContext