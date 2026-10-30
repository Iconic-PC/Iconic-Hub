
import { useState } from "react";
import html2canvas from "html2canvas";
import { Download, FileText, Loader2 } from "lucide-react";

export function ResumePage() {
  const [loading, setLoading] = useState(false);

  // Download the resume as a PNG image
  const handleDownloadImage = async () => {
    try {
      setLoading(true);

      const element = document.getElementById("resume-content");

      if (!element) {
        console.error("Resume element not found");
        return;
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "Ndukwe-Goodluck-Obinna-Resume.png";
      link.click();
    } catch (error) {
      console.error("Failed to capture resume:", error);
    } finally {
      setLoading(false);
    }
  };

  // Open the browser's print dialog to save a proper PDF
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0b0f2e] px-4 py-10 text-white">
      {/* Download buttons */}
      <div className="no-print fixed right-4 top-4 z-50 flex flex-col gap-3 sm:right-6 sm:top-6">
        <button
          onClick={handleDownloadPDF}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold shadow-lg transition hover:bg-blue-700"
        >
          <FileText className="h-4 w-4" />
          Download PDF
        </button>

        <button
          onClick={handleDownloadImage}
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-lg border border-blue-400 bg-[#11163d] px-4 py-3 font-semibold shadow-lg transition hover:bg-[#1b2457] disabled:opacity-60"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Download className="h-4 w-4" />
          )}
          {loading ? "Preparing..." : "Save as Image"}
        </button>
      </div>

      {/* Resume */}
      <div
        id="resume-content"
        className="resume-document mx-auto mt-20 max-w-4xl rounded-xl bg-white p-8 text-slate-900 shadow-2xl sm:p-12"
      >
        {/* Header */}
        <header className="resume-header border-b-2 border-blue-700 pb-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ndukwe Goodluck Obinna
          </h1>

          <p className="mt-2 text-lg font-bold text-blue-700">
            Cybersecurity | Ethical Hacking | Web Development
          </p>

          <div className="resume-contact mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
            <span>Phone: +234 91-3870-9321</span>
            <span>Email: ndukwobinna219@gmail.com</span>
            <span>Website: https://iconic-hub.pages.dev</span>
            <span>GitHub: https://github.com/Iconic-PC</span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="resume-section mt-7">
          <h2 className="resume-heading">PROFESSIONAL SUMMARY</h2>

          <p className="resume-text mt-3 text-sm leading-7 text-slate-700">
            Cybersecurity-focused professional with practical experience in
            ethical hacking, reconnaissance, web application security testing,
            Linux environments, network analysis and malware analysis
            fundamentals. Also experienced in building responsive web
            applications and working with modern frontend technologies,
            APIs and backend integrations. Develops practical projects
            combining security awareness with software development, with
            an interest in identifying vulnerabilities, understanding attack
            techniques and improving application security. Continuously
            developing technical capabilities through independent projects,
            structured training and hands-on laboratory exercises.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="resume-section mt-7">
          <h2 className="resume-heading">CORE COMPETENCIES</h2>

          <p className="resume-text mt-3 text-sm leading-7 text-slate-700">
            Ethical Hacking · Web Application Security · Reconnaissance ·
            Vulnerability Assessment · Network Security Fundamentals ·
            Linux Administration · Burp Suite · Nmap · Wireshark ·
            Malware Analysis Fundamentals · YARA · React · TypeScript ·
            JavaScript · REST API Development · Responsive Web Design ·
            Git and GitHub
          </p>
        </section>

        {/* Professional Experience */}
        <section className="resume-section mt-7">
          <h2 className="resume-heading">TRAINING & EXPERIENCE</h2>

          <div className="resume-entry mt-4">
            <h3 className="font-bold text-slate-900">
              Ethical Hacking and Digital Forensics Internship
            </h3>

            <p className="resume-muted text-sm text-slate-500">
              ICDFA | November 2025 – January 2027 (Expected)
            </p>

            <ul className="resume-list mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
              <li>
                Participate in practical cybersecurity training and
                structured technical assignments.
              </li>
              <li>
                Develop hands-on experience with ethical hacking,
                reconnaissance, vulnerability assessment and security
                testing methodologies.
              </li>
              <li>
                Work with Linux-based security environments and tools
                used in cybersecurity laboratories.
              </li>
              <li>
                Perform practical exercises involving network analysis,
                web application security and malware analysis fundamentals.
              </li>
              <li>
                Document technical findings, investigation procedures
                and security recommendations.
              </li>
            </ul>
          </div>
        </section>

        {/* Cybersecurity Projects */}
        <section className="resume-section mt-7">
          <h2 className="resume-heading">CYBERSECURITY PROJECTS</h2>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">1. Operation Silent Intrusion</h3>
            <p className="resume-muted text-sm text-slate-500">
              Ethical Hacking | Security Assessment
            </p>
            <p className="resume-text mt-2 text-sm leading-6 text-slate-700">
              Conducted a structured security assessment project focused on
              identifying and documenting potential security weaknesses.
              Organized the work into assessment methodology, findings,
              supporting evidence and security recommendations.
            </p>
          </div>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">2. ShopShield — Web Application Security</h3>
            <p className="resume-muted text-sm text-slate-500">
              Web Security Testing | Personal Staging Project
            </p>
            <p className="resume-text mt-2 text-sm leading-6 text-slate-700">
              Developed and tested a web application in a controlled staging
              environment. Used the project to practise HTTP request
              inspection, authentication testing, SQL injection and
              cross-site scripting assessment, with emphasis on understanding
              vulnerabilities and improving application security.
            </p>
          </div>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">3. TechSecure Incident Response</h3>
            <p className="resume-muted text-sm text-slate-500">
              Incident Investigation | Windows Server | IIS
            </p>
            <p className="resume-text mt-2 text-sm leading-6 text-slate-700">
              Worked on a structured incident investigation involving a
              Windows Server 2019 environment running IIS. Focused on
              incident analysis, evidence organization, investigation
              methodology and recommendations for improving security.
            </p>
          </div>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">4. Malware Analysis and Detection Lab</h3>
            <p className="resume-muted text-sm text-slate-500">
              Malware Analysis | YARA | Static and Dynamic Analysis
            </p>
            <p className="resume-text mt-2 text-sm leading-6 text-slate-700">
              Practised malware analysis in a controlled laboratory
              environment, including static and dynamic analysis concepts,
              identification of indicators of compromise and creation of
              YARA detection rules. Used isolated lab environments for
              investigation exercises.
            </p>
          </div>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">5. Operation Shadow Drop</h3>
            <p className="resume-muted text-sm text-slate-500">
              Digital Forensics | Evidence Analysis
            </p>
            <p className="resume-text mt-2 text-sm leading-6 text-slate-700">
              Worked on a digital investigation project involving evidence
              collection, analysis, investigation documentation and
              presentation of findings. Organized project materials into
              attack analysis, evidence and methodology, investigation
              findings and recommendations.
            </p>
          </div>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">6. TechVision OSINT Investigation</h3>
            <p className="resume-muted text-sm text-slate-500">
              Open-Source Intelligence | Research Exercise
            </p>
            <p className="resume-text mt-2 text-sm leading-6 text-slate-700">
              Worked on an OSINT-focused research exercise involving
              structured information gathering and analysis using
              publicly available sources.
            </p>
          </div>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">
              7. OWASP Web Application Security Laboratory
            </h3>
            <p className="resume-muted text-sm text-slate-500">
              Burp Suite | SQL Injection | Cross-Site Scripting
            </p>
            <p className="resume-text mt-2 text-sm leading-6 text-slate-700">
              Practised web application security testing using intentionally
              vulnerable applications and controlled lab targets. Explored
              HTTP interception, request modification, SQL injection,
              cross-site scripting and authentication-related weaknesses.
            </p>
          </div>
        </section>

        {/* Web Development Projects */}
        <section className="resume-section mt-7">
          <h2 className="resume-heading">WEB DEVELOPMENT & SOFTWARE PROJECTS</h2>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">1. Iconic Hub Website</h3>
            <p className="resume-muted text-sm text-slate-500">
              Personal Brand Website | React | TypeScript | Tailwind CSS
            </p>
            <p className="resume-text mt-2 text-sm leading-6 text-slate-700">
              Designed and developed the Iconic Hub website to showcase
              cybersecurity and web development services, projects and
              professional information. Implemented responsive layouts,
              reusable components, project sections and contact functionality.
            </p>
            <p className="mt-1 text-sm text-blue-700">
              https://iconic-hub.pages.dev
            </p>
          </div>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">2. Amptech Nigeria Limited Website</h3>
            <p className="resume-muted text-sm text-slate-500">
              Corporate Web Development | React | Vite
            </p>
            <p className="resume-text mt-2 text-sm leading-6 text-slate-700">
              Developed a corporate website project for Amptech Nigeria
              Limited, focusing on a professional company presentation,
              responsive user interface and structured website components.
            </p>
          </div>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">3. Iconic Recon</h3>
            <p className="resume-muted text-sm text-slate-500">
              Attack Surface Management | Vite | React | FastAPI
            </p>
            <p className="resume-text mt-2 text-sm leading-6 text-slate-700">
              Developing an attack surface management platform concept
              intended to organize and present information about digital
              assets and their potential security exposure. The project
              remains under development.
            </p>
          </div>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">4. Iconic Bot</h3>
            <p className="resume-muted text-sm text-slate-500">
              Chatbot Development | Application Integration
            </p>
            <p className="resume-text mt-2 text-sm leading-6 text-slate-700">
              Worked on a chatbot project involving application integration
              and deployment experimentation, with a focus on building
              an interactive assistant.
            </p>
          </div>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">5. Student Notice Board API</h3>
            <p className="resume-muted text-sm text-slate-500">
              Backend Development | REST API
            </p>
            <p className="resume-text mt-2 text-sm leading-6 text-slate-700">
              Worked on a notice board backend API designed to support
              the delivery and management of student notice board data
              through API endpoints.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section mt-7">
          <h2 className="resume-heading">EDUCATION</h2>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">
              Bachelor of Technology (B.Tech.) — Cybersecurity
            </h3>
            <p className="resume-muted text-sm text-slate-500">
              Federal University of Technology Owerri (FUTO), Nigeria
            </p>
            <p className="resume-text text-sm text-slate-700">
              2023 – Present
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="resume-section mt-7">
          <h2 className="resume-heading">CERTIFICATIONS</h2>

          <div className="resume-entry mt-4">
            <h3 className="font-bold">Cisco Networking Basics</h3>
            <p className="resume-muted text-sm text-slate-500">
              Cisco Networking Academy | 2024
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="resume-section mt-7">
          <h2 className="resume-heading">TECHNICAL SKILLS</h2>

          <div className="resume-entry mt-4 space-y-3 text-sm leading-6">
            <div>
              <h3 className="font-bold">Cybersecurity</h3>
              <p className="resume-text text-slate-700">
                Ethical hacking, reconnaissance, vulnerability assessment,
                web application security testing, HTTP analysis,
                authentication testing and security documentation.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Security Tools</h3>
              <p className="resume-text text-slate-700">
                Kali Linux, Burp Suite, Nmap, Wireshark and YARA.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Programming and Web Development</h3>
              <p className="resume-text text-slate-700">
                HTML, CSS, JavaScript, TypeScript, React, Vite,
                Tailwind CSS and REST APIs.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Development Tools and Environments</h3>
              <p className="resume-text text-slate-700">
                Visual Studio Code, Git, GitHub, npm, VirtualBox
                and Linux command-line environments.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Development */}
        <section className="resume-section mt-7">
          <h2 className="resume-heading">CURRENT DEVELOPMENT AREAS</h2>

          <p className="resume-text mt-3 text-sm leading-7 text-slate-700">
            Red Team and ethical hacking practices, web application
            security, malware analysis, SOC analysis fundamentals,
            backend development and attack surface management.
          </p>
        </section>

        {/* Languages */}
        <section className="resume-section mt-7">
          <h2 className="resume-heading">LANGUAGES</h2>

          <p className="resume-text mt-3 text-sm text-slate-700">
            English — Fluent
          </p>
          <p className="resume-text text-sm text-slate-700">
            Igbo — Fluent
          </p>
        </section>

        {/* Footer */}
        <footer className="resume-footer mt-10 border-t border-slate-300 pt-4 text-center text-xs text-slate-500">
          Ndukwe Goodluck Obinna | Cybersecurity & Web Development
        </footer>
      </div>

      {/* Print styling for a clean, ATS-friendly PDF */}
      <style>{`
        .resume-heading {
          border-bottom: 1px solid #cbd5e1;
          padding-bottom: 7px;
          color: #1d4ed8;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.06em;
        }

        .resume-entry {
          break-inside: avoid;
          page-break-inside: avoid;
        }

        @page {
          size: A4;
          margin: 14mm;
        }

        @media print {
          html,
          body {
            background: #ffffff !important;
            color: #111827 !important;
            margin: 0 !important;
            padding: 0 !important;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          body * {
            visibility: hidden;
          }

          #resume-content,
          #resume-content * {
            visibility: visible;
          }

          .no-print {
            display: none !important;
          }

          #resume-content {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            background: #ffffff !important;
            color: #111827 !important;
            font-family: Arial, Helvetica, sans-serif !important;
            font-size: 10pt !important;
          }

          #resume-content h1 {
            font-size: 23pt !important;
            color: #111827 !important;
          }

          #resume-content h2 {
            font-size: 11pt !important;
            color: #1d4ed8 !important;
          }

          #resume-content h3,
          #resume-content p,
          #resume-content li,
          #resume-content span {
            color: #111827 !important;
          }

          #resume-content .resume-muted,
          #resume-content .resume-contact,
          #resume-content .resume-footer {
            color: #475569 !important;
          }

          #resume-content .resume-section {
            margin-top: 18px !important;
          }

          #resume-content .resume-entry {
            margin-top: 10px !important;
            break-inside: avoid;
            page-break-inside: avoid;
          }

          #resume-content .resume-text,
          #resume-content li {
            font-size: 9.5pt !important;
            line-height: 1.45 !important;
          }

          #resume-content .resume-heading {
            border-bottom: 1px solid #cbd5e1 !important;
          }

          #resume-content a {
            color: #1d4ed8 !important;
            text-decoration: none !important;
          }

          #resume-content footer {
            margin-top: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
