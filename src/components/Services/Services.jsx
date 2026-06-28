import "./Services.css";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "House Maid Service",
    image: "/images/maid.jpg",
    description:
      "Verified and experienced housemaids for cleaning, washing, utensil cleaning, dusting, mopping and complete household work.",
  },

  {
    title: "Baby Care / Nanny",
    image: "/images/nanny.jpg",
    description:
      "Professional caregivers for newborns, infants and children with complete responsibility and care.",
  },

  {
    title: "Japa Maid",
    image: "/images/japa.jpg",
    description:
      "Experienced post-delivery caretakers providing support for both mother and baby.",
  },

  {
    title: "Cook Service",
    image: "/images/cook.jpg",
    description:
      "South Indian, North Indian and customized home-style cooking by experienced cooks.",
  },

  {
    title: "Patient / Elder Care",
    image: "/images/patient.jpg",
    description:
      "Compassionate caregivers providing mobility assistance, medication reminders and companionship.",
  },

  {
    title: "Housekeeping Staff",
    image: "/images/housekeeping.jpg",
    description:
      "Professional housekeeping staff for homes, apartments, offices and commercial establishments.",
  },
];

function Services() {
  return (
    <section className="services" id="services">

      <div className="section-title">

        <span>Our Services</span>

        <h2>
          Professional Domestic Staffing Services
        </h2>

        <p>
          We provide reliable, trained and verified
          domestic staff across Bengaluru.
        </p>

      </div>

      <motion.div
        className="services-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
          />
        ))}

      </motion.div>

    </section>
  );
}

export default Services;