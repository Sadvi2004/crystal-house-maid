import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Terms() {
  return (
    <>
      <Navbar />

      <section
        style={{
          padding: "120px 10%",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            color: "#0F4C81",
            marginBottom: "30px",
            fontSize: "42px",
          }}
        >
          Terms & Conditions
        </h1>

        <h2>Service Agreement</h2>

        <p>
          By using our services, you agree to the following terms and
          conditions.
        </p>

        <br />

        <h2>Booking</h2>

        <p>
          Customers must provide accurate information while booking our
          services.
        </p>

        <br />

        <h2>Payments</h2>

        <p>
          Payments must be made as agreed before or after service based on the
          service agreement.
        </p>

        <br />

        <h2>Replacement Policy</h2>

        <p>
          Replacement support is available according to our company policy and
          service agreement.
        </p>

        <br />

        <h2>Liability</h2>

        <p>
          Crystal House Maid Service strives to provide verified and trained
          staff. However, customers are requested to cooperate with our
          verification process and company policies.
        </p>

        <br />

        <h2>Changes</h2>

        <p>
          We reserve the right to modify these terms at any time without prior
          notice.
        </p>

        <br />

        <h2>Contact</h2>

        <p>
          Crystal House Maid Service
          <br />
          Bengaluru, Karnataka
          <br />
          Phone: +91 88844 63318
          <br />
          Email: info@crystalhousemaid.in
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Terms;