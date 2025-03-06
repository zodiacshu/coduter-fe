"use client"
import { motion } from "framer-motion"
import { Code, Terminal, Github, Linkedin, Mail, User, MessageSquare, Zap, Coffee, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Image from "next/image";

export default function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [flippedCards, setFlippedCards] = useState<{[key: string]: boolean}>({});

  // Team members data
  const teamMembers = [
    {
      id: "ashutosh",
      name: "Ashutosh Senapati",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in React, Next.js, and backend technologies. Passionate about creating intuitive and performant web applications.",
      skills: ["React", "Next.js", "TypeScript", "Node.js", "UI/UX"],
      github: "https://github.com/ashutosh",
      linkedin: "https://www.linkedin.com/in/ashutoshsenapati/",
      photoUrl: "/team/ashutosh.jpeg" // Replace with actual photo path
    },
    {
      id: "sujal",
      name: "Sujal Charati",
      role: "Frontend Developer",
      bio: "Frontend specialist focused on creating pixel-perfect and responsive user interfaces. Loves turning designs into code and optimizing user experiences.",
      skills: ["React", "CSS/SCSS", "JavaScript", "UI Animation", "Responsive Design"],
      github: "https://github.com/sujal",
      linkedin: "https://www.linkedin.com/in/sujal-charati-2468931ba/",
      photoUrl: "/team/sujal.jpeg" // Replace with actual photo path
    },
    {
      id: "bhabatosh",
      name: "Bhabatosh Senapati",
      role: "Backend Developer",
      bio: "Backend engineer specializing in robust API development and database design. Experienced in building scalable systems and optimizing performance.",
      skills: ["Node.js", "Databases", "API Design", "System Architecture", "Performance"],
      github: "https://github.com/bhabatosh",
      linkedin: "https://www.linkedin.com/in/bhabatosh-senapati/",
      photoUrl: "/team/bhabatosh.jpeg" // Replace with actual photo path
    }
  ];

  // Handle card flip
  const toggleCardFlip = (memberId: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [memberId]: !prev[memberId]
    }));
  };

  useEffect(() => {
    // Set loaded after a slight delay for intro animation
    setTimeout(() => setIsLoaded(true), 300);
    
    // Set typing complete after delay
    setTimeout(() => {
      setIsTypingComplete(true);
    }, 2500);
    
    // Initialize flipped cards state
    const initialFlippedState = teamMembers.reduce((acc, member) => {
      acc[member.id] = false;
      return acc;
    }, {} as {[key: string]: boolean});
    
    setFlippedCards(initialFlippedState);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  interface MemberVariants {
      hidden: { opacity: number; scale: number };
      visible: (custom: number) => {
        opacity: number;
        scale: number;
        transition: {
          delay: number;
          duration: number;
          ease: string;
        };
      };
      [key: string]: any;
    }

  const memberVariants: MemberVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay: 0.8 + custom * 0.2,
        duration: 0.5, 
        ease: "easeOut"
      }
    })
  };

  // Card flip variants
  const cardVariants = {
    front: {
      rotateY: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    back: {
      rotateY: 180,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-80">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            initial={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              scale: Math.random() * 0.8 + 0.2,
            }}
            animate={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              scale: [
                Math.random() * 0.8 + 0.2,
                Math.random() * 1.2 + 0.5,
                Math.random() * 0.8 + 0.2,
              ],
              opacity: [
                Math.random() * 0.3 + 0.1,
                Math.random() * 0.6 + 0.3,
                Math.random() * 0.3 + 0.1,
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i + 40}
            className="absolute rounded-full bg-purple-500"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
            initial={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              scale: Math.random() * 0.8 + 0.2,
            }}
            animate={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              scale: [
                Math.random() * 0.8 + 0.2,
                Math.random() * 1.2 + 0.5,
                Math.random() * 0.8 + 0.2,
              ],
              opacity: [
                Math.random() * 0.3 + 0.1,
                Math.random() * 0.5 + 0.2,
                Math.random() * 0.3 + 0.1,
              ],
            }}
            transition={{
              duration: Math.random() * 15 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NSwgOTAsIDE2NSwgMC4wNCkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none"></div>
      
      {/* Glowing horizontal lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      {/* Navigation */}
      <Navbar/>

      {/* Main content */}
      <main className="relative z-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="mb-16"
          >
            {/* Return Home button */}
            <motion.div variants={itemVariants} className="mb-6">
              <Link 
                href="/" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/60 rounded-md border border-green-700 hover:bg-green-900/20 transition-all duration-300 font-mono text-sm w-fit"
              >
                <ArrowLeft className="w-4 h-4 text-green-400" />
                <span>Return Home</span>
              </Link>
            </motion.div>
            
            {/* Header Section */}
            <motion.div className="mb-12" variants={itemVariants}>
              <div className="terminal-container">
                <div className="terminal-header">
                  <div className="terminal-controls">
                    {/* <span className="terminal-circle bg-red-500"></span>
                    <span className="terminal-circle bg-yellow-500"></span>
                    <span className="terminal-circle bg-green-500"></span> */}
                  </div>
                  <div className="terminal-title font-mono text-xs text-White-400">CODUTER TEAM INFORMATION</div>
                </div>
                <div className="terminal-content p-6 bg-gray-900/60 border border-green-500/20">
                  <div className="flex items-start mb-1">
                    <span className="text-green-500 mr-3 font-mono">$</span>
                    <div className="text-left font-mono relative">
                      <div className={`typing-animation ${isTypingComplete ? 'typing-done' : ''}`}>
                        <span className="text-green-400">./display_team_profile.sh</span>
                      </div>
                    </div>
                  </div>
                  
                  {isTypingComplete && (
                    <motion.div 
                      className="mt-3 pl-5 border-l border-green-500/30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-Mono bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                        Meet Our Team
                      </h2>
                      <p className="text-gray-400 mt-2">
                        <span className="text-green-500 font-Mono">const</span> <span className="text-yellow-300">teamMission</span> = 
                        <span className="text-white-300 font-Mono"> "Building innovative coding experiences for developers around the world."</span>;
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  custom={index}
                  variants={memberVariants}
                  className="h-96" // Fixed height container
                >
                  {/* 3D Card container */}
                  <div className="card-container w-full h-full">
                    {/* Front of card (now showing photo) */}
                    <motion.div 
                      className={`card-side card-front bg-gradient-to-b from-gray-800 to-gray-900 border-0 rounded-lg overflow-hidden flex flex-col items-center justify-center w-full h-full shadow-xl ${flippedCards[member.id] ? 'hidden' : 'block'}`}
                      animate={flippedCards[member.id] ? "back" : "front"}
                      variants={cardVariants}
                      onClick={() => toggleCardFlip(member.id)}
                    >
                      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-900 to-transparent opacity-30"></div>
                      
                      <div className="terminal-header absolute top-0 left-0 right-0 mb-3 rounded-t-lg bg-gray-800 border-b border-gray-700">
                        <div className="terminal-controls ml-2">
                          <span className="terminal-circle bg-red-500"></span>
                          <span className="terminal-circle bg-yellow-500"></span>
                          <span className="terminal-circle bg-green-500"></span>
                        </div>
                        <div className="terminal-title font-mono text-xs text-gray-300">{member.name}</div>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center p-6 mt-6">
                        <div className="mb-4 relative w-40 h-40 overflow-hidden rounded-full shadow-xl">
                          <img 
                            src={member.photoUrl} 
                            alt={`Photo of ${member.name}`} 
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mt-2">{member.name}</h3>
                        <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mt-2 mb-1">
                          {member.role}
                        </div>
                        
                        <div className="mt-4 text-center">
                          <span className="text-xs text-blue-300 font-mono bg-blue-900/30 py-1 px-3 rounded-full animate-pulse">Click to view profile</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Back of card (now showing content) */}
                    <motion.div 
                      className={`card-side card-back bg-gradient-to-b from-gray-800 to-gray-900 border-0 rounded-lg p-5 w-full h-full shadow-xl ${flippedCards[member.id] ? 'block' : 'hidden'}`}
                      animate={flippedCards[member.id] ? "front" : "back"}
                      variants={cardVariants}
                      onClick={() => toggleCardFlip(member.id)}
                    >
                      <div className="terminal-header mb-3 rounded-t-lg bg-gray-800 -mx-5 -mt-5 px-5 pt-2 pb-2 border-b border-gray-700">
                        <div className="terminal-controls">
                          <span className="terminal-circle bg-red-500"></span>
                          <span className="terminal-circle bg-yellow-500"></span>
                          <span className="terminal-circle bg-green-500"></span>
                        </div>
                        <div className="terminal-title font-mono text-xs text-gray-300">{member.name.toLowerCase().replace(' ', '_')}.js</div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3">
                          <User size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                          <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-md mt-1 inline-block">
                            {member.role}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6 p-4 bg-gray-800/60 rounded-lg border-l-4 border-blue-600">
                        <p className="text-sm text-gray-300">{member.bio}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, i) => (
                            <span key={i} className="text-xs bg-gray-700 text-blue-300 px-3 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3 mt-4">
                        <a 
                          href={member.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
                          onClick={(e) => e.stopPropagation()} // Prevent card flip when clicking links
                        >
                          <Github size={18} />
                        </a>
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
                          onClick={(e) => e.stopPropagation()} // Prevent card flip when clicking links
                        >
                          <Linkedin size={18} />
                        </a>
                        <a 
                          href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@codequest.dev`} 
                          className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
                          onClick={(e) => e.stopPropagation()} // Prevent card flip when clicking links
                        >
                          <Mail size={18} />
                        </a>
                      </div>
                      
                      <div className="mt-4 text-center">
                        <span className="text-xs text-blue-300 font-mono bg-blue-900/30 py-1 px-3 rounded-full animate-pulse">Click to see photo</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Company Mission Section */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <Code className="text-green-500" />
                <span>Our Mission</span>
              </h3>
              
              <div className="p-5 bg-gray-800/80 rounded-lg mb-6 border-l-4 border-blue-600">
                <p className="text-gray-300">
                  At Coduter, we believe coding should be as thrilling as it is educational. Our mission is to transform the solitary act of coding into a shared, exhilarating journey where competition meets collaboration. By providing real-time, head-to-head challenges, integrated video interaction, and data-driven feedback, Coduter empowers developers of all levels to learn faster, push their limits, and revel in the excitement of every victory. We aim to foster a global community of coders who inspire each other to tackle new heights, build meaningful connections, and ultimately conquer the ever-evolving world of software development.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
                <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/40 p-5 rounded-lg shadow-md border-t-2 border-yellow-500">
                  <div className="flex items-center mb-3">
                    <div className="bg-yellow-600 p-2 rounded-lg mr-3">
                      <Zap className="text-white" size={20} />
                    </div>
                    <span className="text-sm font-semibold text-yellow-400">Real-Time Challenges</span>
                  </div>
                  <p className="text-xs text-gray-300">Creating unique challenges that test real-world skills and promote learning through competition.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/40 p-5 rounded-lg shadow-md border-t-2 border-blue-500">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-600 p-2 rounded-lg mr-3">
                      <MessageSquare className="text-white" size={20} />
                    </div>
                    <span className="text-sm font-semibold text-blue-400">Community Focus</span>
                  </div>
                  <p className="text-xs text-gray-300">Building a supportive community where developers can collaborate and grow together.</p>
                </div>
                <div className="bg-gradient-to-br from-red-900/20 to-red-900/40 p-5 rounded-lg shadow-md border-t-2 border-red-500">
                  <div className="flex items-center mb-3">
                    <div className="bg-red-600 p-2 rounded-lg mr-3">
                      <Coffee className="text-white" size={20} />
                    </div>
                    <span className="text-sm font-semibold text-red-400">Continuous Growth</span>
                  </div>
                  <p className="text-xs text-gray-300">Constantly evolving our platform to include new technologies and challenge types.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Contact CTA */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 text-center"
            >
              <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-blue-900/30 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 font-mono mb-4 text-lg">
                  <span className="text-blue-400">$</span> Want to join us on our mission?
                </p>
                <a 
                  href="mailto:team@codequest.dev" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md"
                >
                  <Mail size={18} />
                  <span className="font-mono font-semibold">Contact Team</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      {/* CSS for animations */}
      <style jsx global>{`
        .terminal-container {
          width: 100%;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .terminal-header {
          background-color: #1f2937;
          padding: 8px 12px;
          display: flex;
          align-items: center;
        }
        
        .terminal-controls {
          display: flex;
          gap: 6px;
        }
        
        .terminal-circle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .terminal-title {
          flex-grow: 1;
          text-align: center;
        }
        
        .terminal-content {
          min-height: 80px;
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(30, end);
          width: 0;
        }
        
        .typing-done {
          width: 100%;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 0 }
          50% { opacity: 1 }
        }
        
        .typing-animation::after {
          content: "";
          display: inline-block;
          width: 8px;
          height: 18px;
          background-color: #4ade80;
          margin-left: 4px;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
        }
        
        .typing-done::after {
          display: none;
        }
        
        /* Card flip styles */
        .card-container {
          perspective: 1000px;
          cursor: pointer;
        }
        
        .card-side {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transition: transform 0.6s;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .card-front.hidden,
        .card-back.hidden {
          transform: rotateY(180deg);
          backface-visibility: hidden;
          opacity: 0;
        }
        
        .card-back.block {
          transform: rotateY(0deg);
        }
        
        /* Handle the transition effect */
        .card-front {
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .card-back {
          transform-style: preserve-3d;
          transform: rotateY(180deg);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @font-face {
          font-family: 'JetBrains Mono';
          src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
      `}</style>
    </div>
  )
}