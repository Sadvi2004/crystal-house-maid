import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsApp.css";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918884463318"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsApp;