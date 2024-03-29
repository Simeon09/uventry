import React ,{ useState}from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Navother from "../../Navbar/Navother";
import Container from "react-bootstrap/Container";
import office from "../../assests/Images/office img.svg";
import google from "../../assests/Images/image 2.svg";
import linkden from "../../assests/Images/linkden.png";
import Emoji from '../../assests/Images/Emoji.png';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './sass/login.css'
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
  const [formlogin, setformlogin] = useState(
    {
      email:"",
      password:"",

    }
  )
  const handlechange = (e) => {
    setformlogin({
      ...formlogin,
      [e.target.email]: e.target.value,
    });
  };
  const Handlesubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("userDetails", JSON.stringify({ ...formlogin }));
    toast("Login successfully",);
   
    setTimeout(() => {
      window.location='/Dashboard'
    }, 5000);
  };
  return (
    <>

      <div>
          <Container >
            <Navother className="login"/>
            
            <Row >
              <Col lg={6}>
                <img src={office} className="img-fluid picture" alt="land" />
              </Col>
              <Col lg={6}  className='formSide'>
                <h6>Welcome back! <span><img src={Emoji} alt='emoji'/></span> </h6>
                <h5>How may we update your Uventory today?</h5>
                <div >
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
                <Form onSubmit={Handlesubmit} >
                <ToastContainer />
                  <Form.Group className="mb-3 group" controlId="formBasicEmail">
                    
                    <Form.Control className="input" type="email"name="email"
              id="email" onChange={handlechange}  placeholder="Email address" />
          
                  </Form.Group>
                  <Form.Group className="mb-3 group" controlId="formBasicPassword">
                   
                    <Form.Control className="input"  type="password" placeholder="Password" />
                    
                  </Form.Group>
          
                  <Button className="submitbtn"  type="submit">
                    Login
                    <ToastContainer position="bottom-right" newestOnTop />
                  </Button>
                </Form>
                <Link to='' className="forget">Forget Password?</Link>
                <p>Not Registered?<span><Link className="account" to='/Create'>Create an Account</Link></span></p>
              </Col>
            </Row>
          </Container>
      </div>
    </>
  );
};

export default Login;
