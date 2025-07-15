import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, Mail } from 'lucide-react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'stack', label: 'Stack', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <>
      {/* Mobile Menu Button - Fixed position */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 md:hidden bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-colors"
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle mobile menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-800 z-40 md:hidden overflow-y-auto"
            >
              <div className="p-6 pt-20">
                {/* Profile Section */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">Srikar Mandava</h3>
                  <p className="text-gray-400 text-sm">Frontend Developer</p>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.id;
                    
                    return (
                      <motion.button
                        key={item.id}
                        custom={index}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-200 ${
                          isActive 
                            ? 'bg-green-600 text-white shadow-lg' 
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <IconComponent size={20} />
                        <span className="font-medium">{item.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="ml-auto w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Mail size={16} />
                      <span>msaisrikar333@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <span className="w-4 h-4 flex items-center justify-center">📱</span>
                      <span>+91 9491966101</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <span className="text-white text-sm font-bold">in</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label="GitHub"
                  >
                    <span className="text-white text-sm font-bold">gh</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;

