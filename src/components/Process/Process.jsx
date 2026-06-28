import "./Process.css";
import { FaPhoneAlt, FaClipboardList, FaUserCheck, FaSmile } from "react-icons/fa";

const process = [
  {
    icon: <FaPhoneAlt />,
    step: "Step 1",
    title: "Contact Us",
    description:
      "Call us or send a WhatsApp message with your domestic staffing requirement.",
  },
  {
    icon: <FaClipboardList />,
    step: "Step 2",
    title: "Share Your Requirement",
    description:
      "Tell us whether you need a maid, nanny, cook, patient care, or housekeeping staff.",
  },
  {
    icon: <FaUserCheck />,
    step: "Step 3",
    title: "Staff Selection",
    description:
      "We match your requirement with trained, verified and experienced professionals.",
  },
  {
    icon: <FaSmile />,
    step: "Step 4",
    title: "Service Starts",
    description:
      "Your selected staff joins your home, and our support team stays available whenever needed.",
  },
];

function Process() {
  return (
    <section className="process" id="process">
      <div className="process-heading">
        <span>How It Works</span>

        <h2>Getting Started is Easy</h2>

        <p>
          Hiring trusted domestic staff is simple with Crystal House Maid
          Service.
        </p>
      </div>

      <div className="process-grid">
        {process.map((item, index) => (
          <div className="process-card" key={index}>
            <div className="process-icon">{item.icon}</div>

            <small>{item.step}</small>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;