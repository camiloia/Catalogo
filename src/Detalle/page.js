import { useLocation } from "react-router-dom";

function Detalle() {
  const location = useLocation();
  const { producto } = location.state || {}; 

  if (!producto) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{producto.name}</h1>
      <img src={producto.imagen} alt={producto.name} style={styles.image} />
      <p style={styles.price}>Precio: ${producto.precio}</p>
      <p style={styles.description}>{producto.descripcion}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    border: '1px solid #e0e0e0',
  },
  title: {
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#333333',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '15px',
    border: '1px solid #e0e0e0',
  },
  description: {
    fontSize: '18px',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#555555',
    textAlign: 'center',
  },
  price: {
    fontSize: '20px',
    color: '#27ae60',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default Detalle;
