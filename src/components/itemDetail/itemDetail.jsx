import './itemDetail.css'
import ItemCount from "../itemcount/ItemCount";
import {useState, useContext} from "react"
import {CartContext} from '../../context/cartContex'
import{Link} from 'react-router-dom'

const ItemDetail =(producto, buttonId) =>{
    const {addItem} = useContext (CartContext);
    const[contador, setContador] = useState(0);
    producto = producto.producto
    // console.log(productouctos)
    const onAdd = (quantity) =>{
                console.log(`Agregaste ${quantity} unidades de ${producto.name}`);
                setContador(quantity)
                addItem(producto, quantity)
            }
    console.log(producto)
    console.log(buttonId)
    return(
        <div>
            <div className="itemDetail" key={buttonId}>
                <h1>{producto.name}</h1>
                <p>{producto.desciption}</p>
                <p>{producto.precio}</p>
                <img className="ItemDetailimg" src={producto.imagen} alt="" />
                <h2>Agregaste {contador} de {producto.name}</h2>
                <ItemCount stock={producto.cantidad} inicial={0} onAdd={onAdd}/>{
                contador > 0 &&
                <Link to="/cart">
                <button>ir al carrito</button>
                </Link>
            }
            </div>
        </div>
        )
}


export default ItemDetail;