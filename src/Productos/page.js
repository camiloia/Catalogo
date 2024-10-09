import React, { useEffect, useState } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import axios from 'axios';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [filtro, setFiltro] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProductos(response.data.products);

        // Obtiene categorías únicas
        const categoriasUnicas = [...new Set(response.data.products.map(producto => producto.category))];
        setFiltro(categoriasUnicas);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handlePickerChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const renderProducts = () => {
    const productosFiltrados = productos
      .filter(createFilter(searchTerm, ['title', 'description']))
      .filter(producto => !selectedValue || producto.category === selectedValue);

    if (productosFiltrados.length === 0) {
      return <div style={styles.noResults}>No se encontró nada</div>;
    }

    return productosFiltrados.map((producto) => (
      <div key={producto.id} style={styles.product}>
        <img src={producto.thumbnail} alt={producto.title} style={styles.image} />
        <h3>{producto.title}</h3>
        <p>{producto.description}</p>
        <div style={styles.price}>${producto.price}</div>
        <button style={styles.button}>Añadir al carrito</button>
      </div>
    ));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tienda de Productos</h1>
      <div style={styles.filtroContainer}>
        <label>Filtro:</label>
        <select onChange={handlePickerChange} value={selectedValue}>
          <option value="">Todos</option>
          {filtro.map((categoria) => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </select>
      </div>

      <SearchInput style={styles.searchInput} onChange={handleSearch} placeholder="Buscar productos..." />
      <div style={styles.productsContainer}>
        {renderProducts()}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    marginBottom: '20px',
  },
  searchInput: {
    margin: '10px 0',
    padding: '8px',
    width: '80%',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  filtroContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  productsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
  },
  product: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    textAlign: 'center',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: '200px', // Altura fija para uniformidad
    objectFit: 'cover', // Mantiene la proporción de la imagen
    borderRadius: '4px',
  },
  price: {
    fontSize: '1.2em',
    color: '#b12704',
    margin: '10px 0',
  },
  button: {
    padding: '10px',
    background: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  noResults: {
    color: '#777',
    marginTop: '20px',
  },
};

export default Productos;
