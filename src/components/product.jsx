import { useContext, useState, useEffect } from "react";
import { mycontext } from './context';
import { Link, useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Product() {
  const { PData, like, setLike, cart, setCart, logSuccess, user } = useContext(mycontext);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    setFilteredProducts(PData);
  }, [PData]);

  useEffect(() => {
    const filtered = PData.filter(item =>
      item.Name?.toLowerCase().includes(search.toLowerCase()) ||
      item.Publisher?.toLowerCase().includes(search.toLowerCase()) ||
      item.Item?.toLowerCase().includes(search.toLowerCase()) ||
      item.Language?.toLowerCase().includes(search.toLowerCase()) ||
      item.Author?.toLowerCase().includes(search.toLowerCase()) ||
      item.Category?.toLowerCase().includes(search.toLowerCase()) ||
      item.Price?.toString().includes(search)
    );
    setFilteredProducts(filtered);
  }, [search, PData]);
  

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  function handleAddToWishlist(product) {
    if (!logSuccess) {
      alert('Please log in to add items to the wishlist.');
      nav('/login');
      return;
    }
    if (like.includes(product)) {
      alert('Product is already in the wishlist.');
    } else {
      setLike([...like, product]);
    }
  }

  function handleAddToCart(product) {
    if (!logSuccess) {
      alert('Please log in to add items to the cart.');
      nav('/login');
      return;
    }
    if (cart.some(data=>data.Id===product.Id)) {
      alert('Product is already in the cart.');
    } else {
      setCart([...cart, product]);
    }
  }
  return (
    <div className="head">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Books Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/wishlist">Wishlist</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <input
                style={{ width: "260px", height: "29px", marginLeft: "20px" }}
                type="text"
                onChange={handleSearch}
                value={search}
                placeholder="🔎 Search Product..."
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "50px" }}>
        {filteredProducts.map((data) => (
          <div className="card1" key={data.id}>
            <img src={data.Img} alt={data.Name} width={200} height={260} />
            <p style={{ height: "50px", overflowY: "scroll" }}>
              <b>{data.Name}</b>
            </p>
            <p>Language: {data.Language}</p>
            <p>Author: {data.Author}</p>
            <p>Publisher: {data.Publisher}</p>
            <p>Price: ₹{data.Price}</p>
            <p>Category:{data.Category}</p>
            <button className="like" onClick={() => handleAddToWishlist(data)}>
              {like.includes(data) ? 'Liked' : 'Like'}
            </button>
            &nbsp;
            <button className="cart" onClick={() => handleAddToCart(data)}>
              {cart.includes(data) ? 'Added' : 'Add to cart'}
            </button>
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
