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
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";

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
          <Route path="/home" element={<Home />} />
          <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;                           
