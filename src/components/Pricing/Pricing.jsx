import "./Pricing.css";
import {
  FaClock,
  FaHome,
  FaUserShield,
  FaCheckCircle,
} from "react-icons/fa";

function Pricing() {
  return (
    <section className="pricing" id="pricing">

      <div className="pricing-heading">

        <span>Pricing Plans</span>

        <h2>Premium Domestic Staffing Solutions</h2>

        <p>
          Every home has unique requirements. We provide flexible and transparent
          pricing based on the service type, working hours, experience level,
          and location to ensure the best value for every customer.
        </p>

      </div>

      <div className="pricing-grid">

        {/* Part-Time */}

        <div className="pricing-card">

          <div className="pricing-icon">
            <FaClock />
          </div>

          <h3>Part-Time Maid Service</h3>

          <h1>Flexible Plans</h1>

          <h2>Customized Pricing</h2>

          <ul>

            <li><FaCheckCircle /> 2–8 Hours Daily</li>

            <li><FaCheckCircle /> House Cleaning</li>

            <li><FaCheckCircle /> Sweeping & Mopping</li>

            <li><FaCheckCircle /> Utensil Washing</li>

            <li><FaCheckCircle /> Dusting & Maintenance</li>

            <li><FaCheckCircle /> Verified Professionals</li>

          </ul>

          <a href="#contact">
            Get Free Quote
          </a>

        </div>

        {/* Full-Time */}

        <div className="pricing-card active">

          <div className="pricing-icon">
            <FaHome />
          </div>

          <div className="popular">
            MOST POPULAR
          </div>

          <h3>Full-Time Maid Service</h3>

          <h1>Best Value</h1>

          <h2>Complete Home Support</h2>

          <ul>

            <li><FaCheckCircle /> Complete Household Work</li>

            <li><FaCheckCircle /> Cooking Assistance</li>

            <li><FaCheckCircle /> Laundry & Ironing</li>

            <li><FaCheckCircle /> Child Care Support</li>

            <li><FaCheckCircle /> Background Verified Staff</li>

            <li><FaCheckCircle /> Quick Replacement</li>

          </ul>

          <a href="#contact">
            Book Consultation
          </a>

        </div>

        {/* Live-In */}

        <div className="pricing-card">

          <div className="pricing-icon">
            <FaUserShield />
          </div>

          <h3>Live-In Maid Service</h3>

          <h1>Premium Care</h1>

          <h2>Tailored Pricing</h2>

          <ul>

            <li><FaCheckCircle /> 24/7 Household Assistance</li>

            <li><FaCheckCircle /> Elder Care Support</li>

            <li><FaCheckCircle /> Baby Care Assistance</li>

            <li><FaCheckCircle /> Cooking & Housekeeping</li>

            <li><FaCheckCircle /> Experienced Professionals</li>

            <li><FaCheckCircle /> Dedicated Customer Support</li>

          </ul>

          <a href="#contact">
            Request Callback
          </a>

        </div>

      </div>

      {/* Bottom Note */}

      <div className="pricing-note">

        <h3>Need a Customized Service Package?</h3>

        <p className="pricing-note-text">
          Every family has different requirements.
          Our pricing depends on the type of service,
          working hours, experience, and location.
          Contact us today for a personalized quotation.
        </p>

        <a href="#contact" className="pricing-note-consultation">
          Request Free Consultation
        </a>

      </div>

    </section>
  );
}

export default Pricing;