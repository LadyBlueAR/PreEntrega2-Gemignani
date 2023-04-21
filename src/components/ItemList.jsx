import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <div className='d-flex justify-content-around'>
            {productos?.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}
export default ItemList