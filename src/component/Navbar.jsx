import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mainLogo from "../assets/image/logo/logo.png"
import "../App.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src={mainLogo} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive("/")}`}>
              <i className="fi fi-rs-objects-column"></i>
              <span className="menu">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/riwayat" className={`nav-link ${isActive("/riwayat")}`}>
              <i class="fi fi-rs-time-past"></i>
              <span className="menu">Riwayat</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sensor" className={`nav-link ${isActive("/sensor")}`}>
              <i className="fi fi-rs-dashboard-monitor"></i>
              <span className="menu">Sensor</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/perhitungan"
              className={`nav-link ${isActive("/perhitungan")}`}
            >
              <i className="fi fi-rs-folder-math"></i>
              <span className="menu">Perhitungan</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Mobile Menu */}
        <ul className={`nav-menu-mobile ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive("/")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${isActive("/about")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className={`nav-link ${isActive("/services")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;