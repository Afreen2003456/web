'use client'

import { InteractiveRobot } from '@/components/ui/interactive-robot'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden">
      {/* Custom scrollbar */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #2563eb, #7c3aed);
        }
      `}</style>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/80 via-blue-900/60 to-slate-900/80 backdrop-blur-xl border-b border-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <div className="flex-shrink-0 group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 animate-pulse">
                  <span className="text-white font-bold text-lg">AA</span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Afreen Alam
                </h1>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                <a href="#about" className="relative group text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm overflow-hidden">
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </a>
                <a href="#skills" className="relative group text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm overflow-hidden">
                  <span className="relative z-10">Skills</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 delay-75"></div>
                </a>
                <a href="#experience" className="relative group text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm overflow-hidden">
                  <span className="relative z-10">Experience</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/20 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 delay-150"></div>
                </a>
                <a href="#contact" className="relative group text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm overflow-hidden">
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 delay-225"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Enhanced status badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 border border-green-500/40 backdrop-blur-md shadow-lg hover:shadow-green-500/25 transition-all duration-300 group">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse mr-3 shadow-lg shadow-green-400/50"></div>
                <span className="text-green-300 text-sm font-semibold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                  Available for opportunities
                </span>
                <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>

              {/* Enhanced main heading with gradient */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-white mb-2">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] font-extrabold">
                    Afreen Alam
                  </span>
                </h1>
                
                <div className="space-y-3">
                  <p className="text-xl sm:text-2xl bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent font-bold">
                    Cybersecurity Specialist & Data Analyst
                  </p>
                  <p className="text-lg bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 bg-clip-text text-transparent">
                    IoT Graduate | Blockchain Developer | Threat Detection Expert
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Recent Computer Science (IoT) graduate specializing in Cybersecurity and Data Protection. 
                Experienced in building threat detection dashboards, incident response pipelines, and 
                implementing GDPR/HIPAA-compliant solutions.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                <button className="group relative px-8 py-4 border-2 border-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-slate-300 hover:text-white hover:scale-105 transition-all duration-300 backdrop-blur-sm overflow-hidden bg-white/5 hover:bg-white/10">
                  <span className="relative z-10">Download Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-2 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </button>
              </div>

              {/* Contact info */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+91 93242 08312</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>alamafreen93@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Right side - Interactive Robot */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg">
                <InteractiveRobot 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-96 lg:h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-300 opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-pink-400 rounded-full animate-bounce delay-700 opacity-60"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Passionate about building secure systems that balance innovation and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Enhanced Education Card */}
            <Card className="group relative bg-gradient-to-br from-slate-900/80 via-blue-900/40 to-slate-800/80 border border-blue-500/30 backdrop-blur-md hover:scale-105 hover:border-blue-400/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-blue-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Education</h3>
                    <p className="text-slate-400 font-medium">University of Mumbai</p>
                  </div>
                </div>
                <p className="text-slate-200 mb-2 font-semibold">B.E. in Computer Science (IoT)</p>
                <p className="text-slate-400">Expected Graduation: May 2025</p>
              </CardContent>
            </Card>

            {/* Enhanced Contact Card */}
            <Card className="group relative bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-slate-800/80 border border-purple-500/30 backdrop-blur-md hover:scale-105 hover:border-purple-400/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <span className="text-3xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Contact</h3>
                    <p className="text-slate-400 font-medium">Get in touch</p>
                  </div>
                </div>
                <div className="space-y-3 text-slate-200">
                  <p className="flex items-center gap-2">
                    <span className="text-lg">📞</span>
                    <span className="font-semibold">+91 93242 08312</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-lg">📧</span>
                    <span className="font-semibold">alamafreen93@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-lg">🔗</span>
                    <span className="font-semibold">LinkedIn Profile</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <Card className="bg-gradient-to-br from-slate-900/50 to-indigo-900/30 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-indigo-300 mb-6 flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Google Project Management: Professional Certificate",
                  "Microsoft: Power BI Essentials", 
                  "Google: Data Analysis with R Programming",
                  "Infosys Springboard: Introduction to Cybersecurity",
                  "KNIME: Analytics Platform Proficiency",
                  "Excel Skills for Business: Essentials"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                    <span className="text-slate-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Core Competencies
            </h2>
            <p className="text-xl text-slate-300">
              Specialized skills in cybersecurity, data analytics, and secure system development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cybersecurity Tools",
                icon: "🛡️",
                skills: ["Threat Detection", "Risk Management", "IDS/IPS", "Encryption", "Secure APIs"],
                color: "from-red-500 to-orange-500"
              },
              {
                title: "Compliance & Privacy",
                icon: "📋",
                skills: ["GDPR", "HIPAA", "IT Act", "Secure Data Handling", "Access Control"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Analytics & Monitoring",
                icon: "📊",
                skills: ["Power BI", "SQL", "KNIME", "Apache Spark", "Network Logs"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Programming",
                icon: "💻",
                skills: ["Python", "SQL", "Smart Contracts", "API Development"],
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Operations Security",
                icon: "🔐",
                skills: ["Incident Response", "Anomaly Detection", "Log Analysis", "Firewall Monitoring"],
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Blockchain Security",
                icon: "⛓️",
                skills: ["Cryptographic Hashing", "Smart Contracts", "Identity Verification"],
                color: "from-indigo-500 to-purple-500"
              }
            ].map((category, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl">{category.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${category.color} rounded-full`}></div>
                          <span className="text-slate-300 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cybersecurity Projects
            </h2>
            <p className="text-xl text-slate-300">
              Real-world applications of cybersecurity and data protection
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Cybersecurity Analytics: Threat Detection & Incident Response",
                description: "Designed dashboards in Power BI to monitor real-time threats using log files from IDS/IPS systems. Applied ML models (Isolation Forest, DBSCAN) to detect anomalies in access logs.",
                tools: ["Power BI", "Python", "Anomaly Detection", "GDPR", "HIPAA"],
                icon: "🚨",
                color: "from-red-500 to-pink-500"
              },
              {
                title: "Security Analytics Dashboard for Network Monitoring",
                description: "Built a network traffic analysis tool using Apache Spark and KNIME. Clustered event logs using ML techniques to identify suspicious behavior.",
                tools: ["KNIME", "Apache Spark", "Power BI", "Log Analytics"],
                icon: "📡",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Document Verification System Using Blockchain",
                description: "Implemented a blockchain-based system for secure academic document verification. Used smart contracts to automate validation workflows.",
                tools: ["Ethereum", "Solidity", "Python", "Cryptography"],
                icon: "📜",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Fraud Detection System with Data Protection",
                description: "Integrated fraud detection ML model with encrypted data processing and access control. Ensured compliance with financial and privacy regulations.",
                tools: ["Python", "Tableau", "Risk Analytics", "Secure API"],
                icon: "🔍",
                color: "from-purple-500 to-indigo-500"
              }
            ].map((project, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <span className="text-2xl">{project.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="secondary" className="bg-slate-800/50 text-slate-300 hover:bg-slate-700/50">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Technical Tools & Platforms
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Security",
                tools: ["IDS/IPS", "GDPR", "HIPAA", "Encryption", "Risk Management", "Log Analytics"],
                icon: "🔒",
                color: "from-red-500 to-orange-500"
              },
              {
                category: "Analytics",
                tools: ["Power BI", "Tableau", "KNIME", "SQL", "Apache Spark"],
                icon: "📈",
                color: "from-blue-500 to-purple-500"
              },
              {
                category: "Programming",
                tools: ["Python", "SQL"],
                icon: "⌨️",
                color: "from-green-500 to-cyan-500"
              },
              {
                category: "Blockchain & Crypto",
                tools: ["Smart Contracts", "Ethereum", "Hash Functions"],
                icon: "🔗",
                color: "from-purple-500 to-pink-500"
              },
              {
                category: "Cloud & Tools",
                tools: ["AWS", "JIRA", "Git"],
                icon: "☁️",
                color: "from-cyan-500 to-blue-500"
              }
            ].map((section, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-xl">{section.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{section.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="border-slate-600 text-slate-300 hover:border-slate-500">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/50 to-indigo-900/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-xl text-slate-300">
                Ready to discuss cybersecurity solutions and data protection strategies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl backdrop-blur-sm hover:bg-slate-700/30 transition-colors duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">+91 93242 08312</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl backdrop-blur-sm hover:bg-slate-700/30 transition-colors duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white font-semibold">alamafreen93@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl backdrop-blur-sm hover:bg-slate-700/30 transition-colors duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">LinkedIn</p>
                    <p className="text-white font-semibold">linkedin.com/in/afreen-alam2003</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center items-center text-center space-y-6">
                <div className="text-6xl animate-bounce">🚀</div>
                <h3 className="text-2xl font-semibold text-white">Ready to Collaborate?</h3>
                <p className="text-slate-300">
                  Let's build secure and compliant solutions together
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Afreen Alam. Cybersecurity Specialist & Data Protection Expert.
          </p>
        </div>
      </footer>
    </div>
  )
} 