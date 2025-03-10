import { Link } from "react-router-dom";
import "./Navbar.css"; // Import styles

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">E-Commerce</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
