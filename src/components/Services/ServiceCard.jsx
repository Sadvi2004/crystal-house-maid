import "./Services.css";

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={service.image} alt={service.title} />
      </div>

      <div className="service-content">
        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <a
          href="https://wa.me/918884463318"
          target="_blank"
          rel="noreferrer"
          className="service-btn"
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;