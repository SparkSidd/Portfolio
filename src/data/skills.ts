export interface Skill {
  name: string;
  icon: string;
  tooltip: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai' | 'database';
  proficiency?: number; // 1-100 percentage
}

export const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    tooltip: 'React - Building interactive UIs',
    category: 'frontend',
    proficiency: 90
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    tooltip: 'TypeScript - Type-safe JavaScript',
    category: 'frontend',
    proficiency: 85
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    tooltip: 'JavaScript - Web programming language',
    category: 'frontend',
    proficiency: 90
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    tooltip: 'Tailwind CSS - Utility-first CSS framework',
    category: 'frontend',
    proficiency: 95
  },
  {
    name: 'Material-UI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    tooltip: 'Material-UI - React component library',
    category: 'frontend',
    proficiency: 80
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    tooltip: 'Next.js - React production framework',
    category: 'frontend',
    proficiency: 80
  },
  
  // Backend
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    tooltip: 'Python - Versatile programming language',
    category: 'backend',
    proficiency: 95
  },
  {
    name: 'FastAPI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    tooltip: 'FastAPI - Modern Python web framework',
    category: 'backend',
    proficiency: 85
  },
  {
    name: 'Flask',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    tooltip: 'Flask - Lightweight Python framework',
    category: 'backend',
    proficiency: 90
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    tooltip: 'Node.js - JavaScript runtime',
    category: 'backend',
    proficiency: 80
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    tooltip: 'Express.js - Node.js web framework',
    category: 'backend',
    proficiency: 75
  },

  // Database
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    tooltip: 'MongoDB - NoSQL document database',
    category: 'database',
    proficiency: 85
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    tooltip: 'PostgreSQL - Advanced relational database',
    category: 'database',
    proficiency: 80
  },
  {
    name: 'SQLite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    tooltip: 'SQLite - Lightweight database',
    category: 'database',
    proficiency: 85
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    tooltip: 'SQL - Database query language',
    category: 'database',
    proficiency: 90
  },

  // AI/ML
  {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    tooltip: 'TensorFlow - ML framework',
    category: 'ai',
    proficiency: 85
  },
  {
    name: 'Scikit-learn',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    tooltip: 'Scikit-learn - ML library',
    category: 'ai',
    proficiency: 90
  },
  {
    name: 'Pandas',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    tooltip: 'Pandas - Data manipulation library',
    category: 'ai',
    proficiency: 95
  },
  {
    name: 'NumPy',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    tooltip: 'NumPy - Numerical computing',
    category: 'ai',
    proficiency: 90
  },
  {
    name: 'OpenCV',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    tooltip: 'OpenCV - Computer vision library',
    category: 'ai',
    proficiency: 80
  },
  {
    name: 'LangChain',
    icon: 'https://api.iconify.design/simple-icons:langchain.svg',
    tooltip: 'LangChain - LLM application framework',
    category: 'ai',
    proficiency: 85
  },
  {
    name: 'Streamlit',
    icon: 'https://streamlit.io/images/brand/streamlit-mark-color.svg',
    tooltip: 'Streamlit - Data app framework',
    category: 'ai',
    proficiency: 90
  },
  {
    name: 'Plotly',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg',
    tooltip: 'Plotly - Data visualization',
    category: 'ai',
    proficiency: 85
  },

  // Tools
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    tooltip: 'Git - Version control system',
    category: 'tools',
    proficiency: 90
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    tooltip: 'Docker - Containerization platform',
    category: 'tools',
    proficiency: 75
  },
  {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    tooltip: 'VS Code - Code editor',
    category: 'tools',
    proficiency: 95
  },
  {
    name: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    tooltip: 'Linux - Operating system',
    category: 'tools',
    proficiency: 80
  },
  {
    name: 'Postman',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    tooltip: 'Postman - API testing tool',
    category: 'tools',
    proficiency: 85
  },
  {
    name: 'Vite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    tooltip: 'Vite - Frontend build tool',
    category: 'tools',
    proficiency: 85
  }
];

export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category);
};