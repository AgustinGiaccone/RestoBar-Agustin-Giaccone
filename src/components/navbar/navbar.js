import logo from '../img/logo.png';
import './navbar.css';
import CartWidget from '../cartwidget/cartwidget';


const Navbar = () =>{
    const style = {}
    return(
        <div className='Navbar-conteiner'>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <ul className='Ul-navbar'>
                    <li className='LI-navbar'><a>Inicio</a></li>
                    <li className='LI-navbar'><a>Comida</a></li>
                    <li className='LI-navbar'><a>Bebidas</a></li>
                </ul>
            </div>
            <div className='img-carrito'>
                <CartWidget/>
            </div>
        </div>
    );
}

export default Navbar;