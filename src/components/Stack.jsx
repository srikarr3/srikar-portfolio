import React, { useState, useEffect } from 'react';
import { SiReact, SiNextdotjs, SiVercel, SiTailwindcss, SiNodedotjs, SiTypescript, SiPython, SiJavascript, SiRedux, SiHtml5, SiCss3, SiMongodb, SiMysql, SiGit, SiGithub, SiFirebase } from 'react-icons/si';
import { FaArrowUp } from 'react-icons/fa';

const stack = [
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'React.js', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
  { name: 'Git', icon: <SiGit className="text-orange-400" /> },
  { name: 'GitHub', icon: <SiGithub className="text-white" /> },
  { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
  { name: 'Java', icon: <span className="text-gray-800 text-3xl font-bold">J</span> },
  { name: 'C++', icon: <span className="text-gray-800 text-3xl font-bold">C++</span> },
  { name: 'Flask', icon: <span className="text-gray-800 text-3xl font-bold">F</span> },
  { name: 'Bash', icon: <span className="text-gray-800 text-3xl font-bold">B</span> },
];

export default function Stack() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-green-400">Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
          {stack.map(({ name, icon }) => (
            <div key={name} className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 shadow-md transition-all duration-200 text-4xl">
                {icon}
              </div>
              <span className="mt-2 text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Scroll to top button */}
      {showScroll && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-green-400 hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition-all duration-200 border border-green-400 flex items-center justify-center"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </section>
  );
}

