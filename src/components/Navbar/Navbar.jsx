import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Shop All", "Tools", "Safety Gear", "Apparel", "Brands", "Clearance"];

  return (
    <nav className="bg-primary text-white relative">
      <div className="px-4 md:px-8 py-3 flex items-center justify-between">
        <div className="hidden md:flex gap-8 font-medium text-sm tracking-wide">
          {links.map((link) => (
            <div key={link} className="group relative cursor-pointer hover:text-accent transition-colors">
              {link}
              {/* Dropdown placeholder */}
              <div className="absolute top-full left-0 mt-3 w-48 bg-white text-gray-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 rounded-md py-2">
                <div className="px-4 py-2 hover:bg-gray-50 hover:text-accent">Subcategory 1</div>
                <div className="px-4 py-2 hover:bg-gray-50 hover:text-accent">Subcategory 2</div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary z-50 border-t border-gray-700">
          {links.map((link) => (
            <div key={link} className="px-4 py-3 border-b border-gray-700 hover:bg-gray-800">
              {link}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}