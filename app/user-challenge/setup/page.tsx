// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   Code2,
//   Timer,
//   Terminal,
//   ArrowRight,
//   Trophy,
//   Zap,
//   Settings,
//   Play,
//   ArrowLeft,
//   Shield,
//   Cpu,
//   BarChart,
//   Sword,
//   Target
// } from "lucide-react";
// import { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";

// // Helper function to return background and border classes for an option
// interface Option {
//   id: string;
//   label: string;
//   description: string;
//   icon: React.ComponentType;
//   xpRange?: string;
// }

// interface TimeOption {
//   id: string;
//   label: string;
//   description: string;
//   value: number;
// }

// // Animation variants for option cards
// const optionCardVariants = {
//   initial: { scale: 0.95, opacity: 0.8, y: 10 },
//   hover: { 
//     scale: 1.03, 
//     opacity: 1,
//     y: 0,
//     boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
//     transition: { duration: 0.3, ease: "easeOut" }
//   },
//   tap: { scale: 0.97, transition: { duration: 0.1, ease: "easeIn" } },
//   selected: { 
//     scale: 1,
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 200, damping: 15 }
//   },
//   unselected: { scale: 0.95, opacity: 0.8, y: 5, transition: { duration: 0.3 } }
// };

// // Animation for the selected dot/indicator
// const selectionDotVariants = {
//   hidden: { opacity: 0, scale: 0, y: 10 },
//   visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
// };

// // Pulse animation for icons
// const iconPulseVariants = {
//   initial: { scale: 1 },
//   selected: { scale: [1, 1.2, 1], transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" as const, repeatDelay: 2 } }
// };

// export default function ChallengeSetupPage() {
//   const router = useRouter();
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [selectedDifficulty, setSelectedDifficulty] = useState("medium");
//   const [selectedTimeLimit, setSelectedTimeLimit] = useState("30min");
//   const [selectedMode, setSelectedMode] = useState("ranked");
//   const [isStarting, setIsStarting] = useState(false);
//   const [isClient, setIsClient] = useState(false);
//   const [showStatsMenu, setShowStatsMenu] = useState(false);
//   const statsButtonRef = useRef<HTMLButtonElement>(null);
  
//   // Updated difficulty options
//   const difficultyOptions = [
//     { id: "easy", label: "Easy", description: "Basic algorithmic problems", icon: Shield, xpRange: "50-150" },
//     { id: "medium", label: "Medium", description: "Moderate complexity challenges", icon: Code2, xpRange: "150-300" },
//     { id: "hard", label: "Hard", description: "Complex algorithmic challenges", icon: Cpu, xpRange: "300-500" },
//   ];

//   // Define time options for each difficulty
//   const timeOptionsMap = {
//     easy: [
//       { id: "10min", label: "10 Minutes", description: "Quick challenge", value: 600 },
//       { id: "15min", label: "15 Minutes", description: "Standard Challenge", value: 900 },
//       { id: "30min", label: "30 Minutes", description: "Extended Challenge", value: 1800 }
//     ],
//     medium: [
//       { id: "15min", label: "15 Minutes", description: "Quick challenge", value: 900 },
//       { id: "30min", label: "30 Minutes", description: "Standard Challenge", value: 1800 },
//       { id: "45min", label: "45 Minutes", description: "Extended Challenge", value: 2700 }
//     ],
//     hard: [
//       { id: "30min", label: "30 Minutes", description: "Quick challenge", value: 1800 },
//       { id: "45min", label: "45 Minutes", description: "Standard Challenge", value: 2700 },
//       { id: "60min", label: "60 Minutes", description: "Extended Challenge", value: 3600 }
//     ]
//   };

//   // Get current time options based on selected difficulty
//   const currentTimeOptions = timeOptionsMap[selectedDifficulty as keyof typeof timeOptionsMap] || [];

//   const modeOptions = [
//     { id: "casual", label: "Casual", description: "Practice mode, no rating impact", icon: Shield },
//     { id: "ranked", label: "Ranked", description: "Competitive play, affects rating", icon: Trophy },
//     { id: "custom", label: "Custom", description: "User-defined settings", icon: Settings },
//   ];

//   // Update time limit when difficulty changes
//   useEffect(() => {
//     // Get available time options for the selected difficulty
//     const timeOptions = timeOptionsMap[selectedDifficulty as keyof typeof timeOptionsMap] || [];
    
//     // Check if current selected time is valid for the new difficulty
//     const isCurrentTimeValid = timeOptions.some(option => option.id === selectedTimeLimit);
    
//     // If current selected time is not valid, select the middle option (index 1)
//     if (!isCurrentTimeValid && timeOptions.length > 0) {
//       setSelectedTimeLimit(timeOptions[1].id);
//     }
//   }, [selectedDifficulty]);

//   // Handle starting the challenge
//   const startChallenge = () => {
//     setIsStarting(true);
//     const preferences = {
//       difficulty: selectedDifficulty,
//       timeLimit: selectedTimeLimit,
//       mode: selectedMode,
//     };
//     if (typeof window !== "undefined") {
//       localStorage.setItem("challengePreferences", JSON.stringify(preferences));
//     }
//     setTimeout(() => {
//       router.push("/user-challenge");
//     }, 1500);
//   };

//   function toggleStatsMenu(): void {
//     setShowStatsMenu((prev) => !prev);
//   }

//   // Client-side initialization
//   useEffect(() => {
//     setIsClient(true);
//     setTimeout(() => setIsLoaded(true), 300);
//   }, []);

//   // Animation variants for container and items
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1, delayChildren: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
//   };

//   // Generate a stable challenge ID on the client
//   const [challengeId, setChallengeId] = useState("CMD-000-00");

//   useEffect(() => {
//     if (isClient) {
//       const id = `CMD-${(Math.floor(Date.now() / 1000) % 1000)}-${Math.floor((Date.now() / 100) % 100)}`;
//       setChallengeId(id);
//     }
//   }, [isClient]); // Only run when isClient changes (once)

//   return (
//     <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
//       {/* Background with gradient */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-80"></div>

//       {/* Terminal grid overlay */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNTMsIDI1NSwgMTUzLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-30 pointer-events-none"></div>
      
//       {/* Removed Matrix Digital Rain Effect */}

      

