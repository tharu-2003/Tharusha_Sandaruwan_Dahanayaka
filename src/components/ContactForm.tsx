import React from 'react';
import { motion } from 'framer-motion';

// TypeScript interface එකක් මඟින් props වල වර්ගය (Type) නිර්වචනය කිරීම
interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    budget: string;
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        // මෙතනට ඔයාගේ submission logic එක (EmailJS වගේ) දාන්න පුළුවන්
    };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
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
            whileFocus={{ scale: 1.02, borderColor: "#ed6a3e" }}
            transition={{ duration: 0.2 }}
            className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-colors"
          />
        </motion.div>

        {/* Email */}
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
            whileFocus={{ scale: 1.02, borderColor: "#ed6a3e" }}
            transition={{ duration: 0.2 }}
            className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-colors"
          />
        </motion.div>
      </div>

      {/* Budget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <label className="block text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-widest">
          Budget (Select or Type your own)
        </label>
        <div className="relative">
          <motion.input
            list="budget-options"
            id="budget"
            placeholder="Select range or type amount..."
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            whileFocus={{ scale: 1.02, borderColor: "#ed6a3e" }}
            transition={{ duration: 0.2 }}
            className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-colors appearance-none"
          />
          <datalist id="budget-options">
            <option value="$100 - $500" />
            <option value="$500 - $1,000" />
            <option value="$1,000 - $5,000" />
            <option value="$5,000 - $10,000" />
            <option value="$10,000+" />
          </datalist>
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Message */}
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
          whileFocus={{ scale: 1.02, borderColor: "#ed6a3e" }}
          transition={{ duration: 0.2 }}
          className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-colors resize-none"
        />
      </motion.div>

      <motion.button
        type="submit"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[#ed6a3e] hover:bg-[#d85a2e] text-white font-bold py-4 rounded-xl transition-all duration-300 uppercase tracking-widest"
      >
        Send Message
      </motion.button>
    </form>
  );
}

export default ContactForm;