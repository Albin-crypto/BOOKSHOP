import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { mycontext } from './context';
import '../login.css';

function Login() {
  const { user, setLogUser, setLogSuccess } = useContext(mycontext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const nav = useNavigate();

  function loginBtn() {
    const loggedUser = user.find(
      (userData) => userData.email === email && userData.password === password 
    );

    if (email === "admin@gmail.com" && password === "Admin") {
      setLogSuccess(true);
      nav("/admin");
      return;
    }

    if (loggedUser) {
      if (loggedUser.banned) {
        setError('User is banned. Please contact support.');
        return;
      }

      setLogUser(loggedUser);
      setLogSuccess(true);
      alert('Login successful!');
      nav('/');
    } else {
      setError('Invalid email or password');
    }
  }

  return (
    <div className="containers">
      <h1 className="h1">Login</h1>
      <div className="form">
        <label className="label">Email:</label>
        <input
          className="input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <label className="label">Password:</label>
        <input
          className="input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="button" onClick={loginBtn}>Login</button>
        <button className="button">
          <Link to="/registeration" className="link">Register</Link>
        </button>
        
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
