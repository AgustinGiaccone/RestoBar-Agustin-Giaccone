import './itemDetail.css'
import ItemCount from "../itemcount/ItemCount";
import {useState, useContext} from "react"
import {CartContext} from '../../context/cartContex'

const ItemDetail =({productos, buttonId}) =>{
    const {addItem} = useContext (CartContext);

    const[contador, setContador] = useState(0);

    return(productos.map((prod)=>{

        const onAdd = (quantity) =>{
            console.log(`Agregaste ${quantity} unidades de ${prod.name}`);
            setContador(quantity)
            addItem(prod, quantity)
        }
    if(prod.id == buttonId){
    return(
        <div className="itemDetail" key={buttonId}>
            <h1>{prod.name}</h1>
            <p>{prod.desciption}</p>
            <p>{prod.precio}</p>
            <img className="ItemDetailimg" src={prod.imagen} alt="" />
            <h2>Agregaste {contador} de {prod.name}</h2>
            <ItemCount stock={prod.cantidad} inicial={0} onAdd={onAdd}/>
        </div>
        )
}
}
))}

export default ItemDetail;