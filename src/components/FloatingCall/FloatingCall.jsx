import { FaPhoneAlt } from "react-icons/fa";
import "./FloatingCall.css";

function FloatingCall() {
  return (
    <a
      href="tel:+918884463318"
      className="floating-call"
      aria-label="Call Crystal House Maid Service"
    >
      <FaPhoneAlt />
    </a>
  );
}

export default FloatingCall;