import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Detail from './components/Detail';
import Loading from "./components/Loading"
import Products from './components/Products';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/'>
        <Route index element={ <Loading />} />
        <Route path='/home'  exact element={ <Home />} />
        <Route path='/products' exact element={ <Products />} />
        <Route path='/detail/:id'  exact element={ <Detail />} />
        
      </Route>
    </Routes>
    </>
  )
}

export default App