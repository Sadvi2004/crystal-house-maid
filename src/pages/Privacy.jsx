import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Privacy() {
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
          Privacy Policy
        </h1>

        <p>
          At Crystal House Maid Service, we value your privacy and are
          committed to protecting your personal information.
        </p>

        <br />

        <h2>Information We Collect</h2>

        <ul>
          <li>Name</li>
          <li>Phone Number</li>
          <li>Email Address</li>
          <li>Address</li>
          <li>Service Requirements</li>
        </ul>

        <br />

        <h2>How We Use Your Information</h2>

        <ul>
          <li>To provide our services.</li>
          <li>To contact you regarding enquiries.</li>
          <li>To improve customer experience.</li>
          <li>To send service updates.</li>
        </ul>

        <br />

        <h2>Data Security</h2>

        <p>
          We take appropriate measures to safeguard your personal information
          and prevent unauthorized access.
        </p>

        <br />

        <h2>Third Party Sharing</h2>

        <p>
          We do not sell or share your personal information with third parties
          except where required to provide our services or by law.
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

export default Privacy;