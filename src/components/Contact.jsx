import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-neutral-400"
        >
          Address: <span className="text-neutral-300">{CONTACT.address}</span>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="text-neutral-400"
        >
          Phone: <span className="text-neutral-300">{CONTACT.phoneNo}</span>
        </motion.p>
        <p className="text-neutral-400">
          Email me at:{" "}
          <span className="text-neutral-300 underline">{CONTACT.email}</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
