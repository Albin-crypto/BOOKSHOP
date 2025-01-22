import React from 'react';
import { useNavigate,Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useContext } from "react";
import { mycontext } from './context';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Admin() {
  const {logSuccess} = useContext(mycontext);
  const nav = useNavigate();
  function handleLogout()
  {

    nav("/")
  }
  return (
    <div className="ahead">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/admin">Admin Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/addproduct">Add product</Link>
              <Link className="nav-link" to="/productview">Product View</Link>
              <Link className="nav-link" to="/customerview">Customer View</Link>
              <Link className="nav-link" to="/banneduser">Banned User</Link>


              <NavDropdown title="Sign up" id="basic-nav-dropdown">
                {!logSuccess ? (
                  <Link className="dropdown-item" to="/login">Login</Link>
                ) : (
                  <Link className="dropdown-item" to="/login" onClick={handleLogout}>Logout</Link>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <p>Welcome to the admin page</p> */}

<img src="https://thumbs.dreamstime.com/b/admin-office-binder-wooden-desk-table-colored-pencil-pencils-pen-notebook-paper-79046621.jpg" style={{width:"1257px",height:"600px"}} />      
      <footer style={{ marginTop: "50px", backgroundColor: "#f8f9fa", padding: "20px", textAlign: "center" }}>
        <Container>
          <p>© 2024 Book Shop. All Rights Reserved.</p>
          <Nav className="justify-content-center">
            {/* <Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
            <Link className="nav-link" to="/terms-of-service">Terms of Service</Link> */}
            {/* <Link className="nav-link" to="/contact">Contact Us</Link> */}
          </Nav>
        </Container>
      </footer>
    </div>
  );
}

export default Admin;