//       {/* Stats Button with Leaderboard popup */}
//       <div className="absolute top-20 right-6 z-10">
//         <button 
//           ref={statsButtonRef}
//           onClick={toggleStatsMenu}
//           className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg border transition-all duration-300 ${
//             showStatsMenu 
//               ? 'bg-green-500/20 border-green-500' 
//               : 'bg-gradient-to-r from-purple-900/30 to-blue-700/30 border-purple-600/50 hover:from-purple-800/40 hover:to-blue-600/40'
//           }`}
//           aria-label="Leaderboard"
//         >
//           <motion.div 
//             initial={{ rotate: 0 }}
//             animate={{ rotate: showStatsMenu ? 180 : 0 }}
//             transition={{ duration: 0.3 }}
//             className="relative"
//           >
//             <Trophy className="w-5 h-5 text-purple-400" />
//             <span className="absolute -top-1 -right-1 flex h-3 w-3">
//               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//             </span>
//           </motion.div>
//           <div className="flex flex-col leading-none ">
//             <span className="font-mono text-xs font-semibold text-purple-400">Rank #234</span>
//             <span className="font-mono text-[10px] text-gray-400">Top 5%</span>
//           </div>
//         </button>
        
//         {showStatsMenu && (
//           <motion.div 
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="absolute top-16 right-0 mt-2 w-64 bg-gray-800 border border-green-700/50 rounded-lg shadow-lg p-4"
//           >
//             <h3 className="font-mono text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
//               <Trophy className="w-4 h-4" />
//               Battledome Rankings
//             </h3>
//             <ul className="space-y-2">
//               <li className="font-mono flex justify-between text-sm text-gray-300 bg-gray-700/30 p-2 rounded border border-green-900/30">
//                 <span className="flex items-center">
//                   <span className="text-green-400 mr-2">1.</span> 
//                   CyberSlayer99
//                 </span>
//                 <span className="text-purple-400">1500 XP</span>
//               </li>
//               <li className="font-mono flex justify-between text-sm text-gray-300 bg-gray-700/30 p-2 rounded border border-blue-900/30">
//                 <span className="flex items-center">
//                   <span className="text-blue-400 mr-2">2.</span> 
//                   CodeNinja42
//                 </span>
//                 <span className="text-purple-400">1400 XP</span>
//               </li>
//               <li className="font-mono flex justify-between text-sm text-gray-300 bg-gray-700/30 p-2 rounded border border-purple-900/30">
//                 <span className="flex items-center">
//                   <span className="text-purple-400 mr-2">3.</span> 
//                   AlgorithmAce
//                 </span>
//                 <span className="text-purple-400">1300 XP</span>
//               </li>
//             </ul>
//             <div className="mt-3 pt-2 border-t border-gray-700">
//               <div className="font-mono text-xs text-gray-400">Your last 3 battles:</div>
//               <div className="text-xs font-mono mt-1 grid grid-cols-3 gap-1">
//                 <div className="bg-green-900/30 p-1 rounded text-center text-green-400">WIN</div>
//                 <div className="bg-red-900/30 p-1 rounded text-center text-red-400">LOSS</div>
//                 <div className="bg-green-900/30 p-1 rounded text-center text-green-400">WIN</div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>

//       {/* Main content */}
//       <main className="relative z-1 flex flex-col items-center justify-center pt-10 px-4 md:px-6 pb-20 min-h-[calc(100vh-80px)]">
//         <motion.div variants={containerVariants} initial="hidden" animate={isLoaded ? "visible" : "hidden"} className="w-full max-w-6xl">
//           {/* Back Button */}
//           <motion.div variants={itemVariants} className="mb-0 flex justify-between items-center">
//             <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-gray-900/60 rounded-md border border-green-700 hover:bg-green-900/20 transition-all duration-300 font-mono text-sm w-fit">
//               <ArrowLeft className="w-4 h-4 text-green-400" />
//               <span className="font-mono">Return to HQ</span>
//             </Link>
//           </motion.div>

//           {/* Header with battle mode animated </> symbol */}
//           <motion.div variants={itemVariants} className="mb-16 text-center relative">

//             {/* Main code brackets with battle effects */}
//             <motion.p 
//               className="font-mono text-5xl max-w-2xl mx-auto relative z-10"
//               initial={{ scale: 0.8 }}
//               animate={{ 
//                 scale: [0.9, 1.1, 0.9],
//                 textShadow: [
//                   "0 0 8px rgba(74, 222, 128, 0.7)",
//                   "0 0 16px rgba(192, 132, 252, 0.9)",
//                   "0 0 8px rgba(74, 222, 128, 0.7)"
//                 ],
//                 color: [
//                   'rgb(74, 222, 128)', // green-400
//                   'rgb(192, 132, 252)', // purple-400
//                   'rgb(96, 165, 250)', // blue-400
//                   'rgb(74, 222, 128)' // back to green-400
//                 ]
//               }}
//               transition={{ 
//                 scale: {
//                   duration: 0.8,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 },
//                 textShadow: {
//                   duration: 1.5,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 },
//                 color: {
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: [0.33, 1, 0.68, 1] // Custom cubic bezier for electric feel
//                 }
//               }}
//             >
//               &lt;/&gt;
//             </motion.p>

//             {/* Battle mode text */}
//             <div className="mt-2 font-mono text-sm text-purple-400">
//               CODE BATTLE INITIALIZING
//             </div>
            
//             {/* Alert banner */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.5 }}
//               className="mt-4 bg-gray-800/70 border border-green-500/20 p-2 rounded-md inline-flex items-center gap-2 text-sm font-mono"
//             >
//               <div className="w-2 h-2 rounded-full bg-green-500"></div>
//               <span className="text-green-400">MATCHMAKING SYSTEM READY</span>
//             </motion.div>
//           </motion.div>

//           {/* Challenge Configuration Grid */}
//           <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 mb-8">
//             {/* Difficulty Column */}
//             <div className="space-y-6">
//               <div className="font-mono text-blue-400 text-lg mb-4 flex justify-center">
//                 <span className="font-mono flex items-center gap-2">
//                   <Target className="w-5 h-5" />
//                   Difficulty Level
//                 </span>
//               </div>

