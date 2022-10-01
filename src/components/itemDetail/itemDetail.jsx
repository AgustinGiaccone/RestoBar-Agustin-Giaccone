import './itemDetail.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from "../itemcount/ItemCount";
import {useState, useContext} from "react"
import {CartContext} from '../../context/cartContex'
import{Link} from 'react-router-dom'
import React from 'react';

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
        <div className="itemDetail" key={buttonId}>
            <Card style={{ width: '20rem', textAlign:"center"}}>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>
                {producto.desciption}
                </Card.Text>
                <Card.Text>
                agregaste {contador} de {producto.name}
                </Card.Text>
                <ItemCount stock={producto.cantidad} inicial={0} onAdd={onAdd}/>
                {
                contador > 0 &&
                <Link to="/cart">
                <button>ir al carrito</button>
                </Link>
                }
                </Card.Body>
            </Card>
        </div>



        // <div>
        //     <div className="itemDetail" key={buttonId}>
        //         <h1>{producto.name}</h1>
        //         <p>{producto.desciption}</p>
        //         <p>{producto.precio}</p>
        //         <img className="ItemDetailimg" src={producto.imagen} alt="" />
        //         <h2>Agregaste {contador} de {producto.name}</h2>
        //         <ItemCount stock={producto.cantidad} inicial={0} onAdd={onAdd}/>
        //         {
        //         contador > 0 &&
        //         <Link to="/cart">
        //         <button>ir al carrito</button>
        //         </Link>
        //         }
        //     </div>
        // </div>
        )
}


export default ItemDetail;