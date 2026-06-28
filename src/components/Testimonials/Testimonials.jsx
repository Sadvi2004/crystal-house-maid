import "./Testimonials.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Shweta R.",
    location: "Rajarajeshwari Nagar, Bengaluru",
    image: "/images/customer1.jpg",
    review:
      "Crystal House Maid Service provided us with a professional and trustworthy housemaid. She is punctual, polite, and takes excellent care of our home. Highly recommended!",
  },
  {
    name: "Ramesh K.",
    location: "Kengeri, Bengaluru",
    image: "/images/customer2.jpg",
    review:
      "Excellent service! We hired a patient caregiver for my father. The caregiver is kind, experienced, and very supportive. The team responded quickly whenever we needed assistance.",
  },
  {
    name: "Deepa S.",
    location: "Nagarbhavi, Bengaluru",
    image: "/images/customer3.jpg",
    review:
      "We booked a nanny through Crystal House Maid Service, and the experience has been wonderful. The caregiver is caring, responsible, and our family is very satisfied.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonial-heading">
        <span>Testimonials</span>

        <h2>What Our Customers Say</h2>

        <p>
          Trusted by hundreds of happy families across Bengaluru.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <FaQuoteLeft className="quote-icon" />

            <img
              src={item.image}
              alt={item.name}
              className="customer-image"
            />

            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="review">{item.review}</p>

            <h3>{item.name}</h3>

            <span>{item.location}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;