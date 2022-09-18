import {useContext} from 'react'
import {CartContext} from '../../context/cartContex'
import {Link} from 'react-router-dom'


const CartContainer =() =>{
    const {productCartList, removerProduct, clear, precioTotalFinal} = useContext(CartContext)
    console.log(productCartList)

    return(
        <div>
            {
                productCartList.length > 0 ?
                <div>
                    {productCartList.map(item=>(
                        <div style={{border:"1px solid black", margin:"2px"}}>
                            <p>{item.name}</p>
                            <p>cantidad de compra: {item.quantity}</p>
                            <p>precio por unidad: ${item.precio}</p>
                            <p>precio de los productos:{item.precioXCantidad} </p>
                            <button onClick={()=>removerProduct(item.id)}>eliminar producto</button>
                        </div>
                    ))}
                    <button onClick={clear}>vaciar carrito</button>
                    <p>precio total: {precioTotalFinal()}</p>
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

    )
}

export default CartContainer;