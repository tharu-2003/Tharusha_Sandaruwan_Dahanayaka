export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-1 px-4">
      <div className="border-t border-[#2a2a20] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500 tracking-wide">
          © {currentYear} Tharusha Sandaruwan. All rights reserved.
        </p>
        <div className="text-xs text-gray-500 tracking-wide">
          Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}