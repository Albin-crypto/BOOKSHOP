import React, { useContext } from 'react';
import { mycontext } from './context';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Cart.css';

function Cart() {
  const { cart, setCart } = useContext(mycontext);
  const navigate = useNavigate();

  const removeItem = (e) => {
    const removeItemId = parseInt(e.target.id);
    const newItems = cart.filter((item) => item.Id !== removeItemId);
    setCart(newItems);
  };

  const addQty = (id) => {
    const newQty = cart.map((item) =>
      item.Id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
    );
    setCart(newQty);
  };

  const removeQty = (id) => {
    const newQty = cart.map((item) =>
      item.Id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setCart(newQty);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.Price * (item.qty || 1), 0);
  };

  const amount = calculateTotal();

  const handleNavigate = () => {
    navigate("/payment", { state: amount });
    setCart([]);
  };

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
              <Link className="nav-link" to="/product">Books</Link>
              <NavDropdown title="Sign up" id="basic-nav-dropdown">
                <Link className="dropdown-item" to="/login">Login</Link>
                <Link className="dropdown-item" to="/registeration">Registration</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container cart-container">
        <div className="row cart-row">
          {cart.map((item) => (
            <Card key={item.Id} className="cart-card col-4">
              <Card.Img
                variant="top"
                src={item.Img}
                className="cart-card-img"
              />
              <Card.Body>
                <Card.Title>{item.Name}</Card.Title>
                <Card.Text>Price: ₹{item.Price * (item.qty || 1)}</Card.Text>
                <Card.Text>Quantity: {item.qty || 1}</Card.Text>
                <Button
                  variant="outline-primary"
                  className="cart-btn"
                  onClick={() => removeQty(item.Id)}
                >
                  Remove Qty
                </Button>
                &nbsp;
                <Button
                  variant="outline-primary"
                  className="cart-btn"
                  onClick={() => addQty(item.Id)}
                >
                  Add Qty
                </Button>
                <br />
                <Button
                  variant="danger"
                  id={item.Id}
                  onClick={removeItem}
                  className="cart-remove-btn"
                >
                  Remove Item
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="payment-section">
          {cart.length > 0 && (
            <>
              <h3>Total Amount: ₹{calculateTotal()}</h3>
              <Button
                className="payment-btn"
                variant="primary"
                onClick={handleNavigate}
              >
                Proceed to Payment
              </Button>
              {/* <Link
                to="/"
                className="home-link"
              >
                <Button className="home-btn" variant="secondary">
                  Home
                </Button>
              </Link> */}
            </>
          )}
        </div>
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

export default Cart;
