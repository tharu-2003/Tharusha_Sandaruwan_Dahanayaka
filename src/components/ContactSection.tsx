import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { Toaster } from "react-hot-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  return (
    <section id="contact" className="py-1 px-4">
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase"
        >
          LET&apos;S WORK
        </motion.h2>
        <motion.h2 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#2a2a20] tracking-tight leading-tight uppercase"
        >
          TOGETHER
        </motion.h2>
      </motion.div>

      {/* Passing props to ContactForm */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <ContactForm formData={formData} setFormData={setFormData} />
      </motion.div>
    </section>
  );
}