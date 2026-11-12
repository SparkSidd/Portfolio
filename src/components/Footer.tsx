import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/SparkSidd',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/siddharth-kumar472',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:siddharth.sk324@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      {/* Background pattern */}
      <div className="footer__background" aria-hidden="true"></div>

      <div className="container footer__container">
        {/* Main footer content */}
        <div className="footer__content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="footer__info"
          >
            <div className="footer__brand">
              <div className="footer__logo">
                <Code size={32} aria-hidden="true" />
              </div>
              <div>
                <h3 className="footer__name">Siddharth Kumar</h3>
                <p className="footer__tagline">Not your everyday Tech guy 💻</p>
              </div>
            </div>
            
            <p className="footer__description">
              Computer Science Engineering student passionate about AI, cybersecurity, and building 
              innovative solutions.
            </p>
            
            {/* Social Links */}
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`Connect on ${social.label}`}
                >
                  <social.icon size={20} aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="footer__copyright"
            >
              <span>© {currentYear} Siddharth Kumar. Crafted with</span>
              <Heart size={16} className="footer__heart" aria-label="love" />
              <span>and lots of</span>
              <Coffee size={16} className="footer__coffee" aria-label="coffee" />
            </motion.div>

            <div className="footer__meta">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="footer__tech"
              >
                Built with React, TypeScript & Tailwind CSS
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="footer__scroll-top"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} aria-hidden="true" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;