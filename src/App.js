import Navbar from './components/navbar/navbar';
// import './App.css';
import ItemListContainer from './components/itemlistcontainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import CartContainer from './components/cartContainer/cartContainer';
import ContactoPages from './components/contactoPages/contactoPages'
import { CartProvider } from './context/cartContex';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/"element={<ItemListContainer saludo="Bienvenido a mi restobar" miNombre="Soy, Agustin Giaccone"/>} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer/>} />
          <Route path="/item/:productId"element={<ItemDetailContainer/>} />
          <Route path="/contacto" element={<ContactoPages/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;



