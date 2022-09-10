import Navbar from './components/navbar/navbar';
// import './App.css';
import ItemListContainer from './components/itemlistcontainer/itemListContainer';
import itemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <ItemListContainer saludo="Bienvenido a mi restobar" miNombre="Soy, Agustin Giaccone"/>
        <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
