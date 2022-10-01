import Item from "../item/Item"
import './itemlist.css'

const ItemList = ({productos}) =>{
    return(
        <div className="list-card">
            {
            productos.map((prod) =>{
                return (
                    <Item
                    key={prod.id}
                    id={prod.id}
                    name={prod.name}
                    precio={prod.precio}
                    imagen={prod.imagen}
                />
                )
            })
            }
        </div>
    )
}

export default ItemList