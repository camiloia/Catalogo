import '../App.css';
import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input';

import producto1 from '../Imgs/producto_1.jpg';
import producto2 from '../Imgs/producto_2.jpg';
import producto3 from '../Imgs/producto_3.jpg';
import producto4 from '../Imgs/producto_4.jpg';
import producto5 from '../Imgs/producto_5.jpeg';
import producto6 from '../Imgs/producto_6.jpg';


//npm install --save-dev @babel/plugin-proposal-private-property-in-object
//npm install react-search-input



const productos = [
  { name: 'collar 1', descripcion: 'blablala', precio: '1000', imagen: producto1, categoría: 'collar' },
  { name: 'anillo 2', descripcion: 'blablala', precio: '2000', imagen: producto2, categoría: 'anillo' },
  { name: 'anillo 3', descripcion: 'blablala', precio: '3000', imagen: producto3, categoría: 'anillo' },
  { name: 'anillo 4', descripcion: 'blablala', precio: '4000', imagen: producto4, categoría: 'anillo' },
  { name: 'aritos 5', descripcion: 'blablala', precio: '5000', imagen: producto5, categoría: 'aritos' },
  { name: 'collar 6', descripcion: 'blablala', precio: '6000', imagen: producto6, categoría: 'collar' },
  //osteoporosis
];

const FILTRO = ['name', 'precio', 'descripcion']; //https://yarnpkg.com/package?name=react-search-input

class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      selectedValue: '',
    };
  }

  Barra(term) {
    this.setState({ searchTerm: term });
  }

  handlePickerChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  }

  renderProducts = () => {
    const { searchTerm, selectedValue } = this.state;
    const productos_filtrados = productos
      .filter(createFilter(searchTerm, FILTRO))
      .filter(producto => !selectedValue || producto.categoría === selectedValue);

    if (productos_filtrados.length === 0) {
      return <div>No se encontró nada</div>;
    }

    return productos_filtrados.map((producto) => (
      <div key={producto.name} className="product">
        <img src={producto.imagen} alt={producto.name} />
        <div>{producto.name}</div>
        <div>{producto.precio}</div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <SearchInput className="search-input" onChange={this.Barra.bind(this)} />

        {this.renderProducts()}

        <label>Filtro:</label>
        <select onChange={this.handlePickerChange} value={this.state.selectedValue}>
          <option value="">Filtro</option>
          <option value="collar">Collar</option>
          <option value="anillo">Anillo</option>
          <option value="pulsera">Pulsera</option>
          <option value="aritos">Aritos</option>
        </select>
      </div>
    );
  }
}

export default Productos;
