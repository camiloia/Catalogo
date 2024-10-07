import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/page'; 
import Detalle from './Detalle/page'; 
import Contacto from './Contacto/page';
import Producto from './Productos/page';

/*npm install react-router-dom */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/productos" element={<Producto/>}/>
      </Routes>
    </Router>
  );
}

export default App;