import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import PokeAPIImg from '../assets/PokeAPI.png';
import MemoryImg from '../assets/Memory.png';
import ChatBotImg from '../assets/ChatBot.jpeg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Feature-Rich Pokédex Web App",
    description: "A playful, advanced Pokédex with team building, battle simulation, and achievement tracking. Blazing fast, mobile-friendly, and packed with animations.",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "PokeAPI", "Vercel"],
    liveLink: "https://poke-dex-inky-gamma.vercel.app/",
    githubLink: "https://github.com/srikarr3/PokeDex",
    previewType: "image",
    previewUrl: PokeAPIImg,
  },
  {
    title: "Interactive Memory Game App",
    description: "A modern memory card game with real-time leaderboards, authentication, and smooth animations. Play, compete, and climb the ranks!",
    technologies: ["React.js", "CSS3", "Firebase", "Vercel"],
    liveLink: "https://memory-game-psi-plum.vercel.app/welcome",
    githubLink: "https://github.com/srikarr3/memory-game",
    previewType: "image",
    previewUrl: MemoryImg,
  },
  {
    title: "SRM University AP Chatbot",
    description: "A smart, locally-hosted chatbot for university info, powered by LLaMA and vector search. Fast, accurate answers with data verification.",
    technologies: ["Python", "HuggingFace", "LLaMA", "FAISS", "Web Scraping"],
    liveLink: null,
    githubLink: "https://github.com/srikarr3/University_ChatBot",
    previewType: "image",
    previewUrl: ChatBotImg,
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const grid = gridRef.current;
    gsap.fromTo(title, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1,
      scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' }
    });
    gsap.fromTo(grid.children, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, stagger: 0.2,
      scrollTrigger: { trigger: grid, start: 'top 85%', toggleActions: 'play none none reverse' }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-400">🚀 My Playground of Innovation</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-medium">
            🚀 Explore my most ambitious and creative work—each project is a blend of innovation, polish, and real-world impact.
          </p>
        </div>
        <div ref={gridRef} className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={
                `relative group bg-black/70 rounded-2xl border border-gray-800 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-green-400/20 hover:border-green-400 flex flex-col`
              }
              tabIndex={0}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Hover Preview Overlay */}
              {hovered === idx && project.previewType === 'image' && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/90 bg-opacity-90 transition-all duration-300">
                  <img
                    src={project.previewUrl}
                    alt={project.title + ' preview'}
                    className="w-full h-full object-contain rounded-2xl"
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 pb-6 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition-colors font-semibold shadow-md"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg transition-colors font-semibold shadow-md"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              )}
              {/* Card Content */}
              <div className={
                `flex-1 flex flex-col justify-between p-6 gap-4 transition-opacity duration-300 ${hovered === idx ? 'opacity-0' : 'opacity-100'}`
              }>
                <h3 className="text-2xl font-bold text-white mb-2 text-center px-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-center px-4 text-base font-medium line-clamp-3">
                  {project.description}
                </p>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-2 justify-center">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto justify-center">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-semibold shadow-md"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors font-semibold shadow-md"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

