import { useNavigate, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ExampleCarouselImage from "./images/Book.jpg";
import ExampleCarouselImages from "./images/b1.jpg";
import ExampleCarouselImagess from "./images/b2.jpg";
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import { mycontext } from './context';

function Home() {
  const { MData, SData, setCart, cart, logSuccess ,like,setLike} = useContext(mycontext);
  const nav = useNavigate();
  console.log(MData);
  console.log("login", logSuccess);
  function handleLogout()
  {
    setCart([]);
    setLike([]);
    nav("/")
  }
  function handleAddToWishlist(product) 
  {
    if (!logSuccess) { // Check if the user is logged in
      alert('Please log in to add items to the wishlist.');
      nav('/login'); // Redirect to login page if user is not logged in
      return;
    }
    if (like.includes(product)) {
      alert('Product is already in the wishlist.');
    } else {
      setLike([...like, product]);
    }
  }
  

  function handlecart(product) {
    if (!logSuccess) {
      alert('Please log in to add items to the cart.');
      nav('/login');
      return;
    }
    if (cart.some(data=>data.Id===product.Id)) {
      // nav("/cart");
      alert('Product is already in the cart.');
      
    } else {
      setCart([...cart, product]);
    }
  }

  return (
    <div>
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
                <Link className="nav-link" to="/cart">Cart</Link>
                <Link className="nav-link" to="/wishlist">wishlist</Link>
                <NavDropdown title="Sign up" id="basic-nav-dropdown">
                {!logSuccess ? (
            <Link className="dropdown-item" to="/login">Login</Link>
          ) : (
            <Link className="dropdown-item" to={"/login"} onClick={handleLogout}>Logout</Link>
          )}
                  {/* <Link className="dropdown-item" to="/login">Login</Link> */}
                  {/* <Link className="dropdown-item" to="/registeration">Registration</Link> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Carousel>
        <Carousel.Item interval={2000}>
          <img src={ExampleCarouselImage} alt="First slide" style={{ width: "100%", height: "auto" }} />
          <Carousel.Caption>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={ExampleCarouselImages} alt="Second slide" style={{ width: "100%", height: "auto" }} />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={ExampleCarouselImagess} alt="Third slide" style={{ width: "100%", height: "auto" }} />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <br />
      <h3><b><u>India's Top Reads</u></b></h3>
      <br />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Dynamically render cards based on MData */}
        {SData && MData.map((data, index) => (
          <Card key={index} style={{ width: "200px", margin: "20px" }}>
            <Card.Img variant="top" src={data.Img} style={{ width: "200px", height: "250px" }} />
            <Card.Body style={{ overflowY: "scroll" }}>
              <Card.Title>{data.Name || data.Author}</Card.Title>
              <Card.Text>{data.Author}</Card.Text>
              <Card.Text>Publisher:&nbsp;{data.Publisher}</Card.Text>
              <Card.Text>Language:&nbsp;{data.Language}</Card.Text>
              <Card.Text>Amount: ₹{data.Price}</Card.Text>
            </Card.Body>
            <button  style={{ backgroundColor: "lightgrey", borderRadius: "10px", border: "none", width: "100px", margin: "auto" }}
              
              onClick={() => handleAddToWishlist(data)}
            >
              {like.includes(data) ? 'Liked' : 'Like'}
            </button>
            &nbsp;
            <button
              style={{ backgroundColor: "lightgrey", borderRadius: "10px", border: "none", width: "100px", margin: "auto" }}
              onClick={() => handlecart(data)}
            >
              {cart.includes(data) ? 'Added' : ' Add to cart'}
            </button>
            <br />
          </Card>
        ))}
      </div>

      <br />
      <h3><b><u>Fiction</u></b></h3>
      <br />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Dynamically render cards based on SData */}
        {SData && SData.map((data, index) => (
          <Card key={index} style={{ width: "200px", margin: "20px" }}>
            <Card.Img variant="top" src={data.Img} style={{ width: "200px", height: "250px" }} />
            <Card.Body style={{ overflowY: "scroll" }}>
              <Card.Title>{data.Name || data.Author}</Card.Title>
              <Card.Text>{data.Publisher}</Card.Text>
              <Card.Text>{data.Author}</Card.Text>
              <Card.Text>Amount: ₹{data.Price}</Card.Text>
            </Card.Body>
            <button  style={{ backgroundColor: "lightgrey", borderRadius: "10px", border: "none", width: "100px", margin: "auto" }}
              
              onClick={() => handleAddToWishlist(data)}
            >
              {like.includes(data) ? 'Liked' : 'Like'}
            </button>
            &nbsp;
            <button
              style={{ backgroundColor: "lightgrey", borderRadius: "10px", border: "none", width: "100px", margin: "auto" }}
              onClick={() => handlecart(data)}
            >
              {cart.includes(data) ? 'Added' : ' Add to cart'}
              
            </button>
            <br />
          </Card>
        ))}
      </div>

      <footer style={{ marginTop: "50px", backgroundColor: "#f8f9fa", padding: "20px", textAlign: "center" }}>
        <Container>
          <p>© 2024 Book Shop. All Rights Reserved.</p>
          <Nav className="justify-content-center">
            <Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
            <Link className="nav-link" to="/terms">Terms of Service</Link>
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </Nav>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
