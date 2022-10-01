import logo from '../img/logo.png';
import './navbar.css';
import CartWidget from '../cartwidget/cartwidget';
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {default as BootstrapNavbar} from 'react-bootstrap/Navbar';

const NavBar = () =>{
    return(
        <div className='Navbar-conteiner'>
            <div>
            <NavLink className={({isActive})=>isActive ?"claseActive" : "claseInactive"} to="/"><img src={logo} alt="logo"/></NavLink>
            </div>
            <div>
                <BootstrapNavbar bg="dark" variant="dark">
                <Container>
                <BootstrapNavbar.Brand><NavLink className={({isActive})=>isActive ?"claseActive" : "claseInactive"} to="/">Inicio</NavLink></BootstrapNavbar.Brand>
                <Nav className="me-auto">
                <Nav.Link><NavLink className={({isActive})=>isActive ?"claseActive" : "claseInactive"} to="/categoria/comida">comida</NavLink></Nav.Link>
                <Nav.Link><NavLink className={({isActive})=>isActive ?"claseActive" : "claseInactive"} to="/categoria/bebida">bebida</NavLink></Nav.Link>
                <Nav.Link><NavLink className={({isActive})=>isActive ?"claseActive" : "claseInactive"} to="/categoria/postre">postre</NavLink></Nav.Link>
                </Nav>
                </Container>
                </BootstrapNavbar>
            </div>
            <div className='img-carrito'>
                <CartWidget/>
            </div>
        </div>
    );
}

export default NavBar;