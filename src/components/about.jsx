import React from "react"
import { useNavigate ,Link} from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';


export default function About(props) {

    // console.log("props",props.data);
    const propData=props.data
    
    const nav = useNavigate();
    function handleClick()
    {
        nav('/')  
    }
    return (
        <div class="head">
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
        
        {/* <h1 class="h1">{propData}</h1> */}
        <h1> <b>India’s largest online bookstore</b></h1>
       <p>Reading is considered as the most intelligent habit.
         Reading is intelligent but it's also enriching, soothing, escapist, inspirational, transformative and a timeless journey.
          The habit of reading opens the door for completely new universes which existed merely as tiny filaments in our dreams.
           With the transformed approach, BookChor brings you these unimaginable filaments of wonders to your doorsteps.
            We are a team of dedicated book enthusiasts creating a dream from 2015 and working to deliver the dream to every book lover in India.
             Through our journey we have developed an app to make the book purchase easy.
              We have held events all over the nation which witnessed a gathering of thousands of book lovers. We sell new books, old and used books, rare and limited editions, everything under a single platform.
               We also provide you with an opportunity to sell us books instead of letting them rot at the bottom of your bookshelf, in return for more books.</p>

       
        {/* one way to print output */}
<img src="https://www.bookchor.com/assets-new/images/lenerimg.svg"/>
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
    )
}