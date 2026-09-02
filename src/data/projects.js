export const projects = [
  {
    id: "furnicart",
    title: "FurniCart",
    subtitle: "Enterprise Full-Stack E-Commerce Platform",
    featured: true,
    tagline: "High-performance full-stack furniture commerce with real-time checkout & admin operations",
    description: "FurniCart is an end-to-end modern e-commerce solution engineered with a decoupled Django REST Framework backend and a blazing-fast React + Vite frontend. It features secure JWT authentication, dynamic product variants, promotional coupon rules, an integrated customer wallet, automated refund lifecycles, and seamless Razorpay payment gateway orchestration.",
    technologies: [
      "React",
      "Vite",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "JWT Authentication",
      "Razorpay",
      "Tailwind CSS"
    ],
    features: [
      "User authentication",
      "Product catalog",
      "Product variants",
      "Product filtering and sorting",
      "Cart",
      "Wishlist",
      "Checkout",
      "Coupons",
      "Orders",
      "Wallet",
      "Refund system",
      "Admin management"
    ],
    metrics: [
      { label: "Architecture", value: "Decoupled SPA + REST" },
      { label: "Payment API", value: "Razorpay Sandbox / Live" },
      { label: "Database", value: "PostgreSQL Relational" },
      { label: "Security", value: "JWT + CSRF Protected" }
    ],
    demoUrl: "https://furnicart.parvathi.online",
    githubUrl: "https://github.com/parvathyg17/furnicart_backend_repo",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    accentColor: "#06b6d4"
  },
  {
    id: "medq",
    title: "MedQ",
    subtitle: "Smart Healthcare Queue & Appointment Portal",
    featured: false,
    tagline: "Streamlining outpatient flow, clinical consultation queues, and patient records",
    description: "MedQ is a healthcare web platform developed using Spring Boot, React, and PostgreSQL designed to eliminate long clinical wait times. It features real-time queue position tracking, doctor schedule synchronization, digital prescription access, and secure patient health data handling.",
    technologies: [
      "Spring Boot",
      "Java",
      "React",
      "PostgreSQL",
      "REST APIs",
      "Spring Data JPA",
      "Tailwind CSS"
    ],
    features: [
      "Doctor appointment scheduling with automatic queue slot allotment",
      "Real-time queue status tracker for OPD patients",
      "Doctor portal for viewing queued patient vitals and consultations",
      "Digital prescription storage and diagnostic history logs",
      "Role-based authentication for Patients, Doctors, and Reception Staff"
    ],
    metrics: [
      { label: "Backend", value: "Spring Boot 3.x" },
      { label: "ORM", value: "Hibernate / JPA" },
      { label: "Frontend", value: "React 19" },
      { label: "Database", value: "PostgreSQL" }
    ],
    gradient: "from-purple-500 via-violet-600 to-indigo-800",
    accentColor: "#8b5cf6"
  },
  {
    id: "feedu",
    title: "FeedU",
    subtitle: "Full-Stack Feedback & Sentiment Intelligence Platform",
    featured: false,
    tagline: "Actionable institutional feedback collection and automated statistical reporting",
    description: "FeedU is a full-stack feedback evaluation platform built with Django REST Framework and React. It empowers educational institutions and organizations to collect structured, anonymous feedback, analyze satisfaction scores, and generate automated visual reports for administration.",
    technologies: [
      "Django",
      "Django REST Framework",
      "Python",
      "React",
      "PostgreSQL",
      "Chart.js",
      "Tailwind CSS"
    ],
    features: [
      "Customizable feedback survey creator with Likert and open-ended questions",
      "Anonymous submission protocol ensuring candid responses",
      "Interactive administrative dashboard with aggregated satisfaction metrics",
      "Automated PDF & CSV reporting for institutional audits",
      "Role-based access permissions for Administrators, Faculty, and Students"
    ],
    metrics: [
      { label: "Backend", value: "Django REST" },
      { label: "Analysis", value: "Automated Aggregation" },
      { label: "Frontend", value: "React SPA" },
      { label: "Database", value: "PostgreSQL" }
    ],
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    accentColor: "#10b981"
  }
];
