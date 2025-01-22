import React, { useContext } from 'react';
import { mycontext } from './context'; // Make sure the context is properly defined and exported
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Customerview() {
  const { user, setUser } = useContext(mycontext); // Get the user array and the setter for updating it

  function handleApprove(data) {
    alert("Mail sent");
  }

  function handleBanned(data) {
    // Update the user state to set the banned status to true/false for the selected user
    const updatedUsers = user.map((u) =>
      u.email === data.email ? { ...u, banned: !u.banned } : u
    );
    setUser(updatedUsers); // Update the context with the new list of users
  }

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
          <Link className="nav-link" to="/banneduser">Banned User</Link>


          {/* <NavDropdown title="Sign up" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/login">Login</Link>
            <Link className="dropdown-item" to="/registeration">Registration</Link>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {user.map((data, index) => (
          <div key={data.id} style={{ maxWidth: "307px", maxHeight: "500px", border: "1px solid #ccc", padding: "8px", margin: "10px" }}>
            <p style={{ height: "50px", overflowY: "" }}>
              <b>Customer Name: {data.name}</b><br />
              <b>Customer Email: {data.email}</b><br />
              <b>Customer Password: {data.password}</b><br />
              <b>Status: {data.banned ? "Banned" : "Active"}</b>
            </p>
            <br />
            <br />
            &nbsp;
            <button className="btnlb"
              onClick={() => handleBanned(data)}
            >
              {data.banned ? "Unban" : "Ban"}
            </button>
            <Link to={"/admin"} style={{ textDecoration: "none", marginTop: "10px", display: "block" }}>
              <button className="btnl">
                Home
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Customerview;
