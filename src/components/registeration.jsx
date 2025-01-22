import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mycontext } from './context';
import '../Registeration.css';

function Registration() {
  const { user, setUser } = useContext(mycontext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const nav = useNavigate();

  const isUserAlreadyRegistered = () => user.some((data) => data.email === email);

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else {
      setPasswordError("");
    }

    if (isUserAlreadyRegistered()) {
      alert("User already registered. Please use a different email.");
      return;
    }

    alert("Registration is successful!");
    const userData = { name, email, password };
    setUser([...user, userData]);
    nav("/login");
  };

  return (
    <div className="card2">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            className="input"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div>
            <input type="radio" value="male" name="gender" required /> Male
            <input type="radio" value="female" name="gender" required /> Female
          </div>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            className="input"
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>

        <button className="btnl" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
