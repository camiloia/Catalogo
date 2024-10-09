import '../App.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// Carousel
import Image from '../Imgs/banner1.png';
import Image2 from '../Imgs/banner2.png';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../Imgs/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
    const navigate = useNavigate();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProductos(response.data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (<>
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

        <Container>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image2} alt="Second slide" />
                </Carousel.Item>
            </Carousel>

            <h2>Productos</h2>
            <Row>

            {productos.filter(producto => producto.category === 'beauty').map((producto) => (
                <Col xs={12} sm={6} md={4} key={producto.id}>
                    <Card style={{ margin: '1rem' }}>
                        <Card.Img
                            variant="top"
                            src={producto.thumbnail}
                            alt={producto.title}
                            style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Card.Text>Precio: ${producto.price}</Card.Text>
                            <Button
                                variant="primary"
                                onClick={() => navigate("/detalle", { state: { producto } })}
                            >
                                Ver más
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container></>
    );
}

export default Home;
