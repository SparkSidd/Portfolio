import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle, AlertCircle, X, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleOpenContactForm = () => {
      setIsFormOpen(true);
    };

    window.addEventListener('openContactForm', handleOpenContactForm);
    return () => window.removeEventListener('openContactForm', handleOpenContactForm);
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFormOpen) {
        setIsFormOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isFormOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFormOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form endpoint
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setIsFormOpen(false);
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'siddharth.sk324@gmail.com',
      href: 'mailto:siddharth.sk324@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7004434391',
      href: 'tel:+917004434391'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sikkim, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/SparkSidd'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/siddharth-kumar472'
    }
  ];

  return (
    <AnimatePresence>
      {isFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="contact-modal"
          onClick={() => setIsFormOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="contact-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <header className="contact-modal__header">
              <div className="modal-header__info">
                <div className="modal-icon">
                  <MessageCircle size={24} aria-hidden="true" />
                </div>
                <div>
                  <h2 id="contact-modal-title" className="modal-title">
                    Get In Touch
                  </h2>
                  <p className="modal-subtitle">
                    Let's discuss opportunities
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="modal-close"
                aria-label="Close contact form"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </header>

            {/* Contact info */}
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={info.href}
                  className="contact-info__item"
                  aria-label={`${info.label}: ${info.value}`}
                >
                  <info.icon size={20} aria-hidden="true" />
                  <div>
                    <div className="contact-info__label">{info.label}</div>
                    <div className="contact-info__value">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <User size={16} aria-hidden="true" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                    aria-describedby="name-error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <Mail size={16} aria-hidden="true" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                    aria-describedby="email-error"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <MessageSquare size={16} aria-hidden="true" />
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                  aria-describedby="subject-error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <MessageCircle size={16} aria-hidden="true" />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  aria-describedby="message-error"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn--primary btn--full-width ${isSubmitting ? 'btn--loading' : ''}`}
                aria-describedby="submit-status"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner" aria-hidden="true"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={20} aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages */}
              <div id="submit-status" aria-live="polite" aria-atomic="true">
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="form-message form-message--success"
                      role="alert"
                    >
                      <CheckCircle size={20} aria-hidden="true" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="form-message form-message--error"
                      role="alert"
                    >
                      <AlertCircle size={20} aria-hidden="true" />
                      <span>Something went wrong. Please try again or contact me directly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>

            {/* Social links */}
            <footer className="contact-modal__footer">
              <p className="social-text">Or connect with me on social media</p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
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
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;