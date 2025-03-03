// "use client"
// import { motion } from "framer-motion"
// import Link from "next/link"
// import { Code2, UserPlus, Gamepad2, Zap, Trophy, Terminal, MonitorPlay } from "lucide-react"
// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import Navbar from "./components/Navbar"

// export default function LandingPage() {
//   const [name, setName] = useState("")
//   const [codingType, setCodingType] = useState("")
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [codeLines, setCodeLines] = useState<string[]>([]);
//   const [taglineVisible, setTaglineVisible] = useState(false);

//   // Code snippets that will animate in the background
//   const codeSamples = [
//     "function solveChallenge(input) {",
//     "  const result = [];",
//     "  for (let i = 0; i < input.length; i++) {",
//     "    if (isPrime(input[i])) {",
//     "      result.push(input[i]);",
//     "    }",
//     "  }",
//     "  return result;",
//     "}",
//     "class Player {",
//     "  constructor(name, level) {",
//     "    this.name = name;",
//     "    this.level = level;",
//     "    this.points = 0;",
//     "  }",
//     "  completeChallenge(difficulty) {",
//     "    this.points += difficulty * 5;",
//     "    if (this.points > 100) this.level++;",
//     "  }",
//     "}",
//     "def solve_algorithm(data):",
//     "    best_score = 0",
//     "    for solution in generate_solutions(data):",
//     "        score = evaluate(solution)",
//     "        if score > best_score:",
//     "            best_score = score",
//     "    return best_score",
//     "<div className='challenge-complete'>",
//     "  <h2>Challenge Completed!</h2>",
//     "  <div className='points'>+25 XP</div>",
//     "</div>",
//   ];

//   // Split tagline into words for animation
//   const taglineWords = [
//     "Solve", "coding", "challenges,", 
//     "compete", "with", "friends,", 
//     "and", "level", "up", 
//     "your", "programming", "skills", 
//     "in", "real-time", "battles."
//   ];

//   useEffect(() => {
//     // Set loaded after a slight delay for intro animation
//     setTimeout(() => setIsLoaded(true), 300);
    
//     // Initialize code lines for the animated background
//     setCodeLines(
//       [...Array(15)].map(() => {
//         const randomIndex = Math.floor(Math.random() * codeSamples.length);
//         return codeSamples[randomIndex];
//       })
//     );
    
//     // Interval to occasionally change a random code line for constant subtle animation
//     const interval = setInterval(() => {
//       setCodeLines(prevLines => {
//         const newLines = [...prevLines];
//         const randomIndex = Math.floor(Math.random() * newLines.length);
//         const randomCodeIndex = Math.floor(Math.random() * codeSamples.length);
//         newLines[randomIndex] = codeSamples[randomCodeIndex];
//         return newLines;
//       });
//     }, 3000);

//     // Show tagline animation after title appears
//     setTimeout(() => {
//       setTaglineVisible(true);
//     }, 1500);
    
//     return () => clearInterval(interval);
//   }, []);

//   const handleStartCoding = () => {
//     if (!name) {
//       return
//     }
//     // Handle the start coding action
//     console.log("Starting coding with:", { name, codingType })
//   }

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.08,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 }
//     }
//   };

//   // Separate animation for tagline words
//   const wordVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: (i) => ({
//       y: 0,
//       opacity: 1,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.3,
//         ease: [0.2, 0.65, 0.3, 0.9]
//       }
//     })
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
//       {/* Matrix-like code rain background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-80">
//         {codeLines.map((line, i) => (
//           <motion.div
//             key={i}
//             className="absolute text-sm text-green-500/30 font-mono whitespace-nowrap"
//             initial={{
//               x: `${Math.random() * 100}vw`,
//               y: -100,
//               opacity: 0,
//             }}
//             animate={{
//               y: ['0vh', '100vh'],
//               opacity: [0, 0.3, 0.2, 0],
//             }}
//             transition={{
//               duration: 15 + Math.random() * 20,
//               repeat: Infinity,
//               ease: "linear",
//               delay: Math.random() * 10,
//             }}
//           >
//             {line}
//           </motion.div>
//         ))}
//       </div>
      
//       {/* Terminal grid overlay */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNTMsIDI1NSwgMTUzLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-30 pointer-events-none"></div>
      
