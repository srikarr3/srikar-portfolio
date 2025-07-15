import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = nameRef.current;
    const title = titleRef.current;
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      content,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, delay: 0.2 }
    );
    gsap.fromTo(
      title,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      {/* Main content */}
      <div className="relative z-10 text-center px-4 w-full">
        {/* Green "DEV" text */}
        <div className="mb-8">
          <span className="text-green-400 text-2xl md:text-4xl font-bold tracking-wider">
            DEV
          </span>
        </div>
        {/* Large name display */}
        <div ref={nameRef} className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none">
            <span className="block">SRIKAR</span>
            <span className="block">MANDAVA</span>
          </h1>
        </div>
        {/* Subtitle */}
        <div ref={titleRef}>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Turning caffeine and code into digital magic.
          </p>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

