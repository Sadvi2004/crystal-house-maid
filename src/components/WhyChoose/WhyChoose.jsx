import "./WhyChoose.css";
import {
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaMoneyBillWave,
  FaCheckCircle,
  FaHeadset,
  FaHome,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "4+ Years Experience",
    text: "Trusted domestic staffing service across Bengaluru.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Verified Staff",
    text: "Every maid and caregiver is background verified.",
  },
  {
    icon: <FaUsers />,
    title: "Experienced Professionals",
    text: "Well-trained staff with practical experience.",
  },
  {
    icon: <FaClock />,
    title: "Quick Replacement",
    text: "Fast replacement support whenever required.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Pricing",
    text: "Quality services at competitive prices.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Part-Time / Full-Time",
    text: "Flexible services to suit every family.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    text: "Dedicated support team for your assistance.",
  },
  {
    icon: <FaHome />,
    title: "Serving All Bengaluru",
    text: "Available across all major areas in Bengaluru.",
  },
];

function WhyChoose() {
  return (
    <section className="why" id="why">

      <div className="why-heading">

        <span>Why Choose Us</span>

        <h2>Trusted Domestic Staffing Partner</h2>

        <p>
          We provide reliable, verified and professional domestic staff
          with complete customer satisfaction.
        </p>

      </div>

      <div className="why-grid">

        {features.map((item, index) => (

          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChoose;