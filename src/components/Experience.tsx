
import { useState, useEffect, useRef } from "react";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: "Generative AI Virtual Internship",
      company: "APSCHE",
      period: "October 2024 - December 2024",
      description: "Introduction to AI tools, conversational chatbots, and automation powered by Generative AI.",
      skills: ["Chatbot", "NLP Concepts", "Generative AI Fundamentals"],
      link: "https://drive.google.com/file/d/1HqVKdmCfFPztoF_La7SlohVoruqdgrj2/view?usp=drive_link"
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl -z-10 opacity-30"></div>
      
      <div className="section-container">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 mb-4">
            My Journey
          </div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional path and internship highlights
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-gray-700/60"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative pl-12 transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/40">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                  </div>
                  
                  <div className="glass-panel p-6 rounded-xl">
                    <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <div className="flex items-center text-sm text-blue-300">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-blue-100 mb-3">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm"
                      >
                        View details <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
