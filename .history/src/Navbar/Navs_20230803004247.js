import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '.././img/logo.svg'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import './Navs.css'
const Navs = () => {
  return (
    <Fragment>
    <Navbar expand="lg" className='justify-content-between' >
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt ='Logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className=" w-100 justify-content-center">
          <Form inline >
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2  w-auto"
              />
            </Col>
            <Col xs="auto" className=' m-sm-0'>
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </Form>
        </Nav>
        <Nav className=' justify-content-end'>
        <Nav>
        <Nav.Link href="/" ><AiOutlineUser/></Nav.Link>
        <p className=' my-auto mr' >Hello, Dear</p>

        </Nav>
        <Nav.Link href="/" ><AiOutlineHeart/></Nav.Link>
        <Nav.Link href="/cart" ><BsBagCheck/></Nav.Link>
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr/>
    <Navbar expand="lg" >
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/product">Product</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></Fragment>
  )
}

export default Navs
