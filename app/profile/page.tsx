"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Award, 
  BarChart2, 
  Calendar, 
  ChevronLeft, 
  Clock, 
  Code, 
  FileCode2, 
  Flame, 
  GithubIcon,
  Globe,
  Laptop,
  LineChart, 
  LinkedinIcon,
  List, 
  Mail,
  MapPin,
  Pencil,
  Server, 
  Settings,
  Star,
  Terminal,
  Trophy, 
  User,
  UserPlus,
} from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for user profile
  const userData = {
    username: "User_1337",
    displayName: "Alex Chen",
    title: "Full Stack Developer",
    bio: "Passionate developer focused on building robust web applications. I love solving complex problems and participating in coding challenges.",
    location: "San Francisco, CA",
    website: "alexchen.dev",
    email: "alex@example.com",
    github: "github.com/alexchen",
    linkedin: "linkedin.com/in/alexchen",
    joinedDate: "December, 2023",
    level: 5,
    rank: 234,
    streak: 7,
    totalChallenges: 38,
    successRate: 67,
    avgSolveTime: "12m 44s",
    xp: 753,
    nextLevelXp: 1000,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Node.js", level: 80 },
      { name: "Python", level: 65 },
      { name: "SQL", level: 70 },
    ],
    badges: [
      { name: "Algorithm Master", icon: <Award />, date: "Jan 15, 2024", description: "Completed 10 algorithm challenges" },
      { name: "30-Day Streak", icon: <Flame />, date: "Feb 10, 2024", description: "Completed challenges for 30 days in a row" },
      { name: "Problem Solver", icon: <Terminal />, date: "March 5, 2024", description: "Solved 50 coding problems" },
      { name: "JavaScript Pro", icon: <FileCode2 />, date: "Feb 22, 2024", description: "Mastered JavaScript challenges" },
    ],
    recentActivities: [
      { type: "challenge", title: "Binary Search Implementation", result: "win", difficulty: "Intermediate", date: "3 days ago", xp: 150 },
      { type: "level", title: "Reached Level 5", date: "5 days ago", xp: 200 },
      { type: "challenge", title: "String Manipulation", result: "win", difficulty: "Beginner", date: "1 week ago", xp: 100 },
      { type: "badge", title: "Earned Algorithm Master Badge", date: "2 weeks ago", xp: 60 },
      { type: "challenge", title: "Linked List Reversal", result: "loss", difficulty: "Advanced", date: "2 weeks ago", xp: 80 },
    ],
    preferredLanguages: [
      { name: "JavaScript", percentage: 65 },
      { name: "TypeScript", percentage: 20 },
      { name: "Python", percentage: 15 },
    ]
  };

  const getChallengeTypeColor = (type ) => {
    switch(type) {
      case 'challenge': return 'bg-[#1c2539]';
      case 'level': return 'bg-purple-900';
      case 'badge': return 'bg-orange-900';
      default: return 'bg-[#1c2539]';
    }
  };

  const getResultBadge = (result) => {
    if (!result) return null;
    
    switch(result.toLowerCase()) {
      case 'win': return <Badge className="bg-green-600 text-white">Win</Badge>;
      case 'loss': return <Badge className="bg-red-600 text-white">Loss</Badge>;
      case 'draw': return <Badge className="bg-yellow-600 text-white">Draw</Badge>;
      default: return null;
    }
  };

  const getDifficultyBadge = (difficulty) => {
    if (!difficulty) return null;
    
    switch(difficulty.toLowerCase()) {
      case 'beginner': return <Badge className="bg-blue-600 text-white">Beginner</Badge>;
      case 'intermediate': return <Badge className="bg-orange-600 text-white">Intermediate</Badge>;
      case 'advanced': return <Badge className="bg-red-600 text-white">Advanced</Badge>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white font-mono">
      <main className="container mx-auto p-6 max-w-6xl">
        {/* Back button and actions row */}
        <div className="flex justify-between items-center mb-8">
          <Button 
            variant="outline" 
            className="bg-[#0d131f] border-gray-800/50 hover:bg-[#101624] text-gray-300 transition-all duration-300"
            asChild
          >
            <Link href="/user-dashboard">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="bg-[#0d131f] border-green-800/50 hover:bg-[#101624] text-green-400 transition-all duration-300"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Add Friend
            </Button>
            <Button 
              variant="outline" 
              className="bg-[#0d131f] border-blue-800/50 hover:bg-[#101624] text-blue-400 transition-all duration-300"
            >
              <Settings className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Profile Header */}
        <div className="bg-[#0d131f] border border-gray-800/50 rounded-lg shadow-lg mb-8 overflow-hidden">
          {/* Background header with pattern */}
          <div className="h-40 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMCAwaDEwdjEwaC0xMHpNMTAgMTBoMTB2MTBoLTEwek0wIDEwaDEwdjEwaC0xMHpNMjAgMGgxMHYxMGgtMTB6TTEwIDBIMHYxMGgxMHoiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute top-3 right-3 text-white bg-white/10 hover:bg-white/20"
            >
              <Pencil className="h-4 w-4" />
              <span className="ml-1">Edit Cover</span>
            </Button>
          </div>
          
          {/* Profile info section */}
          <div className="p-6 pt-0 -mt-16 relative">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Avatar */}
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-[#0d131f] bg-gradient-to-br from-blue-900 to-blue-600 text-white text-5xl">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" alt={userData.username} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-900 to-blue-600">{userData.displayName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 bg-green-500 text-xs px-2 py-0.5 rounded-full text-black font-semibold">
                  ONLINE
                </div>
              </div>
              
              {/* User info */}
              <div className="flex-1 pt-16 md:pt-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold">{userData.displayName}</h1>
                    <div className="flex items-center text-gray-400 text-sm">
                      <span className="font-mono">@{userData.username}</span>
                      <span className="mx-2">•</span>
                      <span className="text-blue-400">{userData.title}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="flex items-center gap-1 text-blue-400">
                      <Trophy className="h-4 w-4" />
                      <span className="text-sm">Rank #{userData.rank}</span>
                    </div>
                    <div className="h-4 w-px bg-gray-700"></div>
                    <div className="flex items-center gap-1 text-orange-400">
                      <Flame className="h-4 w-4" />
                      <span className="text-sm">{userData.streak} day streak</span>
                    </div>
                    <div className="h-4 w-px bg-gray-700"></div>
                    <div className="flex items-center gap-1 text-purple-400">
                      <Award className="h-4 w-4" />
                      <span className="text-sm">Level {userData.level}</span>
                    </div>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-300">{userData.bio}</p>
                
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
                  {userData.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{userData.location}</span>
                    </div>
                  )}
                  {userData.website && (
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <a href={`https://${userData.website}`} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        {userData.website}
                      </a>
                    </div>
                  )}
                  {userData.email && (
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <a href={`mailto:${userData.email}`} className="text-blue-400 hover:underline">
                        {userData.email}
                      </a>
                    </div>
                  )}
                  {userData.github && (
                    <div className="flex items-center gap-1">
                      <GithubIcon className="h-4 w-4 text-gray-500" />
                      <a href={`https://${userData.github}`} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        {userData.github}
                      </a>
                    </div>
                  )}
                  {userData.linkedin && (
                    <div className="flex items-center gap-1">
                      <LinkedinIcon className="h-4 w-4 text-gray-500" />
                      <a href={`https://${userData.linkedin}`} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        {userData.linkedin}
                      </a>
                    </div>
                  )}
                  {userData.joinedDate && (
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>Joined {userData.joinedDate}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Statistics Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <StatCard 
                title="Challenges Completed" 
                value={userData.totalChallenges.toString()} 
                icon={<Code className="w-5 h-5 text-blue-400" />} 
              />
              <StatCard 
                title="Success Rate" 
                value={`${userData.successRate}%`} 
                icon={<Trophy className="w-5 h-5 text-green-400" />} 
              />
              <StatCard 
                title="Average Solve Time" 
                value={userData.avgSolveTime} 
                icon={<Clock className="w-5 h-5 text-orange-400" />} 
              />
            </div>
            
            {/* XP progress */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-semibold text-gray-400">XP Progress</div>
                <div className="text-sm"><span className="text-blue-400">{userData.xp}</span>/<span className="text-gray-400">{userData.nextLevelXp}</span></div>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600" 
                  style={{ width: `${Math.min(100, (userData.xp / userData.nextLevelXp) * 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <div>Level {userData.level}</div>
                <div>{Math.round((userData.xp / userData.nextLevelXp) * 100)}% to Level {userData.level + 1}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Tabs & Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile & Skills */}
          <div className="space-y-6">
            {/* Skills Section */}
            <div className="bg-[#0d131f] border border-gray-800/50 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Laptop className="w-5 h-5 text-blue-400" />
                <span>Skills & Proficiency</span>
              </h2>
              
              <div className="space-y-4">
                {userData.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Preferred Languages */}
            <div className="bg-[#0d131f] border border-gray-800/50 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-400" />
                <span>Preferred Languages</span>
              </h2>
              
              <div className="space-y-4">
                {userData.preferredLanguages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{lang.name}</span>
                      <span className="text-sm text-purple-400">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400" 
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Recent Activity & Badges */}
          <div className="md:col-span-2 space-y-6">
            {/* Recent Activity */}
            <div className="bg-[#0d131f] border border-gray-800/50 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <LineChart className="w-5 h-5 text-green-400" />
                <span>Recent Activity</span>
              </h2>
              
              <div className="space-y-4">
                {userData.recentActivities.map((activity, index) => (
                  <div key={index} className="flex gap-4 p-3 bg-[#080d14] rounded-lg border border-gray-800/30">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center ${getChallengeTypeColor(activity.type)}`}>
                      {activity.type === 'challenge' && <Code className="w-5 h-5 text-green-400" />}
                      {activity.type === 'level' && <Award className="w-5 h-5 text-purple-400" />}
                      {activity.type === 'badge' && <Star className="w-5 h-5 text-orange-400" />}
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-medium mb-1">{activity.title}</div>
                      <div className="flex flex-wrap gap-2">
                        {getResultBadge(activity.result)}
                        {getDifficultyBadge(activity.difficulty)}
                        {activity.xp && (
                          <Badge className="bg-blue-600 text-white">
                            +{activity.xp} XP
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-400 whitespace-nowrap self-start">
                      {activity.date}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Button variant="outline" className="bg-[#080d14] border-gray-800/50 hover:bg-[#101624] text-blue-400">
                  View All Activity
                </Button>
              </div>
            </div>
            
            {/* Badges */}
            <div className="bg-[#0d131f] border border-gray-800/50 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Badges & Achievements</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {userData.badges.map((badge, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-[#080d14] rounded-lg border border-gray-800/30">
                    <div className="flex-shrink-0 w-12 h-12 rounded-md bg-yellow-900/30 border border-yellow-700/30 flex items-center justify-center text-yellow-400">
                      {badge.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-medium text-yellow-400">{badge.name}</div>
                      <div className="text-xs text-gray-400 mt-1">{badge.description}</div>
                      <div className="text-xs text-gray-500 mt-2">Earned on {badge.date}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Button variant="outline" className="bg-[#080d14] border-gray-800/50 hover:bg-[#101624] text-yellow-400">
                  View All Badges
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Custom scrollbar */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
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

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-[#080d14] rounded-lg p-4 border border-gray-800/30 flex flex-col">
      <div className="text-gray-400 text-sm mb-1">{title}</div>
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">{value}</div>
        {icon}
      </div>
    </div>
  )
}