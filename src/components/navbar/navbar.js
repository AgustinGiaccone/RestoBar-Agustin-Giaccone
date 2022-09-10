import logo from '../img/logo.png';
import './navbar.css';
import CartWidget from '../cartwidget/cartwidget';
import {Link, NavLink} from 'react-router-dom'


const Navbar = () =>{
    const style = {}
    return(
        <div className='Navbar-conteiner'>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <ul className='Ul-navbar'>
                    <li ><NavLink className={({isActive})=>isActive ?"claseActive" : "claseInactive"} to="/">Inicio</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive ?"claseActive" : "claseInactive"} to="/categoria/comida">comida</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive ?"claseActive" : "claseInactive"} to="/categoria/bebida">bebida</NavLink></li>
                </ul>
            </div>
            <div className='img-carrito'>
                <CartWidget/>
            </div>
        </div>
    );
}

export default Navbar;