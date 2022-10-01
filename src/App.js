import Navbar from './components/navbar/navbar';
// import './App.css';
import React from 'react';
import ItemListContainer from './components/itemlistcontainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import CartContainer from './components/cartContainer/cartContainer';
import { CartProvider } from './context/cartContex';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/"element={<ItemListContainer saludo="Bienvenido a mi restobar" miNombre="Soy, Agustin Giaccone"/>} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer/>} />
          <Route path="/item/:productId"element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<CartContainer/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;



