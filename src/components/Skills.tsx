import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, getSkillsByCategory } from '../data/skills';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);
  
  const categories = [
    { id: 'all', name: 'All Skills', count: skills.length },
    { id: 'frontend', name: 'Frontend', count: getSkillsByCategory('frontend').length },
    { id: 'backend', name: 'Backend', count: getSkillsByCategory('backend').length },
    { id: 'database', name: 'Database', count: getSkillsByCategory('database').length },
    { id: 'tools', name: 'Tools', count: getSkillsByCategory('tools').length },
    { id: 'ai', name: 'AI/ML', count: getSkillsByCategory('ai').length }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : getSkillsByCategory(activeCategory as any);

  const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 12);

  return (
    <section 
      id="skills" 
      className="section skills-section"
      role="main"
      aria-labelledby="skills-heading"
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
          <div className="section-badge">
            <div className="section-badge__dot" aria-hidden="true"></div>
            <span className="section-badge__text">Technical Skills</span>
          </div>
          <h2 id="skills-heading" className="section-title">
            My Tech
            <span className="section-title--gradient">Arsenal</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning modern web technologies, AI/ML frameworks, and development tools 🛠️
          </p>
        </motion.header>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills-filter"
          role="tablist"
          aria-label="Skill categories"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`skills-panel-${category.id}`}
              onClick={() => setActiveCategory(category.id)}
              className={`filter-btn ${activeCategory === category.id ? 'filter-btn--active' : ''}`}
            >
              {category.name}
              <span className="filter-btn__count">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="skills-grid"
          role="tabpanel"
          id={`skills-panel-${activeCategory}`}
          aria-labelledby="skills-heading"
        >
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="skill-card"
            >
              <div className="skill-card__content">
                <div className="skill-icon">
                  <img
                    src={skill.icon}
                    alt=""
                    className="skill-icon__image"
                    loading="lazy"
                    width="48"
                    height="48"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/48/64748b/ffffff?text=${skill.name.charAt(0)}`;
                    }}
                  />
                </div>
                
                <div className="skill-name">
                  {skill.name}
                </div>
                
                {/* Tooltip */}
                <div 
                  className={`skill-tooltip ${hoveredSkill === skill.name ? 'skill-tooltip--visible' : ''}`}
                  role="tooltip"
                  aria-hidden={hoveredSkill !== skill.name}
                >
                  {skill.tooltip}
                  <div className="skill-tooltip__arrow" aria-hidden="true"></div>
                </div>

                {/* Glow effect */}
                <div className="skill-card__glow" aria-hidden="true"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        {filteredSkills.length > 12 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                {showAll ? 'Show Less' : 'View All Skills'}
                <svg
                  className={`w-5 h-5 transform group-hover:translate-y-1 transition-transform ${showAll ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>
          </motion.div>
        )}

        {/* Skills summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="skills-summary"
        >
          <div className="summary-card">
            <h3 className="summary-title">Continuous Learning Journey</h3>
            <p className="summary-description">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of software development.
            </p>
            <div className="summary-badges">
              <div className="summary-badge">
                <span>🚀 Always Experimenting</span>
              </div>
              <div className="summary-badge">
                <span>📚 Lifelong Learner</span>
              </div>
              <div className="summary-badge">
                <span>💡 Problem Solver</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;