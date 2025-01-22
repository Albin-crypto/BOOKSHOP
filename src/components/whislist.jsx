import React, { useContext } from 'react';
import { mycontext } from './context';
import { useNavigate, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function Whislist() {
  const { like, setLike, cart, setCart } = useContext(mycontext); // Add cart and setCart
  const nav = useNavigate();

  function handleRemove(product) {
    setLike(like.filter(item => item !== product));
  }

  function confirmRemove(product) {
    if (window.confirm(`Are you sure you want to remove "${product.Name}" from Wishlist?`)) {
      handleRemove(product);
    }
  }

  function addToCart(product) {
    setCart([...cart, product]); // Add selected product to cart
    nav('/cart'); // Navigate to cart page
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/">Books Shop</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/product">Books</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              {/* <NavDropdown title="Sign up" id="basic-nav-dropdown">
                <NavDropdown.Item href="login">Login</NavDropdown.Item>
                <NavDropdown.Item href="registration">
                  Registration
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="head" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "0px" }}>
      &nbsp;{like.map((data) => (
          <div className="card" key={data.id} style={{}}>
            <p><img src={data.Img} alt={data.Name} width={200} height={260} /></p>
            <p style={{ height: "50px", overflowY: "scroll" }}><b>{data.Name}</b></p>
            <p>Language: {data.Language}</p>
            <p>Author: {data.Author}</p>
            <p>Publisher: {data.Publisher}</p>
            <p>Price: ₹{data.Price}</p>
            <button className="like" onClick={() => confirmRemove(data)}>Remove</button>
            &nbsp; 
            <button className="cart" onClick={() => addToCart(data)}>Add to Cart</button>
          </div>
        ))}
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
    </div>
  );
}

export default Whislist;
