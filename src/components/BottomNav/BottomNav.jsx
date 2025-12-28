import { useState, useEffect } from "react";
import "./BottomNav.css";

function BottomNav() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button after scrolling down
      setShowBackToTop(window.scrollY > 400);

      // Update active section based on scroll position
      const sections = ['home', 'skills', 'education', 'projects', 'achievements', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className="bottom-nav">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}><i className="fas fa-home"></i> Home</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}><i className="fas fa-code"></i> Skills</a>
        <a href="#education" className={activeSection === 'education' ? 'active' : ''}><i className="fas fa-graduation-cap"></i> Education</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}><i className="fas fa-rocket"></i> Projects</a>
        <a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''}><i className="fas fa-trophy"></i> Awards</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}><i className="fas fa-envelope"></i> Contact</a>
      </nav>
      
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

export default BottomNav;
