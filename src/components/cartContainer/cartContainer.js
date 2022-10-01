import {useContext, useState} from 'react'
import {CartContext} from '../../context/cartContex'
import {Link} from 'react-router-dom'
import {db} from "../../utils/firebase"
import {collection, addDoc, getDoc, doc, updateDoc} from "firebase/firestore"
import "./cartContainer.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const CartContainer =() =>{
    const {productCartList, removerProduct, clear, precioTotalFinal} = useContext(CartContext)
    const [idOrden, setIdOrden]= useState("")
    // console.log(productCartList)

const pedirOrden = (event)=>{
    event.preventDefault();
    const orden = {
        buyer:{
            nombre: event.target[0].value,
            telefono: event.target[1].value,
            email: event.target[2].value
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
        <div>
            {idOrden ?
            <div>
            <p>su pedido fue tomado, id: {idOrden}</p>
            <Link to="/">
            ir al listado de producto
            </Link>
            </div>
            :
            <div>
                {
                productCartList.length > 0 ?
                <div>
                    <div className="producto-carrito">
                        <table>
                        <tr>
                            <th>Producto</th>
                            <th>cantidad</th>
                            <th>subtotal</th>
                        </tr>
                        </table>
                            {productCartList.map(item=>(
                                <div className="producto-carrito">
                                    <table>
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
                                    </table>
                                </div>
                        // <div style={{border:"1px solid black", margin:"2px"}}>
                        //     <p>{item.name} </p>
                        //     <p>cantidad de compra: {item.quantity}</p>
                        //     <p>precio por unidad: ${item.precio}</p>
                        //     <p>precio de los productos:{item.precioXCantidad} </p>
                        //     <button onClick={()=>removerProduct(item.id)}>eliminar producto</button>
                        // </div>
                    ))}
                    </div>

                    <button onClick={clear}>vaciar carrito</button>
                    <p>precio total: {precioTotalFinal()}</p>
                    <div>

                    {/* nombre: event.target[0].value,
            telefono: event.target[1].value,
            gmail */}
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
                            <p>Nombre:</p>
                            <input type="text"/>
                            <p>Telefono:</p>
                            <input type="text"/>
                            <p>email:</p>
                            <input type="email"/>
                            <button type="submit">pedir orden</button>
                        </form>
                    </div>
                </div>
                :
                <>
                    <p>el carrito eta vacio, agrega algun producto</p>
                    <Link to="/">
                    ir al listado de producto
                    </Link>
                </>
            }
            </div>
            }
        </div>

    )
}

export default CartContainer;