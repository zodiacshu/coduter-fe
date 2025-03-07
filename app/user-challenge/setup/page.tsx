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
  Sidebar
} from "lucide-react";
import { useState, useEffect, useRef, Children } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "../../components/Navbar";
import { AppSidebar } from "@/app/components/AppSidebar";
import ClientLayout from "@/app/components/ClientLayout";

// Helper function to return background and border classes for an option
interface Option {
  id: string;
  label: string;
  description: string;
  color: string;
  icon: React.ComponentType;
  xpRange?: string;
  value?: number;
}

function getBgClass(color: string, selected: boolean): string {
  if (color === "red") {
    return selected ? "bg-red-900/40 border-red-500/50" : "bg-gray-900/90";
  }
  if (color === "orange") {
    return selected ? "bg-orange-900/40 border-orange-500/50" : "bg-gray-900/90";
  }
  if (color === "blue") {
    return selected ? "bg-blue-900/40 border-blue-500/50" : "bg-gray-900/90";
  }
  if (color === "green") {
    return selected ? "bg-green-900/40 border-green-500/50" : "bg-gray-900/90";
  }
  return "bg-gray-900/90";
}

function getHoverBorderClass(color :string) {
  if (color === "red") {
    return "hover:border-red-500/50";
  }
  if (color === "orange") {
    return "hover:border-orange-500/50";
  }
  if (color === "blue") {
    return "hover:border-blue-500/50";
  }
  if (color === "green") {
    return "hover:border-green-500/50";
  }
  return "";
}

// New animation variants for option cards
const optionCardVariants = {
  initial: { scale: 0.95, opacity: 0.8, y: 10 },
  hover: { 
    scale: 1.03, 
    opacity: 1,
    y: 0,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3, ease: "easeOut" }
  },
  tap: { scale: 0.97, transition: { duration: 0.1, ease: "easeIn" } },
  selected: { 
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  },
  unselected: { scale: 0.95, opacity: 0.8, y: 5, transition: { duration: 0.3 } }
};

