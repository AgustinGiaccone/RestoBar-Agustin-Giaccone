import {useContext, useState} from 'react'
import {CartContext} from '../../context/cartContex'
import {Link} from 'react-router-dom'
import {db} from "../../utils/firebase"
import {collection, addDoc, getDoc, doc, updateDoc} from "firebase/firestore"


const CartContainer =() =>{
    const {productCartList, removerProduct, clear, precioTotalFinal} = useContext(CartContext)
    const [idOrden, setIdOrden]= useState("")
    // console.log(productCartList)

const pedirOrden = (event)=>{
    event.preventDefault();
    // console.log("orden pedida", event)
    // console.log("nombre:", event.target[0].value)
    // console.log("telefono:", event.target[1].value)
    // console.log("email:", event.target[2].value)
    const orden = {
        buyer:{
            nombre: event.target[0].value,
            tel: event.target[1].value,
            gmail: event.target[2].value
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

const actualizarOrden = ()=>{
//creamos la referencia
    const queryRef = doc(db,"ordenes", "tYb4ERiAD4RHJHJiYaWM")
// actualisar nuestro documento de firebase
    updateDoc(queryRef, {
        
    })
}

    return(
        <div>
            <button onClick={actualizarOrden}>actualizar</button>
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
                    {productCartList.map(item=>(
                        <div style={{border:"1px solid black", margin:"2px"}}>
                            <p>{item.name} </p>
                            <p>cantidad de compra: {item.quantity}</p>
                            <p>precio por unidad: ${item.precio}</p>
                            <p>precio de los productos:{item.precioXCantidad} </p>
                            <button onClick={()=>removerProduct(item.id)}>eliminar producto</button>
                        </div>
                    ))}
                    <button onClick={clear}>vaciar carrito</button>
                    <p>precio total: {precioTotalFinal()}</p>
                    <div>
                        <form onSubmit={pedirOrden}>
                            <p>Nombre:</p>
                            <input type="text"/>
                            <p>Tel:</p>
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