import React from 'react';
import Header from './componetns/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Directions from './componetns/Directions';
import Opportunities from './componetns/Opportunities';
import About from './componetns/About';
import Features from './componetns/Features';
import Projects from './componetns/Projects';
import Footer from './componetns/Footer';



function App() {
  return (
    <>
      <Header/>
      <Directions/>
      <Opportunities/>
      <About/>
      <Features/>
      <Projects/>
      <Footer/>
      
    </>
  );
}

export default App;
