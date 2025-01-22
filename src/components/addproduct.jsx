import React, { useContext, useState } from 'react';
import { mycontext } from './context';
import { useNavigate,Link } from 'react-router-dom';
import '../AddProduct.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'; // Import custom CSS

function AddProduct() {
  const { PData, setPData } = useContext(mycontext);
  const [Name, setName] = useState("");
  const [Publisher, setPublisher] = useState("");
  const [Language, setLanguage] = useState("");
  const [Price, setPrice] = useState("");
  const [Author, setAuthor] = useState("");
  const [Category, setCategory] = useState("");
  
  const [Img, setImg] = useState(null); // Handle file uploads

  const nav = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new product object
    const newProduct = {
      Name,
      Publisher,
      Language,
      Price,
      Author,
      Img
    };

    // Add the new product to PData
    setPData([...PData, newProduct]);

    // Optionally reset form fields
    setName("");
    setPublisher("");
    setLanguage("");
    setPrice("");
    setAuthor("");
    setImg(null);
    setCategory(""); // Reset file input

    // Redirect to the product view page after submission
    nav("/productview");
  };

  // Handle file input change
  // const handleImageChange = (e) => {
  //   setImg(e.target.files[0]); // Get the first selected file
  // };

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand as={Link} to="/admin">Admin Page</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/productview">Product View</Link>
          <Link className="nav-link" to="/customerview">Customer View</Link>
          <Link className="nav-link" to="/banneduser">Banned User</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <div className="add-product-container">
      <div className="form-card">
        <h1 className="form-title">Add Product</h1>
        <form onSubmit={handleSubmit} className="form-layout">
          <div className="form-group">
            <label>Product Name:</label>
            <input
              className="form-input"
              type="text"
              placeholder="Product Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>IMAGE:</label>
            <input
              className="form-input"
              type="text"
              placeholder="ImG URL"
              value={Img}
              onChange={(e) => setImg(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Publisher:</label>
            <input
              className="form-input"
              type="text"
              placeholder="Publisher"
              value={Publisher}
              onChange={(e) => setPublisher(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Language:</label>
            <input
              className="form-input"
              type="text"
              placeholder="Language"
              value={Language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Price:</label>
            <input
              className="form-input"
              type="number"
              placeholder="Price"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Author:</label>
            <input
              className="form-input"
              type="text"
              placeholder="Author"
              value={Author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <input
              className="form-input"
              type="text"
              placeholder="Category"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default AddProduct;
