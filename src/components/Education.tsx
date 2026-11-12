import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const undergrad = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'Sikkim Manipal Institute of Technology',
      location: 'Sikkim, India',
      duration: '2023 - Present',
      status: 'Currently in 6th Semester',
      achievements: [
        'Active member of technical societies',
        'Building innovative AI and web projects'
      ],
      coursework: ['Data Structures & Algorithms', 'Database Systems', 'Computer Networks', 'AI/ML', 'Software Engineering'],
      current: true
    }
  ];

  const schooling = [
    {
      id: 2,
      degree: 'Higher Secondary Education (12th)',
      field: 'Science (PCM)',
      institution: 'Senior Secondary School',
      location: 'India',
      duration: '2020 - 2022',
      status: 'Completed - 70%',
      achievements: [
        '91 percentile in JEE Mains & Qualified for JEE Advanced',
        'WBJEE Rank: Under 8000'
      ],
      coursework: ['Physics', 'Chemistry', 'Mathematics'],
      current: false
    },
    {
      id: 3,
      degree: 'Secondary Education (10th)',
      field: 'CBSE Board',
      institution: 'Secondary School',
      location: 'India',
      duration: '2019 - 2020',
      status: 'Completed - 87%',
      achievements: [
        '87% in CBSE Boards',
        'Under 50 District Rank & Under 500 State Rank (Resonance & Mentors)'
      ],
      coursework: ['Mathematics (Standard)', 'Science', 'Sanskrit', 'Social Science', 'English'],
      current: false
    }
  ];

  return (
    <section 
      id="education" 
      className="section education-section"
      role="main"
      aria-labelledby="education-heading"
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
          <h2 id="education-heading" className="section-title">Education</h2>
          <div className="section-divider" aria-hidden="true"></div>
          <p className="section-subtitle">
            Academic foundation and continuous learning journey 📚
          </p>
        </motion.header>

        {/* Undergraduate Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <GraduationCap size={28} className="text-blue-600" />
            Undergraduate
          </h3>
          <div className="education-timeline">
            {undergrad.map((edu, index) => (
              <motion.article
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="education-card relative overflow-hidden"
              >
                {/* College background image with low opacity */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  aria-hidden="true"
                ></div>
                <div className="education-layout relative z-10">
                  {/* Institution logo/icon */}
                  <div className="education-icon">
                    <div className="icon-wrapper bg-white p-2 rounded-lg">
                      <img 
                        src="https://manipal.edu/content/dam/manipal/mu/images/Logos/Manipal-University-logo.png" 
                        alt="Manipal University Logo" 
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://seeklogo.com/images/M/manipal-university-logo-2B2D87C87A-seeklogo.com.png';
                        }}
                      />
                    </div>
                  </div>

                  {/* Education details */}
                  <div className="education-content">
                    {/* Header */}
                    <header className="education-header">
                      {edu.current && (
                        <span className="status-badge status-badge--success">
                          Current
                        </span>
                      )}
                      <h3 className="education-degree">{edu.degree}</h3>
                      <p className="education-field">{edu.field}</p>
                      <div className="education-institution">
                        <BookOpen size={16} aria-hidden="true" />
                        <span>{edu.institution}</span>
                      </div>
                    </header>

                    {/* Meta information */}
                    <div className="education-meta">
                      <div className="meta-item">
                        <Calendar size={16} aria-hidden="true" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={16} aria-hidden="true" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="education-status">
                      <p>{edu.status}</p>
                    </div>

                    {/* Achievements */}
                    <div className="education-achievements">
                      <h4 className="achievements-title">
                        <Award size={18} aria-hidden="true" />
                        Key Achievements
                      </h4>
                      <div className="achievements-grid">
                        {edu.achievements.map((achievement, i) => (
                          <div key={i} className="achievement-item">
                            <div className="achievement-bullet" aria-hidden="true"></div>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Relevant coursework */}
                    <div className="education-coursework">
                      <h4 className="coursework-title">Relevant Coursework</h4>
                      <div className="coursework-tags">
                        {edu.coursework.map((course) => (
                          <span key={course} className="course-tag">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Schooling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <BookOpen size={28} className="text-green-600" />
            Schooling
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {schooling.map((edu, index) => (
              <motion.article
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="education-card relative overflow-hidden"
              >
                {/* School background image with low opacity */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: edu.id === 2 
                      ? 'url(https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800)'
                      : 'url(https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  aria-hidden="true"
                ></div>
                <div className="education-layout relative z-10">
                  {/* Institution logo/icon */}
                  <div className="education-icon">
                    <div className="icon-wrapper">
                      <img 
                        src={edu.id === 2 
                          ? "https://cdn-icons-png.flaticon.com/512/3976/3976625.png" 
                          : "https://cdn-icons-png.flaticon.com/512/167/167755.png"}
                        alt={`${edu.institution} Logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>

                  {/* Education details */}
                  <div className="education-content">
                    {/* Header */}
                    <header className="education-header">
                      <h3 className="education-degree">{edu.degree}</h3>
                      <p className="education-field">{edu.field}</p>
                      <div className="education-institution">
                        <BookOpen size={16} aria-hidden="true" />
                        <span>{edu.institution}</span>
                      </div>
                    </header>

                    {/* Meta information */}
                    <div className="education-meta">
                      <div className="meta-item">
                        <Calendar size={16} aria-hidden="true" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={16} aria-hidden="true" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="education-status">
                      <p>{edu.status}</p>
                    </div>

                    {/* Achievements */}
                    <div className="education-achievements">
                      <h4 className="achievements-title">
                        <Award size={18} aria-hidden="true" />
                        Key Achievements
                      </h4>
                      <div className="achievements-grid">
                        {edu.achievements.map((achievement, i) => (
                          <div key={i} className="achievement-item">
                            <div className="achievement-bullet" aria-hidden="true"></div>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Relevant coursework */}
                    <div className="education-coursework">
                      <h4 className="coursework-title">Relevant Coursework</h4>
                      <div className="coursework-tags">
                        {edu.coursework.map((course) => (
                          <span key={course} className="course-tag">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;