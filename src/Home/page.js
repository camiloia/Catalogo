import '../App.css';
import { useNavigate } from "react-router-dom";
// Carousel
import Image from '../Imgs/banner1.png';
import Image2 from '../Imgs/banner2.png';
// Productos
import producto1 from '../Imgs/producto_1.jpg';
import producto2 from '../Imgs/producto_2.jpg';
import producto3 from '../Imgs/producto_3.jpg';
import producto4 from '../Imgs/producto_4.jpg';
import producto5 from '../Imgs/producto_5.jpeg';
import producto6 from '../Imgs/producto_6.jpg';

import Logo from '../Imgs/logo.png';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'


const productos = [
  { name: 'Collar 1', descripcion: 'Collar elegante de diseño exclusivo', precio: '1000', imagen: producto1, categoría: 'collar' },
  { name: 'Anillo 2', descripcion: 'Anillo de oro de 18k', precio: '2000', imagen: producto2, categoría: 'anillo' },
  { name: 'Anillo 3', descripcion: 'Anillo con piedras preciosas', precio: '3000', imagen: producto3, categoría: 'anillo' },
  { name: 'Anillo 4', descripcion: 'Anillo clásico de plata', precio: '4000', imagen: producto4, categoría: 'anillo' },
  { name: 'Aritos 5', descripcion: 'Aritos modernos y livianos', precio: '5000', imagen: producto5, categoría: 'aritos' },
  { name: 'Collar 6', descripcion: 'Collar con perlas naturales', precio: '6000', imagen: producto6, categoría: 'collar' },
];

function Home() {
    const navigate = useNavigate();

    const listaProductos = productos.map((producto) => (
        <Col xs={12} sm={6} md={4} key={producto.name}>
          <Card style={{ margin: '1rem' }}>
            <Card.Img
              variant="top"
              src={producto.imagen}
              alt={producto.name}
              style={{ height: '200px', width: '100%', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{producto.name}</Card.Title>
              <Card.Text>Precio: ${producto.precio}</Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/detalle", { state: { producto } })}
              >
                Ver más
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ));
  return (
    <div className="App">
      <header className="App-header">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">
              <img style={{ width: '150px' }} src={Logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/productos")}>Productos</Nav.Link>
                <Nav.Link onClick={() => navigate("/contacto")}>Contacto</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-success">Buscar</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Image} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Image2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1 style={{justifyContent:'center', alignItems:'center', fontSize:'50px',padding:'50px', marginTop:'150px'}}>Productos</h1>
        <Container>
          <Row>
            {listaProductos}
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Home;
