import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Home from './Paginas/Home/Home';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Paginas/Login/Login';
import CadastroUsuario from './Paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    
      <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes> 
      <Route path="/home" element={<Home />} />
      <Route path="/cadastrousuario" element={<CadastroUsuario />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      </Routes>
      </div>
      <Footer />
      </ BrowserRouter >
      
      
  );
}

export default App;
