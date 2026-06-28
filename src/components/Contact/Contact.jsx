import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-heading">

        <span>Contact Us</span>

        <h2>Get In Touch With Us</h2>

        <p>
          Looking for a trusted house maid, nanny, cook or patient care
          service? Contact Crystal House Maid Service today.
        </p>

      </div>

      <div className="contact-wrapper">

        {/* Left Side */}

        <div className="contact-info">

          <div className="info-box">

            <FaPhoneAlt />

            <div>
              <h3>Call Us</h3>

              <p>+91 88844 63318</p>

              <p>+91 93531 31149</p>

            </div>

          </div>

          <div className="info-box">

            <FaEnvelope />

            <div>

              <h3>Email</h3>

              <p>info@crystalhousemaid.in</p>

            </div>

          </div>

          <div className="info-box">

            <FaMapMarkerAlt />

            <div>

              <h3>Office Address</h3>

              <p>
                #91, 1st Floor,
                Devagere,
                Kumbalagodu Post,
                Kengeri Hobli,
                Bengaluru,
                Karnataka – 560074
              </p>

            </div>

          </div>

          <a
            className="whatsapp-button"
            href="https://wa.me/918884463318"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />

            WhatsApp Us
          </a>

        </div>

        {/* Right Side */}

        <div className="contact-form">

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <select>

              <option>Select Service</option>

              <option>House Maid</option>

              <option>Baby Care</option>

              <option>Cook</option>

              <option>Patient Care</option>

              <option>Housekeeping</option>

            </select>

            <textarea
              rows="5"
              placeholder="Tell us your requirement"
            ></textarea>

            <button type="submit">
              Send Enquiry
            </button>

          </form>

        </div>

      </div>

      <div className="map">

        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Kumbalagodu+Bengaluru&output=embed"
          loading="lazy"
        ></iframe>

      </div>

    </section>
  );
}

export default Contact;