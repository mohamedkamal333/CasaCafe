import React from 'react';
import Navbar from './components/home/navbar/navbar';
import Home from './components/home/home';
import Contact from './components/home/contact/contact';
import Footer from './components/home/footer/footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
return (
    <>
      <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route exact path ="/" element = {<Home/>} />
    <Route path ="contact" element = {<Contact/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  );
}

export default App;
