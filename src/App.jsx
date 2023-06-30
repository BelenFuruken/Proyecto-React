import './App.css';
import NavBar from './componentes/NarBar/NavBar';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import ItemDetail from './componentes/ItemDetailCounteiner/ItemDetailCounteiner';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListConteiner/>}/>
        <Route path='/categoria/:categoria' element={<ItemListConteiner/>}/>
        <Route path='/item/:id' element={<ItemDetail/>}/>
      </Routes>
      <ItemListConteiner alerta={"Hola porfe!!"}/>
    </BrowserRouter>
  );
}

export default App;
