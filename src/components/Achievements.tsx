import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, FileCheck, Users, Calendar, ExternalLink, ChevronDown, Clock, Briefcase, Star } from 'lucide-react';
import { achievements, Achievement } from '../data/achievements';

const Achievements: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showAllPositions, setShowAllPositions] = useState(false);

  const categories = [
    { id: 'all', label: 'All', count: achievements.length },
    { id: 'hackathon', label: 'Hackathons', count: achievements.filter(a => a.category === 'hackathon').length },
    { id: 'certificate', label: 'Certificates & Courses', count: achievements.filter(a => a.category === 'certificate').length },
    { id: 'position', label: 'Positions & Leadership', count: achievements.filter(a => a.category === 'position').length },
  ];

  const filteredAchievements = selectedCategory === 'all'
    ? achievements
    : achievements.filter(achievement => achievement.category === selectedCategory);

  // Separate completed and ongoing certificates
  const completedCertificates = filteredAchievements.filter(a => a.category === 'certificate' && a.status === 'completed');
  const ongoingCertificates = filteredAchievements.filter(a => a.category === 'certificate' && a.status === 'ongoing');
  
  // Separate current and previous positions
  const currentPositions = filteredAchievements.filter(a => a.category === 'position' && a.status === 'current');
  const previousPositions = filteredAchievements.filter(a => a.category === 'position' && a.status === 'previous');

  const displayedAchievements = showAll ? filteredAchievements : filteredAchievements.slice(0, 4);
  const isCertificateView = selectedCategory === 'certificate';
  const isPositionView = selectedCategory === 'position';

  const getCategoryIcon = (category: Achievement['category']) => {
    switch (category) {
      case 'hackathon':
        return Trophy;
      case 'certificate':
        return FileCheck;
      case 'position':
        return Users;
      default:
        return Trophy;
    }
  };

  const getCategoryColor = (category: Achievement['category']) => {
    switch (category) {
      case 'hackathon':
        return 'bg-purple-500';
      case 'certificate':
        return 'bg-blue-500';
      case 'position':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section 
      id="achievements" 
      className="section achievements-section"
      role="main"
      aria-labelledby="achievements-heading"
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
            <span className="section-badge__text">Milestones</span>
          </div>
          <h2 id="achievements-heading" className="section-title">
            Achievements &
            <span className="section-title--gradient">Recognition</span>
          </h2>
          <p className="section-subtitle">
            Celebrating wins, learning experiences, and continuous growth 🏆
          </p>
        </motion.header>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="projects-filter"
          role="tablist"
          aria-label="Achievement categories"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setShowAll(false);
              }}
              className={`filter-btn ${selectedCategory === category.id ? 'filter-btn--active' : ''}`}
              role="tab"
              aria-selected={selectedCategory === category.id}
              aria-label={`Filter by ${category.label}`}
            >
              {category.label}
              <span className="filter-btn__count">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        {!isCertificateView && !isPositionView ? (
          // Regular grid for non-certificate/non-position achievements
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <AnimatePresence mode="wait">
                {displayedAchievements.map((achievement, index) => {
                  const Icon = getCategoryIcon(achievement.category);
                  const colorClass = getCategoryColor(achievement.category);

                  return (
                    <motion.article
                      key={achievement.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="achievement-card bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`${colorClass} p-3 rounded-xl text-white flex-shrink-0`}>
                          <Icon size={24} />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {achievement.title}
                            </h3>
                            {achievement.link && (
                              <a
                                href={achievement.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 transition-colors"
                                aria-label={`View ${achievement.title} details`}
                              >
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </div>

                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                            {achievement.organization}
                          </p>

                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <Calendar size={14} />
                            <span>{achievement.date}</span>
                          </div>

                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {achievement.description}
                          </p>

                          {/* Category Badge */}
                          <div className="mt-4">
                            <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium capitalize">
                              {achievement.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </div>
          </>
        ) : isPositionView ? (
          // Position-specific layout with subsections
          <>
            {/* Current Roles */}
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-2 rounded-lg">
                  <Star size={24} className="text-white" />
                </div>
                Current Roles
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentPositions.map((achievement, index) => (
                  <motion.article
                    key={achievement.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="achievement-card bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border-2 border-green-200 dark:border-green-500/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl text-white flex-shrink-0">
                        <Briefcase size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white flex-1">
                            {achievement.title}
                          </h4>
                          <span className="inline-block px-2 py-1 bg-green-500 text-white rounded-full text-xs font-bold whitespace-nowrap">
                            ACTIVE
                          </span>
                        </div>
                        <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                          {achievement.organization}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Previous Roles */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
              >
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Briefcase size={24} className="text-white" />
                </div>
                Previous Roles
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showAllPositions ? previousPositions : previousPositions.slice(0, 3)).map((achievement, index) => (
                  <motion.article
                    key={achievement.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="achievement-card bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-blue-500 p-2 rounded-lg text-white flex-shrink-0">
                        <Users size={20} />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.article>
                ))}
              </div>
              
              {/* Show More/Less Button for Previous Positions */}
              {previousPositions.length > 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mt-8"
                >
                  <button
                    onClick={() => setShowAllPositions(!showAllPositions)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <span>{showAllPositions ? 'Show Less' : `View All ${previousPositions.length} Previous Roles`}</span>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-300 ${showAllPositions ? 'rotate-180' : ''}`}
                    />
                  </button>
                </motion.div>
              )}
            </div>
          </>
        ) : (
          // Certificate-specific layout with subsections
          <>
            {/* Completed Certifications */}
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
              >
                <div className="bg-green-500 p-2 rounded-lg">
                  <FileCheck size={24} className="text-white" />
                </div>
                Completed Certifications
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(showAllCertificates ? completedCertificates : completedCertificates.slice(0, 4)).map((achievement, index) => (
                  <motion.article
                    key={achievement.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="achievement-card bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500 p-3 rounded-xl text-white flex-shrink-0">
                        <FileCheck size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                          {achievement.organization}
                        </p>
                        {achievement.achievement && (
                          <div className="flex items-center gap-2 mb-2">
                            <Trophy size={14} className="text-yellow-500" />
                            <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                              {achievement.achievement}
                            </span>
                          </div>
                        )}
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                          {achievement.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <Calendar size={12} />
                          <span>{achievement.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
              
              {/* Show More/Less Button for Completed Certificates */}
              {completedCertificates.length > 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mt-8"
                >
                  <button
                    onClick={() => setShowAllCertificates(!showAllCertificates)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <span>{showAllCertificates ? 'Show Less' : `View All ${completedCertificates.length} Completed`}</span>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-300 ${showAllCertificates ? 'rotate-180' : ''}`}
                    />
                  </button>
                </motion.div>
              )}
            </div>

            {/* Currently Learning */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
              >
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Clock size={24} className="text-white" />
                </div>
                Currently Learning
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ongoingCertificates.map((achievement, index) => (
                  <motion.article
                    key={achievement.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="achievement-card bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-5 border-2 border-orange-200 dark:border-orange-500/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-orange-500 p-2 rounded-lg text-white flex-shrink-0">
                        <Clock size={20} />
                      </div>
                      <span className="inline-block px-2 py-1 bg-orange-500 text-white rounded-full text-xs font-bold">
                        ONGOING
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Show More Button */}
        {!isCertificateView && !isPositionView && filteredAchievements.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span>{showAll ? 'Show Less' : `View All ${filteredAchievements.length} Achievements`}</span>
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
