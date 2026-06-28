import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FAQ.css";

const faqData = [
  {
    question: "Are your maids background verified?",
    answer:
      "Yes. Every maid, nanny, cook and caregiver is verified before being assigned to a customer.",
  },
  {
    question: "Do you provide part-time and full-time maids?",
    answer:
      "Yes. We provide part-time, full-time and live-in domestic staff depending on your requirement.",
  },
  {
    question: "What if I don't like the assigned staff?",
    answer:
      "We provide quick replacement support to ensure complete customer satisfaction.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve all major locations across Bengaluru including Kengeri, RR Nagar, Nagarbhavi, Mysore Road and surrounding areas.",
  },
  {
    question: "How can I book your service?",
    answer:
      "Simply call us, send a WhatsApp message or fill out the enquiry form on our website.",
  },
  {
    question: "Do you provide patient care services?",
    answer:
      "Yes. We provide experienced patient care and elder care professionals for home assistance.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq" id="faq">

      <div className="faq-heading">
        <span>FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <p>
          Everything you need to know about Crystal House Maid Service.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() => toggle(index)}
            >
              {item.question}

              {active === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>

            {active === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}

          </div>
        ))}
      </div>

    </section>
  );
}

export default FAQ;