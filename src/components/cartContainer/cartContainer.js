import {useContext, useState} from 'react'
import {CartContext} from '../../context/cartContex'
import {Link} from 'react-router-dom'
import {db} from "../../utils/firebase"
import {collection, addDoc} from "firebase/firestore"
import "./cartContainer.css"
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const tab = '\u00A0';

const CartContainer =() =>{
    const {productCartList, removerProduct, clear, precioTotalFinal} = useContext(CartContext)
    const [idOrden, setIdOrden]= useState("")

const pedirOrden = (event)=>{
    event.preventDefault();
    const orden = {
        buyer:{
            Nombre: event.target[0].value,
            Telefono: event.target[1].value,
            Gmail: event.target[2].value
        },
        items: productCartList,
        total: precioTotalFinal()
    }
    console.log("orden", orden)
    //creamos la referencia donde se guarda
    const queryRef = collection(db,"ordenes")
    //creamos el documento en firebase
    addDoc(queryRef, orden).then(response=>{
        console.log("response", response)
        setIdOrden(response.id)
        clear()
    })
}

    return(
        <div className="background-cart">
            {idOrden ?
            <div className="pedido-tomado">
            <p>su pedido fue tomado, id: {idOrden}</p>
            <Link to="/">
            <p>Ir al listado de producto</p>
            </Link>
            </div>
            :
            <div className="carrito">
                {
                productCartList.length > 0 ?
                <div>
                    <div className="angry-grid">
                        <div id="item-0">Producto</div>
                        <div id="item-1">Cantidad</div>
                        <div id="item-2">Subtotal</div>
                    </div>
                        {productCartList.map(item=>(
                        <div className="grid-cart-producto" key={item.id}>
                            <div id="item-imagen"><img className="imagen-cart" src={item.imagen} alt={item.name}/></div>
                            <div id="item-name">{item.name}{tab}{tab} ${item.precio}</div>
                            <div id="item-precioUnitario"></div>
                            <div id="item-cantidad">{item.quantity}</div>
                            <div id="item-precio">
                                ${item.precioXCantidad} {tab}
                                <Button variant="danger" onClick={()=>removerProduct(item.id)}>X</Button>
                            </div>
                        </div>
                        ))}
                    <div className="buttonVaciar">
                        <p>precio total: {precioTotalFinal()}</p>
                        <Button variant="secondary" onClick={clear}>Vaciar carrito</Button>{' '}
                    </div>
                    <div>
                        <form onSubmit={pedirOrden}>
                            <input type="text" placeholder="Nombre"/><p></p>
                            <input type="text" placeholder="Telefono"/><p></p>
                            <input type="email" placeholder="Correo"/><p></p>
                            <Button variant="light"type="submit">Pedir orden</Button>{' '}
                        </form>
                    </div>
                </div>
                :
                <div className="carrito-vacio">
                    <p >El carrito esta vacio, agrega algun producto</p>
                    <Link to="/">
                    <p>Ir al listado de producto</p>
                    </Link>
                </div>
            }
            </div>
            }
        </div>

    )
}

export default CartContainer;