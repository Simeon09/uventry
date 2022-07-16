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
import Emoji from "../../assests/Images/Emoji.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./sass/create.css";

const Login = () => {
  return (
    <>
      <div>
        <Container>
          <Navother className="login" />
          <Row>
            <Col lg={6}>
              <img src={office} className="img-fluid" alt="land" />
            </Col>
            <Col lg={6} className="form">
              <h6>Create Account </h6>

              <div>
                <button className="btn1">
                  {" "}
                  <img src={google} alt="logo" />
                  Continue with Google
                </button>
                <button className="btn2">
                  {" "}
                  <img src={linkden} alt="logo" />
                  Continue with LinkedIn
                </button>
              </div>
              <h6>-OR-</h6>
              <Form>
                <Form.Group className="mb-3 group" controlId="formBasicEmail">
                  <Form.Control
                    className="input"
                    type="text"
                    placeholder="Full Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3 group" controlId="formBasicEmail">
                  <Form.Control
                    className="input"
                    type="email"
                    placeholder="Email address"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 group"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    className="input"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 group"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    className="input"
                    type="confirm password"
                    placeholder=" Confirm Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Creating an account means you’re okay with our Terms of Service, Privacy Policy." />
                </Form.Group>

                <Button className="submitbtn" type="submit">
                Register
                </Button>
              </Form>
              
              <p>
              Already have an account? Login
                <span>
                  <Link className="account" to="/login">
                  Login
                  </Link>
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
