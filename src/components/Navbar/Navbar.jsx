import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assests/Images/uventorylogo.svg'
import Arrow from  '../assests/Images/arrow.svg'
import './sass/Navbar.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import office from '../assests/Images/office img.svg'
import Image from 'react-bootstrap/Image'

function NavScrollExample() {
  return (
    <div>
        
        <Navbar  expand="lg">
          <Container >
            <Navbar.Brand href="#"><img src={Logo} alt="logo" className='logo'/ ></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className=" ms-auto  d-flex justify-content-between"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link active href="#action1" className='home' >Home</Nav.Link>
        
                <Nav.Link  className='links' active href="#" >
                Feautres <img src={Arrow} className='arrow' alt='arrow' />
                </Nav.Link>
                <Nav.Link  className='links' active href="#" >
                Pricing
                </Nav.Link>
                <Nav.Link   className='links' active href="#" >
                Support
                </Nav.Link>
                <Nav.Link   className='links' active href="#" >
                Integration  <img src={Arrow}  className='arrow' alt='arrow' />
                </Nav.Link>
        
        
              </Nav>
        
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
            <Row>
                <Col md className='sectionOne'><h3>Inventory Management <br></br>
                    Software FOR GROWING BUSINESS</h3>

                    <p>Easy way to store, track every unit of  <br></br>
                        your businesses and update on catalogue</p>
                    
                    <button>Get started</button>
                </Col>
                <Col md >
                <img src={office} className='img-fluid' alt='land' />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default NavScrollExample;