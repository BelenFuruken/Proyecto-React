import './App.css';
import React from 'react';
import NavBar from './componentes/NarBar/NavBar';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import ItemDetailCounteiner from './componentes/ItemDetailCounteiner/ItemDetailCounteiner';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';
function App() {
  return (
     <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListConteiner/>}/>
            <Route path='/item/:id' element={<ItemDetailCounteiner/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListConteiner/>} />
            <Route path='/cart'element={<Cart/>}/>
          </Routes>
        </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
