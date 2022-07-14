import React from 'react'
import './sass/Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Logo from '../assests/Images/uventorylogo.svg'
const Navother = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="logo" className='logo'/ ></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Form.Select aria-label="Default select example">
      
      <option value="1">English</option>
      <option value="2">French</option>
      <option value="3">Yoruba</option>
    </Form.Select>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navother