//       {/* Glowing horizontal lines */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
//         <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
//         <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
//       </div>

//       {/* Navigation */}
//       <Navbar/>

//       {/* Conditional overlay with blur */}
//       {isPopoverOpen && (
//         <div
//           className="fixed inset-0 bg-gray-950/90 backdrop-blur-md z-10"
//           onClick={() => setIsPopoverOpen(false)}
//         />
//       )}

//       {/* Hero Section */}
//       <main className="relative z-1 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 py-10 text-center">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           className="mb-10" // Reduced bottom margin to bring everything up
//         >
//           {/* Logo */}
//           <motion.div 
//             className="mb-10 relative flex justify-center"
//             variants={itemVariants}
//           >
//             <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center">
//               <div className="absolute inset-0 bg-green-500/10 rounded-md rotate-45 border border-green-500/30"></div>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <Terminal className="w-10 h-10 md:w-12 md:h-12 text-green-400" />
//               </div>
//             </div>
//           </motion.div>
          
//           {/* Title with code bracket decoration */}
//           <motion.div
//             className="relative mb-12"
//             variants={itemVariants}
//           >
//             <span className="absolute -left-6 -top-6 text-5xl text-green-500/50 font-mono">{`{`}</span>
//             <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent px-4">
//               CodeQuest: Challenge Arena
//             </h1>
//             <span className="absolute -right-6 -bottom-6 text-5xl text-green-500/50 font-mono">{`}`}</span>
//           </motion.div>
          
//           {/* Enhanced animated tagline */}
//           <motion.div
//             className="mb-16" // Increased bottom margin to push stats down
//             variants={itemVariants}
//           >
//             <div className="terminal-container">
//               <div className="terminal-header">
//                 <div className="terminal-controls">
//                   <span className="terminal-circle bg-red-500"></span>
//                   <span className="terminal-circle bg-yellow-500"></span>
//                   <span className="terminal-circle bg-green-500"></span>
//                 </div>
//                 <div className="terminal-title font-mono text-xs text-gray-400">mission_statement.sh</div>
//               </div>
//               <div className="terminal-content p-6 bg-gray-900/50 border border-green-500/20">
//                 <div className="flex items-start mb-2">
//                   <span className="text-green-500 mr-3 font-mono">$</span>
//                   <div className="text-left font-mono cursor relative">
//                     {taglineVisible && (
//                       <div className="flex flex-wrap justify-start max-w-2xl">
//                         {taglineWords.map((word, i) => (
//                           <motion.span
//                             key={i}
//                             className="text-green-400 mr-3 mb-1.5"
//                             custom={i}
//                             initial="hidden"
//                             animate="visible"
//                             variants={wordVariants}
//                           >
//                             {word}
//                           </motion.span>
//                         ))}
//                         <motion.span 
//                           className="cursor-blink"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: [0, 1, 0] }}
//                           transition={{ duration: 1, repeat: Infinity }}
//                         ></motion.span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <motion.div 
//                   className="text-left text-xs text-gray-500 font-mono mt-4"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 3.5 }}
//                 >
//                   <span className="text-green-500">[success]</span> Mission statement loaded successfully.
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
          
//           {/* Stats display positioned lower with more space above */}
//           <motion.div 
//             className="flex justify-center gap-24 mb-16 mt-8" // Added top margin to push it down more
//             variants={itemVariants}
//           >
//             <div className="text-center px-6">
//               <div className="text-4xl font-mono text-green-400 mb-3">1,200+</div>
//               <div className="text-sm text-green-300/80 tracking-wide">Challenges</div>
//             </div>
//             <div className="text-center px-6">
//               <div className="text-4xl font-mono text-green-400 mb-3">48,000+</div>
//               <div className="text-sm text-green-300/80 tracking-wide">Players</div>
//             </div>
//             <div className="text-center px-6">
//               <div className="text-4xl font-mono text-green-400 mb-3">5</div>
//               <div className="text-sm text-green-300/80 tracking-wide">Difficulty Levels</div>
//             </div>
//           </motion.div>
//         </motion.div>

