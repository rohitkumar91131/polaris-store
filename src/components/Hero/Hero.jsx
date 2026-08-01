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
      scale: 1.1,
      duration: 2.5,
      ease: "power2.out"
    });

    // Staggered text and button reveal
    gsap.from(".hero-content > *", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.2
    });
  }, { scope: heroRef });

  return (
    <div ref={heroRef} className="relative w-full h-[70vh] flex items-center bg-gray-900 overflow-hidden">
      <img 
        src={heroData.backgroundImage} 
        alt="Hero Banner" 
        className="hero-bg absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="hero-content relative z-10 px-4 md:px-16 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          {heroData.heading}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
          {heroData.subtext}
        </p>
        <a 
          href={heroData.buttonLink} 
          className="inline-block bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-transform transform hover:-translate-y-1 shadow-lg"
        >
          {heroData.buttonText}
        </a>
      </div>
    </div>
  );
}