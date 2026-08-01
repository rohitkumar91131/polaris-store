import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  const heroData = useSelector((state) => state.data.hero);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Initial state
      gsap.set(bgRef.current, {
        scale: 1.3,
      });

      gsap.set(overlayRef.current, {
        opacity: 0.7,
      });

      gsap.set(
        [headingRef.current, textRef.current, buttonRef.current],
        {
          opacity: 0,
          y: 40,
        }
      );

      tl.to(bgRef.current, {
        scale: 1,
        duration: 2.5,
      })
        .to(
          overlayRef.current,
          {
            opacity: 0.45,
            duration: 2,
          },
          0
        )
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          0.4
        )
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          0.55
        )
        .fromTo(
          buttonRef.current,
          {
            opacity: 0,
            y: 20,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.5)",
          },
          0.75
        );
    },
    { scope: heroRef }
  );

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 md:py-6">
      <div
        ref={heroRef}
        className="relative h-[320px] sm:h-[380px] md:h-[500px] overflow-hidden rounded-3xl bg-black shadow-xl"
      >
        <img
          ref={bgRef}
          src="/assets/herosection.webp"
          alt="Hero Banner"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />

        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1
            ref={headingRef}
            className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {heroData.heading}
          </h1>

          <p
            ref={textRef}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg"
          >
            {heroData.subtext}
          </p>

          <a
            ref={buttonRef}
            href={heroData.buttonLink}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-white md:px-10 md:py-3.5 md:text-base"
          >
            {heroData.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}