import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Clock, Users, ArrowRight, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import { ShimmerBorder } from './ui/ShimmerBorder';
import { GlowingEffect } from './ui/GlowingEffect';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'web', name: 'Web Dev', count: projects.filter(p => p.category === 'web').length },
    { id: 'data', name: 'Data Analytics', count: projects.filter(p => p.category === 'data').length },
    { id: 'extension', name: 'Extensions', count: projects.filter(p => p.category === 'extension').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Show only 2 projects initially, or all if showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 2);

  const getStatusColor = (status: string) => {
    const colors = {
      'completed': 'status-badge--success',
      'in-progress': 'status-badge--primary',
      'planning': 'status-badge--warning',
      'on-hold': 'status-badge--neutral'
    };
    return colors[status as keyof typeof colors] || 'status-badge--neutral';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'ai': 'category-badge--purple',
      'web': 'category-badge--blue',
      'extension': 'category-badge--green',
      'data': 'category-badge--orange'
    };
    return colors[category as keyof typeof colors] || 'category-badge--neutral';
  };

  return (
    <section 
      id="projects" 
      className="section projects-section"
      role="main"
      aria-labelledby="projects-heading"
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
            <span className="section-badge__text">Featured Work</span>
          </div>
          <h2 id="projects-heading" className="section-title">
            Recent
            <span className="section-title--gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my recent work spanning AI, web development, and data analytics 💡
          </p>
        </motion.header>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="projects-filter"
          role="tablist"
          aria-label="Project categories"
        >
          <div className="filter-label">
            <Filter size={16} aria-hidden="true" />
            <span>Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={filter === category.id}
              aria-controls={`projects-panel-${category.id}`}
              onClick={() => setFilter(category.id)}
              className={`filter-btn ${filter === category.id ? 'filter-btn--active' : ''}`}
            >
              {category.name}
              <span className="filter-btn__count">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          layout 
          className="projects-grid"
          role="tabpanel"
          id={`projects-panel-${filter}`}
          aria-labelledby="projects-heading"
        >
          {displayedProjects.map((project, index) => (
            <div key={project.id} className="relative h-full rounded-2xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <motion.article
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="project-card h-full relative z-10"
              >
              {/* Project image */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="project-image__img"
                  loading="lazy"
                  width="400"
                  height="250"
                />
                <div className="project-image__overlay" aria-hidden="true"></div>
                
                {/* Status and category badges */}
                <div className="project-badges">
                  <span className={`status-badge ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', ' ')}
                  </span>
                  <span className={`category-badge ${getCategoryColor(project.category)}`}>
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* External links */}
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`View ${project.title} source code on GitHub`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} aria-hidden="true" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`View ${project.title} live demo`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>

                {/* Progress indicator */}
                <div className="project-progress">
                  <div className="progress-label">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="progress-bar__fill"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="project-content">
                <header className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDescription}</p>
                </header>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge tech-badge--more">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Project meta */}
                <div className="project-meta">
                  <div className="meta-item">
                    <Clock size={14} aria-hidden="true" />
                    <span>{project.timeline.started}</span>
                  </div>
                  {project.teamSize && (
                    <div className="meta-item">
                      <Users size={14} aria-hidden="true" />
                      <span>{project.teamSize} member{project.teamSize > 1 ? 's' : ''}</span>
                    </div>
                  )}
                </div>

                {/* View details button */}
                <button
                  onClick={() => navigate(`/project/${project.slug}`)}
                  className="btn btn--primary btn--full-width"
                  aria-label={`View details for ${project.title}`}
                >
                  <span>View Project Details</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </motion.article>
            </div>
          ))}
        </motion.div>

        {/* Show All / Show Less button */}
        {filteredProjects.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="projects-footer"
          >
            <button 
              onClick={() => setShowAll(!showAll)}
              className="btn btn--secondary btn--large"
              aria-expanded={showAll}
              aria-label={showAll ? 'Show less projects' : 'Show all projects'}
            >
              <span>{showAll ? 'Show Less' : `Show All Projects (${filteredProjects.length})`}</span>
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={20} aria-hidden="true" style={{ transform: 'rotate(90deg)' }} />
              </motion.div>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;