//               {difficultyOptions.map((option) => (
//                 <motion.div
//                   key={option.id}
//                   id={`difficulty-${option.id}`}
//                   initial="initial"
//                   animate={selectedDifficulty === option.id ? "selected" : "unselected"}
//                   whileHover="hover"
//                   whileTap="tap"
//                   variants={optionCardVariants}
//                   onClick={() => setSelectedDifficulty(option.id)}
//                   className={`p-5 rounded-md border cursor-pointer transition-colors duration-300 hover:border-blue-500/50 ${
//                     selectedDifficulty === option.id ? "bg-blue-900/40 border-blue-500/50" : "bg-gray-900/90 border-gray-700/90 hover:bg-gray-800/70"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <motion.div 
//                       className="w-10 h-10 rounded-md bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400"
//                       variants={iconPulseVariants}
//                       animate={selectedDifficulty === option.id ? "selected" : "initial"}
//                     >
//                       <option.icon className="w-5 h-5" />
//                     </motion.div>
//                     <div>
//                       <h3 className="font-mono font-semibold text-blue-400">{option.label}</h3>
//                       <p className="font-mono text-sm text-white-400">{option.description}</p>
//                     </div>
//                   </div>
//                   {selectedDifficulty === option.id && (
//                     <motion.div 
//                       className="mt-3 flex items-center justify-between text-sm"
//                       initial="hidden"
//                       animate="visible"
//                       variants={selectionDotVariants}
//                     >
//                       <span className="text-blue-400 font-mono">+{option.xpRange} XP</span>
//                       <motion.span 
//                         className="text-blue-500 flex items-center gap-1"
//                         initial={{ x: 10, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: 0.1 }}
//                       >
//                         <Zap className="w-4 h-4" />
//                         <span className="font-mono">Selected</span>
//                       </motion.span>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             {/* Time Limit Column */}
//             <div className="space-y-6">
//               <div className="font-mono text-purple-400 text-lg mb-4 flex justify-center">
//                 <span className="font-mono flex items-center gap-2">
//                   <Timer className="w-5 h-5" />
//                   Time Limit
//                 </span>
//               </div>

//               {currentTimeOptions.map((option) => (
//                 <motion.div
//                   key={option.id}
//                   id={`time-${option.id}`}
//                   initial="initial"
//                   animate={selectedTimeLimit === option.id ? "selected" : "unselected"}
//                   whileHover="hover"
//                   whileTap="tap"
//                   variants={optionCardVariants}
//                   onClick={() => setSelectedTimeLimit(option.id)}
//                   className={`p-5 rounded-md border cursor-pointer transition-colors duration-300 hover:border-purple-500/50 ${
//                     selectedTimeLimit === option.id ? "bg-purple-900/40 border-purple-500/50" : "bg-gray-900/90 border-gray-700/90 hover:bg-gray-800/70"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <motion.div 
//                       className="w-10 h-10 rounded-md bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-400"
//                       variants={iconPulseVariants}
//                       animate={selectedTimeLimit === option.id ? "selected" : "initial"}
//                     >
//                       <Timer className="w-5 h-5" />
//                     </motion.div>
//                     <div>
//                       <h3 className="font-mono font-semibold text-purple-400">{option.label}</h3>
//                       <p className="font-mono text-sm text-white-400">{option.description}</p>
//                     </div>
//                   </div>
//                   {selectedTimeLimit === option.id && (
//                     <motion.div 
//                       className="mt-3 flex items-center justify-between text-sm"
//                       initial="hidden"
//                       animate="visible"
//                       variants={selectionDotVariants}
//                     >
//                       <span className="font-mono text-purple-400">
//                         {Math.floor(option.value / 60)}:{(option.value % 60).toString().padStart(2, "0")}
//                       </span>
//                       <motion.span 
//                         className="font-mono text-purple-500 flex items-center gap-1"
//                         initial={{ x: 10, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: 0.1 }}
//                       >
//                         <Zap className="w-4 h-4" />
//                         <span className="font-mono">Selected</span>
//                       </motion.span>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

          

//           {/* Simple Connector (No Animation) */}
//           <div className="relative h-20 mb-8 overflow-hidden">
//             <div 
//               className="absolute top-1/2 left-1/4 w-1/4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2"
//             />
//             <div 
//               className="absolute top-1/2 right-1/4 w-1/4 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-y-1/2"
//             />
            
//             {/* Static connection points */}
//             <div 
//               className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 boxShadow: "0 0 4px 1px rgba(59, 130, 246, 0.5)"
//               }}
//             />
//             <div 
//               className="absolute top-1/2 left-2/4 w-3 h-3 rounded-full bg-purple-500 transform -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 boxShadow: "0 0 4px 1px rgba(168, 85, 247, 0.5)"
//               }}
//             />
//             <div 
//               className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 boxShadow: "0 0 4px 1px rgba(59, 130, 246, 0.5)"
//               }}
//             />
//           </div>

