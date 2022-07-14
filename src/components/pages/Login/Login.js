import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Navother from "../../Navbar/Navother";
import Container from "react-bootstrap/Container";
import office from "../../assests/Images/office img.svg";
import google from "../../assests/Images/image 2.svg";
import linkden from "../../assests/Images/linkden.png";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './sass/login.css'

const Login = () => {
  return (
    <>

      <div>
          <Container >
            <Navother className="login"/>
            <Row >
              <Col md={6}>
                <img src={office} className="img-fluid" alt="land" />
              </Col>
              <Col md={6} className='formSide'>
                <h6>Welcome back! </h6>
                <h5>How may we update your Uventory today?</h5>
                <div>
                  <button>
                    {" "}
                    <img src={google} alt="logo" />
                    Continue with Google
                  </button>
                  <button>
                    {" "}
                    <img src={linkden} alt="logo" />
                    Continue with LinkedIn
                  </button>
                </div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email address" />
          
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
          
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                <Link to=''>Forget Password?</Link>
                <p>Not Registered?<span><Link to=''>Create an Account</Link></span></p>
              </Col>
            </Row>
          </Container>
      </div>
    </>
  );
};

export default Login;
