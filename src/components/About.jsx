import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DecryptedText from './DecryptedText';
import ProfileCard from './ProfileCard';
import MeImg from '../assets/Me.png';

gsap.registerPlugin(ScrollTrigger);

const funnyQuotes = [
  "I don’t always test my code, but when I do, I do it in production.",
  "To err is human, to debug is divine.",
  "There are 10 types of people: those who understand binary and those who don’t.",
  "It works on my machine!",
  "I’m not lazy, I’m just on energy-saving mode.",
  "Why do Java developers wear glasses? Because they don’t see sharp.",
  "Real programmers count from 0.",
  "I would love to change the world, but they won’t give me the source code.",
  "Semicolons; the difference between knowing your stuff and knowing you’re stuff.",
  "First, solve the problem. Then, write the code.",
];

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    gsap.fromTo(content.children, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const randomQuote = useMemo(() => {
    return funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];
  }, []);

  return (
    <section ref={sectionRef} className="py-10 px-2 sm:py-14 sm:px-4 md:py-20 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left side - ProfileCard effect */}
          <div className="relative flex justify-center mb-8 md:mb-0">
            <div className="max-w-[220px] w-full sm:max-w-xs md:max-w-sm">
              <ProfileCard
                name="Srikar Mandava"
                handle="srikar"
                status="Online"
                contactText="Contact Me"
                avatarUrl={MeImg}
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => window.location.href = 'mailto:msaisrikar333@gmail.com'}
              />
            </div>
          </div>
          {/* Right side - Content */}
          <div className="space-y-4 sm:space-y-6 max-w-xl mx-auto md:mx-0">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 flex flex-wrap items-center gap-2">
                Hi, I'm{' '}
              </h2>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
                <DecryptedText
                  text="Srikar"
                  speed={80}
                  maxIterations={15}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                  className="text-green-400"
                  parentClassName="inline-block"
                  encryptedClassName="text-gray-400"
                  revealDirection="left"
                />
                .
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Creative coder. Frontend enthusiast. I love building beautiful, fast, and user-friendly web experiences.
              </p>
              <p>
                Always learning, always curious. Turning ideas into reality with code and design.
              </p>
              <p>
                Completed my degree at SRM University. Passionate about UI, teamwork, and making a difference through technology.
              </p>
              <p className="flex items-center gap-2">
                Fun fact: I can debug with a smile (and lots of coffee)!
                {/* Coffee SVG Icon at the end */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 19C17 20.1046 15.1046 21 13 21H11C8.89543 21 7 20.1046 7 19" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 11V13C21 16.3137 17.4183 19 13 19C8.58172 19 5 16.3137 5 13V11H21Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 7V5C8 3.89543 9.34315 3 11 3C12.6569 3 14 3.89543 14 5V7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </p>
              <p>
                Let’s make something awesome together!
              </p>
            </div>
            {/* Modern Contact Section with Icons */}
            <div className="pt-6 sm:pt-8 flex flex-col gap-3 sm:gap-4 items-start">
              <p className="text-green-400 font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Get in touch</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
                <a href="mailto:msaisrikar333@gmail.com" className="flex items-center gap-3 group hover:scale-110 transition-transform" title="Email">
                  {/* Email SVG */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path fill="#10b981" d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 01-1.42 0L4 6.41V20h16V6.41z"/>
                  </svg>
                  <span className="text-gray-200 text-base sm:text-lg group-hover:text-green-400 transition-colors select-all">msaisrikar333@gmail.com</span>
                </a>
                <a href="tel:+919491966101" className="flex items-center gap-3 group hover:scale-110 transition-transform" title="Call">
                  {/* Phone SVG */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path fill="#10b981" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
                  </svg>
                  <span className="text-gray-200 text-base sm:text-lg group-hover:text-green-400 transition-colors select-all">+91 9491966101</span>
                </a>
              </div>
            </div>
            {/* Fun code quote */}
            <div className="pt-3 sm:pt-4 text-xs sm:text-sm text-gray-400 italic">
              <p>"{randomQuote}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

