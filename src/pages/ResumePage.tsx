import { useState } from "react";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";

export function ResumePage() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);

      const el = document.getElementById("resume-content");
      if (!el) {
        console.error("Resume element not found");
        setLoading(false);
        return;
      }

      const canvas = await html2canvas(el, { scale: 2, useCORS: true });
      const dataUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "resume.png";
      link.click();
    } catch (err) {
      console.error("Failed to capture resume:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0b0f2e] text-white min-h-screen flex justify-center py-10 px-4 relative">
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="fixed top-6 right-6 flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg shadow-lg z-50"
        disabled={loading}
      >
        <Download className="w-4 h-4" />
        {loading ? "Preparing..." : "Save as Image"}
      </button>

      {/* Resume Content */}
      <div
        id="resume-content"
        className="max-w-5xl w-full bg-[#11163d] rounded-xl shadow-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* LEFT SECTION */}
        <div className="space-y-8">
          {/* Name & Role */}
          <div>
            <h1 className="text-4xl font-bold tracking-wide">
              Ndukwe Obinna Goodluck
            </h1>
            <p className="text-lg text-blue-300">Frontend Developer</p>
          </div>

          {/* Contact */}
          <div className="space-y-2 text-sm text-gray-300">
            <p>📞 +234 91-3870-9321</p>
            <p>📧 ndukweobinna219@gmail.com</p>
            <p>🌐 reallygreatsite.com</p>
          </div>

          {/* Summary */}
          <p className="text-gray-300 text-sm leading-relaxed">
            I'm a software developer skilled in problem-solving and building
            software with test-driven development. Passionate about creating
            clean, efficient, and user-friendly frontend interfaces using modern
            JavaScript frameworks.
          </p>

          {/* Projects */}
          <div>
            <h2 className="text-xl font-semibold text-blue-300">Projects</h2>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-semibold">Portfolio Website</p>
                <p className="text-gray-400 text-sm">2025 | Personal Project</p>
                <p className="text-gray-300 text-sm">
                  Designed and built a responsive personal portfolio site using
                  React, Tailwind CSS, and modern UI animations.
                </p>
              </div>
              <div>
                <p className="font-semibold">E-Commerce UI</p>
                <p className="text-gray-400 text-sm">2025 | Personal Project</p>
                <p className="text-gray-300 text-sm">
                  Created a fully responsive e-commerce user interface with a
                  shopping cart system using Next.js and TypeScript.
                </p>
              </div>
              <div>
                <p className="font-semibold">Weather App</p>
                <p className="text-gray-400 text-sm">2025 | Personal Project</p>
                <p className="text-gray-300 text-sm">
                  Built a weather forecast application integrating real-time
                  weather API with clean, modern design.
                </p>
              </div>
              <div>
                <p className="font-semibold">Bug Bounty Platform</p>
                <p className="text-gray-400 text-sm">
                  2025 | Personal Project (In Progress)
                </p>
                <p className="text-gray-300 text-sm">
                  Developing a web-based bug bounty platform to connect ethical
                  hackers with companies. Features include secure report
                  submissions and bounty tracking. Currently improving
                  responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-8">
          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-full bg-gray-500 border-4 border-blue-300 shadow-lg overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-500/30 pb-1">
              Education
            </h2>
            <div className="mt-3">
              <p className="font-semibold">B.Sc. in Cybersecurity</p>
              <p className="text-gray-400 text-sm">
                Federal University of Technology Owerri, Imo State Nigeria
              </p>
              <p className="text-gray-300 text-sm">Aug 2023 – Present</p>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-500/30 pb-1">
              Tools & Software
            </h2>
            <ul className="list-disc list-inside text-gray-300 mt-3 text-sm">
              <li>Visual Studio Code</li>
              <li>Npm</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-500/30 pb-1">
              Skills
            </h2>
            <ul className="list-disc list-inside text-gray-300 mt-3 text-sm">
              <li>HTML, CSS, JavaScript, TypeScript</li>
              <li>React, Next.js, Tailwind CSS</li>
              <li>REST APIs, Git & GitHub</li>
              <li>Responsive Web Design</li>
              <li>Problem Solving</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-500/30 pb-1">
              Languages
            </h2>
            <p className="text-gray-300 text-sm mt-3">English — Fluent</p>
            <p className="text-gray-300 text-sm">Igbo — Fluent</p>
          </div>

          {/* Skills / Focus Areas */}
          <div>
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-500/30 pb-1">
              Focus Areas
            </h2>
            <p className="text-gray-300 mt-3 text-sm">
              Full-Stack Development, AI Development, Cybersecurity, Mobile Development, Music
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
