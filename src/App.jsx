import './App.css';
import NavBar from './componentes/NarBar/NavBar';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner alerta={"Hola porfe!!"}/>
    </div>
  );
}

export default App;
