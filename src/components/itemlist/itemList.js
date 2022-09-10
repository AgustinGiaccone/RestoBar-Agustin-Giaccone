import Item from "../item/Item"
import './itemlist.css'

const ItemList = ({productos}) =>{
    // console.log(productos)
    return(
        <div className="list-card">
            {
            productos.map((prod) =>{
                return (
                    <Item
                    key={prod.id}
                    name={prod.name}
                    // description={prod.desciption}
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