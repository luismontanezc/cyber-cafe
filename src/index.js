import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {Navegador, SecondaryMenu} from './Navegador';
import Footer from './Footer';
import Header from './pages/Cuerpo1-0';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navegador/>
      <SecondaryMenu/>
      <Header/>
      <App />
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);