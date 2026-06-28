import "./Hero.css";
import { FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaUsers, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-container">

        <motion.div
          className="hero-left"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <span className="hero-tag">
            Trusted. Trained. Top Quality.
          </span>

          <h1>
            Crystal House
            <br />
            Maid Service
          </h1>

          <p>
            Professional House Maid, Baby Care, Cook,
            Patient Care and Housekeeping Services across
            Bengaluru.
          </p>

          <div className="hero-buttons">

            <a href="#contact" className="btn-primary">
              Book Service
            </a>

            <a
              href="tel:+918884463318"
              className="btn-secondary"
            >
              <FaPhoneAlt />
              Call Now
            </a>

          </div>

          <div className="hero-features">

            <div>
              <FaShieldAlt />
              Verified Staff
            </div>

            <div>
              <FaUsers />
              1000+ Happy Families
            </div>

            <div>
              <FaClock />
              Quick Support
            </div>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >

          {/* <div className="hero-card">

            <h2>Need Domestic Help?</h2>

            <p>
              We provide trusted and experienced
              domestic staff for your home.
            </p>

            <ul>

              <li>✔ House Maid</li>

              <li>✔ Baby Care</li>

              <li>✔ Cook</li>

              <li>✔ Elder Care</li>

              <li>✔ Housekeeping</li>

            </ul>

            <a
              href="https://wa.me/918884463318"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp />
              WhatsApp Now
            </a>

          </div> */}

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;