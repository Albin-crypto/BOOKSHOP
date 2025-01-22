import React from 'react'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function Contact() {
   
    function handlesend() {
      alert("Mail sent");
    }

    return (
      <div className="">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">Books Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/product">Books</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <NavDropdown title="Sign up" id="basic-nav-dropdown">
                  <Link className="dropdown-item" to="/login">Login</Link>
                  <Link className="dropdown-item" to="/registeration">Registration</Link>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <h1>Contact Us</h1>
        <p><b>Reading is considered as the most intelligent habit.<br/>
          Reading is intelligent but it's also enriching, soothing, escapist, inspirational, transformative and a timeless journey.</b></p>
        <h6>Contact No: &nbsp;8921344548</h6>
        <label>Email: </label>
        &nbsp; albindevasia@gmail.com<br/>
        <label>Location:</label>
        &nbsp;Thodupuzha, Karimkunnam
        <br/><br/><br/>

        <h1>Send Message</h1>
        <Form>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
          </div>
          
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </div>
          
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Group className="mb-3" controlId="formGroupMessage">
              <Form.Label></Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" placeholder="Write Your Message" />
            </Form.Group>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="button" onClick={handlesend}>Send</button>
          </div>
        </Form>
        <footer style={{ marginTop: "50px", backgroundColor: "#f8f9fa", padding: "20px", textAlign: "center" }}>
        <Container>
          <p>© 2024 Book Shop. All Rights Reserved.</p>
          <Nav className="justify-content-center">
            <Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
            <Link className="nav-link" to="/terms-of-service">Terms of Service</Link>
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </Nav>
        </Container>
      </footer>
      </div>
    )
}
