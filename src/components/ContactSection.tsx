import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-1 px-4">
      {/* Title */}
      <div className="mb-16">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
          LET&apos;S WORK
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2a2a20] tracking-tight leading-tight">
          TOGETHER
        </h2>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs sm:text-sm text-gray-500 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm text-gray-500 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-colors"
            />
          </div>
        </div>

        {/* Budget */}
        <div>
          <label
            htmlFor="budget"
            className="block text-xs sm:text-sm text-gray-500 mb-2"
          >
            Budget
          </label>
          <div className="relative">
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-gray-400 focus:outline-none focus:border-[#ed6a3e] transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select...</option>
              <option value="1000-5000">$1,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000-25000">$10,000 - $25,000</option>
              <option value="25000+">$25,000+</option>
            </select>
            {/* Dropdown Arrow */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs sm:text-sm text-gray-500 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#ed6a3e] hover:bg-[#d85a2e] text-white font-semibold py-4 rounded-xl transition-colors duration-200 text-base sm:text-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
}