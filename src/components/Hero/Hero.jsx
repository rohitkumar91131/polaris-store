import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef();

  const heroData = useSelector((state) => state.data.hero);

  useGSAP(() => {
    gsap.from(".hero-bg", {
      scale: 1.05,
      duration: 2.5,
      ease: "power2.out",
    });

    gsap.from(".hero-content > *", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2,
    });
  }, { scope: heroRef });

  return (
    <section className="px-4 md:px-8 py-4 md:py-6 max-w-[1440px] mx-auto">
      <div
        ref={heroRef}
        className="relative w-full h-[320px] sm:h-[380px] md:h-[500px] rounded-3xl overflow-hidden flex items-center justify-center bg-gray-900 shadow-lg"
      >
        {/* Background */}
        <img
          src={heroData.backgroundImage}
          alt="Hero Banner"
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="hero-content relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            {heroData.heading}
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-xl text-white/90 max-w-xl leading-relaxed">
            {heroData.subtext}
          </p>

          <a
            href={heroData.buttonLink}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 md:px-10 md:py-3.5 text-sm md:text-base font-semibold text-primary shadow-xl transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105"
          >
            {heroData.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}