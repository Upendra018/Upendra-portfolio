export const ROLES = ["Java Developer", "Spring Boot Engineer", "React Developer", "REST API Builder"];

export const NAV_ITEMS = [
  { id: "highlights", label: "Highlights" },
  { id: "skills", label: "Skills" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
export const NAV_IDS = NAV_ITEMS.map((n) => n.id);

export const STATS = [
  { num: "4+", label: "projects shipped" },
  { num: "2", label: "db engines" },
  { num: "10+", label: "tools & frameworks" },
  { num: "3", label: "languages spoken" },
];

export const HIGHLIGHTS = [
  {
    title: "Builds across the full stack",
    body: "I work across Java, Spring Boot, React, and relational databases, connecting backend services, APIs, data, and user interfaces into complete applications.",
  },
  {
    title: "Designs for maintainability",
    body: "I focus on clean architecture, separation of concerns, reusable components, and well-structured APIs that remain easy to understand and extend.",
  },
  {
    title: "Tests and troubleshoots systematically",
    body: "I use JUnit and Mockito for automated testing, Log4j and Logback for application logging, and Postman and Swagger to validate and troubleshoot APIs.",
  },
  {
    title: "Understands the data behind the application",
    body: "I work with MySQL and PostgreSQL, designing relational schemas and writing queries with attention to data consistency, performance, and application requirements.",
  },
  {
    title: "Improves through every project",
    body: "I continuously refine my approach to development by exploring better patterns, improving application reliability, and turning practical experience into stronger engineering decisions.",
  },
];
export const SKILL_GROUPS = [
  { group: "Languages", items: ["Core Java", "JavaScript"] },
  { group: "Backend", items: ["Spring Boot", "Hibernate", "Microservices", "Apache Tomcat"] },
  { group: "Frontend", items: ["React.js", "Hooks", "React Router", "Vite", "HTML / CSS"] },
  { group: "Data", items: ["MySQL", "PostgreSQL", "Query Optimization"] },
  { group: "Testing & Quality", items: ["JUnit", "Mockito", "Log4j", "Logback"] },
  { group: "Tooling", items: ["Git / GitHub", "Maven", "Postman", "Swagger", "JIRA", "IntelliJ IDEA", "Eclipse / STS", "VS Code", "pgAdmin"] },
];

export const RESEARCH = [
  { tag: "Performance", title: "Query & N+1 investigation in Hibernate", body: "Studied lazy vs. eager fetch strategies and JPA query plans to identify N+1 query patterns, then benchmarked fixes using batch fetching and projection queries against MySQL and PostgreSQL." },
  { tag: "Frontend", title: "React rendering & bundle-size tradeoffs", body: "Compared Create React App vs. Vite build pipelines for cold-start and HMR speed, and evaluated memoization, code-splitting, and lazy loading for reducing unnecessary re-renders in component-heavy UIs." },
  { tag: "Architecture", title: "Monolith-to-microservices decision points", body: "Read through service-decomposition patterns and REST vs. messaging tradeoffs to understand when splitting a Spring Boot monolith actually pays off versus adding operational overhead." },
  { tag: "Testing", title: "Test pyramid discipline with JUnit & Mockito", body: "Explored how to keep unit tests fast and isolated using Mockito mocks versus when integration tests with an in-memory or test-container database give more real signal." },
  { tag: "Security", title: "Role-based access control patterns", body: "Investigated approaches to authentication and role-based authorization in Spring Security, applied while building access control for admin/customer roles in personal projects." },
];

export const PROJECTS = [
  {
    name: "NPM Dashboard",
    desc: "A monitoring dashboard for processes running across multiple VMs in production — flags stakeholders by email the moment a process or interface drifts from expected behavior, with configurable thresholds and a live status UI.",
    points: [
      "Analyzed system requirements (SRD) and contributed to solution design",
      "Built RESTful web services and business logic for assigned modules",
      "Implemented Hibernate components for data persistence",
      "Coordinated with onsite and offshore teams across the delivery cycle",
    ],
    stack: ["Java", "JSP", "Spring Boot", "React.js", "Microservices", "Hibernate", "REST APIs", "JUnit", "Maven", "Git", "JIRA"],
  },
  {
    name: "Ancient Barter System",
    desc: "A barter exchange platform that lets users list and trade goods and services directly, without money changing hands — built to explore secure transaction flows without a payment gateway in the loop.",
    points: [
      "Implemented user authentication and role-based access for secure transactions",
      "Built RESTful APIs for item listing and trading",
      "Designed and optimized the database schema for efficient retrieval",
    ],
    stack: ["Java 8", "Spring Boot", "MySQL", "React.js", "JUnit", "Log4j", "REST APIs", "Maven", "Git", "STS", "JIRA"],
  },
  {
    name: "E-commerce Web Application",
    desc: "A full-stack e-commerce platform covering user management, a product catalog, shopping cart, and order processing end to end.",
    points: [
      "Designed a MySQL schema with one-to-many and many-to-many relationships across users, products, and orders",
      "Built RESTful APIs for CRUD operations, order placement, and stock management",
      "Implemented role-based access control for customer and admin users",
    ],
    stack: ["Java", "Spring Boot", "MySQL", "Git", "Hibernate", "REST APIs", "Postman", "Maven"],
  },
  {
    name: "Nazaara — OTT Streaming Platform",
    desc: "A video streaming platform with subscription-based access — covering content browsing, user accounts, and paid plans gating premium content.",
    points: [
      "Built RESTful APIs in Spring Boot for content catalog, user accounts, and subscription plans",
      "Implemented subscription/payment-gated access to premium video content",
      "Designed the MySQL schema for users, subscriptions, and content metadata",
      "Wrote unit and integration tests with JUnit and Mockito covering subscription and access-control logic",
      "Added structured logging with Log4j/Logback for request tracing and debugging in the backend",
      "Built the React frontend for browsing and playback with subscription-aware UI states",
    ],
    stack: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs", "JUnit", "Mockito", "Log4j / Logback", "Maven", "Git", "Postman"],
  },
];

export const EDUCATION = [
  { year: "2020–2024", degree: "B.Tech, Computer Science and Engineering", school: "Bharath Institute of Higher Education and Research", score: "CGPA 8.3" },
  { year: "2018–2020", degree: "Intermediate", school: "The Nandyala Junior College", score: "CGPA 7.63" },
  { year: "2017–2018", degree: "SSC", school: "A.P. Model School", score: "CGPA 7.5" },
];

export const STRENGTHS = [
  "Self-motivated — learns new tools and unblocks itself without hand-holding",
  "Strong foundation in Java, Spring Boot, Hibernate, RESTful APIs, and SQL",
  "Comfortable owning features end-to-end, from database schema and API design to the React UI",
  "Able to work across backend and frontend layers, connecting APIs, databases, and React interfaces",
  "Strong understanding of OOP concepts, data structures, and common design patterns",
  "Experienced in debugging and troubleshooting issues across the application stack",
  "Comfortable working with Git, GitHub, Maven, Postman, and Agile development practices",
  "Familiar with application security concepts including JWT-based authentication and authorization",
  "Self-driven problem solver who can independently investigate issues and find practical solutions",
  "Quick learner with the ability to adapt to new technologies and development tools",
];

export const LANGUAGES = [
  { name: "English", tint: "cyan" },
  { name: "Telugu", tint: "violet" },
  { name: "Tamil", tint: "cyan" },
];

export const CONTACT = {
  name: "Upendra Bondala",
  email: "bondalaupendra03@gmail.com",
  phone: "+91 7660076315",
  whatsapp: "+91 7660076315",
  github: "https://github.com/Upendra018",
  linkedin: "https://www.linkedin.com/in/upendrabondala/",
  linkedinLabel: "in/upendra-bondala",
};
