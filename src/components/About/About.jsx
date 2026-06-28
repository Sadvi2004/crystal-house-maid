import "./About.css";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaShieldAlt
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <motion.div
          className="about-image"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/about.jpg"
            alt="Crystal House Maid Service"
          />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            About Us
          </span>

          <h2>
            Trusted Domestic Staffing Services
            in Bengaluru
          </h2>

          <p className="about-text">
            Crystal House Maid Service has been
            serving families across Bengaluru for
            more than <strong>4 years</strong>.
            We provide trained, verified and
            experienced domestic staff to ensure
            your family receives reliable,
            professional and quality service.
          </p>

          <div className="about-box">

            <div>

              <FaAward />

              <h3>Our Vision</h3>

              <p>
                To become Bengaluru's most trusted
                and preferred domestic staffing
                company by delivering reliable,
                professional and quality home
                services.
              </p>

            </div>

            <div>

              <FaShieldAlt />

              <h3>Our Mission</h3>

              <p>
                To provide trained, verified and
                experienced domestic staff while
                ensuring customer satisfaction,
                safety and dependable service.
              </p>

            </div>

          </div>

          <div className="values">

            <div>
              <FaCheckCircle />
              Trust
            </div>

            <div>
              <FaCheckCircle />
              Professionalism
            </div>

            <div>
              <FaCheckCircle />
              Quality
            </div>

            <div>
              <FaCheckCircle />
              Reliability
            </div>

            <div>
              <FaCheckCircle />
              Transparency
            </div>

            <div>
              <FaCheckCircle />
              Customer Satisfaction
            </div>

          </div>

          <div className="stats">

            <div>

              <FaUsers />

              <h3>1000+</h3>

              <p>Happy Customers</p>

            </div>

            <div>

              <FaAward />

              <h3>4+</h3>

              <p>Years Experience</p>

            </div>

            <div>

              <FaShieldAlt />

              <h3>100%</h3>

              <p>Verified Staff</p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;