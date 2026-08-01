import { useState, useRef } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector, useDispatch } from "react-redux";
import { closeMobileMenu } from "../../store/slices/uiSlice";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const dispatch = useDispatch();
  
  // Redux Global State
  const navbarData = useSelector((state) => state.data.navbar);
  const isMobileMenuOpen = useSelector((state) => state.ui.isMobileMenuOpen);
  
  // Local UI State
  const [activeDropdown, setActiveDropdown] = useState(null); // For Desktop hover
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null); // For Mobile accordion
  const mobileMenuRef = useRef();

  // GSAP Animations
  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, { x: 0, duration: 0.4, ease: "power3.out" });
      gsap.fromTo(".mobile-link", 
        { x: -20, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: "power2.out", delay: 0.1 }
      );
    } else {
      gsap.to(mobileMenuRef.current, { x: "-100%", duration: 0.3, ease: "power3.in" });
      // Close the accordion when drawer closes so it's fresh next time
      setTimeout(() => setExpandedMobileMenu(null), 300);
    }
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (id) => {
    setActiveDropdown(id);
    setTimeout(() => {
      gsap.fromTo(`.dropdown-${id}`, 
        { opacity: 0, y: 10 }, 
        { opacity: 1, y: 0, duration: 0.2, ease: "power2.out", overwrite: true }
      );
    }, 10);
  };

  // Toggle mobile accordion
  const toggleMobileAccordion = (id) => {
    setExpandedMobileMenu(expandedMobileMenu === id ? null : id);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block bg-gray-900 text-white relative z-50">
        <div className="px-4 py-0 flex items-center justify-center relative z-50 max-w-[1440px] mx-auto">
          <div className="flex flex-wrap justify-center gap-x-7 lg:gap-x-10 font-medium text-[13px] tracking-wide items-center w-full">
            {navbarData.map((item) => (
              <div 
                key={item.id} 
                className="group relative py-3.5 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href={item.link} className="flex items-center gap-1.5 hover:text-gray-300 transition-colors duration-300">
                  {item.title}
                  {item.subitems.length > 0 && (
                    <FiChevronDown className={`mt-0.5 w-3.5 h-3.5 text-gray-400 transition-all duration-300 ${activeDropdown === item.id ? "rotate-180 text-white" : ""}`} />
                  )}
                </a>
                
                {/* Desktop Hover Dropdown */}
                {item.subitems.length > 0 && activeDropdown === item.id && (
                  <div className={`dropdown-${item.id} absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-white text-gray-800 shadow-xl py-2 border-t-2 border-gray-900 overflow-hidden`}>
                    {item.subitems.map((sub, idx) => (
                      <a key={idx} href={sub.link} className="block px-5 py-2.5 text-[13px] font-medium hover:bg-gray-100 hover:text-black transition-colors">
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop Overlay */}
      {activeDropdown && navbarData.find(i => i.id === activeDropdown)?.subitems.length > 0 && (
        <div className="hidden md:block fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
        onClick={() => dispatch(closeMobileMenu())} 
      />
      
      {/* Mobile Drawer */}
      <div 
        ref={mobileMenuRef}
        className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl md:hidden overflow-y-auto -translate-x-full"
      >
        {/* IMPROVED: Clean white header with the actual image logo */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10 shadow-sm">
          <img 
            src="/assets/images/logo.webp" 
            alt="Polaris Global Store Logo" 
            className="h-7 object-contain"
          />
          <button 
            onClick={() => dispatch(closeMobileMenu())} 
            className="bg-gray-50 text-gray-500 hover:bg-accent hover:text-white transition-colors p-2 rounded-full"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex flex-col py-2">
          {navbarData.map((item) => (
            <div key={item.id} className="mobile-link border-b border-gray-50 last:border-0">
              
              {/* IMPROVED: Interactive Accordion Header */}
              <div 
                className="flex items-center justify-between px-6 py-4 cursor-pointer"
                onClick={() => item.subitems.length > 0 ? toggleMobileAccordion(item.id) : (window.location.href = item.link)}
              >
                <span className="font-bold text-gray-800 text-lg hover:text-accent transition-colors">
                  {item.title}
                </span>
                {item.subitems.length > 0 && (
                  <FiChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedMobileMenu === item.id ? "rotate-180 text-accent" : ""}`} />
                )}
              </div>

              {/* IMPROVED: Smooth sliding accordion body for subitems */}
              {item.subitems.length > 0 && (
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMobileMenu === item.id ? "max-h-96 opacity-100 mb-2" : "max-h-0 opacity-0"}`}
                >
                  <div className="bg-gray-50/80 mx-4 rounded-lg p-4 flex flex-col gap-4 border border-gray-100">
                    {item.subitems.map((sub, idx) => (
                      <a key={idx} href={sub.link} className="text-gray-600 text-[15px] font-medium hover:text-accent flex items-center gap-3 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span> {sub.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </>
  );
}