import React from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Phone } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const projects = [
    {
      title: "HealthTrack Pro",
      description: "A comprehensive health monitoring app with real-time tracking and analytics",
      tech: ["React Native", "Firebase", "Redux"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "EcoCommute",
      description: "Sustainable transportation planning app with carbon footprint tracking",
      tech: ["Flutter", "Google Maps API", "Node.js"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "TaskFlow",
      description: "Smart task management app with AI-powered prioritization",
      tech: ["Swift", "CoreML", "CloudKit"],
      image: "/api/placeholder/600/400"
    }
  ];

  const skills = [
    "React Native", "Flutter", "Swift", "Kotlin",
    "JavaScript/TypeScript", "Firebase", "REST APIs",
    "Git", "CI/CD", "App Store Optimization"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold">John Developer</span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-600">Home</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#skills" className="hover:text-blue-600">Skills</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 hover:text-blue-600">Home</a>
              <a href="#projects" className="block py-2 hover:text-blue-600">Projects</a>
              <a href="#skills" className="block py-2 hover:text-blue-600">Skills</a>
              <a href="#contact" className="block py-2 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Crafting Digital Experiences Through Mobile Apps
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Senior Mobile Developer specializing in creating intuitive and performant applications
                that users love.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  Get in touch
                </a>
                <a href="#projects" className="border border-gray-300 px-6 py-3 rounded-lg hover:border-blue-600">
                  View my work
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="/api/placeholder/600/600" 
                alt="Profile" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-blue-600">
              <Mail className="w-5 h-5" />
              <span>contact@example.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-blue-600">
              <Phone className="w-5 h-5" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="https://github.com" className="flex items-center gap-2 hover:text-blue-600">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" className="flex items-center gap-2 hover:text-blue-600">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; 2024 John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;