import React from 'react';

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
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-widest">Name</label>
          <input
            required
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-widest">Email</label>
          <input
            required
            type="email"
            placeholder="Your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-colors"
          />
        </div>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-widest">
          Budget (Select or Type your own)
        </label>
        <div className="relative">
          <input
            list="budget-options"
            id="budget"
            placeholder="Select range or type amount..."
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-widest">Message</label>
        <textarea
          required
          rows={5}
          placeholder="Tell me about your project"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#ed6a3e] hover:bg-[#d85a2e] text-white font-bold py-4 rounded-xl transition-all duration-300 uppercase tracking-widest"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;