
import type { Project } from "@/types";

export const featuredProjects: Project[] = [
  // CYBERSECURITY
  {
    id: "cs-01",
    title: "Operation Silent Intrusion",
    category: "cybersecurity",
    categoryLabel: "Ethical Hacking",
    description:
      "A practical security assessment project covering reconnaissance, enumeration, vulnerability identification, security testing, attack analysis, and professional remediation recommendations.",
    image: "/images/projects/Silent%20Intrusion.png",
    href: "https://github.com/Iconic-PC/Operation-Silent-Intrusion",
  },
  {
    id: "cs-02",
    title: "Operation Shadow Drop",
    category: "cybersecurity",
    categoryLabel: "Digital Forensics",
    description:
      "A digital investigation project focused on evidence collection, forensic analysis, investigation methodology, incident reconstruction, findings, and security recommendations.",
    image: "/images/projects/shadow-drop.png",
    href: "https://github.com/Iconic-PC/Operation-Shadow-Drop",
  },
  {
    id: "cs-03",
    title: "TechSecure Incident Response",
    category: "cybersecurity",
    categoryLabel: "Incident Response",
    description:
      "A security incident investigation involving Windows Server 2019 and IIS, covering event analysis, attack investigation, incident documentation, and mitigation strategies.",
    href: "https://github.com/Iconic-PC/TechSecure-Incident-Response",
  },
  {
    id: "cs-04",
    title: "ShopShield Security Assessment",
    category: "cybersecurity",
    categoryLabel: "Web Application Security",
    description:
  "A self-developed web application built to strengthen my web development skills and explore web application security through practical testing of SQL injection, cross-site scripting (XSS), authentication, request interception, and vulnerability remediation.",
    image: "/images/projects/shopshield-security.png",
    href: "https://shopshield.iconic-store.workers.dev",
  },
  {
    id: "cs-05",
    title: "Malware Analysis & Detection Lab",
    category: "cybersecurity",
    categoryLabel: "Malware Analysis",
    description:
      "A malware research project involving static and dynamic analysis, suspicious file investigation, indicators of compromise, and YARA-based detection rules.",
    image: "/images/projects/malware analysis.png",
    href: "https://github.com/Iconic-PC/dynamic-malware-analysis",
  },
  {
    id: "cs-06",
    title: "Iconic Recon",
    category: "cybersecurity",
    categoryLabel: "Attack Surface Management",
    description:
      "An attack surface management platform under development, designed to help identify digital assets, discover exposed services, and improve organizational security visibility.",
    image: "/images/projects/iconic-recon.png",
  },

  // WEB DEVELOPMENT
  {
    id: "wd-01",
    title: "Amptech Nigeria Limited",
    category: "web-development",
    categoryLabel: "Corporate Website",
    description:
      "A modern corporate website developed to establish a professional digital presence, showcase company services, and provide visitors with an accessible user experience.",
    image: "/images/projects/amptech.png",
  },
  {
    id: "wd-02",
    title: "ShopShield",
    category: "web-development",
    categoryLabel: "E-commerce Platform",
    description:
      "A modern e-commerce web application featuring a structured shopping experience, responsive interfaces, and a dedicated staging environment for security testing.",
    image: "/images/projects/shopshield.png",
    href: "https://shopshield.iconic-store.workers.dev"
  },
  {
    id: "wd-03",
    title: "Iconic Bot",
    category: "web-development",
    categoryLabel: "AI & Automation",
    description:
      "An AI-powered chatbot project designed to provide conversational assistance and demonstrate the integration of intelligent automation into web-based applications.",
    image: "/images/projects/iconic-bot.png",
  },
  {
    id: "wd-04",
    title: "Student Notice Board API",
    category: "web-development",
    categoryLabel: "Backend Development",
    description:
      "A backend API project designed to support digital notice board functionality, enabling structured data management and communication through application endpoints.",
    image: "/images/projects/notice-board.png",
  },
];
