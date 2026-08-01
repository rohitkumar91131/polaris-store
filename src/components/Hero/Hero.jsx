import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef();
  
  // Pulling Hero data dynamically from Redux store
  const heroData = useSelector((state) => state.data.hero);

  useGSAP(() => {
    // Subtle background image zoom effect on load
    gsap.from(".hero-bg", {
      scale: 1.05,
      duration: 2.5,
      ease: "power2.out"
    });

    // Staggered text and button reveal from the bottom
    gsap.from(".hero-content > *", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2
    });
  }, { scope: heroRef });

  return (
    // Added a container wrapper with padding and max-width to match the screenshot
    <section className="px-4 md:px-8 py-6 max-w-[1440px] mx-auto">
      <div 
        ref={heroRef} 
        className="relative w-full h-[50vh] md:h-[500px] rounded-xl flex items-center justify-center bg-gray-900 overflow-hidden shadow-sm"
      >
        <img 
          src={heroData.backgroundImage} 
          alt="Hero Banner" 
          className="hero-bg absolute inset-0 w-full h-full object-cover opacity-60"
        />
        
        {/* Centered text and button layout */}
        <div className="hero-content relative z-10 px-6 max-w-4xl text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            {heroData.heading}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 font-medium drop-shadow-md">
            {heroData.subtext}
          </p>
          
          <a 
            href={heroData.buttonLink} 
            className="inline-block bg-white text-primary px-10 py-3.5 rounded-full font-bold hover:bg-accent hover:text-white transition-colors shadow-lg"
          >
            {heroData.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}