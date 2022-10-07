import React from "react";
import { Grid } from "@material-ui/core";
import "./App.css";
import Home from "./Paginas/Home/Home";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Paginas/Login/Login";
import CadastroUsuario from "./Paginas/cadastroUsuario/CadastroUsuario";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import ListaTema from "./components/temas/listatema/ListaTema";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />
        
        
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
