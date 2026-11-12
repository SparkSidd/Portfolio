export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  progress: number;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'ai' | 'web' | 'mobile' | 'extension' | 'data';
  timeline: {
    started: string;
    expectedCompletion?: string;
  };
  challenges: string[];
  features: string[];
  teamSize?: number;
  role?: string;
}

export const projects: Project[] = [
  // 🟢 TIER 1 — FLAGSHIP PROJECTS
  {
    id: '1',
    slug: 'phishdetectai',
    title: 'PhishDetectAI',
    shortDescription: 'AI-powered phishing detection system using machine learning to identify and prevent malicious websites and cyber threats.',
    fullDescription: `PhishDetectAI is a flagship cybersecurity project that combines artificial intelligence with real-world threat detection. The system leverages machine learning algorithms to analyze website characteristics, URL patterns, email content, and behavioral indicators to identify phishing attempts before users fall victim.

This project demonstrates the practical application of AI in cybersecurity, addressing a critical problem that affects millions of users daily. The system provides real-time protection, detailed threat analysis, and actionable insights for both individual users and organizations.`,
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask', 'React', 'NLP', 'Feature Engineering'],
    progress: 95,
    status: 'in-progress',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/phishdetectai',
    category: 'ai',
    timeline: {
      started: 'July 2024',
      expectedCompletion: 'November 2024'
    },
    challenges: [
      'Achieving high accuracy while minimizing false positives',
      'Processing and analyzing diverse phishing techniques',
      'Building robust feature extraction pipeline',
      'Training with imbalanced datasets',
      'Real-time inference without latency'
    ],
    features: [
      'Machine learning-based URL analysis',
      'Email content classification',
      'Real-time threat scoring',
      'Visual similarity detection',
      'Comprehensive threat reports',
      'API for integration with other systems'
    ],
    teamSize: 1,
    role: 'AI Engineer & Full Stack Developer'
  },
  {
    id: '2',
    slug: 'electricity-theft-detection',
    title: 'Electricity Theft Detection System',
    shortDescription: 'Industry-backed ML system developed during NBPDCL internship to detect electricity theft using consumption pattern analysis.',
    fullDescription: `Developed during my internship at NBPDCL (North Bihar Power Distribution Company Limited), this system addresses the critical problem of electricity theft that costs utility companies millions annually. Using machine learning and advanced data analytics, the system identifies suspicious consumption patterns and anomalies that indicate potential theft.

The project involved working with real-world power distribution data, collaborating with domain experts, and deploying a solution that provides actionable insights for field investigations. This internship project demonstrates the ability to apply AI/ML to solve complex industry problems with measurable impact.`,
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Plotly', 'SQL', 'Time Series Analysis'],
    progress: 100,
    status: 'completed',
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/electricity-theft-detection',
    category: 'data',
    timeline: {
      started: 'June 2024',
      expectedCompletion: 'August 2024'
    },
    challenges: [
      'Handling large-scale utility data',
      'Identifying subtle anomaly patterns',
      'Balancing detection sensitivity vs. false alarms',
      'Creating interpretable models for non-technical stakeholders',
      'Processing incomplete and noisy data'
    ],
    features: [
      'Anomaly detection algorithms',
      'Interactive analytics dashboard',
      'Consumption pattern visualization',
      'Automated flagging system',
      'Historical trend analysis',
      'Export reports for field teams'
    ],
    teamSize: 1,
    role: 'ML Engineer & Data Analyst (NBPDCL Intern)'
  },
  {
    id: '3',
    slug: 'mybudgetai',
    title: 'MyBudgetAI',
    shortDescription: 'Intelligent personal finance assistant that reads bank documents, categorizes expenses, and provides AI-powered spending insights.',
    fullDescription: `MyBudgetAI is a comprehensive FinTech application that transforms the way users manage their personal finances. The system automatically reads and extracts data from bank statements and financial documents, intelligently categorizes transactions, identifies spending patterns, and provides personalized optimization suggestions.

What makes this project unique is its conversational AI interface—users can chat with their financial data, ask questions like "How much did I spend on dining last month?" or "Can I afford this purchase?", and receive predictive insights about future expenses. This combines document intelligence, NLP, data analytics, and financial forecasting into one practical solution.`,
    technologies: ['Python', 'OCR (Tesseract/EasyOCR)', 'NLP', 'LangChain', 'Pandas', 'React', 'FastAPI', 'Chart.js'],
    progress: 100,
    status: 'completed',
    image: 'https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/mybudgetai',
    category: 'ai',
    timeline: {
      started: 'September 2024',
      expectedCompletion: 'December 2024'
    },
    challenges: [
      'Accurate data extraction from varied bank statement formats',
      'Building intelligent expense categorization',
      'Creating reliable spending prediction models',
      'Implementing secure document handling',
      'Designing intuitive conversational interface'
    ],
    features: [
      'Automatic bank statement parsing',
      'Smart expense categorization',
      'Spending trend analysis',
      'Budget recommendations',
      'Future expense predictions',
      'Conversational AI chat interface',
      'Visual spending dashboards',
      'Multi-currency support'
    ],
    teamSize: 1,
    role: 'Full Stack Developer & AI Engineer'
  },

  // 🟡 TIER 2 — SOLID, MODERN PROJECTS
  {
    id: '4',
    slug: 'indian-sign-language-translator',
    title: 'Indian Sign Language Translator',
    shortDescription: 'Accessibility-focused web application that translates Indian Sign Language to text/speech using computer vision and ML.',
    fullDescription: `An accessibility-driven project that breaks communication barriers for the deaf and hard-of-hearing community in India. Using computer vision and deep learning, this web application recognizes Indian Sign Language (ISL) gestures in real-time and converts them to text and speech.

This project demonstrates a strong commitment to social impact and inclusive technology. It involved training custom gesture recognition models, optimizing for real-time performance in browsers, and designing an interface that serves both ISL users and those learning the language.`,
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe', 'Flask', 'WebRTC', 'JavaScript'],
    progress: 85,
    status: 'completed',
    image: 'https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/isl-translator',
    category: 'ai',
    timeline: {
      started: 'March 2024',
      expectedCompletion: 'June 2024'
    },
    challenges: [
      'Collecting and labeling ISL gesture dataset',
      'Real-time gesture recognition with low latency',
      'Handling varying lighting and background conditions',
      'Supporting continuous gesture sequences',
      'Browser-based ML inference optimization'
    ],
    features: [
      'Real-time gesture recognition',
      'Text and speech output',
      'Support for 50+ ISL gestures',
      'Web camera integration',
      'Learning mode for ISL students',
      'Confidence scoring for predictions'
    ],
    teamSize: 1,
    role: 'ML Engineer & Web Developer'
  },
  {
    id: '5',
    slug: 'mental-health-chatbot',
    title: 'Mental Health Support Chatbot',
    shortDescription: 'Empathy-driven conversational AI that provides mental health support and encourages users to seek professional help.',
    fullDescription: `A thoughtfully designed conversational AI chatbot focused on providing emotional support and mental health resources. This project uses natural language processing to engage users in empathetic conversations, help them articulate their feelings, and provide appropriate resources.

Important: This chatbot is designed as a supportive tool and explicitly encourages users experiencing serious mental health issues to seek professional help. It demonstrates responsible AI development with a focus on user wellbeing, ethical considerations, and appropriate boundaries for AI-based mental health applications.`,
    technologies: ['Python', 'NLP', 'LangChain', 'OpenAI API', 'Flask', 'React', 'Sentiment Analysis'],
    progress: 80,
    status: 'completed',
    image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/mental-health-chatbot',
    category: 'ai',
    timeline: {
      started: 'April 2024',
      expectedCompletion: 'July 2024'
    },
    challenges: [
      'Designing empathetic and appropriate responses',
      'Implementing crisis detection and escalation',
      'Maintaining conversation context',
      'Ensuring ethical boundaries and safety',
      'Providing helpful resources without making medical claims'
    ],
    features: [
      'Empathetic conversational interface',
      'Mood tracking and analysis',
      'Resource recommendations',
      'Crisis helpline integration',
      'Conversation history',
      'Privacy-focused design',
      'Professional help encouragement'
    ],
    teamSize: 1,
    role: 'AI Developer & UX Designer'
  },
  {
    id: '6',
    slug: 'neurodoc',
    title: 'NeuroDoc',
    shortDescription: 'Document intelligence system with NotebookLM-style interaction for knowledge extraction and conversational document analysis.',
    fullDescription: `NeuroDoc is an intelligent document analysis tool inspired by NotebookLM, designed to help users extract insights from complex documents through natural conversation. Upload PDFs, research papers, or technical documentation, and NeuroDoc builds a knowledge graph that you can query conversationally.

This project showcases advanced NLP techniques including semantic search, document embeddings, and retrieval-augmented generation (RAG). It's particularly useful for students, researchers, and professionals who need to quickly understand and extract information from large documents.`,
    technologies: ['Python', 'LangChain', 'Vector DB (Pinecone)', 'OpenAI Embeddings', 'FastAPI', 'React', 'PDF Parsing'],
    progress: 100,
    status: 'completed',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/neurodoc',
    category: 'ai',
    timeline: {
      started: 'October 2024',
      expectedCompletion: 'November 2024'
    },
    challenges: [
      'Accurate document parsing and chunking',
      'Building efficient semantic search',
      'Managing vector database at scale',
      'Generating contextually relevant responses',
      'Handling multi-document queries'
    ],
    features: [
      'Multi-document upload and processing',
      'Semantic search across documents',
      'Conversational Q&A interface',
      'Citation and source tracking',
      'Summary generation',
      'Key insight extraction',
      'Export notes and findings'
    ],
    teamSize: 1,
    role: 'AI Engineer & Backend Developer'
  },

  // 🔵 TIER 3 — QUICK-BUILD / MINI PROJECTS
  {
    id: '7',
    slug: 'instagram-unfollow-checker',
    title: 'Instagram Unfollow Checker',
    shortDescription: 'Chrome extension built in ~2 hours to analyze Instagram followers and identify accounts that don\'t follow back.',
    fullDescription: `Sometimes the best projects are born from simple frustrations. I didn't want to manually check who wasn't following me back on Instagram, so I built this Chrome extension in about 2 hours.

This mini-project demonstrates the ability to rapidly prototype solutions, work with browser APIs, and apply web scraping techniques. It's a practical example of "scratching your own itch"—identifying a tedious task and automating it. While small in scope, it shows initiative, problem-solving speed, and the engineer's mindset of "build tools to make life easier."`,
    technologies: ['JavaScript', 'Chrome Extension API', 'DOM Manipulation', 'Local Storage'],
    progress: 100,
    status: 'completed',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/instagram-unfollow-checker',
    category: 'extension',
    timeline: {
      started: 'December 2024',
      expectedCompletion: 'December 2024'
    },
    challenges: [
      'Navigating Instagram\'s dynamic DOM structure',
      'Handling rate limits and loading delays',
      'Storing and comparing follower lists efficiently'
    ],
    features: [
      'Follower/following analysis',
      'Identify non-followers',
      'Quick comparison view',
      'Local data storage',
      'One-click activation'
    ],
    teamSize: 1,
    role: 'Developer (Solo Speed Build)'
  },
  {
    id: '8',
    slug: 'student-portal-system',
    title: 'Student Portal System',
    shortDescription: 'Full-stack student management system with role-based access for students and teachers to manage academics and activities.',
    fullDescription: `A comprehensive student portal system featuring separate interfaces for students and teachers. Students can view their attendance, grades, class rankings, and competition participation, while teachers have administrative capabilities to manage all these aspects.

This project demonstrates full-stack development skills, role-based authentication, and system design thinking. It addresses real-world educational management needs with a clean, intuitive interface for both user types.`,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Material-UI'],
    progress: 100,
    status: 'completed',
    image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/student-portal',
    category: 'web',
    timeline: {
      started: 'January 2024',
      expectedCompletion: 'March 2024'
    },
    challenges: [
      'Implementing secure role-based access control',
      'Designing intuitive dual interfaces',
      'Managing hierarchical data relationships',
      'Ensuring data consistency across views'
    ],
    features: [
      'Student and teacher dashboards',
      'Attendance tracking',
      'Grade management',
      'Class ranking system',
      'Competition/event management',
      'Role-based permissions',
      'Responsive design',
      'Report generation'
    ],
    teamSize: 1,
    role: 'Full Stack Developer'
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.progress > 70 || project.status === 'completed');
};