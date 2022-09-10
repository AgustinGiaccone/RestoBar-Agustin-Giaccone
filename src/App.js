import Navbar from './components/navbar/navbar';
// import './App.css';
import ItemListContainer from './components/itemlistcontainer/itemListContainer';
import itemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/"element={<ItemListContainer saludo="Bienvenido a mi restobar" miNombre="Soy, Agustin Giaccone"/>} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:productId"element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
