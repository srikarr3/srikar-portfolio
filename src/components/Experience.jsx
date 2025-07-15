import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Andhra Pradesh State Skill Development Corporation",
    position: "Data Analyst Intern",
    duration: "Jun 2023 - Aug 2023",
    location: "Remote",
    description: [
      "Transformed raw data into actionable insights, driving smarter business decisions across teams.",
      "Automated data cleaning and visualization, saving hours and making reports instantly understandable.",
      "Collaborated with stakeholders to turn complex data into clear, compelling stories."
    ],
    icon: <FaBriefcase className="text-green-400 text-2xl" />,
  },
];

const education = {
  school: "SRM University AP",
  degree: "B.Tech, Computer Science and Engineering",
  duration: "2021 - 2025",
  cgpa: "8.84",
  description: [
    "Dove deep into algorithms, systems, and real-world problem solving.",
    "Ranked in the top percentile in national entrance exams (EAMCET, JEE MAIN).",
    "Awarded 1st place in the Adverse competition for innovative thinking."
  ],
  icon: <FaGraduationCap className="text-blue-400 text-2xl" />,
};

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    if (!timeline) return;
    gsap.fromTo(
      timeline.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-400">Experience</span> & Growth
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
            🚀 From data-driven impact to creative problem solving, here’s my journey so far—always learning, always leveling up.
          </p>
        </div>
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400/80 via-green-400/20 to-transparent rounded-full z-0" />
          <div ref={timelineRef} className="space-y-12 relative z-10">
            {/* Experience Card */}
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                {/* Timeline Dot */}
                <div className="flex flex-col items-center">
                  <span className="w-6 h-6 rounded-full bg-green-400 shadow-lg flex items-center justify-center ring-4 ring-green-400/30 animate-pulse">
                    {exp.icon}
                  </span>
                  {/* Connector line (except last) */}
                  <span className={`w-1 flex-1 bg-green-400/30 ${idx === experiences.length ? 'opacity-0' : ''}`}></span>
                </div>
                {/* Card */}
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl hover:shadow-green-400/20 transition-all duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                        {exp.company}
                      </h3>
                      <h4 className="text-lg text-green-400 font-semibold mb-1">{exp.position}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 font-medium">{exp.duration}</p>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200 text-base mt-2">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            {/* Education Card */}
            <div className="flex items-start gap-6 group">
              <div className="flex flex-col items-center">
                <span className="w-6 h-6 rounded-full bg-blue-400 shadow-lg flex items-center justify-center ring-4 ring-blue-400/30">
                  {education.icon}
                </span>
              </div>
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl hover:shadow-blue-400/20 transition-all duration-300 w-full">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                      {education.school}
                    </h3>
                    <h4 className="text-lg text-blue-400 font-semibold mb-1">{education.degree}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 font-medium">{education.duration}</p>
                    <p className="text-gray-500">CGPA: {education.cgpa}</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-200 text-base mt-2">
                  {education.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

