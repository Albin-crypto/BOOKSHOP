import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Terms() {
  return (
    <><Navbar expand="lg" className="bg-body-tertiary">
    <Container>
    <Navbar.Brand as={Link} to="/">Books Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/product">Books</Link>
          <Link className="nav-link" to="/cart">Cart</Link>
          <Link className="nav-link" to="/wishlist">wishlist</Link>
          <NavDropdown title="Sign up" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/login">Login</Link>
            <Link className="dropdown-item" to="/registeration">Registration</Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <div>
        <h1>Terms & Conditions</h1>
        <h3><u>The Information that is collected</u></h3>
        <p>When you sign up for a Bookshop.com account and want to avail the products & services that are offered by our website, we safely store all the information that is provided by you. We make use of an order form whereby we provide the opportunity our customers to request for information, products & services. We also collect the contact information (email address & mobile number) of our visitors along with the financial information (credit card & debit card). We use contact information to send orders to the customers along with the information of our company. The information can also be used to communicate with the customers, as and when the need arises. On the other hand, financial information is gathered to invoice customers for different kinds of products and services. The mailing and promotional calls can be stopped by the user if required by following the steps given in Choice/Opt-out below.
The information of your browser along with your IP address is stored in the form of a “cookie”. This makes it easy for us to identify you and the shopping cart with added products & services. A cookie is a tiny data file that is stored on your hard drive. A cookie file is neither read stored in your hard drive nor read the other cookie file. You can reject the storage of the cookie in your hard drive by simply switching off this option in your browser. For purchasing, it’s not necessary to switch on the cookie in the browser option.</p>
    <h4><u>Uses of the collected information</u></h4>
    <p>To improve the online customer experience, Bookshop.com makes use of the information collected. Thus, when you sign in, it authenticates you and sends a notification through email. Your request can be fulfilled for different products & services. We will use the information for customizing the advertisements and content according to the customer’s needs. Information used for capturing data insights for internal and external clients.</p>
   <h5><u>Sharing of Information</u></h5>
   <p>You can be assured that Bookchor.com does not believe in sharing any personal information with any individual, company, or organization. Information is only shared if we have consent from your side unless

We are working with some reliable partners that agree to accept our terms & conditions and agree to sign a confidentiality agreement. We also respond to court orders or any other legal processes to exercise or establish legal rights for defending any claims. We may also disclose the information of those customers who may come in terms of suspicion for any fraud or illegal transaction. Then their information will be used for legal processes or investigation by the court. This website may have pop-ups of other websites and the information given to them is not our responsibility.</p>
   <h5><u>Data integrity</u></h5>
   <p>Bookshop.com collected the customer’s personal information and processes it in accordance with the privacy policy. We ensure that the data we collected, and stored for different process practices are needed to provide a meaningful online service to the customer. Thus, we request our customers provide the data as accurately as possible.</p>
    
    <h5><u>Security & Confidentiality</u></h5>
    <p>Bookshop.com restricts access to personal information to the employees, moderators, contractors, and agents for updates, delivery, and for improvement of the product and services. They have to abide by the confidentiality agreement failing which they will be terminated.

We make use of the best security measures for protection against the misuse and loss of information that is under our control. We go through the SSL secure commerce server which uses military-grade encryption to protect all the information with specific codes. Each customer is important to us and we consider their approval with due respect.</p>
   <h5><u>Choice/Opt-out.</u></h5>
   <p>Customers can unsubscribe the email at any point of time according to their desire by following the suggestion given at the bottom of the Bookchor.com email/newsletter.</p>
   <h5><u>Contacting Bookshop.com</u></h5>
   <p>If there are any changes that you would like to make in your current information then do remove your previous contact details so that you don’t get any updates in your old contacts. You can also be with us through the following contacts:</p>
    
    <h5><u>Children's Privacy</u></h5>
    <p>Our Services do not address anyone under the age of 18. We do not knowingly collect personally identifiable information from children under 18. In the case we discover that a child under 18 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.</p>
    {/* Email : cs@Bookchor.com
Address : The Last page,
Municipal No 50, The Basement, near Brigade School, EWS Colony, BTM 2nd Stage, J. P. Nagar, Bengaluru, Karnataka 560078

P : +91-9050111218 */}
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
    </>
  )
}

export default Terms