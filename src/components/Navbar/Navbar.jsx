import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assests/Images/uventorylogo.svg';
import Arrow from  '../assests/Images/arrow.svg';
import './sass/Navbar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import office from '../assests/Images/office img.svg';

import { FaFacebookF, FaTwitter,FaInstagram,FaEnvelope,FaRegQuestionCircle, FaRegCopyright} from "react-icons/fa";

import { Link } from "react-router-dom";


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
                <Col lg className='sectionOne'><h3>INVENTORY MANAGEMENT <br></br>
                    SOFTWARE FOR GROWING BUSINESS</h3>

                    <p>Easy way to store, track every unit of  <br></br>
                        your businesses and update on catalogue</p>
                    
                    <Link to='/Login'><button>Get started</button></Link>
                </Col>
                <Col lg >
                <img src={office} className='img-fluid' alt='land' />
                </Col>
            </Row>
        </Container>
        <Container>
        <footer>

            
                <div>
                    <ul>
                        <li>About</li>
                        <li>faq</li>
                        <li>Help</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                    <p className='copyright'> <FaRegCopyright/> 2022, Uventory Corporation Pvt. Ltd. All Rights Reserved</p>
                </div>
                <div className='social'>
                    <FaFacebookF/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaEnvelope/>
                </div>
                <div>
                <button><FaRegQuestionCircle className='icon'/> Help</button>
                </div>
                <p className='uvent'> <span>< FaRegCopyright/></span> 2022, Uventory Corporation Pvt. Ltd. All Rights Reserved</p>
        </footer>
        </Container>
    </div>
  );
}

export default NavScrollExample;