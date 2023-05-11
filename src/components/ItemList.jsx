import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto", width:"80%", rowGap:"20px"}}>
            {productos?.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}
export default ItemList