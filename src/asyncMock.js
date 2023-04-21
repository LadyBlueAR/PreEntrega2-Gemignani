const productos = [
    {
        id:'1',
        name: 'Red Dead Redemption 2',
        price: 1200,
        category:'PC',
        img: 'https://cdn.mobygames.com/covers/11283278-red-dead-redemption-ii-xbox-one-front-cover.jpg',
        stock: 15,
        description: 'Red Read Redemption 2 Versión PC (Steam Key)'
    },
    {id:'2', name:'God Of War Ragnarok', price: 2100, category:'', img:'https://cdn.mobygames.com/05f8b9f0-ac16-11ed-a12e-02420a000130.webp', stock: 8, description: 'God Of War Ragnarok Versión PC (Steam Key)'},
    {id:'3', name:'Forza Horizon 5', price: 2100, category:'', img:'https://cdn.mobygames.com/covers/10083568-forza-horizon-5-windows-front-cover.jpg', stock: 10, description: 'Forza Horizon 5 Versión XBOX'}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductoById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        }, 500)
    })
}

export const getProductoByCategory = (productoCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.category === productoCategory))
        }, 500)
    })
}