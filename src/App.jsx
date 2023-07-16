import './App.css';
import NavBar from './componentes/NarBar/NavBar';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import ItemDetail from './componentes/ItemDetailCounteiner/ItemDetailCounteiner';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './componentes/Home/Home';
import ParteSuperior from './componentes/ParteSuperior/ParteSuperior';


function App() {
  return (
     <BrowserRouter>
      <NavBar/>
      <ItemListConteiner/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:id' element={<ItemDetail/>}/>
       <Route path='ParteSuperior' element={<ParteSuperior/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