//           {/* Challenge Summary Card */}
//           <motion.div variants={itemVariants} className="bg-gray-900/80 rounded-lg border border-green-500/20 p-6 mb-10">
//             <h3 className="font-mono text-white-400 text-lg mb-4 flex items-center gap-2">
//               <Terminal className="w-5 h-5" />
//               Battle Parameters
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="space-y-2">
//                 <span className="font-mono text-sm text-gray-400">Difficulty:</span>
//                 <div className="flex items-center gap-2 text-blue-400">
//                   {selectedDifficulty === "easy" && <Shield className="w-5 h-5" />}
//                   {selectedDifficulty === "medium" && <Code2 className="w-5 h-5" />}
//                   {selectedDifficulty === "hard" && <Cpu className="w-5 h-5" />}
//                   <span className="font-mono font-semibold">
//                     {difficultyOptions.find((o) => o.id === selectedDifficulty)?.label}
//                   </span>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <span className="font-mono text-sm text-white-400">Time Limit:</span>
//                 <div className="flex items-center gap-2 text-purple-400">
//                   <Timer className="w-5 h-5" />
//                   <span className="font-mono font-semibold">
//                     {currentTimeOptions.find((o) => o.id === selectedTimeLimit)?.label}
//                   </span>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <span className="font-mono text-sm text-white-400">Mode:</span>
//                 <div className="flex items-center gap-2 text-green-400">
//                   {selectedMode === "casual" && <Shield className="w-5 h-5" />}
//                   {selectedMode === "ranked" && <Trophy className="w-5 h-5" />}
//                   {selectedMode === "custom" && <Settings className="w-5 h-5" />}
//                   <span className="font-mono font-semibold">
//                     {modeOptions.find((o) => o.id === selectedMode)?.label}
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-6 pt-4 border-t border-green-500/20">
//               <div className="flex items-center justify-between">
//                 <div>
//                 <span className="font-mono text-sm text-white-400">Potential Reward:</span>
//                   <div className="flex items-center gap-2 text-purple-400 font-mono">
//                     <Zap className="w-4 h-4" />
//                     <span>
//                       {selectedDifficulty === "easy"
//                         ? "50-150"
//                         : selectedDifficulty === "medium"
//                         ? "150-300"
//                         : "300-500"} XP
//                     </span>
//                     <span className="text-white-500">
//                       {selectedMode === "ranked" ? "× 1.5 multiplier" : "× 1.0 multiplier"}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="text-sm text-white-400 font-mono">
//                   Battle ID: <span className="text-green-400">{challengeId}</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* System status indicators */}
//             <div className="mt-4 grid grid-cols-3 gap-2 border-t border-green-500/10 pt-4">
//               <div className="flex items-center gap-2 text-xs font-mono">
//                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
//                 <span className="text-green-400">SYSTEM ONLINE</span>
//               </div>
//               <div className="flex items-center gap-2 text-xs font-mono">
//                 <div className="w-2 h-2 rounded-full bg-purple-500"></div>
//                 <span className="text-purple-400">COMPILER READY</span>
//               </div>
//               <div className="flex items-center gap-2 text-xs font-mono">
//                 <div className="w-2 h-2 rounded-full bg-blue-500"></div>
//                 <span className="text-blue-400">NETWORK SECURE</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Start Challenge Button */}
//           <motion.div variants={itemVariants} className="flex justify-center">
//             <motion.div
//               initial={{ scale: 1 }}
//               animate={{ scale: [1, 1.03, 1], transition: { duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 } }}
//             >
//               <Button
//                 onClick={startChallenge}
//                 disabled={isStarting}
//                 className={`px-8 py-6 h-auto text-lg font-mono font-semibold rounded-md ${
//                   isStarting
//                     ? "bg-red-700 cursor-wait"
//                     : "bg-gradient-to-r from-red-600 to-red-600 hover:from-red-500 hover:to-red-500"
//                 } text-white flex items-center gap-3 group transition-all duration-300 relative overflow-hidden`}
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-white opacity-10"
//                   initial={{ x: "-100%" }}
//                   animate={isStarting ? { x: "100%" } : { x: "-100%" }}
//                   transition={{ duration: 1.5, repeat: isStarting ? Infinity : 0 }}
//                 />
//                 {isStarting ? (
//                   <>
//                     <motion.div 
//                       className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                     />
//                     <span className="font-mono">Entering Battleground...</span>
//                   </>
//                 ) : (
//                   <>
//                     <motion.div
//                       animate={{ rotate: [0, -10, 10, -5, 0], scale: [1, 1.2, 1] }}
//                       transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
//                     >
//                       <Sword className="w-5 h-5" />
//                     </motion.div>
//                     <span className="font-mono">ENGAGE BATTLE</span>
//                     <motion.div
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
//                     >
//                       <ArrowRight className="w-5 h-5" />
//                     </motion.div>
//                   </>
//                 )}
//               </Button>
//             </motion.div>
//           </motion.div>
          
//           {/* System Status Footer */}
//           <motion.div 
//             variants={itemVariants}
//             className="mt-8 font-mono text-xs text-center text-gray-500"
//           >
//             <div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-800 px-3 py-1 rounded-full">
//               <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
//               BATTLE ENGINE v2.5.1 | SYSTEM READY
//             </div>
//           </motion.div>
//         </motion.div>
//       </main>

//       <style jsx global>{`
//         @font-face {
//           font-family: 'JetBrains Mono';
//           src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2') format('woff2');
//           font-weight: normal;
//           font-style: normal;
//         }
//         .font-mono {
//           font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
//         }
//         /* Custom color classes */
//         .text-green-400 { color: rgb(74, 222, 128); }
//         .text-purple-400 { color: rgb(192, 132, 252); }
//         .text-red-400 { color: rgb(248, 113, 113); }
//         .text-blue-400 { color: rgb(96, 165, 250); }
//         .text-orange-400 { color: rgb(251, 146, 60); }
//         .text-green-500 { color: rgb(34, 197, 94); }
//         .text-purple-500 { color: rgb(168, 85, 247); }
//         .text-red-500 { color: rgb(239, 68, 68); }
//         .text-blue-500 { color: rgb(59, 130, 246); }
//         .text-orange-500 { color: rgb(249, 115, 22); }
//         .bg-green-900\\/30 { background-color: rgba(20, 83, 45, 0.3); }
//         .bg-purple-900\\/30 { background-color: rgba(88, 28, 135, 0.3); }
//         .bg-red-900\\/30 { background-color: rgba(127, 29, 29, 0.3); }
//         .bg-blue-900\\/30 { background-color: rgba(30, 58, 138, 0.3); }
//         .bg-orange-900\\/30 { background-color: rgba(124, 45, 18, 0.3); }
//         .bg-green-900\\/40 { background-color: rgba(20, 83, 45, 0.4); }
//         .bg-purple-900\\/40 { background-color: rgba(88, 28, 135, 0.4); }
//         .bg-red-900\\/40 { background-color: rgba(127, 29, 29, 0.4); }
//         .bg-blue-900\\/40 { background-color: rgba(30, 58, 138, 0.4); }
//         .bg-orange-900\\/40 { background-color: rgba(124, 45, 18, 0.4); }
//         .bg-green-900\\/50 { background-color: rgba(20, 83, 45, 0.5); }
//         .bg-purple-900\\/50 { background-color: rgba(88, 28, 135, 0.5); }
//         .bg-red-900\\/50 { background-color: rgba(127, 29, 29, 0.5); }
//         .bg-blue-900\\/50 { background-color: rgba(30, 58, 138, 0.5); }
//         .bg-orange-900\\/50 { background-color: rgba(124, 45, 18, 0.5); }
//         .border-green-500\\/30 { border-color: rgba(34, 197, 94, 0.3); }
//         .border-purple-500\\/30 { border-color: rgba(168, 85, 247, 0.3); }
//         .border-red-500\\/30 { border-color: rgba(239, 68, 68, 0.3); }
//         .border-blue-500\\/30 { border-color: rgba(59, 130, 246, 0.3); }
//         .border-orange-500\\/30 { border-color: rgba(249, 115, 22, 0.3); }
//         .border-green-500\\/50 { border-color: rgba(34, 197, 94, 0.5); }
//         .border-purple-500\\/50 { border-color: rgba(168, 85, 247, 0.5); }
//         .border-red-500\\/50 { border-color: rgba(239, 68, 68, 0.5); }
//         .border-blue-500\\/50 { border-color: rgba(59, 130, 246, 0.5); }
//         .border-orange-500\\/50 { border-color: rgba(249, 115, 22, 0.5); }
//         .hover\\:border-green-500\\/50:hover { border-color: rgba(34, 197, 94, 0.5); }
//         .hover\\:border-purple-500\\/50:hover { border-color: rgba(168, 85, 247, 0.5); }
//         .hover\\:border-red-500\\/50:hover { border-color: rgba(239, 68, 68, 0.5); }
//         .hover\\:border-blue-500\\/50:hover { border-color: rgba(59, 130, 246, 0.5); }
//         .hover\\:border-orange-500\\/50:hover { border-color: rgba(249, 115, 22, 0.5); }
//       `}</style>
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Code2,
  Timer,
  Terminal,
  ArrowRight,
  Trophy,
  Zap,
  Settings,
  Play,
  ArrowLeft,
  Shield,
  Cpu,
  BarChart,
  Sword,
  Target
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

