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
  
  // Local UI State for desktop hover
  const [activeDropdown, setActiveDropdown] = useState(null);
  const mobileMenuRef = useRef();

  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, { x: 0, duration: 0.4, ease: "power3.out" });
      gsap.fromTo(".mobile-link", 
        { x: -20, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: "power2.out", delay: 0.1 }
      );
    } else {
      gsap.to(mobileMenuRef.current, { x: "-100%", duration: 0.3, ease: "power3.in" });
    }
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (id) => {
    setActiveDropdown(id);
    setTimeout(() => {
      gsap.fromTo(`.dropdown-${id}`, 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out", overwrite: true }
      );
    }, 10);
  };

  return (
    <>
      <nav className="hidden md:block bg-primary text-white relative z-50 shadow-md border-t border-gray-800">
        <div className="px-8 py-2 flex items-center justify-center relative z-50">
          <div className="flex gap-10 font-medium text-[15px] tracking-wide items-center">
            {navbarData.map((item) => (
              <div 
                key={item.id} 
                className="group relative py-3 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href={item.link} className="flex items-center gap-1.5 hover:text-accent transition-colors duration-300">
                  {item.title}
                  {item.subitems.length > 0 && (
                    <FiChevronDown className={`mt-0.5 transition-transform duration-300 ${activeDropdown === item.id ? "rotate-180 text-accent" : ""}`} />
                  )}
                </a>
                
                {item.subitems.length > 0 && activeDropdown === item.id && (
                  <div className={`dropdown-${item.id} absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white text-gray-800 shadow-2xl rounded-xl py-3 border-t-4 border-accent overflow-hidden`}>
                    {item.subitems.map((sub, idx) => (
                      <a key={idx} href={sub.link} className="block px-5 py-2.5 text-sm font-medium hover:bg-gray-50 hover:text-accent transition-colors border-b border-gray-50 last:border-0">
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
        <div className="hidden md:block fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
        onClick={() => dispatch(closeMobileMenu())} 
      />
      
      {/* Mobile Drawer */}
      <div 
        ref={mobileMenuRef}
        className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl md:hidden overflow-y-auto -translate-x-full"
      >
        <div className="p-5 border-b flex justify-between items-center bg-primary text-white">
          <span className="font-bold text-xl tracking-tighter">POLARIS<span className="text-accent">.</span></span>
          <button onClick={() => dispatch(closeMobileMenu())} className="hover:text-accent transition-colors">
            <FiX className="w-7 h-7" />
          </button>
        </div>
        
        <div className="flex flex-col py-2">
          {navbarData.map((item) => (
            <div key={item.id} className="mobile-link border-b border-gray-100 last:border-0">
              <a href={item.link} className="block px-6 py-4 font-bold text-gray-800 text-lg hover:text-accent transition-colors">
                {item.title}
              </a>
              {item.subitems.length > 0 && (
                <div className="bg-gray-50/50 px-6 pb-5 flex flex-col gap-4">
                  {item.subitems.map((sub, idx) => (
                    <a key={idx} href={sub.link} className="text-gray-600 text-[15px] font-medium hover:text-accent flex items-center gap-3 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span> {sub.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}