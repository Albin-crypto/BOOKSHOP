import React, { useState } from 'react';
import { mycontext } from './context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Productview() {
  const { PData, setPData } = useContext(mycontext);
  const [editIndex, setEditIndex] = useState(null); // To track which product is being edited
  const [editValue, setEditValue] = useState({}); // To hold new product data

  // Handle edit (show inputs)
  function handleEdit(index, value) {
    setEditIndex(index); // Show input fields for editing
    setEditValue(value); // Set the current value of the product for editing
  }

  // Save the edited product data
  function handleSaveEdit(index) {
    const editedData = [...PData];
    editedData[index] = editValue; // Replace the old value with the new one
    setPData(editedData);
    setEditIndex(null); // Hide input fields after editing
  }

  // Cancel the edit
  function handleCancelEdit() {
    setEditIndex(null); // Reset the edit state
    setEditValue({}); // Clear the edit value
  }

  // Handle delete with confirmation
  function handleDelete(index) {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const deletedData = [...PData];
      deletedData.splice(index, 1); // Remove the product from array
      setPData(deletedData);
    }
  }

  return (
    <> <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand as={Link} to="/admin">Admin Page</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Link className="nav-link" to="/addproduct">Add product</Link>
          <Link className="nav-link" to="/customerview">Customer View</Link>
          <Link className="nav-link" to="/banneduser">Banned User</Link>


          {/* <NavDropdown title="Sign up" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/login">Login</Link>
            <Link className="dropdown-item" to="/registeration">Registration</Link>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "60px" }}>
      {PData.map((data, index) => (
        <div key={data.id} style={{ maxWidth: "250px", maxHeight: "867px", border: "1px solid #ccc", padding: "10px" }}>
          <img src={data.Img} alt={data.Name} width={200} height={250} />
          
          {/* Conditionally render edit form or product details */}
          {editIndex === index ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
             <label>
                Name:
                <input
                  type="text"
                  value={editValue.Name}  
                  onChange={(e) => setEditValue({ ...editValue, Name: e.target.value })}
                  style={{ width: '100%', padding: '5px', marginBottom: '5px' }}
                />
              </label>
             <label>
                Language:
                <input
                  type="text"
                  value={editValue.Language}
                  onChange={(e) => setEditValue({ ...editValue, Language: e.target.value })}
                  style={{ width: '100%', padding: '5px', marginBottom: '5px' }}
                />
              </label>
              <label>
               Image:
                <input
                  type="text"
                  value={editValue.Img}
                  onChange={(e) => setEditValue({ ...editValue, Img: e.target.value })}
                  style={{ width: '100%', padding: '5px', marginBottom: '5px' }}
                />
              </label>
              <label>
                Author:
                <input
                  type="text"
                  value={editValue.Author}
                  onChange={(e) => setEditValue({ ...editValue, Author: e.target.value })}
                  style={{ width: '100%', padding: '5px', marginBottom: '5px' }}
                />
              </label>
              <label>
                Publisher:
                <input
                  type="text"
                  value={editValue.Publisher}
                  onChange={(e) => setEditValue({ ...editValue, Publisher: e.target.value })}
                  style={{ width: '100%', padding: '5px', marginBottom: '5px' }}
                />
              </label>
              <label>
                Price:
                <input
                  type="number"
                  value={editValue.Price}
                  onChange={(e) => setEditValue({ ...editValue, Price: e.target.value })}
                  style={{ width: '100%', padding: '5px', marginBottom: '5px' }}
                />
              </label>
              <label>
                Category:
                <input
                  type="text"
                  value={editValue.Category}
                  onChange={(e) => setEditValue({ ...editValue, Category: e.target.value })}
                  style={{ width: '100%', padding: '5px', marginBottom: '5px' }}
                />
              </label>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button class="btns"onClick={() => handleSaveEdit(index)} style={{ backgroundColor: "green", color: "white", padding: '5px 10px' }}>
                  Save
                </button>
                <button class="btnc" onClick={handleCancelEdit} style={{ backgroundColor: "gray", color: "white", padding: '5px 10px' }}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p style={{ height: "50px", overflowY: "scroll" }}>
                <b>{data.Name}</b>
              </p>
              <p>Language: {data.Language}</p>
              <p>Author: {data.Author}</p>
              <p>Publisher: {data.Publisher}</p>
              <p>Price: ₹{data.Price}</p>
              <div style={{  display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button class="btns" onClick={() => handleEdit(index, data)}>
                  Edit
                </button>
                <br/>
                <button class="btnc" onClick={() => handleDelete(index)}>
                  Delete
                </button>
                <Link to={"/"} style={{ textDecoration: "none" }}>
            <button class="btnh">
              Home
            </button>
          </Link>
              </div>
            </div>
          )}

         
        </div>
      ))}
    </div>
    </>
  );
}

export default Productview;
