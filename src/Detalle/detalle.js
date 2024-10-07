import { useLocation } from "react-router-dom";
import detalle from './detalle.css'

function Detalle() {
  const location = useLocation();
  const { producto } = location.state || {}; 

  if (!producto) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div>
      <h1 style= "">{producto.name}</h1>
      <img src={producto.imagen} alt={producto.name} />
      <p>Descripción: {producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
}

export default Detalle;