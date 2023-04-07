import React, { Fragment } from "react";
import './App.css';
import { BrowserRouter,Route,Router,Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Snav from './components/Snav';
import Categories from './components/Categories';
import Oneimage from "./components/Oneimage";
import Footer from './components/Footer';
import Electeric from "./components/Electeric";
import Thnav from './components/Thnav'
function App() {
  return (
<BrowserRouter>
<div className="app"> 

  <Routes>
    <Route path="/" element={
      <div>
      <Header/>
      <Snav/>
      <Home/>
      <Footer/>
    </div>
    } />
      
    
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Electeric" element={
    <>
      <Header/>
      <Snav/>
      <Thnav/>
    <Electeric/>
    <Footer/>
    </>
    }/>
    <Route path="/Checkout" element={
    <div>
      <Header/>
      <Snav/>
      <Checkout/>
      <Footer/>

    </div>
    }/>
  </Routes>

</div>
</BrowserRouter>
  );
}

export default App