// Animation for the selected dot/indicator
const selectionDotVariants = {
  hidden: { opacity: 0, scale: 0, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
};

// New pulse animation for icons
const iconPulseVariants = {
  initial: { scale: 1 },
  selected: { scale: [1, 1.2, 1], transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" as const, repeatDelay: 2 } }
};

export default function ChallengeSetupPage() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState("intermediate");
  const [selectedTimeLimit, setSelectedTimeLimit] = useState("15min");
  const [selectedMode, setSelectedMode] = useState("ranked");
  const [isStarting, setIsStarting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  // const showStatsMenu = useRef(null);
  const statsButtonRef = useRef<HTMLButtonElement>(null);

  // Track previous selections for additional animation effects if needed
  const prevSelections = useRef({
    difficulty: "",
    timeLimit: "",
    mode: ""
  });

  // Updated challenge options:
  const difficultyOptions = [
    { id: "beginner", label: "Beginner", description: "Basic algorithmic problems", color: "green", icon: Shield, xpRange: "50-150" },
    { id: "intermediate", label: "Intermediate", description: "Moderate complexity challenges", color: "orange", icon: Code2, xpRange: "150-300" },
    { id: "advanced", label: "Advanced", description: "Complex algorithmic challenges", color: "red", icon: Cpu, xpRange: "300-500" },
  ];

  const timeOptions = [
    { id: "5min", label: "5 Minutes", description: "Speed challenge", icon: Timer, value: 300 },
    { id: "15min", label: "15 Minutes", description: "Standard timeframe", icon: Timer, value: 900 },
    { id: "30min", label: "30 Minutes", description: "Endurance challenge", icon: Timer, value: 1800 },
  ];

  const modeOptions = [
    { id: "casual", label: "Casual", description: "Practice mode, no rating impact", icon: Shield },
    { id: "ranked", label: "Ranked", description: "Competitive play, affects rating", icon: Trophy },
    { id: "custom", label: "Custom", description: "User-defined settings", icon: Settings },
  ];

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

  // Apply animation effects when selections change (optional additional effects)
  useEffect(() => {
    if (
      prevSelections.current.difficulty !== selectedDifficulty ||
      prevSelections.current.timeLimit !== selectedTimeLimit ||
      prevSelections.current.mode !== selectedMode
    ) {
      prevSelections.current = {
        difficulty: selectedDifficulty,
        timeLimit: selectedTimeLimit,
        mode: selectedMode,
      };
      // Here you could add additional side-effect animations if needed.
    }
  }, [selectedDifficulty, selectedTimeLimit, selectedMode]);

  // Client-side initialization
  useEffect(() => {
    setIsClient(true);
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  // Framer Motion animation variants for container and items
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

  const [showStatsMenu, setShowStatsMenu] = useState(false);

  function toggleStatsMenu(): void {
    setShowStatsMenu((prev) => !prev);
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-80"></div>

      {/* Terminal grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNTMsIDI1NSwgMTUzLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-30 pointer-events-none"></div>
      
      {/* Glowing horizontal lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
      </div>

      {/* Navigation */}
      {/* <Navbar /> */}
   
      <div className="absolute top-20 right-6 z-10">
        <button 
          ref={statsButtonRef}
          onClick={toggleStatsMenu}
          className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
        showStatsMenu 
          ? 'bg-red-500/20 border-red-500' 
          : 'bg-green-500/20 border-green-500 hover:bg-green-500/30'
          }`}
          aria-label="Leaderboard"
        >
          <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: showStatsMenu ? 180 : 0 }}
        transition={{ duration: 0.3 }}
          >
        <BarChart className="w-6 h-6 text-white" />
          </motion.div>
        </button>
        {showStatsMenu && (
          <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-16 right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4"
          >
        <h3 className="text-lg font-semibold text-white mb-2">Leaderboard</h3>
        <ul className="space-y-2">
          <li className="flex justify-between text-sm text-gray-300">
            <span>1. User1</span>
            <span>1500 XP</span>
          </li>
          <li className="flex justify-between text-sm text-gray-300">
            <span>2. User2</span>
            <span>1400 XP</span>
          </li>
          <li className="flex justify-between text-sm text-gray-300">
            <span>3. User3</span>
            <span>1300 XP</span>
          </li>
          {/* Add more leaderboard entries as needed */}
        </ul>
          </motion.div>
        )}
      </div>
      {/* Main content */}
      <main className="relative z-1 flex flex-col items-center justify-center pt-10 px-4 md:px-6 pb-20 min-h-[calc(100vh-80px)]">
        <motion.div variants={containerVariants} initial="hidden" animate={isLoaded ? "visible" : "hidden"} className="w-full max-w-6xl">
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-0">
            <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-gray-900/60 rounded-md border border-green-700 hover:bg-green-900/20 transition-all duration-300 font-mono text-sm w-fit">
              <ArrowLeft className="w-4 h-4 text-green-400" />

              <span>Return Home</span>
            </Link>
          </motion.div>
              {/* <AppSidebar /> */}

          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-green-400">GET - </span>
              <span className="text-yellow-400"> SET - </span>
              <span className="text-blue-400"> GO </span>
            </h1>

            <p className="text-white-400 text-lg max-w-2xl mx-auto">
              Challenge yourself. Master the code. Dominate the leaderboard.
            </p>
          </motion.div>

          {/* Challenge Configuration Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-12 mb-8">
            {/* Difficulty Column */}
            <div className="space-y-6">
              <div className="font-mono text-green-400 text-lg mb-4 flex justify-center">
                <span>Difficulty Level</span>
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
                  className={`p-5 rounded-md border cursor-pointer transition-colors duration-300 ${getHoverBorderClass(option.color)} ${
                    selectedDifficulty === option.id ? getBgClass(option.color, true) : getBgClass(option.color, false)
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className={`w-10 h-10 rounded-md bg-${option.color}-900/50 border border-${option.color}-500/30 flex items-center justify-center text-${option.color}-400`}
                      variants={iconPulseVariants}
                      animate={selectedDifficulty === option.id ? "selected" : "initial"}
                    >
                      <option.icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h3 className={`font-semibold text-${option.color}-400`}>{option.label}</h3>
                      <p className="text-sm text-gray-400">{option.description}</p>
                    </div>
                  </div>
                  {selectedDifficulty === option.id && (
                    <motion.div 
                      className="mt-3 flex items-center justify-between text-sm"
                      initial="hidden"
                      animate="visible"
                      variants={selectionDotVariants}
                    >
                      <span className={`text-${option.color}-400 font-mono`}>+{option.xpRange} XP</span>
                      <motion.span 
                        className={`text-${option.color}-500 flex items-center gap-1`}
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Zap className="w-4 h-4" />
                        Selected
                      </motion.span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Time Limit Column */}
            <div className="space-y-6">
              <div className="font-mono text-yellow-400 text-lg mb-4 flex justify-center">
                <span>Time Limit</span>
              </div>

              {timeOptions.map((option) => (
                <motion.div
                  key={option.id}
                  id={`time-${option.id}`}
                  initial="initial"
                  animate={selectedTimeLimit === option.id ? "selected" : "unselected"}
                  whileHover="hover"
                  whileTap="tap"
                  variants={optionCardVariants}
                  onClick={() => setSelectedTimeLimit(option.id)}
                  className={`p-5 rounded-md border cursor-pointer transition-colors duration-300 hover:border-yellow-500/50 ${
                    selectedTimeLimit === option.id ? "bg-yellow-900/40 border-yellow-500/50" : "bg-gray-900/90 border-gray-700/90 hover:bg-gray-800/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-md bg-yellow-900/50 border border-yellow-500/30 flex items-center justify-center text-yellow-400"
                      variants={iconPulseVariants}
                      animate={selectedTimeLimit === option.id ? "selected" : "initial"}
                    >
                      <option.icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-yellow-400">{option.label}</h3>
                      <p className="text-sm text-gray-400">{option.description}</p>
                    </div>
                  </div>
                  {selectedTimeLimit === option.id && (
                    <motion.div 
                      className="mt-3 flex items-center justify-between text-sm"
                      initial="hidden"
                      animate="visible"
                      variants={selectionDotVariants}
                    >
                      <span className="text-yellow-400 font-mono">
                        {Math.floor(option.value / 60)}:{(option.value % 60).toString().padStart(2, "0")}
                      </span>
                      <motion.span 
                        className="text-yellow-500 flex items-center gap-1"
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Zap className="w-4 h-4" />
                        Selected
                      </motion.span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mode Selection Column */}
            <div className="space-y-6">
              <div className="font-mono text-blue-400 text-lg mb-4 flex justify-center">
                <span>Mode Selection</span>
              </div>

              {modeOptions.map((option) => (
                <motion.div
                  key={option.id}
                  id={`mode-${option.id}`}
                  initial="initial"
                  animate={selectedMode === option.id ? "selected" : "unselected"}
                  whileHover="hover"
                  whileTap="tap"
                  variants={optionCardVariants}
                  onClick={() => setSelectedMode(option.id)}
                  className={`p-5 rounded-md border cursor-pointer transition-colors duration-300 hover:border-blue-500/50 ${
                    selectedMode === option.id ? "bg-blue-900/40 border-blue-500/50" : "bg-gray-900/90 border-gray-700/90 hover:bg-gray-800/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-md bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400"
                      variants={iconPulseVariants}
                      animate={selectedMode === option.id ? "selected" : "initial"}
                    >
                      <option.icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-blue-400">{option.label}</h3>
                      <p className="text-sm text-gray-400">{option.description}</p>
                    </div>
                  </div>
                  {selectedMode === option.id && (
                    <motion.div 
                      className="mt-3 flex items-center justify-between text-sm"
                      initial="hidden"
                      animate="visible"
                      variants={selectionDotVariants}
                    >
                      <span className="text-blue-400 font-mono">
                        {option.id === "ranked"
                          ? "Rating will change"
                          : option.id === "casual"
                          ? "For practice only"
                          : "Custom settings"}
                      </span>
                      <motion.span 
                        className="text-blue-500 flex items-center gap-1"
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Zap className="w-4 h-4" />
                        Selected
                      </motion.span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Connector Animation (Wire Effect) */}
          <motion.div className="relative h-20 mb-8 overflow-hidden">
            <motion.div 
              className="absolute top-1/2 left-1/4 w-1/4 h-1 bg-gradient-to-r from-green-500 to-orange-500 transform -translate-y-1/2"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: selectedDifficulty && selectedTimeLimit ? 1 : 0,
                opacity: selectedDifficulty && selectedTimeLimit ? 1 : 0
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute top-1/2 right-1/4 w-1/4 h-1 bg-gradient-to-r from-orange-500 to-blue-500 transform -translate-y-1/2"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: selectedTimeLimit && selectedMode ? 1 : 0,
                opacity: selectedTimeLimit && selectedMode ? 1 : 0
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
          </motion.div>

          {/* Challenge Summary Card */}
          <motion.div variants={itemVariants} className="bg-gray-900/80 rounded-lg border border-green-500/20 p-6 mb-10">
            <h3 className="font-mono text-green-400 text-lg mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Challenge Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <span className="text-sm text-gray-400">Difficulty:</span>
                <div className={`flex items-center gap-2 ${
                  selectedDifficulty === "beginner"
                    ? "text-green-400"
                    : selectedDifficulty === "intermediate"
                    ? "text-orange-400"
                    : "text-red-400"
                }`}>
                  {selectedDifficulty === "beginner" && <Shield className="w-5 h-5" />}
                  {selectedDifficulty === "intermediate" && <Code2 className="w-5 h-5" />}
                  {selectedDifficulty === "advanced" && <Cpu className="w-5 h-5" />}
                  <span className="font-semibold">
                    {difficultyOptions.find((o) => o.id === selectedDifficulty)?.label}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm text-gray-400">Time Limit:</span>
                <div className="flex items-center gap-2 text-yellow-400">
                  <Timer className="w-5 h-5" />
                  <span className="font-semibold">
                    {timeOptions.find((o) => o.id === selectedTimeLimit)?.label}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm text-gray-400">Mode:</span>
                <div className="flex items-center gap-2 text-blue-400">
                  {selectedMode === "casual" && <Shield className="w-5 h-5" />}
                  {selectedMode === "ranked" && <Trophy className="w-5 h-5" />}
                  {selectedMode === "custom" && <Settings className="w-5 h-5" />}
                  <span className="font-semibold">
                    {modeOptions.find((o) => o.id === selectedMode)?.label}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-green-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-400">Potential Reward:</span>
                  <div className="flex items-center gap-2 text-yellow-400 font-mono">
                    <Zap className="w-4 h-4" />
                    <span>
                      {selectedDifficulty === "beginner"
                        ? "50-150"
                        : selectedDifficulty === "intermediate"
                        ? "150-300"
                        : "300-500"} XP
                    </span>
                    <span className="text-gray-500">
                      {selectedMode === "ranked" ? "× 1.5 multiplier" : "× 1.0 multiplier"}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-white-400 font-mono">
                  Challenge ID: <span className="text-green-400">{challengeId}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Start Challenge Button */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.03, 1], transition: { duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 } }}
            >
              <Button
                onClick={startChallenge}
                disabled={isStarting}
                className={`px-8 py-6 h-auto text-lg font-semibold rounded-md ${
                  isStarting
                    ? "bg-gray-700 cursor-wait"
                    : "bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400"
                } text-white flex items-center gap-3 group transition-all duration-300 relative overflow-hidden`}
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
                    />
                    <span>Launching Challenge...</span>
                  </>
                ) : (
                  <>
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -5, 0], scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Play className="w-5 h-5" />
                    </motion.div>
                    <span>Start Challenge</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </>
                )}
              </Button>
            </motion.div>
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
        .text-yellow-400 { color: rgb(250, 204, 21); }
        .text-red-400 { color: rgb(248, 113, 113); }
        .text-blue-400 { color: rgb(96, 165, 250); }
        .text-orange-400 { color: rgb(251, 146, 60); }
        .text-green-500 { color: rgb(34, 197, 94); }
        .text-yellow-500 { color: rgb(234, 179, 8); }
        .text-red-500 { color: rgb(239, 68, 68); }
        .text-blue-500 { color: rgb(59, 130, 246); }
        .text-orange-500 { color: rgb(249, 115, 22); }
        .bg-green-900\\/30 { background-color: rgba(20, 83, 45, 0.3); }
        .bg-yellow-900\\/30 { background-color: rgba(113, 63, 18, 0.3); }
        .bg-red-900\\/30 { background-color: rgba(127, 29, 29, 0.3); }
        .bg-blue-900\\/30 { background-color: rgba(30, 58, 138, 0.3); }
        .bg-orange-900\\/30 { background-color: rgba(124, 45, 18, 0.3); }
        .bg-green-900\\/40 { background-color: rgba(20, 83, 45, 0.4); }
        .bg-yellow-900\\/40 { background-color: rgba(113, 63, 18, 0.4); }
        .bg-red-900\\/40 { background-color: rgba(127, 29, 29, 0.4); }
        .bg-blue-900\\/40 { background-color: rgba(30, 58, 138, 0.4); }
        .bg-orange-900\\/40 { background-color: rgba(124, 45, 18, 0.4); }
        .bg-green-900\\/50 { background-color: rgba(20, 83, 45, 0.5); }
        .bg-yellow-900\\/50 { background-color: rgba(113, 63, 18, 0.5); }
        .bg-red-900\\/50 { background-color: rgba(127, 29, 29, 0.5); }
        .bg-blue-900\\/50 { background-color: rgba(30, 58, 138, 0.5); }
        .bg-orange-900\\/50 { background-color: rgba(124, 45, 18, 0.5); }
        .border-green-500\\/30 { border-color: rgba(34, 197, 94, 0.3); }
        .border-yellow-500\\/30 { border-color: rgba(234, 179, 8, 0.3); }
        .border-red-500\\/30 { border-color: rgba(239, 68, 68, 0.3); }
        .border-blue-500\\/30 { border-color: rgba(59, 130, 246, 0.3); }
        .border-orange-500\\/30 { border-color: rgba(249, 115, 22, 0.3); }
        .border-green-500\\/50 { border-color: rgba(34, 197, 94, 0.5); }
        .border-yellow-500\\/50 { border-color: rgba(234, 179, 8, 0.5); }
        .border-red-500\\/50 { border-color: rgba(239, 68, 68, 0.5); }
        .border-blue-500\\/50 { border-color: rgba(59, 130, 246, 0.5); }
        .border-orange-500\\/50 { border-color: rgba(249, 115, 22, 0.5); }
        .hover\\:border-green-500\\/50:hover { border-color: rgba(34, 197, 94, 0.5); }
        .hover\\:border-yellow-500\\/50:hover { border-color: rgba(234, 179, 8, 0.5); }
        .hover\\:border-red-500\\/50:hover { border-color: rgba(239, 68, 68, 0.5); }
        .hover\\:border-blue-500\\/50:hover { border-color: rgba(59, 130, 246, 0.5); }
        .hover\\:border-orange-500\\/50:hover { border-color: rgba(249, 115, 22, 0.5); }
      `}</style>
    </div>
  );
}