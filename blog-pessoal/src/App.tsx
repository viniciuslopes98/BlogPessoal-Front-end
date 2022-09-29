import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Home from './Paginas/Home/Home';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'

function App() {
  return (
     <>
       <Navbar />
        <Home />
      <Footer />      
     </>
  );
}

export default App;
