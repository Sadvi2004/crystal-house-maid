import "./Loader.css";
import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="loader">

      <motion.img
        src="/images/logo.png"
        alt="Crystal House Maid Service"
        className="loader-logo"
        initial={{
          scale: 0,
          opacity: 0,
          rotate: -180,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />

      <motion.h1
        className="loader-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
        }}
      >
        Crystal House Maid Service
      </motion.h1>

      <motion.p
        className="loader-tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
      >
        Trusted. Trained. Top Quality.
      </motion.p>

    </div>
  );
}

export default Loader;