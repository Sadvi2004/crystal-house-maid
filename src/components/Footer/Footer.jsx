import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">

          <h2>Crystal House Maid Service</h2>

          <p>
            Trusted. Trained. Top Quality.
          </p>

          <p>
            We provide verified house maids, cooks,
            nannies, patient care and housekeeping
            staff across Bengaluru.
          </p>

        </div>

        <div className="footer-col">

          <h3>Quick Links</h3>

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#contact">Contact</a>

          <a href="/privacy">Privacy Policy</a>

          <a href="/terms">Terms & Conditions</a>

        </div>

        <div className="footer-col">

          <h3>Our Services</h3>

          <p>House Maid</p>

          <p>Baby Care</p>

          <p>Cook Service</p>

          <p>Patient Care</p>

          <p>Housekeeping</p>

        </div>

        <div className="footer-col">

          <h3>Contact</h3>

          <p><FaPhoneAlt /> +91 88844 63318</p>

          <p><FaPhoneAlt /> +91 93531 31149</p>

          <p><FaEnvelope /> info@crystalhousemaid.in</p>

          <p>
            <FaMapMarkerAlt />
            Kengeri, Bengaluru
          </p>

          <div className="socials">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/918884463318"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

      <div className="copyright">
        © 2026 Crystal House Maid Service.
        All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;