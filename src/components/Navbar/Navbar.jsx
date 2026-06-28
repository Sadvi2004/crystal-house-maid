import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaCalendarCheck,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const reloadHome = () => {
    closeMenu();
    window.location.href = "/";
  };

  return (
    <header className="navbar">
      <div className="container">

        {/* Logo */}
        <a
          href="/"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            reloadHome();
          }}
        >
          <img
            src="/images/logo.png"
            alt="Crystal House Maid Service"
            className="logo-img"
          />

          <div className="logo-text">
            <h2>Crystal House</h2>
            <span>Maid Service</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className={menuOpen ? "nav active" : "nav"}>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              reloadHome();
            }}
          >
            Home
          </a>

          <a href="#about" onClick={closeMenu}>About</a>

          <a href="#services" onClick={closeMenu}>Services</a>

          <a href="#pricing" onClick={closeMenu}>Pricing</a>

          <a href="#why" onClick={closeMenu}>Why Us</a>

          <a href="#process" onClick={closeMenu}>How It Works</a>

          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>

          <a href="#faq" onClick={closeMenu}>FAQ</a>

          <a href="#careers" onClick={closeMenu}>Careers</a>

          <a href="#contact" onClick={closeMenu}>Contact</a>

        </nav>

        {/* Right Side */}
        {/* <div className="navbar-right">

          <a
            href="tel:+918884463318"
            className="phone-btn"
          >
            <FaPhoneAlt />
            <span>+91 88844 63318</span>
          </a>

          <a
            href="#contact"
            className="book-btn"
            onClick={closeMenu}
          >
            <FaCalendarCheck />
            <span>Book Now</span>
          </a>

        </div> */}

        {/* Mobile Menu */}
        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;