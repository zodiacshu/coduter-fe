"use client"

import { useState } from "react"
import { Award, Calendar, ChevronLeft, Clock, Code, FileText, Flame, CloudLightningIcon as Lightning, List, Server, Star, Trophy, User, ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("activity")

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white font-mono">
      <main className="container mx-auto p-6 max-w-6xl">
        {/* Back button */}
        <div className="flex justify-between items-center mb-8">
            <Button 
            variant="outline" 
            className="bg-[#0d131f] border-gray-800/50 text-gray-300 transition-all duration-300"
            onClick={() => window.location.href = '/user-challenge/setup'}
            >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Challenge Setup
            </Button>
          
          <div className="text-xs text-gray-400 font-mono">
            Last updated: <span className="text-blue-400">Today, 8:43 AM</span>
          </div>
        </div>

        {/* User Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* User Image Box */}
          <div className="bg-[#0d131f] border border-gray-800/50 rounded-lg p-6 shadow-lg relative overflow-hidden flex flex-col items-center">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
            
            <div className="relative mb-4">
              <Avatar className="w-32 h-32 bg-gradient-to-br from-blue-900 to-blue-600 text-white text-5xl border-2 border-blue-800">
                <AvatarFallback className="bg-gradient-to-br from-blue-900 to-blue-600">U</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-xs px-2 py-0.5 rounded-full text-black font-semibold">
                ONLINE
              </div>
            </div>
            
            <h1 className="text-xl font-bold mb-2 font-mono text-center">User_1337</h1>
            
            <button className="mt-4 bg-[#1c2539] hover:bg-[#243047] text-blue-300 text-sm py-1.5 px-4 rounded-md font-mono flex items-center gap-2 transition-all duration-300 border border-blue-800/30">
              View Profile <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          
          {/* User Stats Box */}
          <div className="md:col-span-3 bg-[#0d131f] border border-gray-800/50 rounded-lg p-6 shadow-lg relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMCAwaDEwdjEwaC0xMHpNMTAgMTBoMTB2MTBoLTEwek0wIDEwaDEwdjEwaC0xMHpNMjAgMGgxMHYxMGgtMTB6TTEwIDBIMHYxMGgxMHoiIGZpbGw9InJnYmEoNjQsIDg2LCAxMzMsIDAuMDIpIi8+PC9zdmc+')] opacity-10"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 relative z-10">
              <div className="p-3 bg-[#101624] rounded-lg border border-[#1c2539]/50 transition-all duration-300 hover:border-blue-900/50">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-400 font-mono">LEVEL</span>
                </div>
                <div className="text-lg font-bold font-mono text-purple-300">Level 5</div>
              </div>
              
              <div className="p-3 bg-[#101624] rounded-lg border border-[#1c2539]/50 transition-all duration-300 hover:border-blue-900/50">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-400 font-mono">RANK</span>
                </div>
                <div className="text-lg font-bold font-mono text-blue-300">Rank #234</div>
              </div>
              
              <div className="p-3 bg-[#101624] rounded-lg border border-[#1c2539]/50 transition-all duration-300 hover:border-blue-900/50">
                <div className="flex items-center gap-2 mb-1">
                  <Code className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-400 font-mono">LANGUAGE</span>
                </div>
                <div className="text-lg font-bold font-mono text-green-300">JavaScript</div>
              </div>
              
              <div className="p-3 bg-[#101624] rounded-lg border border-[#1c2539]/50 transition-all duration-300 hover:border-blue-900/50">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-gray-400 font-mono">JOINED</span>
                </div>
                <div className="text-lg font-bold font-mono text-orange-300">Dec 2023</div>
              </div>
            </div>
            
            <div className="mt-4 relative z-10">
              <div className="mb-1 flex items-center justify-between">
                <div className="text-sm text-gray-400 font-mono">XP PROGRESS</div>
                <div className="text-sm font-semibold font-mono"><span className="text-blue-400">753</span>/1000</div>
              </div>
              
              {/* XP Progress Bar */}
              <div className="relative pt-1 w-full">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400 bg-[#1a2234] border border-blue-900/30">
                      Level 5
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-400 bg-[#221a34] border border-purple-900/30">
                      Level 6
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-[#0a0e17] rounded-full overflow-hidden border border-[#1c2539]/30">
                  <div className="h-full bg-gradient-to-r from-blue-900 via-blue-600 to-purple-700 rounded-full flex items-center justify-center" style={{ width: '75%' }}>
                    <div className="w-full h-full opacity-80 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDEwdjEwaC0xMHpNMTAgMTBoMTB2MTBoLTEwek0wIDEwaDEwdjEwaC0xMHpNMjAgMGgxMHYxMGgtMTB6TTEwIDBIMHYxMGgxMHpNMzAgMTBoMTB2MTBoLTEwek0yMCAxMGgxMHYxMGgtMTB6TTMwIDBIMjB2MTBoMTB6TTMwIDIwaDEwdjEwaC0xMHpNMjAgMjBoMTB2MTBoLTEwek0xMCAyMGgxMHYxMGgtMTB6TTAgMjBoMTB2MTBoLTEwek0zMCAzMGgxMHYxMGgtMTB6TTIwIDMwaDEwdjEwaC0xMHpNMTAgMzBoMTB2MTBoLTEwek0wIDMwaDF2MTBoLTEweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+PC9zdmc+')]"></div>
                  </div>
                </div>
                <div className="text-xs text-right mt-1 text-gray-400 font-mono">94% to Level 6</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Completed Challenges" 
            value="38" 
            icon={<List className="w-5 h-5 text-green-500" />} 
            color="green"
          />
          <StatCard 
            title="Win Rate" 
            value="67%" 
            icon={<Trophy className="w-5 h-5 text-blue-500" />} 
            color="blue"
            circular={true}
            percentage={67}
          />
          <StatCard 
            title="Highest Streak" 
            value="8 wins" 
            icon={<Flame className="w-5 h-5 text-orange-500" />} 
            color="orange"
          />
          <StatCard 
            title="Total Coding Time" 
            value="48h 32m" 
            icon={<Clock className="w-5 h-5 text-purple-500" />} 
            color="purple"
          />
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Battle History */}
          <div className="md:col-span-2 bg-[#0d131f] border border-gray-800/50 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Lightning className="w-5 h-5 text-blue-400" />
                <h2 className="text-lg font-medium text-blue-400 font-mono">BATTLE HISTORY</h2>
              </div>
              <Button variant="link" className="text-blue-400 p-0 h-auto font-mono text-sm">
                VIEW ALL
              </Button>
            </div>

            <div className="space-y-5">
              <BattleActivityItem 
                title="Binary Search Implementation"
                opponent={{
                  name: "ProCoder42",
                  avatar: "/placeholder.svg?height=32&width=32",
                  rank: 189
                }}
                language="JavaScript"
                result="win"
                timeTaken="8m 24s"
                difficulty="Intermediate"
                xp="+150 XP"
                time="3 days ago"
              />
              
              <BattleActivityItem 
                title="Array Sorting Challenge"
                opponent={{
                  name: "DevNinja",
                  avatar: "/placeholder.svg?height=32&width=32",
                  rank: 122
                }}
                language="Python"
                result="win"
                timeTaken="12m 03s"
                difficulty="Intermediate"
                xp="+140 XP"
                time="4 days ago"
              />
              
              <BattleActivityItem 
                title="Linked List Reversal"
                opponent={{
                  name: "CodeMaster99",
                  avatar: "/placeholder.svg?height=32&width=32",
                  rank: 56
                }}
                language="JavaScript"
                result="loss"
                timeTaken="15m 42s"
                difficulty="Advanced"
                xp="+80 XP"
                time="1 week ago"
              />
              
              <BattleActivityItem 
                title="String Manipulation"
                opponent={{
                  name: "AlgoQueen",
                  avatar: "/placeholder.svg?height=32&width=32",
                  rank: 98
                }}
                language="TypeScript"
                result="win"
                timeTaken="9m 37s"
                difficulty="Intermediate"
                xp="+160 XP"
                time="1 week ago"
              />
              
              <BattleActivityItem 
                title="Sorting Algorithm"
                opponent={{
                  name: "CodeWizard",
                  avatar: "/placeholder.svg?height=32&width=32",
                  rank: 310
                }}
                language="JavaScript"
                result="win"
                timeTaken="6m 15s"
                difficulty="Beginner"
                xp="+100 XP"
                time="2 weeks ago"
              />
            </div>
          </div>

          {/* Badges Progress */}
          <div className="bg-[#0d131f] border border-gray-800/50 rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-medium text-purple-400 font-mono">BADGES PROGRESS</h2>
            </div>

            <div className="space-y-6">
              <BadgeItem 
                icon={<Award className="w-5 h-5" />}
                title="Algorithm Master"
                description="Completed 10 algorithm challenges"
                progress={100}
                completed={true}
                color="purple"
              />
              
              <BadgeItem 
                icon={<Lightning className="w-5 h-5" />}
                title="Speed Coder"
                description="Completed challenges under time limit"
                progress={80}
                color="orange"
              />
              
              <BadgeItem 
                icon={<List className="w-5 h-5" />}
                title="Problem Solver"
                description="Solved 50 coding problems"
                progress={60}
                color="green"
              />
              
              <BadgeItem 
                icon={<FileText className="w-5 h-5" />}
                title="Documentation Pro"
                description="Write well-documented code"
                progress={40}
                color="blue"
              />
              
              <BadgeItem 
                icon={<Server className="w-5 h-5" />}
                title="Backend Specialist"
                description="Completed 10 server-side challenges"
                progress={20}
                color="red"
              />
            </div>
          </div>
        </div>

        {/* Upcoming Challenges */}
        <div className="mt-8 bg-[#0d131f] border border-gray-800/50 rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-400" />
              <h2 className="text-lg font-medium text-green-400 font-mono">UPCOMING CHALLENGES</h2>
            </div>
            <Button variant="link" className="text-green-400 p-0 h-auto font-mono text-sm">
              BROWSE ALL
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UpcomingChallenge 
              title="Hash Table Implementation"
              difficulty="Advanced"
              participants={42}
              startTime="Tomorrow, 3:00 PM"
            />
            
            <UpcomingChallenge 
              title="Tree Traversal Algorithms"
              difficulty="Intermediate"
              participants={78}
              startTime="Feb 12, 10:00 AM"
            />
          </div>
        </div>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        
        /* Custom circular progress bar */
        .circular-progress {
          transform: rotate(-90deg);
        }
        
        .progress-circle-bg {
          fill: none;
          stroke: #1a202c;
          stroke-width: 4;
        }
        
        .progress-circle {
          fill: none;
          stroke-width: 4;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.5s ease;
        }
        
        .progress-text {
          transform: rotate(90deg);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0e17;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #1c2539;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #243047;
        }
      `}</style>
    </div>
  )
}

interface StatCardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  color: string;
  circular?: boolean;
  percentage?: number;
}

function StatCard({ title, value, icon, color, circular = false, percentage = 0 }: StatCardProps) {
  const getBgColor = (color) => {
    switch(color) {
      case 'green': return 'from-[#101a13] to-[#0e1811]';
      case 'blue': return 'from-[#101824] to-[#0e1520]';
      case 'orange': return 'from-[#1a1410] to-[#18120e]';
      case 'purple': return 'from-[#161024] to-[#140e20]';
      default: return 'from-[#101824] to-[#0e1520]';
    }
  };
  
  const getBorderColor = (color) => {
    switch(color) {
      case 'green': return 'border-green-900/40';
      case 'blue': return 'border-blue-900/40';
      case 'orange': return 'border-orange-900/40';
      case 'purple': return 'border-purple-900/40';
      default: return 'border-gray-800/40';
    }
  };
  
  const getProgressColor = (color) => {
    switch(color) {
      case 'green': return '#22c55e';
      case 'blue': return '#3b82f6';
      case 'orange': return '#f97316';
      case 'purple': return '#a855f7';
      case 'red': return '#ef4444';
      default: return '#3b82f6';
    }
  };

  return (
    <div className={`bg-gradient-to-br ${getBgColor(color)} rounded-lg p-6 shadow-lg border ${getBorderColor(color)} flex flex-col justify-between h-full hover:border-${color}-800/60 transition-all duration-300`}>
      <div className="text-gray-400 text-sm mb-2 font-mono">{title}</div>
      <div className="flex justify-between items-center">
        {circular && percentage ? (
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold font-mono">{value}</div>
            <div className="relative w-16 h-16">
              <svg className="circular-progress" width="60" height="60" viewBox="0 0 60 60">
                <circle className="progress-circle-bg" cx="30" cy="30" r="26" />
                <circle 
                  className="progress-circle" 
                  cx="30" 
                  cy="30" 
                  r="26" 
                  stroke={getProgressColor(color)}
                  strokeDasharray="163.36"
                  strokeDashoffset={(163.36 * (100 - percentage)) / 100}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center progress-text text-xs font-semibold" style={{color: getProgressColor(color)}}>
                {percentage}%
              </div>
            </div>
          </div>
        ) : (
          <div className="text-2xl font-bold font-mono">{value}</div>
        )}
        {icon}
      </div>
    </div>
  )
}

interface BattleActivityItemProps {
  title: string;
  opponent: {
    name: string;
    avatar: string;
    rank: number;
  };
  language: string;
  result: string;
  timeTaken: string;
  difficulty: string;
  xp?: string;
  time: string;
}

function BattleActivityItem({ title, opponent, language, result, timeTaken, difficulty, xp, time }: BattleActivityItemProps) {
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-blue-700 text-blue-100';
      case 'Intermediate': return 'bg-orange-700 text-orange-100';
      case 'Advanced': return 'bg-red-700 text-red-100';
      default: return 'bg-blue-700 text-blue-100';
    }
  };

  const getResultColor = (result) => {
    switch(result.toLowerCase()) {
      case 'win': return 'bg-green-700 text-green-100';
      case 'loss': return 'bg-red-700 text-red-100';
      case 'draw': return 'bg-yellow-700 text-yellow-100';
      default: return 'bg-blue-700 text-blue-100';
    }
  };

  const getLanguageColor = (language) => {
    switch(language.toLowerCase()) {
      case 'javascript': return 'bg-yellow-600/40 text-yellow-100 border border-yellow-600/50';
      case 'python': return 'bg-blue-600/40 text-blue-100 border border-blue-600/50';
      case 'typescript': return 'bg-blue-600/40 text-blue-100 border border-blue-600/50';
      case 'java': return 'bg-orange-600/40 text-orange-100 border border-orange-600/50';
      case 'c++': return 'bg-purple-600/40 text-purple-100 border border-purple-600/50';
      default: return 'bg-gray-600/40 text-gray-100 border border-gray-600/50';
    }
  };

  return (
    <div className="bg-[#080d14] rounded-lg p-4 border border-gray-800/20 hover:border-gray-700/30 transition-all duration-300 relative overflow-hidden">
      {/* Result indicator line */}
      <div className={`absolute top-0 left-0 w-1 h-full ${result.toLowerCase() === 'win' ? 'bg-green-500' : 'bg-red-500'}`}></div>
      
      <div className="flex flex-col md:flex-row md:items-center gap-4 pl-2">
        {/* Problem info */}
        <div className="flex-1">
          <div className="font-medium mb-2 font-mono flex items-center">
            <Code className="w-4 h-4 text-blue-400 mr-2" /> 
            {title}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded-md font-mono ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-md font-mono ${getResultColor(result)}`}>
              {result.charAt(0).toUpperCase() + result.slice(1)}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-md font-mono ${getLanguageColor(language)}`}>
              {language}
            </span>
            <span className="bg-indigo-700/50 text-indigo-100 text-xs px-2 py-0.5 rounded-md font-mono border border-indigo-600/50 flex items-center">
              <Clock className="w-3 h-3 mr-1" /> {timeTaken}
            </span>
            {xp && <span className="bg-blue-700/50 text-blue-100 text-xs px-2 py-0.5 rounded-md font-mono border border-blue-600/50">{xp}</span>}
          </div>
        </div>
        
        {/* Opponent info */}
        <div className="flex items-center gap-3 pr-2 bg-[#0d131f] rounded-md p-2 border border-gray-800/30">
          <Avatar className="w-8 h-8 border border-gray-800">
            <AvatarFallback className="bg-gradient-to-br from-purple-900 to-blue-800 text-xs">{opponent.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-semibold text-gray-300 font-mono">{opponent.name}</div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <Trophy className="w-3 h-3 text-yellow-500" /> Rank #{opponent.rank}
            </div>
          </div>
          
          {/* Video call indicator */}
          <div className="ml-2 w-6 h-6 flex items-center justify-center rounded-full bg-blue-900/30 border border-blue-800/50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-blue-400">
              <path d="M23 7l-7 5 7 5V7z"></path>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </div>
        </div>
        
        {/* Timestamp */}
        <div className="text-xs text-gray-400 whitespace-nowrap font-mono absolute top-2 right-3 md:relative md:top-auto md:right-auto">
          {time}
        </div>
      </div>
    </div>
  )
}

interface BadgeItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
  progress: number;
  completed?: boolean;
  color: string;
}

function BadgeItem({ icon, title, description, progress, completed = false, color }: BadgeItemProps) {
  const getProgressColor = (color) => {
    switch(color) {
      case 'green': return '#22c55e';
      case 'blue': return '#3b82f6';
      case 'orange': return '#f97316';
      case 'purple': return '#a855f7';
      case 'red': return '#ef4444';
      default: return '#3b82f6';
    }
  };
  
  const getBgColor = (color) => {
    switch(color) {
      case 'green': return 'from-green-900/20 to-green-900/10';
      case 'blue': return 'from-blue-900/20 to-blue-900/10';
      case 'orange': return 'from-orange-900/20 to-orange-900/10';
      case 'purple': return 'from-purple-900/20 to-purple-900/10';
      case 'red': return 'from-red-900/20 to-red-900/10';
      default: return 'from-blue-900/20 to-blue-900/10';
    }
  };

  return (
    <div className={`bg-gradient-to-br ${getBgColor(color)} rounded-lg p-4 border border-gray-800/20`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-md bg-${color}-900/30 flex items-center justify-center text-${color}-400`}>
          {icon}
        </div>
        <div>
          <div className="font-medium font-mono">{title}</div>
          <div className="text-xs text-gray-400">{description}</div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-400 font-mono">{progress}% complete</span>
          {completed && <span className="text-xs text-green-400 font-mono">ACHIEVED</span>}
        </div>
        
        {/* Progress bar for badges */}
        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full relative overflow-hidden"
            style={{ 
              width: `${progress}%`, 
              background: `linear-gradient(90deg, ${getProgressColor(color)}aa, ${getProgressColor(color)})` 
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBkPSJNMCAwaDEwdjEwaC0xMHpNMTAgMTBoMTB2MTBoLTEwek0wIDEwaDF2MTBoLTEweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')]" style={{ transform: "translateX(-50%)" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface UpcomingChallengeProps {
  title: string;
  difficulty: string;
  participants: number;
  startTime: string;
}

function UpcomingChallenge({ title, difficulty, participants, startTime }: UpcomingChallengeProps) {
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-blue-700 text-blue-100';
      case 'Intermediate': return 'bg-orange-700 text-orange-100';
      case 'Advanced': return 'bg-red-700 text-red-100';
      default: return 'bg-blue-700 text-blue-100';
    }
  };

  return (
    <div className="bg-[#080d14] rounded-lg p-5 border border-gray-800/20 hover:border-gray-700/30 transition-all duration-300 relative overflow-hidden shadow-md">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-700"></div>
      
      <div className="pl-3">
        <div className="font-medium mb-3 font-mono">{title}</div>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className={`text-xs px-2 py-1 rounded-md font-mono ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
            <User className="w-3 h-3" /> {participants} PARTICIPANTS
          </span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="bg-gradient-to-r from-green-900/20 to-green-900/10 rounded-md py-1 px-3">
            <div className="text-xs text-green-400 font-mono">STARTS</div>
            <div className="text-sm font-mono">{startTime}</div>
          </div>
          
          <button className="bg-transparent hover:bg-green-900/20 text-green-400 text-xs py-2 px-4 rounded border border-green-800/30 font-mono transition-all duration-300">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  )
}

// This is required to support other pages that might still be using the old ActivityItem component
interface ActivityItemProps {
  type: string;
  title: string;
  tags: Array<{label: string, color: string}>;
  xp?: string;
  time: string;
}

function ActivityItem({ type, title, tags, xp, time }: ActivityItemProps) {
  return (
    <div className="bg-[#080d14] rounded-lg p-4 flex items-start gap-4 border border-gray-800/20 hover:border-gray-700/30 transition-all duration-300">
      <div className={`
        flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center
        ${type === 'challenge' ? 'bg-gradient-to-br from-[#1c2539] to-[#161e2d]' : 
          type === 'level' ? 'bg-gradient-to-br from-[#2b1d5a] to-[#231849]' : 
          'bg-gradient-to-br from-[#5a3c1d] to-[#493017]'}
      `}>
        {type === 'challenge' && <Code className="w-5 h-5 text-green-500" />}
        {type === 'level' && <Award className="w-5 h-5 text-purple-500" />}
        {type === 'badge' && <Star className="w-5 h-5 text-orange-500" />}
      </div>
      <div className="flex-1">
        <div className="font-medium mb-2 font-mono">{title}</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className={`${tag.color} text-xs px-2 py-0.5 rounded-md font-mono`}>
              {tag.label}
            </span>
          ))}
          {xp && <span className="bg-blue-700/50 text-blue-100 text-xs px-2 py-0.5 rounded-md font-mono border border-blue-600/50">{xp}</span>}
        </div>
      </div>
      <div className="text-xs text-gray-400 whitespace-nowrap font-mono">{time}</div>
    </div>
  )
}