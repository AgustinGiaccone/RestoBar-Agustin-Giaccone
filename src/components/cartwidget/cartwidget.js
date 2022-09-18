import carritoimg from '../img/carrito.png'
import {Link} from 'react-router-dom'

const CartWidget = () => {
    return(
        <div>
            <Link to="/cart">
                <img src={carritoimg} alt="carrito"/>
                <span>1</span>
            </Link>
            
        </div>
    )
}

export default CartWidget;