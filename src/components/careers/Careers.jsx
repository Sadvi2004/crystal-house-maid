import "./Careers.css";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaBriefcase,
  FaFileUpload,
} from "react-icons/fa";

function Careers() {
  return (
    <section className="careers" id="careers">

      <div className="careers-heading">

        <span>Join Our Team</span>

        <h2>Build Your Career With Us</h2>

        <p>
          We are always looking for experienced and dedicated domestic staff.
          Submit your profile and our recruitment team will contact you.
        </p>

      </div>

      <div className="career-container">

        {/* Left */}

        <div className="career-info">

          <h3>Why Join Crystal House Maid Service?</h3>

          <ul>
            <li>✔ Attractive Salary Packages</li>
            <li>✔ Flexible Working Hours</li>
            <li>✔ Safe Working Environment</li>
            <li>✔ Verified Employers</li>
            <li>✔ Long-Term Career Opportunities</li>
            <li>✔ Friendly Support Team</li>
          </ul>

          <img
            src="/images/career.jpg"
            alt="Careers"
          />

        </div>

        {/* Right */}

        <div className="career-form">
          <form>
            <div className="input-box">
              <FaUser />
              <input
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div className="input-box">
              <FaPhoneAlt />
              <input
                type="tel"
                placeholder="Phone Number"
              />
            </div>

            <div className="input-box">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email Address"
              />
            </div>

            <div className="input-box">
              <FaBriefcase />
              <select>

                <option>Select Position</option>

                <option>House Maid</option>

                <option>Cook</option>

                <option>Baby Care</option>

                <option>Patient Care</option>

                <option>Housekeeping Staff</option>

              </select>
            </div>

            <div className="input-box">
              <input
                type="number"
                placeholder="Years of Experience"
              />
            </div>

            <div className="upload">

              <FaFileUpload />

              <input type="file" />

            </div>

            <textarea
              rows="5"
              placeholder="Tell us about yourself..."
            ></textarea>

            <button>
              Submit Profile
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Careers;