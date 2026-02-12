import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    budget: string; // Optional කිරීමට 'budget?: string' ලෙසද යෙදිය හැක
    message: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    budget: string;
    message: string;
  }>>;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, setFormData }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Premium Loading Toast
    const loadingToast = toast.loading('Initiating transmission...', {
      style: {
        borderRadius: '12px',
        background: '#1a1a12',
        color: '#fff',
        border: '1px solid #2a2a20',
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      },
    });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 2. Prepare Data (Budget එක හිස් නම් "Not Specified" ලෙස යවමු)
    const emailParams = {
      name: formData.name,
      email: formData.email,
      budget: formData.budget || "Not Specified",
      message: formData.message,
    };

    // 3. EmailJS Send
    emailjs.send(serviceId, templateId, emailParams, publicKey)
      .then(() => {
        // Success Toast with custom styling
        toast.success('Message sent successfully! 🚀', {
          id: loadingToast,
          duration: 5000,
          style: {
            borderRadius: '12px',
            background: '#1a1a12',
            color: '#fff',
            border: '1px solid #ed6a3e',
            fontSize: '14px',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          },
        });
        // Form reset
        setFormData({ name: '', email: '', budget: '', message: '' });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        // Error Toast
        toast.error('Transmission failed. Try again.', {
          id: loadingToast,
          style: {
            borderRadius: '12px',
            background: '#1a1a12',
            color: '#fff',
            border: '1px solid #ff4b4b',
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          },
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <label className="block text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-widest">Name</label>
          <motion.input
            required
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            whileFocus={{ scale: 1.01, borderColor: "#ed6a3e" }}
            className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
          />
        </motion.div>

        {/* Email Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <label className="block text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-widest">Email</label>
          <motion.input
            required
            type="email"
            placeholder="Your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            whileFocus={{ scale: 1.01, borderColor: "#ed6a3e" }}
            className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
          />
        </motion.div>
      </div>

      {/* Budget Input (Optional) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <label className="block text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-widest">
          Budget <span className="text-[10px] lowercase opacity-40">(Optional)</span>
        </label>
        <div className="relative">
          <motion.input
            list="budget-options"
            placeholder="Select range or type amount ( Optional )"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            whileFocus={{ scale: 1.01, borderColor: "#ed6a3e" }}
            className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all appearance-none"
          />
          <datalist id="budget-options">
            <option value="$100 - $500" />
            <option value="$500 - $1,000" />
            <option value="$1,000 - $5,000" />
            <option value="$5,000+" />
          </datalist>
        </div>
      </motion.div>

      {/* Message Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <label className="block text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-widest">Message</label>
        <motion.textarea
          required
          rows={5}
          placeholder="Tell me about your project"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          whileFocus={{ scale: 1.01, borderColor: "#ed6a3e" }}
          className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all resize-none"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: loading ? 1 : 1.02 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
        className={`w-full font-black py-5 rounded-xl transition-all duration-300 uppercase tracking-[0.2em] text-xs shadow-2xl ${
          loading 
            ? 'bg-[#1a1a12] border border-[#2a2a20] text-gray-600 cursor-not-allowed' 
            : 'bg-[#ed6a3e] hover:bg-[#ff7b4f] text-white shadow-[#ed6a3e]/20'
        }`}
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Transmitting...
          </div>
        ) : "Send Message"}
      </motion.button>
    </form>
  );
}

export default ContactForm;