//         <motion.div 
//           className="flex flex-col sm:flex-row gap-8 items-center mt-4" // Added top margin for buttons
//           variants={containerVariants}
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//         >
//           <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
//             <PopoverTrigger asChild>
//               <motion.button
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-5 rounded-md bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 transition-all duration-300 text-lg font-semibold flex items-center gap-4 z-2 relative border border-green-400/20 group"
//               >
//                 <div className="absolute top-0 left-0 w-full h-full bg-black/20 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 rounded-md"></div>
//                 <Terminal className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
//                 <span className="relative">Enter the Arena</span>
//               </motion.button>
//             </PopoverTrigger>
//             <PopoverContent className="w-96 bg-gray-900/95 backdrop-filter backdrop-blur-xl border border-green-500/30 text-white z-30 rounded-md p-0 overflow-hidden">
//               <div className="grid gap-5 p-5 relative">
//                 {/* Terminal header */}
//                 <div className="absolute top-0 left-0 right-0 h-7 bg-gray-800 flex items-center px-3">
//                   <div className="flex space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   </div>
//                   <div className="text-xs text-gray-400 mx-auto font-mono">player-setup.sh</div>
//                 </div>
                
//                 <div className="pt-8">
//                   <div className="space-y-3">
//                     <h4 className="font-mono text-lg leading-none text-green-400 flex items-center gap-2">
//                       <Terminal className="w-4 h-4" /> 
//                       <span className="typing-animation">Player Configuration</span>
//                     </h4>
//                     <p className="text-sm text-gray-400 font-mono mb-2">
//                       <span className="text-green-500">$</span> Initialize player data to begin challenges
//                     </p>
//                   </div>
                  
//                   <div className="space-y-5 mt-7 font-mono">
//                     <div className="space-y-3">
//                       <Label htmlFor="name" className="text-sm font-medium text-gray-300 flex items-center gap-2">
//                         <span className="text-green-500">$</span> Player.username = 
//                       </Label>
//                       <Input
//                         id="name"
//                         placeholder="developer_1337"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="bg-gray-800/80 border-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200 font-mono placeholder:text-gray-600 py-5"
//                       />
//                       {/* Status indicator */}
//                       {name && (
//                         <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
//                           <span className="text-gray-500">[</span>
//                           <span className="text-green-500">✓</span>
//                           <span className="text-gray-500">]</span>
//                           Username verified and registered
//                         </div>
//                       )}
//                     </div>
                    
//                     <div className="space-y-3 pt-1">
//                       <Label htmlFor="coding-type" className="text-sm font-medium text-gray-300 flex items-center gap-2">
//                         <span className="text-green-500">$</span> Player.specialization = 
//                       </Label>
//                       <Select value={codingType} onValueChange={setCodingType}>
//                         <SelectTrigger className="bg-gray-800/80 border-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200 font-mono py-5">
//                           <SelectValue placeholder="select_specialization" />
//                         </SelectTrigger>
//                         <SelectContent className="bg-gray-900 border-green-900 font-mono">
//                           <SelectItem value="algorithms">
//                             <div className="flex items-center gap-3 py-1">
//                               <Code2 className="w-4 h-4 text-green-400" />
//                               algorithms_expert
//                             </div>
//                           </SelectItem>
//                           <SelectItem value="frontend">
//                             <div className="flex items-center gap-3 py-1">
//                               <MonitorPlay className="w-4 h-4 text-blue-400" />
//                               frontend_wizard
//                             </div>
//                           </SelectItem>
//                           <SelectItem value="backend">
//                             <div className="flex items-center gap-3 py-1">
//                               <Terminal className="w-4 h-4 text-purple-400" />
//                               backend_ninja
//                             </div>
//                           </SelectItem>
//                           <SelectItem value="fullstack">
//                             <div className="flex items-center gap-3 py-1">
//                               <Gamepad2 className="w-4 h-4 text-yellow-400" />
//                               fullstack_master
//                             </div>
//                           </SelectItem>
//                           <SelectItem value="ai">
//                             <div className="flex items-center gap-3 py-1">
//                               <Zap className="w-4 h-4 text-red-400" />
//                               ai_hacker
//                             </div>
//                           </SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
                    
