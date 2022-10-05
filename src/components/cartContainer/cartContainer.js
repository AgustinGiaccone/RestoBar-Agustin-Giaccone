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
    // console.log(productCartList)

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



                    {/* <div className="producto-carrito">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Producto</th>
                                    <th>cantidad</th>
                                    <th>subtotal</th>
                                </tr>
                            </tbody>
                        </table>
                            {productCartList.map(item=>(
                                <div className="producto-carrito" key={item.id}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="info-producto">
                                                        <img src={item.imagen} alt={item.name}/>
                                                        <div>
                                                            <p>{item.name}</p>
                                                            <small>{item.precio}</small>
                                                            <span onClick={()=>removerProduct(item.id)}>eliminar producto</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><h6>{item.quantity}</h6></td>
                                                <td>{item.precioXCantidad}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                    ))}
                    </div> */}
                        {/* // <div style={{border:"1px solid black", margin:"2px"}}>
                        //     <p>{item.name} </p>
                        //     <p>cantidad de compra: {item.quantity}</p>
                        //     <p>precio por unidad: ${item.precio}</p>
                        //     <p>precio de los productos:{item.precioXCantidad} </p>
                        //     <button onClick={()=>removerProduct(item.id)}>eliminar producto</button>
                        // </div> */}

                    <div className="buttonVaciar">
                        <p>precio total: {precioTotalFinal()}</p>
                        <Button variant="secondary" onClick={clear}>Vaciar carrito</Button>{' '}
                        {/* <Button variant="primary" onClick={clear}>vaciar carrito</Button>{' '} */}
                        {/* <Button variant="outline-secondary" onClick={clear}>vaciar carrito</Button>{' '} */}
                        {/* <Button variant="outline-primary" onClick={clear}>vaciar carrito</Button>{' '} */}
                        {/* <button onClick={clear}>vaciar carrito</button> */}
                    </div>
                    <div>

                        {/* <Form onSubmit={pedirOrden}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>nombre</Form.Label>
                            <Form.Control type="text" placeholder="nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>telefono</Form.Label>
                            <Form.Control type="text" placeholder="telefono" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" placeholder="@email.com" />
                            </Form.Group>
                            <Button variant="primary" type="submit">pedir orden</Button>
                        </Form> */}

                        <form onSubmit={pedirOrden}>
                            <input type="text" placeholder="Nombre"/><p></p>
                            <input type="text" placeholder="Telefono"/><p></p>
                            <input type="email" placeholder="Correo"/><p></p>
                            <Button variant="light"type="submit">Pedir orden</Button>{' '}
                            {/* <button type="submit">Pedir orden</button> */}
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