export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Databases" },
  { id: "tools", label: "Tools" },
  { id: "cs", label: "Computer Science" },
];

export const skills = [
  // Languages
  {
    name: "Python",
    category: "languages",
    level: "Advanced",
    icon: "Code2",
    color: "#38bdf8",
    bgGlow: "rgba(56, 189, 248, 0.15)",
    tag: "Primary Language",
    description: "Core language for backend development, REST API engineering, and algorithmic problem solving."
  },
  {
    name: "JavaScript",
    category: "languages",
    level: "Proficient",
    icon: "FileCode2",
    color: "#facc15",
    bgGlow: "rgba(250, 204, 21, 0.15)",
    tag: "ES6+ / Web",
    description: "Modern JavaScript for interactive client applications, asynchronous flows, and React integration."
  },
  {
    name: "SQL",
    category: "languages",
    level: "Proficient",
    icon: "Database",
    color: "#0284c7",
    bgGlow: "rgba(2, 132, 199, 0.15)",
    tag: "Relational Queries",
    description: "Writing structured queries, filtering, indexing, multi-table joins, and data manipulations."
  },

  // Backend
  {
    name: "Django",
    category: "backend",
    level: "Advanced",
    icon: "ShieldAlert",
    color: "#10b981",
    bgGlow: "rgba(16, 185, 129, 0.15)",
    tag: "Web Framework",
    description: "Building scalable web services with Django ORM, authentication, middleware, and admin management."
  },
  {
    name: "Django REST Framework",
    category: "backend",
    level: "Advanced",
    icon: "Network",
    color: "#059669",
    bgGlow: "rgba(5, 150, 105, 0.15)",
    tag: "API Engine",
    description: "Developing RESTful APIs with ModelSerializers, ViewSets, token authentication, and pagination."
  },
  {
    name: "REST APIs",
    category: "backend",
    level: "Advanced",
    icon: "Waypoints",
    color: "#8b5cf6",
    bgGlow: "rgba(139, 92, 246, 0.15)",
    tag: "API Architecture",
    description: "Designing clean HTTP contracts, standard status codes, CRUD operations, and stateless endpoints."
  },

  // Frontend
  {
    name: "React",
    category: "frontend",
    level: "Advanced",
    icon: "Atom",
    color: "#06b6d4",
    bgGlow: "rgba(6, 182, 212, 0.15)",
    tag: "UI Library",
    description: "Creating modular single-page web applications using hooks, state management, and reusable components."
  },
  {
    name: "HTML",
    category: "frontend",
    level: "Proficient",
    icon: "Layout",
    color: "#ea580c",
    bgGlow: "rgba(234, 88, 12, 0.15)",
    tag: "Structure",
    description: "Structuring accessible, semantic web layouts following modern HTML5 web standards."
  },
  {
    name: "CSS",
    category: "frontend",
    level: "Proficient",
    icon: "Layout",
    color: "#2563eb",
    bgGlow: "rgba(37, 99, 235, 0.15)",
    tag: "Styling",
    description: "Crafting responsive layouts, media queries, flexbox, grid systems, and custom styling."
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Advanced",
    icon: "Layers",
    color: "#38bdf8",
    bgGlow: "rgba(56, 189, 248, 0.15)",
    tag: "Utility Styling",
    description: "Rapidly styling clean, responsive, and consistent user interfaces using utility-first classes."
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "database",
    level: "Advanced",
    icon: "Database",
    color: "#3b82f6",
    bgGlow: "rgba(59, 130, 246, 0.15)",
    tag: "Relational DB",
    description: "Schema modeling, relational constraints, indexing, ACID transactions, and query optimization."
  },
  {
    name: "MySQL",
    category: "database",
    level: "Proficient",
    icon: "HardDrive",
    color: "#0284c7",
    bgGlow: "rgba(2, 132, 199, 0.15)",
    tag: "Relational DB",
    description: "Relational database design, foreign keys, table normalization, and reliable storage."
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    level: "Advanced",
    icon: "GitBranch",
    color: "#f43f5e",
    bgGlow: "rgba(244, 63, 94, 0.15)",
    tag: "Version Control",
    description: "Source code version control, branching workflows, merging, and commit history discipline."
  },
  {
    name: "GitHub",
    category: "tools",
    level: "Advanced",
    icon: "GitBranch",
    color: "#e2e8f0",
    bgGlow: "rgba(226, 232, 240, 0.15)",
    tag: "Collaboration",
    description: "Managing remote repositories, pull requests, issue tracking, code reviews, and project collaboration."
  },
  {
    name: "Linux",
    category: "tools",
    level: "Proficient",
    icon: "Terminal",
    color: "#eab308",
    bgGlow: "rgba(234, 179, 8, 0.15)",
    tag: "Environment",
    description: "Navigating Unix/Linux environments, file system operations, command-line tools, and permissions."
  },
  {
    name: "AWS EC2",
    category: "tools",
    level: "Intermediate",
    icon: "Cloud",
    color: "#f59e0b",
    bgGlow: "rgba(245, 158, 11, 0.15)",
    tag: "Cloud Hosting",
    description: "Configuring and deploying web server instances and application environments in the cloud."
  },
  {
    name: "Vercel",
    category: "tools",
    level: "Proficient",
    icon: "Box",
    color: "#a855f7",
    bgGlow: "rgba(168, 85, 247, 0.15)",
    tag: "Deployment",
    description: "Automated continuous deployment, hosting frontend applications, and managing serverless endpoints."
  },
  {
    name: "Nginx",
    category: "tools",
    level: "Intermediate",
    icon: "Server",
    color: "#16a34a",
    bgGlow: "rgba(22, 163, 74, 0.15)",
    tag: "Web Server",
    description: "Setting up reverse proxy rules, handling client requests, and serving static web assets."
  },

  // Computer Science
  {
    name: "Data Structures & Algorithms",
    category: "cs",
    level: "Proficient",
    icon: "Cpu",
    color: "#06b6d4",
    bgGlow: "rgba(6, 182, 212, 0.15)",
    tag: "Core CS",
    description: "Applying arrays, linked lists, trees, graphs, sorting, searching, and Big-O efficiency analysis."
  },
  {
    name: "OOP",
    category: "cs",
    level: "Advanced",
    icon: "Box",
    color: "#8b5cf6",
    bgGlow: "rgba(139, 92, 246, 0.15)",
    tag: "Design Paradigm",
    description: "Applying encapsulation, inheritance, polymorphism, and abstraction to write maintainable code."
  },
  {
    name: "DBMS",
    category: "cs",
    level: "Advanced",
    icon: "Database",
    color: "#3b82f6",
    bgGlow: "rgba(59, 130, 246, 0.15)",
    tag: "Systems",
    description: "Understanding transaction ACID properties, concurrency control, normalization, and relational models."
  },
  {
    name: "Operating Systems",
    category: "cs",
    level: "Proficient",
    icon: "Terminal",
    color: "#10b981",
    bgGlow: "rgba(16, 185, 129, 0.15)",
    tag: "Fundamentals",
    description: "Understanding core OS concepts: processes, threads, concurrency, memory allocation, and file systems."
  }
];
