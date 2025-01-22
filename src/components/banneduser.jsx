import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { mycontext } from './context';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Banneduser() {
    const { user } = useContext(mycontext);

    const bannedUsers = user.filter((data) => data.banned);
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/admin">Admin Page</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/addproduct">Add product</Link>
                            <Link className="nav-link" to="/productview">Product View</Link>
                            <Link className="nav-link" to="/customerview">Customer View</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h3 style={{ textAlign: "center" }}>Banned Customers</h3><hr />
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
                {bannedUsers.length > 0 ? (
                    bannedUsers.map((data) => (
                        <div key={data.id} className="cust-container">
                            <h5>Name: {data.name}</h5>
                            <h6>Email: {data.email}</h6>
                            <h6 style={{ color: data.banned ? "red" : "green" }}>
                                Status: {data.banned ? "Banned" : "Active"}
                            </h6>
                            {/* <Link to={"/login"} style={{ textDecoration: "none", marginTop: "10px", display: "block" }}>
                                <button style={{ backgroundColor: "orange", color: "white", padding: '5px 10px' }}>
                                    Login
                                </button>
                            </Link> */}
                        </div>

                    ))
                ) : (
                    <p>No banned customers found.</p>
                )}
            </div>
            <footer style={{ marginTop: "50px", backgroundColor: "#f8f9fa", padding: "20px", textAlign: "center" }}>
        <Container>
          <p>© 2024 Book Shop. All Rights Reserved.</p>
          <Nav className="justify-content-center">
            <Nav.Link href="privacy-policy">Privacy Policy</Nav.Link>
            <Nav.Link href="terms-of-service">Terms of Service</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </footer>
        </>
    )
}

export default Banneduser





