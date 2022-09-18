import {useContext} from 'react'
import {CartContext} from '../../context/cartContex'


const CartContainer =() =>{
    const {productCartList, removerProduct, clear} = useContext(CartContext)

    return(
        <div>CartContainer
            <div>
                {productCartList.map(item=>(
                    <div style={{border:"1px solid black", margin:"2px"}}>
                        <p>{item.name} - {item.quantity}</p>
                        <button onClick={()=>removerProduct(item.id)}>eliminar producto</button>
                    </div>
                ))}
                <button onClick={clear}>vaciar carrito</button>
            </div>
        </div>

    )
}

export default CartContainer;