//                     <div className="space-y-5 mt-8">
//                       <Button
//                         className="w-full bg-green-600 hover:bg-green-500 font-medium py-6 transition-all duration-200 font-mono text-white relative overflow-hidden group"
//                         onClick={handleStartCoding}
//                         disabled={!name}
//                       >
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="w-full h-1/3 bg-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
//                         </div>
//                         <div className="flex items-center justify-center gap-3 relative">
//                           <Terminal className="w-5 h-5" />
//                           <span className="tracking-wider">$ ./run_challenges.sh</span>
//                         </div>
//                       </Button>
                      
//                       <div className="relative flex items-center justify-center py-2">
//                         <div className="flex-grow h-px bg-green-900/50"></div>
//                         <span className="px-4 text-xs text-green-500 font-mono">|| OR ||</span>
//                         <div className="flex-grow h-px bg-green-900/50"></div>
//                       </div>
                      
//                       <Link
//                         href="/signup"
//                         className="block w-full text-center px-4 py-6 rounded-md border border-green-800 hover:bg-green-900/30 transition-all duration-200 text-green-200 hover:text-green-100 font-mono relative overflow-hidden group"
//                       >
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="w-full h-1/3 bg-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
//                         </div>
//                         <div className="flex items-center justify-center gap-3 relative">
//                           <Trophy className="w-5 h-5" />
//                           <span className="tracking-wider">$ ./register_account.sh</span>
//                         </div>
//                       </Link>
                      
//                       <div className="text-xs text-gray-500 font-mono text-center py-1">
//                         <span className="text-green-500">></span> New players receive <span className="text-green-400">50 XP</span> bonus
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </PopoverContent>
//           </Popover>

//           <motion.button
//             variants={itemVariants}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-5 rounded-md border border-green-700 hover:bg-green-900/20 transition-all duration-300 text-lg font-semibold flex items-center gap-4 group"
//           >
//             <UserPlus className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
//             <span className="font-mono">Team Battle Mode</span>
//           </motion.button>
//         </motion.div>
//       </main>
      
//       {/* CSS for animations */}
//       <style jsx global>{`
//         @keyframes typing {
//           from { width: 0 }
//           to { width: 100% }
//         }
        
//         .typing-animation {
//           display: inline-block;
//           overflow: hidden;
//           white-space: nowrap;
//           animation: typing 1.5s steps(30, end);
//         }
        
//         @keyframes blink {
//           0%, 100% { opacity: 0 }
//           50% { opacity: 1 }
//         }
        
//         .cursor-blink {
//           display: inline-block;
//           width: 8px;
//           height: 18px;
//           background-color: #4ade80;
//           margin-left: 2px;
//           animation: blink 1s step-end infinite;
//         }
        
//         .terminal-container {
//           width: 100%;
//           max-width: 42rem;
//           margin: 0 auto;
//           border-radius: 6px;
//           overflow: hidden;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
//         }
        
//         .terminal-header {
//           background-color: #1f2937;
//           padding: 8px 12px;
//           display: flex;
//           align-items: center;
//         }
        
//         .terminal-controls {
//           display: flex;
//           gap: 6px;
//         }
        
//         .terminal-circle {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//         }
        
//         .terminal-title {
//           flex-grow: 1;
//           text-align: center;
//         }
        
//         .terminal-content {
//           min-height: 100px;
//           border-bottom-left-radius: 6px;
//           border-bottom-right-radius: 6px;
//         }
        
//         @font-face {
//           font-family: 'JetBrains Mono';
//           src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2') format('woff2');
//           font-weight: normal;
//           font-style: normal;
//         }
        
//         .font-mono {
//           font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
//         }
//       `}</style>
//     </div>
//   )
// }

"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Code2, UserPlus, Gamepad2, Zap, Trophy, Terminal, MonitorPlay, LogIn } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "./components/Navbar"

