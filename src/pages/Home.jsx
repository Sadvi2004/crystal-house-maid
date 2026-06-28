import { useEffect, useState } from "react";

import Loader from "../components/Loader/Loader";
import "./Home.css";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Pricing from "../components/Pricing/Pricing";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Process from "../components/Process/Process";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Careers from "../components/careers/Careers";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp/FloatingWhatsApp";
import FloatingCall from "../components/FloatingCall/FloatingCall";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Pricing />

      <WhyChoose />

      <Process />

      <Testimonials />

      <FAQ />

      <Careers />

      <Contact />

      <Footer />

      <FloatingWhatsApp />

      <FloatingCall />
    </>
  );
}

export default Home;