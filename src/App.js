import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import Producto from './pages/Producto';
import Producto2 from "./pages/Producto2";
import Producto3 from "./pages/Producto3";
import {InfoProducto, InfoProducto2 } from './pages/InfoProducto';
import InfoComplementos from './pages/InfoComplementos';
import Login from "./pages/FormularioLogin";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu/>} />
      <Route path="/Producto" element={<Producto/>} />
      <Route path="/InfoComplementos/:id" element={<InfoComplementos/>} />
      <Route path="/FormularioLogin" element={<Login />} />
      <Route path="/InfoProducto/:id" element={<InfoProducto />} />
      <Route path="/InfoProducto2/:id" element={<InfoProducto2 />} />
      <Route path="/Producto2" element={<Producto2 />} />
      <Route path="/Producto3" element={<Producto3 />} />
      
      
    </Routes>
  );
};

export default App;
