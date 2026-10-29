export const projects = [
  {
    id: "furnicart",
    title: "FurniCart",
    subtitle: "Full-Stack Furniture E-Commerce Platform",
    featured: true,
    tagline: "Production-ready furniture shopping platform with Razorpay online payments, order tracking, and admin management",
    description: "A comprehensive furniture shopping application built with Django REST Framework and React. It features a fully decoupled architecture with dynamic product variants, JWT authentication, persistent cart and wishlist, checkout with address management, Razorpay payment gateway integration, order tracking, customer wallet with refund processing, and an administrative control panel.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "Vite",
      "PostgreSQL",
      "Tailwind CSS",
      "Razorpay",
      "JWT Auth",
      "RESTful APIs"
    ],
    features: [
      "Product Catalog & Variants: Sizing, materials, color variants, and dynamic inventory tracking",
      "User Authentication: Secure JWT token-based authentication, session management, and route protection",
      "Cart & Wishlist: Real-time price calculation, stock validation, and persistent user wishlist",
      "Checkout & Address Management: Multi-address book, order summary, and billing validation",
      "Razorpay Online Payments: Secure checkout workflow with cryptographic signature verification and receipts",
      "Order Tracking & History: Real-time order state updates, lifecycle tracking, and invoice records",
      "Customer Wallet & Refunds: In-app wallet system for immediate cancellation refunds and re-usable balances",
      "Admin Control Panel: Comprehensive administrative dashboard for catalog CRUD, order fulfillment, and user oversight"
    ],
    architecture: [
      "Decoupled Architecture: React single-page frontend communicating with Django REST Framework backend via secure REST APIs",
      "Relational Modeling: Normalized PostgreSQL database schemas with foreign-key constraints, indexes, and ACID transactions",
      "Payment Orchestration: Server-side Razorpay order generation, client payment modal, and server signature verification",
      "Security & Reliability: Token expiration guards, CORS policies, CSRF protection, and input sanitization"
    ],
    metrics: [
      { label: "Backend", value: "Django REST" },
      { label: "Frontend", value: "React + Vite" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Payments", value: "Razorpay" },
      { label: "Security", value: "JWT Auth" },
      { label: "Architecture", value: "Decoupled SPA" }
    ],
    demoUrl: "https://furnicart.parvathi.online/",
    githubUrl: "https://github.com/parvathyg17/furnicart_backend_repo",
    frontendGithubUrl: "https://github.com/parvathyg17/furnicart-frontend-repo",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    accentColor: "#06b6d4"
  },
  {
    id: "medq",
    title: "MedQ",
    subtitle: "Medical Equipment E-Commerce Platform",
    featured: false,
    tagline: "Online medical equipment procurement platform for doctors and dealers",
    description: "A specialized medical equipment online platform built with Django REST Framework, React, and PostgreSQL where dealers and doctors can purchase medical equipment. It features product listings with specifications, user authentication, wishlist, cart, checkout, order tracking, and a return management system.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "PostgreSQL",
      "RESTful APIs",
      "Tailwind CSS"
    ],
    features: [
      "Medical equipment catalog with technical specifications and category filtering",
      "Doctor and dealer account authentication with role-based purchasing",
      "Persistent wishlist and cart management for medical supplies",
      "Secure checkout workflow with address and order summary validation",
      "Real-time order tracking, history, and status updates",
      "Equipment return request management and refund processing"
    ],
    architecture: [
      "Decoupled architecture connecting a React frontend with a Django REST Framework API backend",
      "Normalized PostgreSQL relational database modeling equipment inventory, orders, and returns",
      "Stateless RESTful APIs with input sanitization and secure transaction handling"
    ],
    metrics: [
      { label: "Backend", value: "Python / DRF" },
      { label: "Frontend", value: "React" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Domain", value: "Medical E-Commerce" }
    ],
    demoUrl: null,
    githubUrl: "https://github.com/parvathyg17/Medq_backend",
    frontendGithubUrl: "https://github.com/parvathyg17/Medq_frontend",
    gradient: "from-purple-500 via-violet-600 to-indigo-800",
    accentColor: "#8b5cf6"
  }
];
