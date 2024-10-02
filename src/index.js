import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {Navegador, SecondaryMenu} from './Navegador';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navegador/>
      <SecondaryMenu/>
      <App />
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);