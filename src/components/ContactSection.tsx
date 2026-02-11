import { useState } from "react";
import ContactForm from "./ContactForm";

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
      <div className="mb-16">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase">
          LET&apos;S WORK
        </h2>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#2a2a20] tracking-tight leading-tight uppercase">
          TOGETHER
        </h2>
      </div>

      {/* Passing props to ContactForm */}
      <ContactForm formData={formData} setFormData={setFormData} />
    </section>
  );
}