import carritoimg from '../img/carrito.png'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {CartContext} from '../../context/cartContex'
import React from 'react';

const CartWidget = () => {
    const {cantidadDeProductos} = useContext(CartContext);
    return(
        <div>
            <Link to="/cart">
                <img src={carritoimg} alt="carrito"/>
                <span>{cantidadDeProductos()}</span>
            </Link>
        </div>
    )
}
export default CartWidget;