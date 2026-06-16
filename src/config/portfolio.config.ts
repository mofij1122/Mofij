// src/config/portfolio.config.ts
// ============================================================
// PORTFOLIO CONFIGURATION
// ============================================================
// This is the ONLY file you need to edit to customize your portfolio.
// All personal information, projects, skills, and content are managed here.
// ============================================================

import { PortfolioConfig } from '@/types';

export const portfolioConfig: PortfolioConfig = {
  // ============================================================
  // PERSONAL INFORMATION
  // ============================================================
  personal: {
    name: "Mofij Khan",
    firstName: "Mofij",
    lastName: "Khan",
    title: "Data Analyst | Power BI Developer | SQL & Excel Enthusiast",
    tagline: "Transforming Raw Data into Actionable Business Insights",
    shortBio: "BCA Graduate passionate about data analytics and business intelligence",
    location: "Maharashtra, India",
    email: "mofijkhan2005@gmail.com",
    phone: "+91 89836 82415",
    profileImage: "/images/ppf.png",
    resumeUrl: "/resume/Mofij_Khan_CV.pdf",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/mofij-khan-m8983",
    github: "https://github.com/mofij1122",
    instagram: "https://www.instagram.com/mofij_khan_78/",
    twitter: "",
    portfolio: "https://your-portfolio.com",
  },

  seo: {
    title: "Mofij Khan | Data Analyst & Power BI Developer",
    description: "Data Analyst and Power BI Developer based in Maharashtra, India. Specializing in transforming raw data into actionable insights through dashboards, SQL analysis, and business intelligence solutions.",
    keywords: [
      "Data Analyst",
      "Power BI Developer",
      "SQL Expert",
      "Business Intelligence",
      "Data Visualization",
      "Excel Dashboard",
      "Maharashtra",
      "India"
    ],
    ogImage: "/images/img3.png",
    siteUrl: "https://your-portfolio.com",
  },

  hero: {
    greeting: "Hello, I'm",
    typingTexts: [
      "Data Analyst",
      "Power BI Developer",
      "SQL Enthusiast",
      "Dashboard Creator",
      "Problem Solver",
      "Insight Generator"
    ],
    ctaButtons: {
      primary: { text: "View Projects", href: "#projects" },
      secondary: { text: "Download Resume", href: "/resume/Mofij_Khan_resume.pdf" },
      tertiary: { text: "Contact Me", href: "#contact" },
    },
  },

  about: {
    title: "About Me",
    subtitle: "My Journey into Data Analytics",
    paragraphs: [
      "I'm a passionate Data Analyst with a BCA degree and a deep fascination for uncovering stories hidden within data. My journey into analytics began with a simple question: 'What if we could predict business outcomes before they happen?'",
      "With expertise in Power BI, SQL, and Excel, I specialize in transforming complex datasets into clear, actionable insights that drive business decisions. I believe that every number tells a story, and my job is to be the translator between raw data and strategic action.",
      "When I'm not building dashboards or writing SQL queries, you'll find me exploring new data visualization techniques, learning about machine learning, or contributing to open-source projects. I'm driven by the impact that good data analysis can have on organizations and people's lives."
    ],
    highlights: [
      { icon: "Chart", label: "Dashboards Built", value: "25+" },
      { icon: "Database", label: "Datasets Analyzed", value: "100+" },
      { icon: "FolderKanban", label: "Projects Completed", value: "5+" },
      { icon: "Award", label: "Certifications", value: "8+" },
    ],
    strengths: [
      "Analytical Problem Solving",
      "Data Storytelling",
      "Business Intelligence",
      "Attention to Detail",
      "Cross-functional Collaboration"
    ],
  },

  skills: {
    title: "Skills & Expertise",
    subtitle: "Technologies I work with",
    categories: [
      {
        name: "Data Analysis & BI",
        skills: [
          { name: "Power BI", level: 90, icon: "PowerBI" },
          { name: "SQL", level: 85, icon: "Database" },
          { name: "Excel", level: 95, icon: "Excel" },
          { name: "Data Visualization", level: 88, icon: "BarChart" },
          { name: "Statistics", level: 80, icon: "TrendingUp" },
          { name: "Data Cleaning", level: 85, icon: "Filter" },
        ]
      },
      {
        name: "Programming",
        skills: [
          { name: "Python", level: 75, icon: "Python" },
          { name: "Pandas", level: 70, icon: "Table" },
          { name: "NumPy", level: 65, icon: "Calculator" },
          { name: "HTML/CSS", level: 70, icon: "Code" },
          { name: "JavaScript", level: 60, icon: "FileCode" },
        ]
      },
      {
        name: "Tools & Platforms",
        skills: [
          { name: "Git", level: 75, icon: "Git" },
          { name: "GitHub", level: 80, icon: "GitHub" },
          { name: "VS Code", level: 85, icon: "Terminal" },
          { name: "Jupyter", level: 75, icon: "BookOpen" },
        ]
      }
    ],
  },

  projects: {
    title: "Featured Projects",
    subtitle: "A showcase of my data analytics work",
    items: [
     {
        id: "datavisionx",
        title: "DataVisionX - Business Intelligence Dashboard",
        description: "Interactive data analytics and business intelligence platform that transforms raw business data into meaningful insights through dynamic dashboards and visual reports.",
        longDescription: "Developed a comprehensive business intelligence solution using Power BI, SQL, and Excel. The project focuses on data cleaning, analysis, KPI monitoring, and interactive visualizations to support business decision-making. Users can track performance metrics, identify trends, and generate actionable insights through an intuitive dashboard interface.",
        image: "/images/projects/Datavisionx.png",
        techStack: ["Power BI", "SQL", "Excel", "Data Analytics", "Data Visualization"],
        achievements: [
          "Built interactive KPI dashboards",
          "Improved business reporting efficiency",
          "Created dynamic visualizations for decision-making",
          "Automated data analysis and reporting workflows"
        ],
        githubUrl: "https://github.com/mofij1122/DataVisionX",
        liveUrl: "",
        category: "Data Analytics",
        featured: true,
      },
            {
      id: "club-committee-website",
      title: "Club & Committee Management Website",
      description: "A Flask-based web platform designed to manage college clubs, events, and student participation through an interactive and user-friendly interface.",
      longDescription: "Developed a full-stack web application that enables students to explore college clubs, view upcoming events, and submit club membership requests. The platform streamlines club management and improves student engagement through a centralized system. Built using Flask and SQLite with a responsive frontend for seamless access across devices.",
      image: "/images/projects/club.png",
      techStack: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
      achievements: [
      "Designed and developed a complete club management platform",
      "Implemented event showcase and club information modules",
      "Created a student join-request system with database integration",
      "Built responsive user interfaces for better accessibility",
      "Managed club and event data using SQLite database"
      ],
      githubUrl: "https://github.com/mofij1122/Club-Committe-Website",
      liveUrl: "",
      category: "Web Development",
      featured: true,
      }
 ,
      {
        id: "storebook-fms",
        title: "Storebook Financial Management",
        description: "Full-featured financial management system for small businesses with income/expense tracking, financial statements, and budget analysis.",
        longDescription: "Created an end-to-end financial management solution that helps small business owners track finances and make data-driven decisions.",
        image: "/images/projects/storebook.png",
        techStack: ["Excel", "VBA", "Power Query", "Charts"],
        achievements: [
          "Used by 10+ small businesses",
          "Automated financial reporting",
          "Real-time budget tracking"
        ],
        githubUrl: "https://github.com/mofij1122/storebook-fms",
        liveUrl: "",
        category: "Excel Solutions",
        featured: true,
      },
              {
        id: "retail-sales-eda",
        title: "Retail Sales Data Analysis",
        description: "Performed exploratory data analysis (EDA) on retail sales data to uncover customer behavior, product performance, and sales trends using Python and data visualization techniques.",
        longDescription: "This project focused on analyzing retail transaction data to generate actionable business insights. Using Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn, the dataset was cleaned, transformed, and visualized to identify customer demographics, top-performing product categories, monthly sales trends, and revenue patterns. The analysis helped demonstrate how data-driven decisions can improve customer retention, inventory planning, and overall business performance.",
        image: "/images/projects/retail1.png",
        techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook"
        ],
        achievements: [
        "Performed complete data cleaning and preprocessing",
        "Created visualizations for customer demographics and sales trends",
        "Analyzed product category performance and revenue generation",
        "Generated business recommendations based on data insights",
        "Developed correlation heatmaps and customer behavior analysis"
        ],
        githubUrl:"https://github.com/mofij1122/OIBSIP_DataAnalytics_Task1_RetailSalesEDA",
        liveUrl: "",
        category: "Data Analytics",
        featured: true,
        },
              {
        id: "customer-segmentation",
        title: "Customer Segmentation Analysis",
        description: "Implemented K-Means Clustering to segment customers based on Annual Income and Spending Score, helping businesses understand customer behavior and optimize marketing strategies.",
        longDescription: "This project applies unsupervised machine learning techniques to group customers into meaningful segments. Using K-Means Clustering, customers were classified into different categories such as high-income high-spending customers, potential customers, loyal customers, and low-engagement customers. The project demonstrates practical applications of customer analytics and data-driven marketing.",
        image: "/images/projects/customer.png",
        techStack: [
          "Python",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Scikit-Learn",
          "K-Means Clustering"
        ],
        achievements: [
          "Applied K-Means Clustering for customer segmentation",
          "Used the Elbow Method to determine optimal clusters",
          "Visualized customer groups and cluster centroids",
          "Identified high-value and potential customer segments",
          "Generated actionable business recommendations"
        ],
        githubUrl: "https://github.com/mofij1122/OIBSIP_DataAnalytics_Task2_CustomerSegmentation",
        liveUrl: "",
        category: "Machine Learning",
        featured: true,
      },
         {
        id: "house-price-prediction",
        title: "House Price Prediction using Linear Regression",
        description: "Built a machine learning model to predict house prices using housing features such as area, bedrooms, bathrooms, parking facilities, and amenities.",
        longDescription: "This project focuses on predictive analytics in the real estate domain. After preprocessing housing data and converting categorical variables, a Linear Regression model was trained to estimate property prices. The model was evaluated using R² Score and Mean Squared Error, providing insights into factors that significantly influence housing prices.",
        image: "/images/projects/house1.png",
        techStack: [
          "Python",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Scikit-Learn",
          "Linear Regression"
        ],
        achievements: [
          "Performed data preprocessing and feature engineering",
          "Built and trained a Linear Regression model",
          "Evaluated model performance using R² Score and MSE",
          "Visualized Actual vs Predicted house prices",
          "Generated insights for real estate decision-making"
        ],
        githubUrl: "https://github.com/mofij1122/OIBSIP_DataAnalytics_Task3_HousePricePrediction",
        liveUrl: "",
        category: "Machine Learning",
        featured: true,
      },
    ],
  },

  experience: {
    title: "Professional Experience",
    subtitle: "My career journey",
    items: [
      {
        id: "exp-1",
        title: "Data Analyst Intern",
        company: "Plexus Pvt. Ltd.",
        location: "Pune, India",
        type: "Internship",
        startDate: "2025-11",
        endDate: "2025-12",
        current: false,
        description: "Worked on business intelligence projects, creating dashboards and analyzing data to support decision-making.",
        responsibilities: [
          "Developed Power BI dashboards for sales and marketing teams",
          "Performed SQL queries for data extraction and analysis",
          "Automated Excel reports saving 15+ hours weekly",
          "Collaborated with cross-functional teams on data projects"
        ],
        technologies: ["Power BI", "SQL", "Excel", "Python"],
      },
      {
        id: "exp-2",
        title: "Freelance Data Analyst",
        company: "Self-Employed",
        location: "Remote",
        type: "Freelance",
        startDate: "2026-02",
        endDate: "",
        current: true,
        description: "Providing data analysis and visualization services to small businesses and startups.",
        responsibilities: [
          "Create custom dashboards and reports for clients",
          "Perform ad-hoc data analysis and insights generation",
          "Build automated Excel solutions and tools",
          "Consult on data strategy and best practices"
        ],
        technologies: ["Power BI", "Excel", "SQL", "Python"],
      },
    ],
  },

  education: {
    title: "Education",
    subtitle: "Academic background",
    items: [
      {
        id: "edu-1",
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Sadguru Gadage Maharaj College, Karad",
        location: "Maharashtra, India",
        startDate: "2023",
        endDate: "2026",
        description: "Focused on computer science fundamentals, database management, and programming.",
        achievements: [
          "Graduated with First Class",
          "Specialized in Data Management",
          "Completed capstone project on Business Analytics"
        ],
        gpa: "9.1 CGPA",
      },
    ],
    certifications: [
      {
        id: "cert-1",
        name: "Microsoft Power BI Desktop for Business Intelligence",
        issuer: "Udemy",
        date: "2025",
        credentialUrl: "https://ude.my/UC-046934d0-9038-4346-90b9-3e455d74bcc7",
        image: "/images/certs/Udemy.png",
      },
      {
        id: "cert-2",
        name: "Deloitte Data Analytics Job Simulation",
        issuer: "Deloitte",
        date: "2025",
        credentialUrl: "694f52fff76d215bcf5044f2",
        image: "/images/certs/deloitte.png",
      },
      {
        id: "cert-3",
        name: "Internship Certificate",
        issuer: "Plexus Skills Pvt. Ltd.",
        date: "2025",
        credentialUrl: "",
        image: "/images/certs/",
      },
    ],
  },

  achievements: {
    title: "Achievements & Recognition",
    subtitle: "Milestones in my journey",
    items: [
            {
        id: "ach-1",
        title: "1st Rank - Quiz Competition",
        description: "Secured 1st position in an inter-college quiz competition, demonstrating strong analytical thinking, problem-solving, and technical knowledge.",
        date: "2024",
        icon: "Trophy",
      },
      {
        id: "ach-2",
        title: "2nd Rank - Web Development Competition",
        description: "Achieved 2nd position in a web development competition for designing and developing an innovative, user-friendly web application.",
        date: "2025",
        icon: "Silver-Medal",
      },
      {
        id: "ach-3",
        title: "Best Poster Presentation Award",
        description: "Received the Best Poster Presentation Award for effectively presenting innovative ideas, research findings, and technical concepts with clarity and creativity.",
        date: "2026",
        icon: "Medal",
      },
    ],
  },

  services: {
    title: "Services",
    subtitle: "How I can help you",
    items: [
      {
        id: "svc-1",
        title: "Data Analysis",
        description: "Transform raw data into actionable insights through comprehensive analysis and statistical modeling.",
        icon: "BarChart",
        features: ["Exploratory Data Analysis", "Statistical Analysis", "Trend Identification", "Data Cleaning"],
      },
      {
        id: "svc-2",
        title: "Dashboard Development",
        description: "Create interactive, visually stunning dashboards that tell your data story effectively.",
        icon: "Layout",
        features: ["Power BI Dashboards", "Excel Dashboards", "Real-time Analytics", "Mobile-friendly Design"],
      },
      {
        id: "svc-3",
        title: "Power BI Reporting",
        description: "Build enterprise-grade Power BI solutions with advanced DAX calculations and data modeling.",
        icon: "FileText",
        features: ["DAX Calculations", "Data Modeling", "Report Automation", "Performance Optimization"],
      },
      {
        id: "svc-4",
        title: "Excel Automation",
        description: "Automate repetitive tasks and create powerful Excel-based solutions for your business.",
        icon: "Cog",
        features: ["VBA Macros", "Power Query", "Automated Reports", "Custom Functions"],
      },
      {
        id: "svc-5",
        title: "SQL Data Management",
        description: "Design and optimize databases, write complex queries, and ensure data integrity.",
        icon: "Database",
        features: ["Query Optimization", "Database Design", "Data Extraction", "Performance Tuning"],
      },
    ],
  },

 testimonials: {
  title: "Mentor & Faculty Feedback",
  subtitle: "Academic and project-based recommendations",
  items: [
    {
      id: "test-1",
      name: "Pushparaj Singh Rathore",
      role: "Mentor",
      company: "Plexus Skills Pvt. Ltd.",
      image: "/images/testimonials/pushparaj.jpg",
      text: "Mofij demonstrated excellent analytical and problem-solving skills throughout his projects. His dedication to learning new technologies and delivering quality work was commendable.",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Ashwini Patil",
      role: "BCA Department",
      company: "Sadguru Gadage Maharaj College",
      image: "/images/testimonials/patil.jpg",
      text: "A hardworking and enthusiastic student who consistently showed strong technical aptitude in web development, database management, and data analytics projects.",
      rating: 5,
    },
    {
      id: "test-3",
      name: "Naina Thorat",
      role: "Academic Evaluator",
      company: "BCA Program",
      image: "/images/testimonials/thorat.jpg",
      text: "His project presentations and technical implementations reflected creativity, attention to detail, and a solid understanding of modern development practices.",
      rating: 5,
    },
  ],
},
  contact: {
    title: "Get In Touch",
    subtitle: "Let's discuss your next project",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
    formFields: {
      name: { label: "Your Name", placeholder: "" },
      email: { label: "Email Address", placeholder: "" },
      subject: { label: "Subject", placeholder: "Project Inquiry" },
      message: { label: "Message", placeholder: "Tell me about your project..." },
    },
    submitButton: "Send Message",
    successMessage: "Thank you! Your message has been sent successfully.",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Mofij Khan. All rights reserved.`,
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    tagline: "Built with ❤️ and lots of ☕",
  },

  theme: {
    defaultMode: "dark",
    colors: {
      primary: "#8B5CF6",
      secondary: "#06B6D4",
      accent: "#3B82F6",
      background: {
        dark: "#0A0A0F",
        light: "#FAFAFA",
      },
      surface: {
        dark: "#12121A",
        light: "#FFFFFF",
      },
      text: {
        dark: "#E2E8F0",
        light: "#1E293B",
      },
    },
    fonts: {
      heading: "Sora",
      body: "Inter",
      mono: "JetBrains Mono",
    },
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

export default portfolioConfig;
