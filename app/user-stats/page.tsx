"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Code2, BookOpen, Calendar, Trophy, Clock, ArrowLeft, BarChart2, Activity, Award, Cpu, Users } from "lucide-react"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"

export default function UserStats() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  
  // Mock data for statistics
  const userData = {
    username: "User_1337",
    level: 5,
    totalChallenges: 38,
    avgSolveTime: "12m 44s",
    successRate: 67,
    mostUsedLanguage: "JavaScript",
    bestCategory: "Algorithms",
    worstCategory: "Database Design"
  };
  
  // Performance by category
  const categories = [
    { name: "Algorithms", completed: 12, success: 83, avgTime: "10m 12s" },
    { name: "Data Structures", completed: 10, success: 70, avgTime: "14m 35s" },
    { name: "Web Development", completed: 8, success: 75, avgTime: "11m 48s" },
    { name: "Database Design", completed: 4, success: 50, avgTime: "16m 22s" },
    { name: "System Design", completed: 4, success: 75, avgTime: "15m 10s" }
  ];
  
  // Performance by difficulty
  const difficulties = [
    { level: "Beginner", completed: 18, success: 89, avgTime: "8m 30s" },
    { level: "Intermediate", completed: 15, success: 60, avgTime: "14m 25s" },
    { level: "Advanced", completed: 5, success: 40, avgTime: "18m 42s" }
  ];
  
  // Monthly activity
  const monthlyActivity = [
    { month: "Jan", challenges: 8, success: 6 },
    { month: "Feb", challenges: 10, success: 7 },
    { month: "Mar", challenges: 6, success: 4 },
    { month: "Apr", challenges: 4, success: 3 },
    { month: "May", challenges: 5, success: 3 },
    { month: "Jun", challenges: 5, success: 4 }
  ];

  // Code snippets for background
  const codeSamples = [
    "function analyzeStats(data) {",
    "  let total = 0;",
    "  let count = 0;",
    "  let max = -Infinity;",
    "  let min = Infinity;",
    "  ",
    "  for (const value of data) {",
    "    total += value;",
    "    count++;",
    "    max = Math.max(max, value);",
    "    min = Math.min(min, value);",
    "  }",
    "  ",
    "  return {",
    "    average: total / count,",
    "    count,",
    "    max,",
    "    min,",
    "    range: max - min",
    "  };",
    "}",
    "function calculateCategoryScore(challenges) {",
    "  return challenges.reduce((acc, c) => {",
    "    return acc + (c.success ? c.difficulty * 10 : 0);",
    "  }, 0);",
    "}"
  ];

  // Load animations and code background
  useEffect(() => {
    // Set loaded after a slight delay for intro animation
    setTimeout(() => setIsLoaded(true), 300);
    
    // Initialize code lines for the animated background
    setCodeLines(
      [...Array(12)].map(() => {
        const randomIndex = Math.floor(Math.random() * codeSamples.length);
        return codeSamples[randomIndex];
      })
    );
    
    // Interval to occasionally change a random code line for constant subtle animation
    const interval = setInterval(() => {
      setCodeLines(prevLines => {
        const newLines = [...prevLines];
        const randomIndex = Math.floor(Math.random() * newLines.length);
        const randomCodeIndex = Math.floor(Math.random() * codeSamples.length);
        newLines[randomIndex] = codeSamples[randomCodeIndex];
        return newLines;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Helper function to get bar width based on percentage
  const getBarWidth = (percentage:any) => {
    return `${Math.max(5, percentage)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Matrix-like code rain background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-80">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            className="absolute text-sm text-blue-500/30 font-mono whitespace-nowrap"
            initial={{
              x: `${Math.random() * 100}vw`,
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 0.6, 0.5, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>
      
      {/* Terminal grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNTMsIDI1NSwgMTUzLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-30 pointer-events-none"></div>
      
      {/* Glowing horizontal lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-1 flex flex-col pt-6 px-4 md:px-6 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="w-full max-w-7xl mx-auto"
        >
          {/* Navigation Controls */}
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap gap-4">
            <Link href="/user-dashboard" className="flex items-center gap-2 px-4 py-2 bg-gray-900/60 rounded-md border border-blue-700 hover:bg-blue-900/20 transition-all duration-300 font-mono text-sm w-fit">
              <ArrowLeft className="w-4 h-4 text-blue-400" />
              <span>Back to Dashboard</span>
            </Link>
            
            <Link href="/user-challenge/setup" className="flex items-center gap-2 px-4 py-2 bg-gray-900/60 rounded-md border border-green-700 hover:bg-green-900/20 transition-all duration-300 font-mono text-sm w-fit">
              <Code2 className="w-4 h-4 text-green-400" />
              <span>Take New Challenge</span>
            </Link>
          </motion.div>
            
          {/* Header - Statistics Overview */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-gray-900/80 border border-blue-500/30 rounded-xl overflow-hidden shadow-xl">
              <div className="px-6 py-4 border-b border-gray-800">
                <h1 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                  <BarChart2 className="w-6 h-6" />
                  Performance Analytics
                </h1>
                <p className="text-gray-400 mt-1">Detailed statistics and insights for {userData.username}</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Total Challenges */}
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-md bg-blue-900/50 flex items-center justify-center text-blue-400">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Total Challenges</div>
                      <div className="text-2xl font-semibold">{userData.totalChallenges}</div>
                    </div>
                  </div>
                  
                  {/* Average Solve Time */}
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-md bg-green-900/50 flex items-center justify-center text-green-400">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Average Solve Time</div>
                      <div className="text-2xl font-semibold">{userData.avgSolveTime}</div>
                    </div>
                  </div>
                  
                  {/* Success Rate */}
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-md bg-yellow-900/50 flex items-center justify-center text-yellow-400">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Success Rate</div>
                      <div className="text-2xl font-semibold">{userData.successRate}%</div>
                    </div>
                  </div>
                  
                  {/* Most Used Language */}
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-md bg-purple-900/50 flex items-center justify-center text-purple-400">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Preferred Language</div>
                      <div className="text-2xl font-semibold">{userData.mostUsedLanguage}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Stats Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Performance by Category */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-gray-900/80 border border-green-500/30 rounded-xl overflow-hidden shadow-lg mb-6">
                <div className="px-6 py-4 border-b border-gray-800">
                  <h2 className="text-xl font-bold text-green-400 flex items-center gap-2">
                    <Cpu className="w-5 h-5" />
                    Performance by Category
                  </h2>
                </div>
                
                <div className="p-4 space-y-6">
                  {categories.map((category, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{category.name}</h3>
                        <div className="text-sm font-mono">
                          <span className={category.success >= 75 ? "text-green-400" : category.success >= 50 ? "text-yellow-400" : "text-red-400"}>
                            {category.success}%
                          </span>
                          <span className="text-gray-500 mx-1">|</span>
                          <span className="text-blue-400">{category.completed}</span>
                          <span className="text-gray-500 mx-1">|</span>
                          <span className="text-purple-400">{category.avgTime}</span>
                        </div>
                      </div>
                      
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            category.success >= 75 ? "bg-gradient-to-r from-green-600 to-green-400" : 
                            category.success >= 50 ? "bg-gradient-to-r from-yellow-600 to-yellow-400" : 
                            "bg-gradient-to-r from-red-600 to-red-400"
                          }`}
                          style={{ width: getBarWidth(category.success) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Monthly Activity */}
              <motion.div variants={itemVariants} className="bg-gray-900/80 border border-blue-500/30 rounded-xl overflow-hidden shadow-lg">
                <div className="px-6 py-4 border-b border-gray-800">
                  <h2 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Monthly Activity
                  </h2>
                </div>
                
                <div className="p-4">
                  <div className="space-y-8">
                    <div className="grid grid-cols-6 gap-3 h-32 items-end">
                      {monthlyActivity.map((month, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2">
                          {/* Bar with challenges and success rate */}
                          <div className="w-full relative" style={{ height: `${Math.max(5, (month.challenges / 10) * 100)}%` }}>
                            <div 
                              className="absolute inset-0 bg-blue-500/30 rounded-t-md border border-blue-500/50"
                            />
                            <div 
                              className="absolute inset-0 bg-green-500/70 rounded-t-md border border-green-500/50"
                              style={{ height: `${(month.success / month.challenges) * 100}%` }}
                            />
                          </div>
                          <div className="text-xs font-mono text-gray-400">{month.month}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-center gap-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500/30 border border-blue-500/50"></div>
                        <span className="text-sm text-gray-400">Attempted</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500/70 border border-green-500/50"></div>
                        <span className="text-sm text-gray-400">Succeeded</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Performance by Difficulty & Achievements */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Performance by Difficulty */}
              <div className="bg-gray-900/80 border border-orange-500/30 rounded-xl overflow-hidden shadow-lg">
                <div className="px-6 py-4 border-b border-gray-800">
                  <h2 className="text-xl font-bold text-orange-400 flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    By Difficulty
                  </h2>
                </div>
                
                <div className="p-4 space-y-6">
                  {difficulties.map((difficulty, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{difficulty.level}</h3>
                        <div className="text-sm font-mono">
                          <span className={difficulty.success >= 75 ? "text-green-400" : difficulty.success >= 50 ? "text-yellow-400" : "text-red-400"}>
                            {difficulty.success}%
                          </span>
                          <span className="text-gray-500 mx-1">|</span>
                          <span className="text-blue-400">{difficulty.completed}</span>
                        </div>
                      </div>
                      
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            difficulty.level === 'Beginner' ? "bg-gradient-to-r from-blue-600 to-blue-400" : 
                            difficulty.level === 'Intermediate' ? "bg-gradient-to-r from-orange-600 to-orange-400" : 
                            "bg-gradient-to-r from-red-600 to-red-400"
                          }`}
                          style={{ width: getBarWidth(difficulty.success) }}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center text-xs text-gray-400">
                        <span>Avg. Time: {difficulty.avgTime}</span>
                        <span>Completed: {difficulty.completed}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Strengths & Weaknesses */}
              <div className="bg-gray-900/80 border border-purple-500/30 rounded-xl overflow-hidden shadow-lg">
                <div className="px-6 py-4 border-b border-gray-800">
                  <h2 className="text-xl font-bold text-purple-400 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Strengths & Weaknesses
                  </h2>
                </div>
                
                <div className="p-4">
                  <div className="space-y-4">
                    {/* Strengths */}
                    <div className="p-3 border border-green-500/30 bg-green-900/20 rounded-lg">
                      <h3 className="font-semibold text-green-400 mb-2">Strengths</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Best Category</span>
                          <span className="font-semibold">{userData.bestCategory}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Most Used Language</span>
                          <span className="font-semibold">{userData.mostUsedLanguage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Successful Challenges</span>
                          <span className="font-semibold">{Math.round(userData.totalChallenges * (userData.successRate / 100))}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Weaknesses */}
                    <div className="p-3 border border-red-500/30 bg-red-900/20 rounded-lg">
                      <h3 className="font-semibold text-red-400 mb-2">Areas to Improve</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Weakest Category</span>
                          <span className="font-semibold">{userData.worstCategory}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Failed Challenges</span>
                          <span className="font-semibold">{userData.totalChallenges - Math.round(userData.totalChallenges * (userData.successRate / 100))}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Average Solve Time</span>
                          <span className="font-semibold">{userData.avgSolveTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recommended Challenges */}
              <div className="bg-gray-900/80 border border-blue-500/30 rounded-xl overflow-hidden shadow-lg">
                <div className="px-6 py-4 border-b border-gray-800">
                  <h2 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Recommendations
                  </h2>
                </div>
                
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="p-3 hover:bg-gray-800/30 transition-colors rounded-lg cursor-pointer">
                      <h3 className="font-semibold text-sm">Database Design Basics</h3>
                      <p className="text-xs text-gray-400 mt-1">Improve your weakest category with this beginner-friendly challenge</p>
                    </div>
                    
                    <div className="p-3 hover:bg-gray-800/30 transition-colors rounded-lg cursor-pointer">
                      <h3 className="font-semibold text-sm">Advanced Algorithms Workshop</h3>
                      <p className="text-xs text-gray-400 mt-1">Build on your strengths with more complex challenges</p>
                    </div>
                    
                    <div className="p-3 hover:bg-gray-800/30 transition-colors rounded-lg cursor-pointer">
                      <h3 className="font-semibold text-sm">Team Challenge: Full-Stack App</h3>
                      <p className="text-xs text-gray-400 mt-1">Collaborate with others on a comprehensive project</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* CSS for animations and custom colors */}
      <style jsx global>{`
        @font-face {
          font-family: 'JetBrains Mono';
          src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
        
        /* Custom animation for bar charts */
        @keyframes growBar {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .growing-bar {
          animation: growBar 1.5s ease-out forwards;
        }
        
        /* Custom colors for stats page */
        .bg-purple-900\\/30 { background-color: rgba(88, 28, 135, 0.3); }
        .bg-yellow-900\\/30 { background-color: rgba(113, 63, 18, 0.3); }
        .bg-red-900\\/30 { background-color: rgba(127, 29, 29, 0.3); }
        .bg-blue-900\\/30 { background-color: rgba(30, 58, 138, 0.3); }
        .bg-green-900\\/30 { background-color: rgba(20, 83, 45, 0.3); }
        .bg-orange-900\\/30 { background-color: rgba(124, 45, 18, 0.3); }
        
        .text-purple-400 { color: rgb(192, 132, 252); }
        .text-yellow-400 { color: rgb(250, 204, 21); }
        .text-red-400 { color: rgb(248, 113, 113); }
        .text-blue-400 { color: rgb(96, 165, 250); }
        .text-green-400 { color: rgb(74, 222, 128); }
        .text-orange-400 { color: rgb(251, 146, 60); }
        
        .border-purple-500\\/30 { border-color: rgba(168, 85, 247, 0.3); }
        .border-yellow-500\\/30 { border-color: rgba(234, 179, 8, 0.3); }
        .border-red-500\\/30 { border-color: rgba(239, 68, 68, 0.3); }
        .border-blue-500\\/30 { border-color: rgba(59, 130, 246, 0.3); }
        .border-green-500\\/30 { border-color: rgba(34, 197, 94, 0.3); }
        .border-orange-500\\/30 { border-color: rgba(249, 115, 22, 0.3); }
      `}</style>
    </div>
  );
}