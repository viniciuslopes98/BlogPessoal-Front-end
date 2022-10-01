import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Home from './Paginas/Home/Home';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Paginas/Login/Login';

function App() {
  return (
    
      <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes> // Antigo Switch
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      {/* <Route path="/cadastro" element={<Cadastro/>} /> */}
      </Routes>
      </div>
      <Footer />
      </ BrowserRouter >
      
      
  );
}

export default App;
