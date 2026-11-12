import React from 'react';
import { motion } from 'framer-motion';
import { Code, Target, Zap, Award, Building, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'AI/ML Projects',
      description: 'Building intelligent solutions',
      metric: '3+ models'
    },
    {
      icon: Building,
      title: 'Industry Experience',
      description: '8-week internship at NBPDCL',
      metric: '8 weeks'
    },
    {
      icon: Code,
      title: 'Technical Expertise',
      description: 'Full-stack development & AI/ML',
      metric: '15+ techs'
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Real-world impact through technology',
      metric: '4+ projects'
    }
  ];

  const coreCompetencies = [
    { category: 'Frontend', skills: 'React, TypeScript, Tailwind CSS', icon: Code },
    { category: 'Backend', skills: 'Python, Node.js, FastAPI', icon: Building },
    { category: 'AI/ML', skills: 'TensorFlow, Pandas, Streamlit', icon: Zap },
    { category: 'Tools', skills: 'Git, Docker, Linux', icon: Target },
  ];

  return (
    <section 
      id="about" 
      className="section about-section"
      role="main"
      aria-labelledby="about-heading"
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
          <h2 id="about-heading" className="section-title">About Me</h2>
          <div className="section-divider" aria-hidden="true"></div>
          <p className="section-subtitle">
            Passionate about creating innovative solutions through technology ✨
          </p>
        </motion.header>

        <div className="about-grid">
          {/* Professional summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <div className="about-text">
              <p className="about-paragraph">
                I'm a dedicated Computer Science Engineering student at 
                <strong> Sikkim Manipal Institute of Technology</strong>, currently in my 6th semester. 
                I specialize in transforming complex problems into elegant technical solutions through 
                <strong> AI/ML</strong>, <strong>full-stack development</strong>, and <strong>cybersecurity</strong>.
              </p>
              
              <p className="about-paragraph">
                During my <strong>8-week internship at NBPDCL</strong> (North Bihar Power Distribution Company Limited), 
                I developed a comprehensive electricity theft detection dashboard using advanced data analytics. 
                This experience taught me how to translate complex technical concepts into practical business solutions.
              </p>

              <p className="about-paragraph">
                I'm passionate about building applications that solve real-world problems—from 
                AI-powered phishing detection systems to data visualization dashboards. Every project 
                I work on combines cutting-edge technology with practical impact.
              </p>
            </div>

            {/* Core competencies */}
            <div className="competencies-card">
              <h3 className="competencies-title">Core Competencies</h3>
              <div className="competencies-grid">
                {coreCompetencies.map((comp, index) => (
                  <div key={index} className="competency-item flex items-center gap-3 mb-4">
                    <comp.icon size={20} aria-hidden="true" />
                    <div>
                      <div className="competency-category">{comp.category}</div>
                      <div className="competency-skills">{comp.skills}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="highlights-section"
          >
            <h3 className="highlights-title">Key Highlights</h3>
            
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="highlight-card hover-lift"
                >
                  <div className="highlight-icon">
                    <highlight.icon size={24} aria-hidden="true" />
                  </div>
                  <div className="highlight-content">
                    <h4 className="highlight-title">{highlight.title}</h4>
                    <p className="highlight-description">{highlight.description}</p>
                    <div className="highlight-metric">{highlight.metric}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="values-section"
        >
          <div className="values-card">
            <h3 className="values-title">What Drives Me</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <Code size={24} aria-hidden="true" />
                </div>
                <h4 className="value-title">Innovation</h4>
                <p className="value-description">
                  Constantly exploring new technologies and methodologies to solve complex problems
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <Target size={24} aria-hidden="true" />
                </div>
                <h4 className="value-title">Impact</h4>
                <p className="value-description">
                  Building solutions that create real value and positive change in people's lives
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <Zap size={24} aria-hidden="true" />
                </div>
                <h4 className="value-title">Excellence</h4>
                <p className="value-description">
                  Committed to delivering high-quality work and continuous learning
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;