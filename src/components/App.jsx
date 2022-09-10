import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Navbar from './Navbar';

const App = () => {
  return (

    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          
          <Route path="/productos/:id" element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
