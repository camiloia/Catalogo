import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { CartProvider } from './Cart/page';
import axios from 'axios';
import Home from './Home/page'; 
import Detalle from './Detalle/page'; 
import Contacto from './Contacto/page';
import Producto from './Productos/page';

/*npm install react-router-dom */

function App() {
  const [loading, setLoading] = useState(true);
  const [productosagregados, setProductos] = useState([]);
  
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/productos" element={<Producto/>}/>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;