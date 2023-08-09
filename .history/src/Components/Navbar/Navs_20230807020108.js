import { Fragment, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../img/logo.svg'
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import './Navs.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useAppContext } from '../Context';

const Navs = () => {
  const { loginWithRedirect, logout , user, isAuthenticated } = useAuth0();
  const [search , setSearch] = useState()
  const {searchBtn} = useAppContext();

  
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
                placeholder="Search Your Product..."
                className=" mr-sm-2  w-auto" of
                value={search} onChange={(e)=>setSearch(e.target.value)}
              />
             
            </Col>
            <Col xs="auto" className=' m-sm-0'>
              <Button type="submit" onClick={()=>searchBtn(search)}  >Search</Button>
            </Col>
          </Row>
        </Form>
        </Nav>
        <Nav className=' justify-content-end'>
        {isAuthenticated &&
        (
        <Nav>
          <Nav.Link href="/" ><AiOutlineUser/></Nav.Link>
          <p className=' my-auto me-3' >Hello, {user.name}</p>
        </Nav>
        )}

        <Nav.Link href="/" ><AiOutlineHeart/></Nav.Link>
        <Nav.Link href="/cart" ><BsBagCheck/></Nav.Link>
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr/>
    <Navbar expand="lg" >
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav "  />
      <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-between'>
        <Nav className=" justify-content-start">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/product">Product</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Nav className="auth  ">
        {isAuthenticated?
                <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></Button>:
                        <Button onClick={() => loginWithRedirect()}><CiLogin/></Button>
        }
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></Fragment>
  )
}

export default Navs
