import React, { useState } from 'react';
import MeImg from '../assets/Me.png';

const socials = [
  { name: 'GitHub', url: 'https://github.com/saisrikar333', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#181818"/><path d="M12 17.27c-3.31 0-6-2.69-6-6 0-2.21 1.2-4.15 3.09-5.19.23-.04.31.1.31.22v.87c-1.26-.27-1.53.61-1.53.61-.21.54-.51.68-.51.68-.42.29.03.28.03.28.46-.03.7.45.7.45.41.7 1.08.5 1.34.38.04-.3.16-.5.29-.61-1.01-.12-2.07-.5-2.07-2.22 0-.49.18-.89.47-1.2-.05-.12-.2-.6.04-1.25 0 0 .38-.12 1.25.46.36-.1.75-.15 1.13-.15.38 0 .77.05 1.13.15.87-.58 1.25-.46 1.25-.46.24.65.09 1.13.04 1.25.29.31.47.71.47 1.2 0 1.72-1.06 2.1-2.07 2.22.16.14.31.41.31.83v1.23c0 .12.08.26.31.22C16.8 15.12 18 13.18 18 11c0-3.31-2.69-6-6-6Z" fill="#10b981"/></svg>
  ) },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/saisrikar333', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#181818"/><path d="M8.5 10.5v5m0 0v-5m0 5h-1.5v-5H8.5v5Zm3.5 0v-2.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5V15.5m-3 0h3m0 0v-2.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5V15.5Z" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
  { name: 'LeetCode', url: 'https://leetcode.com/saisrikar333', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 50 50"><g><path d="M36.7 34.6c-.6 0-1.1-.2-1.5-.6l-7.7-7.7c-.8-.8-.8-2.1 0-2.9l7.7-7.7c.8-.8 2.1-.8 2.9 0s.8 2.1 0 2.9l-6.2 6.2 6.2 6.2c.8.8.8 2.1 0 2.9-.4.4-.9.7-1.4.7z" fill="#10b981"/><path d="M25 48.2c-6.2 0-12.1-2.4-16.5-6.8C4.1 37 1.7 31.1 1.7 25S4.1 13 8.5 8.6C12.9 4.2 18.8 1.8 25 1.8c4.2 0 8.3 1 12 2.9 1 .5 1.4 1.7.9 2.7-.5 1-1.7 1.4-2.7.9-3.1-1.6-6.6-2.5-10.2-2.5-11.1 0-20.1 9-20.1 20.1s9 20.1 20.1 20.1c3.6 0 7.1-.9 10.2-2.5 1-.5 2.2-.1 2.7.9.5 1 .1 2.2-.9 2.7-3.7 1.9-7.8 2.9-12 2.9z" fill="#10b981"/></g></svg>
  ) },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-white/5 shadow-2xl flex flex-col md:flex-row">
        {/* Left: Avatar, socials, pattern */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-400/10 via-blue-500/10 to-purple-600/10 p-8 md:w-1/2 relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
              <circle cx="160" cy="160" r="120" stroke="#10b981" strokeWidth="1.5" />
              <circle cx="160" cy="160" r="80" stroke="#10b981" strokeWidth="1.5" />
              <circle cx="160" cy="160" r="40" stroke="#10b981" strokeWidth="1.5" />
            </svg>
          </div>
          {/* Avatar */}
          <img src={MeImg} alt="Srikar Mandava" className="w-32 h-32 rounded-full border-4 border-green-400 shadow-lg z-10 mb-6 bg-white object-cover" />
          {/* Socials */}
          <div className="flex gap-6 z-10 mb-6">
            {socials.map(({ name, url, icon }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" title={name} className="hover:scale-110 transition-transform">
                {icon}
              </a>
                ))}
              </div>
          <div className="text-center z-10">
            <h3 className="text-xl font-bold text-green-400 mb-2">Srikar Mandava</h3>
            <p className="text-gray-200 text-sm">Frontend Developer & Problem Solver</p>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="flex-1 flex flex-col justify-center p-8 bg-white/10">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Get in Touch</h2>
          {submitted ? (
            <div className="text-green-400 text-lg font-semibold py-12 text-center">Thank you for reaching out! I'll get back to you soon.</div>
          ) : (
            <form 
              action="https://formspree.io/f/xkgzngze" 
              method="POST" 
              className="space-y-6"
              onSubmit={() => setSubmitted(true)}
            >
              <div className="flex gap-4">
                <input type="text" name="name" placeholder="Name" required className="flex-1 rounded-lg px-4 py-3 bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400" />
                <input type="email" name="email" placeholder="Email" required className="flex-1 rounded-lg px-4 py-3 bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400" />
            </div>
              <textarea name="message" placeholder="Your message..." rows={5} required className="w-full rounded-lg px-4 py-3 bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400" />
              <button type="submit" className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-3 rounded-lg transition-colors">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

