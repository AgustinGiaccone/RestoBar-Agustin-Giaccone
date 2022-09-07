import Navbar from './components/navbar/navbar';
// import './App.css';
import ItemListContainer from './components/itemlistcontainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <ItemListContainer saludo="Bienvenido a mi restobar" miNombre="Soy, Agustin Giaccone"/>
      </header>
    </div>
  );
}

export default App;
