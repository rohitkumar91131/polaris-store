import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef();
  const bgRef = useRef();
  const contentRef = useRef();

  const [loaded, setLoaded] = useState(false);

  const heroData = useSelector((state) => state.data.hero);

  useGSAP(
    () => {
      if (!loaded) return;

      const tl = gsap.timeline();

      tl.from(bgRef.current, {
        scale: 1.15,
        duration: 2,
        ease: "power3.out",
      });

      tl.from(
        contentRef.current.children,
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=1.5"
      );
    },
    {
      scope: heroRef,
      dependencies: [loaded],
      revertOnUpdate: true,
    }
  );

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 md:py-6">
      <div
        ref={heroRef}
        className="relative h-[320px] sm:h-[380px] md:h-[500px] overflow-hidden rounded-3xl bg-gray-900 shadow-xl"
      >
        {/* Background */}
        <img
          ref={bgRef}
          src={heroData?.backgroundImage}
          alt="Hero Banner"
          onLoad={() => setLoaded(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div
          ref={contentRef}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {heroData?.heading}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
            {heroData?.subtext}
          </p>

          <a
            href={heroData?.buttonLink}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-white md:px-10 md:py-3.5 md:text-base"
          >
            {heroData?.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}