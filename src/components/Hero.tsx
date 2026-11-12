import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, MapPin, Calendar } from 'lucide-react';
import { AnimatedGridPattern } from './ui/AnimatedGridPattern';
import { SpotlightEffect } from './ui/SpotlightEffect';
import { NumberCounter } from './ui/NumberCounter';
import { MagneticButton } from './ui/MagneticButton';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'AI/ML Engineer', 
    'Cybersecurity Specialist',
    'DevOps Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openContactForm = () => {
    const event = new CustomEvent('openContactForm');
    window.dispatchEvent(event);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume-siddharth-kumar.pdf';
    link.download = 'Siddharth_Kumar_Resume.pdf';
    link.click();
  };

  return (
    <section 
      id="home" 
      className="hero-section"
      role="banner"
      aria-label="Hero section"
    >
      {/* Optimized background with CSS-only animations */}
      <div className="hero-background" aria-hidden="true">
        <AnimatedGridPattern className="opacity-30" />
        <SpotlightEffect />
        <div className="hero-bg-element hero-bg-element--1"></div>
        <div className="hero-bg-element hero-bg-element--2"></div>
        <div className="hero-bg-gradient"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Professional headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-avatar"
          >
            <img
              src="/profile.jpg"
              alt="Siddharth Kumar - Professional headshot"
              className="hero-avatar__image"
              loading="eager"
              width="200"
              height="200"
            />
            <div className="hero-avatar__ring animate-pulse" aria-hidden="true"></div>
          </motion.div>

          {/* Professional status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-badge"
          >
            <div className="hero-badge__content glass">
              <div className="hero-badge__status">
                <div className="status-indicator" aria-label="Available for opportunities"></div>
                <span className="hero-badge__text">Available for opportunities</span>
              </div>
              <div className="hero-badge__divider" aria-hidden="true"></div>
              <div className="hero-badge__location">
                <MapPin size={14} aria-hidden="true" />
                <span>Sikkim, India</span>
              </div>
            </div>
          </motion.div>

          {/* Main heading with semantic structure */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-header"
          >
            <h1 className="hero-title">
              <span className="hero-title__greeting">Hello, I'm</span>
              <span className="hero-title__name">Siddharth Kumar</span>
            </h1>
            
            {/* Dynamic role with ARIA live region */}
            <div 
              className="hero-role"
              aria-live="polite"
              aria-label="Current professional role"
            >
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="hero-role__text"
              >
                {roles[currentRole]}
              </motion.span>
            </div>

            <p className="hero-tagline">Not your everyday Tech guy 🚀</p>
          </motion.header>

          {/* Professional summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-summary"
          >
            <p className="hero-summary__text">
              Computer Science Engineering student at <strong>SMIT</strong>, passionate about 
              building <strong>AI-powered solutions</strong> and <strong>cybersecurity systems</strong>. 
              Transforming ideas into real-world applications with modern tech stacks.
            </p>
            
            {/* Achievement badges */}
            <div className="hero-achievements" role="list" aria-label="Key highlights">
              <div className="achievement-badge" role="listitem">
                <MapPin size={16} aria-hidden="true" />
                <span>AI/ML Developer</span>
              </div>
              <div className="achievement-badge" role="listitem">
                <Calendar size={16} aria-hidden="true" />
                <span>NBPDCL Intern</span>
              </div>
              <div className="achievement-badge" role="listitem">
                <span>Full-Stack Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-actions"
          >
            <MagneticButton
              onClick={() => scrollToSection('#projects')}
              className="btn btn--primary hover-lift"
              aria-label="View my projects"
            >
              <span>View My Work</span>
            </MagneticButton>
            
            <MagneticButton
              onClick={openContactForm}
              className="btn btn--secondary hover-lift"
              aria-label="Contact me"
            >
              <Mail size={18} aria-hidden="true" />
              <span>Contact Me</span>
            </MagneticButton>

            <MagneticButton
              onClick={downloadResume}
              className="btn btn--outline hover-lift"
              aria-label="Download resume"
            >
              <Download size={18} aria-hidden="true" />
              <span>Resume</span>
            </MagneticButton>
          </motion.div>

          {/* Professional statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hero-stats"
            role="region"
            aria-label="Professional statistics"
          >
            <div className="stat-card glass">
              <div className="stat-card__number">
                <NumberCounter value={4} suffix="+" />
              </div>
              <div className="stat-card__label">Projects</div>
            </div>
            <div className="stat-card glass">
              <div className="stat-card__number">
                <NumberCounter value={3} suffix="+" />
              </div>
              <div className="stat-card__label">AI Models</div>
            </div>
            <div className="stat-card glass">
              <div className="stat-card__number">
                <NumberCounter value={8} />
              </div>
              <div className="stat-card__label">Weeks Internship</div>
            </div>
            <div className="stat-card glass">
              <div className="stat-card__number">
                <NumberCounter value={15} suffix="+" />
              </div>
              <div className="stat-card__label">Technologies</div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            onClick={() => scrollToSection('#about')}
            className="hero-scroll"
            aria-label="Scroll to about section"
          >
            <span className="hero-scroll__text">Explore Portfolio</span>
            <ChevronDown size={20} className="hero-scroll__icon" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;