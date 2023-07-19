import './App.css';
import NavBar from './componentes/NarBar/NavBar';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './componentes/Home/Home';
import ItemDetailCounteiner from './componentes/ItemDetailCounteiner/ItemDetailCounteiner';


function App() {
  return (
     <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/item/:id' element={<ItemDetailCounteiner/>}/>
          <Route path="/categoria/:idCategoria" element={<ItemListConteiner/>} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
