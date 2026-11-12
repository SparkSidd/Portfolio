import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Summer Intern - Department of IT',
      company: 'NBPDCL (North Bihar Power Distribution Company Limited)',
      location: 'Bihar, India',
      duration: 'June 2025 - August 2025',
      type: 'Internship',
      description: 'Developed an electricity theft detection dashboard using advanced data analytics and machine learning techniques to help utility companies identify potential theft through pattern recognition.',
      achievements: [
        'Built a comprehensive Streamlit dashboard for anomaly detection',
        'Implemented data visualization using Pandas and Plotly',
        'Reduced manual inspection time by 60% through automated flagging',
        'Presented findings to senior management and received commendation'
      ],
      technologies: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'NumPy', 'SQLite'],
      impact: 'Improved efficiency of theft detection process and provided actionable insights for utility management'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Internship': 'status-badge--primary',
      'Full-time': 'status-badge--success'
    };
    return colors[type as keyof typeof colors] || 'status-badge--neutral';
  };

  return (
    <section 
      id="experience" 
      className="section experience-section"
      role="main"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        {/* Section header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 id="experience-heading" className="section-title">Experience</h2>
          <div className="section-divider" aria-hidden="true"></div>
          <p className="section-subtitle">
            Professional experience and industry contributions
          </p>
        </motion.header>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="experience-card relative overflow-hidden"
            >
              {/* Company/Internship background image with low opacity */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                aria-hidden="true"
              ></div>
              <div className="experience-layout relative z-10">
                {/* Company logo/icon */}
                <div className="experience-icon">
                  <div className="icon-wrapper">
                    <img 
                      src="https://www.nbpdcl.co.in/images/logo.png" 
                      alt="NBPDCL Logo" 
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://nbpdcl.bih.nic.in/images/nbpdcl-logo.jpg';
                        (e.target as HTMLImageElement).onerror = () => {
                          (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/2666/2666505.png';
                        };
                      }}
                    />
                  </div>
                </div>

                {/* Experience details */}
                <div className="experience-content">
                  {/* Header */}
                  <header className="experience-header">
                    <span className={`status-badge ${getTypeColor(experience.type)}`}>
                      {experience.type}
                    </span>
                    <h3 className="experience-title">{experience.title}</h3>
                    <div className="experience-company">
                      <Briefcase size={16} aria-hidden="true" />
                      <span>{experience.company}</span>
                    </div>
                  </header>

                  {/* Meta information */}
                  <div className="experience-meta">
                    <div className="meta-item">
                      <Calendar size={16} aria-hidden="true" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} aria-hidden="true" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="experience-description">
                    <p>{experience.description}</p>
                  </div>

                  {/* Achievements */}
                  <div className="experience-achievements">
                    <h4 className="achievements-title">
                      <Award size={18} aria-hidden="true" />
                      Key Achievements
                    </h4>
                    <div className="achievements-grid">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="achievement-item">
                          <div className="achievement-bullet" aria-hidden="true"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="experience-impact">
                    <h4 className="impact-title">Impact</h4>
                    <p className="impact-description">{experience.impact}</p>
                  </div>

                  {/* Technologies */}
                  <div className="experience-technologies">
                    <h4 className="technologies-title">Technologies Used</h4>
                    <div className="tech-tags">
                      {experience.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 mb-0"></div>
      </div>
    </section>
  );
};

export default Experience;