// Helper function to return background and border classes for an option
interface Option {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType;
  xpRange?: string;
}

interface TimeOption {
  id: string;
  label: string;
  description: string;
  value: number;
}

// Animation variants for option cards with enhanced 3D effects
const optionCardVariants = {
  initial: { 
    scale: 0.98, 
    opacity: 1, 
    y: 4 
  },
  hover: { 
    scale: 1.02, 
    opacity: 1,
    y: -2,
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3), 0 5px 8px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3, ease: "easeOut" }
  },
  tap: { 
    scale: 0.97, 
    y: 2, 
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.1, ease: "easeIn" } 
  },
  selected: { 
    scale: 1,
    y: 0,
    opacity: 1,
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.25), 0 8px 10px rgba(0, 0, 0, 0.15)",
    transition: { type: "spring", stiffness: 200, damping: 15 }
  },
  unselected: { 
    scale: 0.98, 
    opacity: 1, 
    y: 4, 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 } 
  }
};

// Animation for the selected dot/indicator
const selectionDotVariants = {
  hidden: { opacity: 0, scale: 0, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
};

// Pulse animation for icons
const iconPulseVariants = {
  initial: { scale: 1 },
  selected: { scale: [1, 1.2, 1], transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" as const, repeatDelay: 2 } }
};

// Enhanced button styles for the Engage Battle button
const engageButtonVariants = {
  initial: { 
    scale: 1,
    boxShadow: "0 6px 0 rgb(159, 18, 57), 0 8px 16px rgba(0, 0, 0, 0.3)"
  },
  hover: { 
    scale: 1.03, 
    boxShadow: "0 8px 0 rgb(159, 18, 57), 0 10px 20px rgba(0, 0, 0, 0.35)",
    transition: { duration: 0.2, ease: "easeOut" } 
  },
  tap: { 
    scale: 0.98, 
    y: 4, 
    boxShadow: "0 2px 0 rgb(159, 18, 57), 0 3px 6px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.1, ease: "easeIn" } 
  },
  loading: {
    scale: 1,
    boxShadow: "0 4px 0 rgb(159, 18, 57), 0 6px 12px rgba(0, 0, 0, 0.25)"
  }
};

export default function ChallengeSetupPage() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState("medium");
  const [selectedTimeLimit, setSelectedTimeLimit] = useState("30min");
  const [selectedMode, setSelectedMode] = useState("ranked");
  const [isStarting, setIsStarting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showStatsMenu, setShowStatsMenu] = useState(false);
  const statsButtonRef = useRef<HTMLButtonElement>(null);
  
  // Updated difficulty options
  const difficultyOptions = [
    { id: "easy", label: "Easy", description: "Basic algorithmic problems", icon: Shield, xpRange: "50-150" },
    { id: "medium", label: "Medium", description: "Moderate complexity challenges", icon: Code2, xpRange: "150-300" },
    { id: "hard", label: "Hard", description: "Complex algorithmic challenges", icon: Cpu, xpRange: "300-500" },
  ];

  // Define time options for each difficulty
  const timeOptionsMap = {
    easy: [
      { id: "10min", label: "10 Minutes", description: "Quick challenge", value: 600 },
      { id: "15min", label: "15 Minutes", description: "Standard Challenge", value: 900 },
      { id: "30min", label: "30 Minutes", description: "Extended Challenge", value: 1800 }
    ],
    medium: [
      { id: "15min", label: "15 Minutes", description: "Quick challenge", value: 900 },
      { id: "30min", label: "30 Minutes", description: "Standard Challenge", value: 1800 },
      { id: "45min", label: "45 Minutes", description: "Extended Challenge", value: 2700 }
    ],
    hard: [
      { id: "30min", label: "30 Minutes", description: "Quick challenge", value: 1800 },
      { id: "45min", label: "45 Minutes", description: "Standard Challenge", value: 2700 },
      { id: "60min", label: "60 Minutes", description: "Extended Challenge", value: 3600 }
    ]
  };

  // Get current time options based on selected difficulty
  const currentTimeOptions = timeOptionsMap[selectedDifficulty as keyof typeof timeOptionsMap] || [];

  const modeOptions = [
    { id: "casual", label: "Casual", description: "Practice mode, no rating impact", icon: Shield },
    { id: "ranked", label: "Ranked", description: "Competitive play, affects rating", icon: Trophy },
    { id: "custom", label: "Custom", description: "User-defined settings", icon: Settings },
  ];

  // Update time limit when difficulty changes
  useEffect(() => {
    // Get available time options for the selected difficulty
    const timeOptions = timeOptionsMap[selectedDifficulty as keyof typeof timeOptionsMap] || [];
    
    // Check if current selected time is valid for the new difficulty
    const isCurrentTimeValid = timeOptions.some(option => option.id === selectedTimeLimit);
    
    // If current selected time is not valid, select the middle option (index 1)
    if (!isCurrentTimeValid && timeOptions.length > 0) {
      setSelectedTimeLimit(timeOptions[1].id);
    }
  }, [selectedDifficulty]);

  // Handle starting the challenge
  const startChallenge = () => {
    setIsStarting(true);
    const preferences = {
      difficulty: selectedDifficulty,
      timeLimit: selectedTimeLimit,
      mode: selectedMode,
    };
    if (typeof window !== "undefined") {
      localStorage.setItem("challengePreferences", JSON.stringify(preferences));
    }
    setTimeout(() => {
      router.push("/user-challenge");
    }, 1500);
  };

  function toggleStatsMenu(): void {
    setShowStatsMenu((prev) => !prev);
  }

  // Client-side initialization
  useEffect(() => {
    setIsClient(true);
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  // Generate a stable challenge ID on the client
  const [challengeId, setChallengeId] = useState("CMD-000-00");

  useEffect(() => {
    if (isClient) {
      const id = `CMD-${(Math.floor(Date.now() / 1000) % 1000)}-${Math.floor((Date.now() / 100) % 100)}`;
      setChallengeId(id);
    }
  }, [isClient]); // Only run when isClient changes (once)

  // Enhanced Engage Battle Button component
  const EngageBattleButton = ({ isStarting, onClick }) => (
    <motion.button
      onClick={onClick}
      disabled={isStarting}
      initial="initial"
      whileHover={isStarting ? "loading" : "hover"}
      whileTap={isStarting ? "loading" : "tap"}
      animate={isStarting ? "loading" : "initial"}
      variants={engageButtonVariants}
      className={`px-8 py-6 h-auto text-lg font-mono font-semibold rounded-md ${
        isStarting
          ? "bg-red-700 cursor-wait"
          : "bg-gradient-to-b from-red-500 to-red-700"
      } text-white flex items-center gap-3 group transition-all duration-300 relative overflow-hidden`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-white opacity-10"
        initial={{ x: "-100%" }}
        animate={isStarting ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 1.5, repeat: isStarting ? Infinity : 0 }}
      />
      {isStarting ? (
        <>
          <motion.div 
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            style={{ transform: "translateZ(5px)" }}
          />
          <span className="font-mono" style={{ transform: "translateZ(5px)" }}>Entering Battleground...</span>
        </>
      ) : (
        <>
          <motion.div
            animate={{ rotate: [0, -10, 10, -5, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            style={{ transform: "translateZ(5px)" }}
          >
            <Sword className="w-5 h-5" />
          </motion.div>
          <span className="font-mono" style={{ transform: "translateZ(5px)" }}>ENGAGE BATTLE</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
            style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.5))", transform: "translateZ(5px)" }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </>
      )}
    </motion.button>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-80"></div>

      {/* Terminal grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNTMsIDI1NSwgMTUzLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-30 pointer-events-none"></div>
      
      {/* Removed Matrix Digital Rain Effect */}

      

      {/* Stats Button with Leaderboard popup */}
      <div className="absolute top-20 right-6 z-10">
        <button 
          ref={statsButtonRef}
          onClick={toggleStatsMenu}
          className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg border transition-all duration-300 ${
            showStatsMenu 
              ? 'bg-green-500/20 border-green-500' 
              : 'bg-gradient-to-r from-purple-900/30 to-blue-700/30 border-purple-600/50 hover:from-purple-800/40 hover:to-blue-600/40'
          }`}
          aria-label="Leaderboard"
        >
          <motion.div 
            initial={{ rotate: 0 }}
            animate={{ rotate: showStatsMenu ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Trophy className="w-5 h-5 text-purple-400" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </motion.div>
          <div className="flex flex-col leading-none ">
            <span className="font-mono text-xs font-semibold text-purple-400">Rank #234</span>
            <span className="font-mono text-[10px] text-gray-400">Top 5%</span>
          </div>
        </button>
        
        {showStatsMenu && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 right-0 mt-2 w-64 bg-gray-800 border border-green-700/50 rounded-lg shadow-lg p-4"
          >
            <h3 className="font-mono text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Battledome Rankings
            </h3>
            <ul className="space-y-2">
              <li className="font-mono flex justify-between text-sm text-gray-300 bg-gray-700/30 p-2 rounded border border-green-900/30">
                <span className="flex items-center">
                  <span className="text-green-400 mr-2">1.</span> 
                  CyberSlayer99
                </span>
                <span className="text-purple-400">1500 XP</span>
              </li>
              <li className="font-mono flex justify-between text-sm text-gray-300 bg-gray-700/30 p-2 rounded border border-blue-900/30">
                <span className="flex items-center">
                  <span className="text-blue-400 mr-2">2.</span> 
                  CodeNinja42
                </span>
                <span className="text-purple-400">1400 XP</span>
              </li>
              <li className="font-mono flex justify-between text-sm text-gray-300 bg-gray-700/30 p-2 rounded border border-purple-900/30">
                <span className="flex items-center">
                  <span className="text-purple-400 mr-2">3.</span> 
                  AlgorithmAce
                </span>
                <span className="text-purple-400">1300 XP</span>
              </li>
            </ul>
            <div className="mt-3 pt-2 border-t border-gray-700">
              <div className="font-mono text-xs text-gray-400">Your last 3 battles:</div>
              <div className="text-xs font-mono mt-1 grid grid-cols-3 gap-1">
                <div className="bg-green-900/30 p-1 rounded text-center text-green-400">WIN</div>
                <div className="bg-red-900/30 p-1 rounded text-center text-red-400">LOSS</div>
                <div className="bg-green-900/30 p-1 rounded text-center text-green-400">WIN</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Main content */}
      <main className="relative z-1 flex flex-col items-center justify-center pt-10 px-4 md:px-6 pb-20 min-h-[calc(100vh-80px)]">
        <motion.div variants={containerVariants} initial="hidden" animate={isLoaded ? "visible" : "hidden"} className="w-full max-w-6xl">
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-0 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-gray-900/60 rounded-md border border-green-700 hover:bg-green-900/20 transition-all duration-300 font-mono text-sm w-fit">
              <ArrowLeft className="w-4 h-4 text-green-400" />
              <span className="font-mono">Home</span>
            </Link>
          </motion.div>

          {/* Header with battle mode animated </> symbol */}
          <motion.div variants={itemVariants} className="mb-16 text-center relative">

            {/* Main code brackets with battle effects */}
            <motion.p 
            className="font-mono text-5xl max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 100, scale: 0.95 }}
            animate={{ 
              opacity: 1,
              scale: 1,
              color: ['rgb(255, 255, 255))'] // Subtle color transition
            }}
            transition={{ 
              duration: 2,
              color: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            &lt;/&gt;
          </motion.p>

            {/* Battle mode text */}
            <div className="mt-6 font-mono text-sm text-WHITE-400">
             FIND YOUR MATCH AND START CODING NOW
            </div>
            
            {/* Alert banner */}
          
          </motion.div>

          {/* Challenge Configuration Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 mb-8">
            {/* Difficulty Column */}
            <div className="space-y-6">
              <div className="font-mono text-blue-400 text-lg mb-4 flex justify-center">
                <span className="font-mono flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Difficulty Level
                </span>
              </div>

              {difficultyOptions.map((option) => (
                <motion.div
                  key={option.id}
                  id={`difficulty-${option.id}`}
                  initial="initial"
                  animate={selectedDifficulty === option.id ? "selected" : "unselected"}
                  whileHover="hover"
                  whileTap="tap"
                  variants={optionCardVariants}
                  onClick={() => setSelectedDifficulty(option.id)}
                  className={`p-5 rounded-md cursor-pointer transition-all duration-300 ${
                    selectedDifficulty === option.id 
                      ? "bg-blue-900 border-2 border-blue-500" 
                      : "bg-gray-900 border border-gray-700 hover:border-blue-500"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: selectedDifficulty === option.id ? "translateY(0px)" : "translateY(4px)",
                    boxShadow: selectedDifficulty === option.id 
                      ? "0 12px 20px rgba(0, 0, 0, 0.25), 0 8px 10px rgba(0, 0, 0, 0.15)" 
                      : "0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className={`w-10 h-10 rounded-md flex items-center justify-center text-blue-400 ${
                        selectedDifficulty === option.id 
                          ? "bg-blue-800 border border-blue-400" 
                          : "bg-blue-900/70 border border-blue-500/30"
                      }`}
                      style={{
                        transform: "translateZ(5px)",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
                      }}
                    >
                      <option.icon className="w-5 h-5" />
                    </div>
                    <div style={{ transform: "translateZ(2px)" }}>
                      <h3 className="font-mono font-semibold text-blue-400">{option.label}</h3>
                      <p className="font-mono text-sm text-white-400">{option.description}</p>
                    </div>
                  </div>
                  {selectedDifficulty === option.id && (
                    <motion.div 
                      className="mt-3 flex items-center justify-between text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      style={{ transform: "translateZ(2px)" }}
                    >
                      <span className="text-blue-400 font-mono">+{option.xpRange} XP</span>
                      <span className="text-blue-500 flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        <span className="font-mono">Selected</span>
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Time Limit Column */}
            <div className="space-y-6">
              <div className="font-mono text-purple-400 text-lg mb-4 flex justify-center">
                <span className="font-mono flex items-center gap-2">
                  <Timer className="w-5 h-5" />
                  Time Limit
                </span>
              </div>

              {currentTimeOptions.map((option) => (
                <motion.div
                  key={option.id}
                  id={`time-${option.id}`}
                  initial="initial"
                  animate={selectedTimeLimit === option.id ? "selected" : "unselected"}
                  whileHover="hover"
                  whileTap="tap"
                  variants={optionCardVariants}
                  onClick={() => setSelectedTimeLimit(option.id)}
                  className={`p-5 rounded-md cursor-pointer transition-all duration-300 ${
                    selectedTimeLimit === option.id 
                      ? "bg-purple-900 border-2 border-purple-500" 
                      : "bg-gray-900 border border-gray-700 hover:border-purple-500"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: selectedTimeLimit === option.id ? "translateY(0px)" : "translateY(4px)",
                    boxShadow: selectedTimeLimit === option.id 
                      ? "0 12px 20px rgba(0, 0, 0, 0.25), 0 8px 10px rgba(0, 0, 0, 0.15)" 
                      : "0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className={`w-10 h-10 rounded-md flex items-center justify-center text-purple-400 ${
                        selectedTimeLimit === option.id 
                          ? "bg-purple-800 border border-purple-400" 
                          : "bg-purple-900/70 border border-purple-500/30"
                      }`}
                      style={{
                        transform: "translateZ(5px)",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
                      }}
                    >
                      <Timer className="w-5 h-5" />
                    </div>
                    <div style={{ transform: "translateZ(2px)" }}>
                      <h3 className="font-mono font-semibold text-purple-400">{option.label}</h3>
                      <p className="font-mono text-sm text-white-400">{option.description}</p>
                    </div>
                  </div>
                  {selectedTimeLimit === option.id && (
                    <motion.div 
                      className="mt-3 flex items-center justify-between text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      style={{ transform: "translateZ(2px)" }}
                    >
                      <span className="font-mono text-purple-400">
                        {Math.floor(option.value / 60)}:{(option.value % 60).toString().padStart(2, "0")}
                      </span>
                      <span className="font-mono text-purple-500 flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        <span className="font-mono">Selected</span>
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          

          {/* Simple Connector (No Animation) */}
          <div className="relative h-20 mb-8 overflow-hidden">
            <div 
              className="absolute top-1/2 left-1/4 w-1/4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2"
            />
            <div 
              className="absolute top-1/2 right-1/4 w-1/4 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-y-1/2"
            />
            
            {/* Static connection points */}
            <div 
              className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                boxShadow: "0 0 4px 1px rgba(59, 130, 246, 0.5)"
              }}
            />
            <div 
              className="absolute top-1/2 left-2/4 w-3 h-3 rounded-full bg-purple-500 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                boxShadow: "0 0 4px 1px rgba(168, 85, 247, 0.5)"
              }}
            />
            <div 
              className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                boxShadow: "0 0 4px 1px rgba(59, 130, 246, 0.5)"
              }}
            />
          </div>

          {/* Challenge Summary Card */}
          <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg border border-green-500/20 p-6 mb-10">
            <h3 className="font-mono text-white-400 text-lg mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Battle Parameters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <span className="font-mono text-sm text-gray-400">Difficulty:</span>
                <div className="flex items-center gap-2 text-blue-400">
                  {selectedDifficulty === "easy" && <Shield className="w-5 h-5" />}
                  {selectedDifficulty === "medium" && <Code2 className="w-5 h-5" />}
                  {selectedDifficulty === "hard" && <Cpu className="w-5 h-5" />}
                  <span className="font-mono font-semibold">
                    {difficultyOptions.find((o) => o.id === selectedDifficulty)?.label}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="font-mono text-sm text-white-400">Time Limit:</span>
                <div className="flex items-center gap-2 text-purple-400">
                  <Timer className="w-5 h-5" />
                  <span className="font-mono font-semibold">
                    {currentTimeOptions.find((o) => o.id === selectedTimeLimit)?.label}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="font-mono text-sm text-white-400">Mode:</span>
                <div className="flex items-center gap-2 text-green-400">
                  {selectedMode === "casual" && <Shield className="w-5 h-5" />}
                  {selectedMode === "ranked" && <Trophy className="w-5 h-5" />}
                  {selectedMode === "custom" && <Settings className="w-5 h-5" />}
                  <span className="font-mono font-semibold">
                    {modeOptions.find((o) => o.id === selectedMode)?.label}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-green-500/20">
              <div className="flex items-center justify-between">
                <div>
                <span className="font-mono text-sm text-white-400">Potential Reward:</span>
                  <div className="flex items-center gap-2 text-purple-400 font-mono">
                    <Zap className="w-4 h-4" />
                    <span>
                      {selectedDifficulty === "easy"
                        ? "50-150"
                        : selectedDifficulty === "medium"
                        ? "150-300"
                        : "300-500"} XP
                    </span>
                    <span className="text-white-500">
                      {selectedMode === "ranked" ? "× 1.5 multiplier" : "× 1.0 multiplier"}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-white-400 font-mono">
                  Battle ID: <span className="text-green-400">{challengeId}</span>
                </div>
              </div>
            </div>
            
            {/* System status indicators */}
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-green-500/10 pt-4">
              <div className="flex items-center gap-2 text-xs font-mono">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-green-400">SYSTEM ONLINE</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-purple-400">COMPILER READY</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-blue-400">NETWORK SECURE</span>
              </div>
            </div>
          </motion.div>

          {/* Start Challenge Button */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.03, 1], transition: { duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 } }}
            >
              <EngageBattleButton 
                isStarting={isStarting}
                onClick={startChallenge}
              />
            </motion.div>
          </motion.div>
          
          {/* System Status Footer */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 font-mono text-xs text-center text-gray-500"
          >
            <div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-800 px-3 py-1 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              BATTLE ENGINE v2.5.1 | SYSTEM READY
            </div>
          </motion.div>
        </motion.div>
      </main>

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
        /* Custom color classes */
        .text-green-400 { color: rgb(74, 222, 128); }
        .text-purple-400 { color: rgb(192, 132, 252); }
        .text-red-400 { color: rgb(248, 113, 113); }
        .text-blue-400 { color: rgb(96, 165, 250); }
        .text-orange-400 { color: rgb(251, 146, 60); }
        .text-green-500 { color: rgb(34, 197, 94); }
        .text-purple-500 { color: rgb(168, 85, 247); }
        .text-red-500 { color: rgb(239, 68, 68); }
        .text-blue-500 { color: rgb(59, 130, 246); }
        .text-orange-500 { color: rgb(249, 115, 22); }
        .bg-green-900\\/30 { background-color: rgba(20, 83, 45, 0.3); }
        .bg-purple-900\\/30 { background-color: rgba(88, 28, 135, 0.3); }
        .bg-red-900\\/30 { background-color: rgba(127, 29, 29, 0.3); }
        .bg-blue-900\\/30 { background-color: rgba(30, 58, 138, 0.3); }
        .bg-orange-900\\/30 { background-color: rgba(124, 45, 18, 0.3); }
        .bg-green-900\\/40 { background-color: rgba(20, 83, 45, 0.4); }
        .bg-purple-900\\/40 { background-color: rgba(88, 28, 135, 0.4); }
        .bg-red-900\\/40 { background-color: rgba(127, 29, 29, 0.4); }
        .bg-blue-900\\/40 { background-color: rgba(30, 58, 138, 0.4); }
        .bg-orange-900\\/40 { background-color: rgba(124, 45, 18, 0.4); }
        .bg-green-900\\/50 { background-color: rgba(20, 83, 45, 0.5); }
        .bg-purple-900\\/50 { background-color: rgba(88, 28, 135, 0.5); }
        .bg-red-900\\/50 { background-color: rgba(127, 29, 29, 0.5); }
        .bg-blue-900\\/50 { background-color: rgba(30, 58, 138, 0.5); }
        .bg-orange-900\\/50 { background-color: rgba(124, 45, 18, 0.5); }
        .bg-green-900\\/70 { background-color: rgba(20, 83, 45, 0.7); }
        .bg-purple-900\\/70 { background-color: rgba(88, 28, 135, 0.7); }
        .bg-red-900\\/70 { background-color: rgba(127, 29, 29, 0.7); }
        .bg-blue-900\\/70 { background-color: rgba(30, 58, 138, 0.7); }
        .bg-orange-900\\/70 { background-color: rgba(124, 45, 18, 0.7); }
        .bg-green-900 { background-color: rgb(20, 83, 45); }
        .bg-purple-900 { background-color: rgb(88, 28, 135); }
        .bg-red-900 { background-color: rgb(127, 29, 29); }
        .bg-blue-900 { background-color: rgb(30, 58, 138); }
        .bg-orange-900 { background-color: rgb(124, 45, 18); }
        .bg-green-800 { background-color: rgb(22, 101, 52); }
        .bg-purple-800 { background-color: rgb(107, 33, 168); }
        .bg-red-800 { background-color: rgb(153, 27, 27); }
        .bg-blue-800 { background-color: rgb(30, 64, 175); }
        .bg-orange-800 { background-color: rgb(154, 52, 18); }
        .border-green-500\\/30 { border-color: rgba(34, 197, 94, 0.3); }
        .border-purple-500\\/30 { border-color: rgba(168, 85, 247, 0.3); }
        .border-red-500\\/30 { border-color: rgba(239, 68, 68, 0.3); }
        .border-blue-500\\/30 { border-color: rgba(59, 130, 246, 0.3); }
        .border-orange-500\\/30 { border-color: rgba(249, 115, 22, 0.3); }
        .border-green-500\\/50 { border-color: rgba(34, 197, 94, 0.5); }
        .border-purple-500\\/50 { border-color: rgba(168, 85, 247, 0.5); }
        .border-red-500\\/50 { border-color: rgba(239, 68, 68, 0.5); }
        .border-blue-500\\/50 { border-color: rgba(59, 130, 246, 0.5); }
        .border-orange-500\\/50 { border-color: rgba(249, 115, 22, 0.5); }
        .border-green-500 { border-color: rgb(34, 197, 94); }
        .border-purple-500 { border-color: rgb(168, 85, 247); }
        .border-red-500 { border-color: rgb(239, 68, 68); }
        .border-blue-500 { border-color: rgb(59, 130, 246); }
        .border-orange-500 { border-color: rgb(249, 115, 22); }
        .border-green-400 { border-color: rgb(74, 222, 128); }
        .border-purple-400 { border-color: rgb(192, 132, 252); }
        .border-red-400 { border-color: rgb(248, 113, 113); }
        .border-blue-400 { border-color: rgb(96, 165, 250); }
        .border-orange-400 { border-color: rgb(251, 146, 60); }
        .hover\\:border-green-500:hover { border-color: rgb(34, 197, 94); }
        .hover\\:border-purple-500:hover { border-color: rgb(168, 85, 247); }
        .hover\\:border-red-500:hover { border-color: rgb(239, 68, 68); }
        .hover\\:border-blue-500:hover { border-color: rgb(59, 130, 246); }
        .hover\\:border-orange-500:hover { border-color: rgb(249, 115, 22); }
      `}</style>
    </div>
  );
}