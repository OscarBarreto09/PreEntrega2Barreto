import React from 'react';
import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
      <div>
        <BrowserRouter>
        
        <NavBar/>

        <Routes>
          <Route path={'/'} element={<ItemListContainer greeting={"OJ AutosPrime"}> </ItemListContainer>}></Route>
          <Route path={'/category/:id'} element={ <ItemListContainer/>}></Route>
          <Route path={'/item/:id'} element={ <ItemDetailContainer/>}></Route>
          <Route path={'*'} element={ <Error/>}></Route>

        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