export default function LandingPage() {
  const [name, setName] = useState("")
  const [codingType, setCodingType] = useState("")
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("login"); // For tracking active tab

  // Code snippets that will animate in the background
  const codeSamples = [
    "function solveChallenge(input) {",
    "  const result = [];",
    "  for (let i = 0; i < input.length; i++) {",
    "    if (isPrime(input[i])) {",
    "      result.push(input[i]);",
    "    }",
    "  }",
    "  return result;",
    "}",
    "class Player {",
    "  constructor(name, level) {",
    "    this.name = name;",
    "    this.level = level;",
    "    this.points = 0;",
    "  }",
    "  completeChallenge(difficulty) {",
    "    this.points += difficulty * 5;",
    "    if (this.points > 100) this.level++;",
    "  }",
    "}",
    "def solve_algorithm(data):",
    "    best_score = 0",
    "    for solution in generate_solutions(data):",
    "        score = evaluate(solution)",
    "        if score > best_score:",
    "            best_score = score",
    "    return best_score",
    "<div className='challenge-complete'>",
    "  <h2>Challenge Completed!</h2>",
    "  <div className='points'>+25 XP</div>",
    "</div>",
  ];

  // Split tagline into words for animation
  const taglineWords = [
    "Solve", "coding", "challenges,", 
    "compete", "with", "friends,", 
    "and", "level", "up", 
    "your", "programming", "skills", 
    "in", "real-time", "battles."
  ];

  useEffect(() => {
    // Set loaded after a slight delay for intro animation
    setTimeout(() => setIsLoaded(true), 300);
    
    // Initialize code lines for the animated background
    setCodeLines(
      [...Array(15)].map(() => {
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

    // Show tagline animation after title appears
    setTimeout(() => {
      setTaglineVisible(true);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    // In a real app, you would authenticate with your backend here
    console.log("Logging in with:", { email, password });
    setIsLoggedIn(true);
    setIsPopoverOpen(false);
    // Reset auth form
    setEmail("");
    setPassword("");
  };

  const handleSignup = () => {
    // In a real app, you would register with your backend here
    console.log("Signing up with:", { email, password, name });
    setIsLoggedIn(true);
    setIsPopoverOpen(false);
    // Reset auth form
    setEmail("");
    setPassword("");
  };

  // Direct handlers without using the PopoverTrigger
  const handleEnterArena = () => {
    if (isLoggedIn) {
      // User is logged in, proceed to arena
      console.log("Entering arena");
      // Here you would redirect to the arena page
    } else {
      // User is not logged in, show auth popup directly
      setActiveTab("login");
      setIsPopoverOpen(true);
    }
  };

  const handleTeamBattle = () => {
    if (isLoggedIn) {
      // User is logged in, proceed to team battle
      console.log("Entering team battle mode");
      // Here you would redirect to the team battle page
    } else {
      // User is not logged in, show auth popup directly
      setActiveTab("login");
      setIsPopoverOpen(true);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.08,
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

  // Separate animation for tagline words
  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Matrix-like code rain background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-80">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            className="absolute text-sm text-green-500/30 font-mono whitespace-nowrap"
            initial={{
              x: `${Math.random() * 100}vw`,
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 0.3, 0.2, 0],
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
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
      </div>

      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <main className="relative z-1 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 py-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="mb-10" // Reduced bottom margin to bring everything up
        >
          {/* Logo */}
          <motion.div 
            className="mb-10 relative flex justify-center"
            variants={itemVariants}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-green-500/10 rounded-md rotate-45 border border-green-500/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Terminal className="w-10 h-10 md:w-12 md:h-12 text-green-400" />
              </div>
            </div>
          </motion.div>
          
          {/* Title with code bracket decoration */}
          <motion.div
            className="relative mb-12"
            variants={itemVariants}
          >
            <span className="absolute -left-6 -top-6 text-5xl text-green-500/50 font-mono">{`{`}</span>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent px-4">
              CodeQuest: Challenge Arena
            </h1>
            <span className="absolute -right-6 -bottom-6 text-5xl text-green-500/50 font-mono">{`}`}</span>
          </motion.div>
          
          {/* Enhanced animated tagline */}
          <motion.div
            className="mb-32" // Increased bottom margin to push stats down
            variants={itemVariants}
          >
            <div className="terminal-container">
              <div className="terminal-header">
                <div className="terminal-controls">
                  <span className="terminal-circle bg-red-500"></span>
                  <span className="terminal-circle bg-yellow-500"></span>
                  <span className="terminal-circle bg-green-500"></span>
                </div>
                <div className="terminal-title font-mono text-xs text-gray-400">mission_statement.sh</div>
              </div>
              <div className="terminal-content p-6 bg-gray-900/50 border border-green-500/20">
                <div className="flex items-start mb-2">
                  <span className="text-green-500 mr-3 font-mono">$</span>
                  <div className="text-left font-mono cursor relative">
                    {taglineVisible && (
                      <div className="flex flex-wrap justify-start max-w-2xl">
                        {taglineWords.map((word, i) => (
                          <motion.span
                            key={i}
                            className="text-green-400 mr-3 mb-1.5"
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={wordVariants}
                          >
                            {word}
                          </motion.span>
                        ))}
                        <motion.span 
                          className="cursor-blink"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        ></motion.span>
                      </div>
                    )}
                  </div>
                </div>
                <motion.div 
                  className="text-left text-xs text-gray-500 font-mono mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                >
                  <span className="text-green-500">[success]</span> Mission statement loaded successfully.
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Stats display positioned lower with more space above */}
          <motion.div 
            className="flex justify-center gap-24 mb-16 mt-8" // Added top margin to push it down more
            variants={itemVariants}
          >
            <div className="text-center px-6">
              <div className="text-4xl font-mono text-green-400 mb-3">1,200+</div>
              <div className="text-sm text-green-300/80 tracking-wide">Challenges</div>
            </div>
            <div className="text-center px-6">
              <div className="text-4xl font-mono text-green-400 mb-3">48,000+</div>
              <div className="text-sm text-green-300/80 tracking-wide">Players</div>
            </div>
            <div className="text-center px-6">
              <div className="text-4xl font-mono text-green-400 mb-3">5</div>
              <div className="text-sm text-green-300/80 tracking-wide">Difficulty Levels</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-8 items-center mt-4" // Added top margin for buttons
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Enter Arena Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnterArena}
            className="px-8 py-5 rounded-md bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 transition-all duration-300 text-lg font-semibold flex items-center gap-4 z-2 relative border border-green-400/20 group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 rounded-md"></div>
            <Terminal className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
            <span className="relative">Enter the Arena</span>
          </motion.button>

          {/* Team Battle Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleTeamBattle}
            className="px-8 py-5 rounded-md border border-green-700 hover:bg-green-900/20 transition-all duration-300 text-lg font-semibold flex items-center gap-4 group"
          >
            <UserPlus className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-mono">Team Battle Mode</span>
          </motion.button>
        </motion.div>

        {/* Modal-style auth dialog */}
{isPopoverOpen && (
  <div className="fixed inset-0 bg-gray-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      <div className="w-96 bg-gray-900/95 backdrop-filter backdrop-blur-xl border border-green-500/30 text-white rounded-md overflow-hidden relative">
        {/* Close button */}
        <button 
          onClick={() => setIsPopoverOpen(false)}
          className="absolute top-0 right-2 text-red-400 hover:text-red-300 z-10 w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-900/30"
        >
          ×
        </button>
        
        <div className="grid gap-5 p-5 relative">
          {/* Terminal header */}
          <div className="absolute top-0 left-0 right-0 h-7 bg-gray-800 flex items-center px-3">
            {/* <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div> */}
            <div className="text-xs text-gray-400 mx-auto font-mono">TALK IS CHEAP, <span className="text-green-400">AUTHENTICATE FIRST</span></div>
          </div>
          
          <div className="pt-8">
            {/* Auth tabs - simplified without using the custom component */}
            <div className="grid grid-cols-2 bg-gray-800 mb-4 rounded-md overflow-hidden">
              <button 
                onClick={() => setActiveTab("login")}
                className={`font-mono text-sm py-2 px-4 ${activeTab === "login" ? "bg-green-800/50 text-green-400" : "bg-transparent text-gray-400"}`}
              >
                <span className="text-green-500 mr-2"></span> LOGIN
              </button>
              <button 
                onClick={() => setActiveTab("signup")}
                className={`font-mono text-sm py-2 px-4 ${activeTab === "signup" ? "bg-green-800/50 text-green-400" : "bg-transparent text-gray-400"}`}
              >
                <span className="text-green-500 mr-2"></span> SIGN UP
              </button>
            </div>
            
            {/* Login Form */}
            {activeTab === "login" && (
              <div className="space-y-5 font-mono">
                <div className="space-y-2">
                  <h4 className="font-mono text-lg leading-none text-green-400 flex items-center gap-2">
                    <LogIn className="w-4 h-4" /> 
                    <span className="typing-animation">Authentication Required</span>
                  </h4>
                  <p className="text-sm text-gray-400 font-mono mb-2">
                    <span className="text-green-500">$</span> Login to access the arena
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <span className="text-green-500">$</span> User.email =
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="developer@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-800/80 border-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200 font-mono placeholder:text-gray-600 py-5"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <span className="text-green-500">$</span> User.password =
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-800/80 border-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200 font-mono placeholder:text-gray-600 py-5"
                    />
                  </div>
                  
                  <Button
                    onClick={handleLogin}
                    className="w-full bg-green-600 hover:bg-green-500 font-medium py-6 transition-all duration-200 font-mono text-white relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-1/3 bg-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                    <div className="flex items-center justify-center gap-3 relative">
                      <Terminal className="w-5 h-5" />
                      <span className="tracking-wider">Authenticate</span>
                    </div>
                  </Button>
                  
                  {/* Social login divider */}
                  <div className="relative flex items-center justify-center py-2">
                    <div className="flex-grow h-px bg-green-900/50"></div>
                    <span className="px-4 text-xs text-green-500 font-mono">Sign In Using</span>
                    <div className="flex-grow h-px bg-green-900/50"></div>
                  </div>
                  
                  {/* Social login buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => console.log("Google login")} 
                      className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 py-3 rounded-md border border-gray-700 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-sm text-gray-300">Google</span>
                    </button>
                    
                    <button 
                      onClick={() => console.log("GitHub login")} 
                      className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 py-3 rounded-md border border-gray-700 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      <span className="text-sm text-gray-300">GitHub</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Signup Form */}
            {activeTab === "signup" && (
              <div className="space-y-5 font-mono">
                <div className="space-y-2">
                  <h4 className="font-mono text-lg leading-none text-green-400 flex items-center gap-2">
                    <UserPlus className="w-4 h-4" /> 
                    <span className="typing-animation">New "Coder" Registration</span>
                  </h4>
                  <p className="text-sm text-gray-400 font-mono mb-2">
                    <span className="text-green-500"></span> Create an account to join the battles
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <span className="text-green-500"></span> Coder.name 
                    </Label>
                    <Input
                      id="signup-name"
                      placeholder="developer_1337"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-800/80 border-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200 font-mono placeholder:text-gray-600 py-5"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <span className="text-green-500"></span> Coder.email 
                    </Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="developer@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-800/80 border-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200 font-mono placeholder:text-gray-600 py-5"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <span className="text-green-500"></span> Coder.password 
                    </Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-800/80 border-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200 font-mono placeholder:text-gray-600 py-5"
                    />
                  </div>
                  
                  <Button
                    onClick={handleSignup}
                    className="w-full bg-green-600 hover:bg-green-500 font-medium py-6 transition-all duration-200 font-mono text-white relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-1/3 bg-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                    <div className="flex items-center justify-center gap-3 relative">
                      <UserPlus className="w-5 h-5" />
                      <span className="tracking-wider">Create Account</span>
                    </div>
                  </Button>
                  
                  {/* Social signup divider */}
                  <div className="relative flex items-center justify-center py-2">
                    <div className="flex-grow h-px bg-green-900/50"></div>
                    <span className="px-4 text-xs text-green-500 font-mono"> Sign In Using</span>
                    <div className="flex-grow h-px bg-green-900/50"></div>
                  </div>
                  
                  {/* Social signup buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => console.log("Google signup")} 
                      className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 py-3 rounded-md border border-gray-700 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-sm text-gray-300">Google</span>
                    </button>
                    
                    <button 
                      onClick={() => console.log("GitHub signup")} 
                      className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 py-3 rounded-md border border-gray-700 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      <span className="text-sm text-gray-300">GitHub</span>
                    </button>
                  </div>
                  
                  <div className="text-xs text-gray-500 font-mono text-center py-1">
                    <span className="text-green-500">></span> New players receive <span className="text-green-400">50 XP</span> bonus
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
)}
      </main>
      
      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 1.5s steps(30, end);
        }
        
        @keyframes blink {
          0%, 100% { opacity: 0 }
          50% { opacity: 1 }
        }
        
        .cursor-blink {
          display: inline-block;
          width: 8px;
          height: 18px;
          background-color: #4ade80;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        }
        
        .terminal-container {
          width: 100%;
          max-width: 42rem;
          margin: 0 auto;
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
          min-height: 100px;
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
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