import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/home'; 
import Detalle from './Detalle/detalle'; 
import Contacto from './Contacto/contacto';

/*npm install react-router-dom */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/contacto" element={<Contacto></Contacto>}/>
      </Routes>
    </Router>
  );
}

export default App;