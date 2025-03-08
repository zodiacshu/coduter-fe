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
  LineChart, 
  List, 
  Server, 
  Star, 
  Trophy, 
  User 
} from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UserStats() {
  // Mock data for statistics
  const userData = {
    username: "User_1337",
    level: 5,
    totalChallenges: 38,
    avgSolveTime: "12m 44s",
    successRate: 67,
    mostUsedLanguage: "JavaScript",
    bestCategory: "Algorithms",
    worstCategory: "Database Design",
    rank: 1542,
    streak: 7,
    solved: 127,
    xp: 753,
    nextLevelXp: 1000
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
    { level: "Beginner", completed: 18, success: 89, avgTime: "8m 30s", color: "#3b82f6" },
    { level: "Intermediate", completed: 15, success: 60, avgTime: "14m 25s", color: "#f97316" },
    { level: "Advanced", completed: 5, success: 40, avgTime: "18m 42s", color: "#ef4444" }
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

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white font-mono">
      <main className="container mx-auto p-4 max-w-6xl">
        {/* Back button */}
        <Button variant="outline" className="mb-6 bg-[#131a2b] border-gray-700 hover:bg-[#1c2539] text-gray-300 font-mono" asChild>
          <Link href="/user-dashboard">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>

        {/* User Profile - Dashboard Style */}
        <div className="bg-[#131a2b] rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Avatar className="w-20 h-20 bg-purple-600 text-white text-4xl font-mono border border-border">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt={userData.username} />
              <AvatarFallback>{userData.username.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2 font-mono">{userData.username}</h1>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                <Trophy className="h-3 w-3 text-yellow-500" />
                <span className="font-mono">Rank #{userData.rank}</span>
                <span className="text-xs">•</span>
                <Flame className="h-3 w-3 text-orange-500" />
                <span className="font-mono">{userData.streak} day streak</span>
              </div>
              <div className="text-sm text-gray-400 mb-2 font-mono">XP: {userData.xp}/{userData.nextLevelXp}</div>
              <Progress value={(userData.xp / userData.nextLevelXp) * 100} className="h-2 bg-gray-700" />
              <div className="text-xs text-right mt-1 text-gray-400 font-mono">{Math.round((userData.xp / userData.nextLevelXp) * 100)}% to Level {userData.level + 1}</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="Completed Challenges" 
            value={userData.totalChallenges.toString()} 
            icon={<List className="w-5 h-5 text-green-500" />} 
            bgColor="bg-[#131a2b]" 
          />
          <StatCard 
            title="Success Rate" 
            value={`${userData.successRate}%`} 
            icon={<Trophy className="w-5 h-5 text-blue-500" />} 
            bgColor="bg-[#131a2b]" 
          />
          <StatCard 
            title="Best Category" 
            value={userData.bestCategory} 
            icon={<Star className="w-5 h-5 text-yellow-500" />} 
            bgColor="bg-[#131a2b]" 
          />
          <StatCard 
            title="Avg. Solve Time" 
            value={userData.avgSolveTime} 
            icon={<Clock className="w-5 h-5 text-purple-500" />} 
            bgColor="bg-[#131a2b]" 
          />
        </div>

        {/* Circular Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <CircularStatCard 
            title="Success Rate" 
            value={userData.successRate} 
            icon={<Trophy className="w-6 h-6" />} 
            color="#3b82f6"
            suffix="%"
          />
          <CircularStatCard 
            title="Challenges" 
            value={userData.totalChallenges} 
            icon={<Code className="w-6 h-6" />} 
            color="#10b981"
            maxValue={50}
          />
          <CircularStatCard 
            title="Streak" 
            value={userData.streak} 
            icon={<Flame className="w-6 h-6" />} 
            color="#f97316"
            maxValue={10}
          />
          <CircularStatCard 
            title="XP Level" 
            value={userData.level} 
            icon={<Award className="w-6 h-6" />} 
            color="#8b5cf6"
            maxValue={10}
          />
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Category Performance */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-blue-400" />
                <h2 className="text-lg font-medium text-blue-400 font-mono">Performance by Category</h2>
              </div>
            </div>

            <div className="bg-[#131a2b] rounded-lg p-4 space-y-6">
              {categories.map((category, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold font-mono">{category.name}</h3>
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
                      style={{ width: `${Math.max(5, category.success)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Difficulty Performance */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LineChart className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-medium text-purple-400 font-mono">By Difficulty</h2>
            </div>

            <div className="bg-[#131a2b] rounded-lg p-6">
              <div className="grid grid-cols-3 gap-2">
                {difficulties.map((difficulty, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative w-full aspect-square mb-3">
                      {/* Background circle */}
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#444"
                          strokeWidth="3"
                          strokeDasharray="100, 100"
                        />
                        {/* Foreground circle */}
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={difficulty.color}
                          strokeWidth="3"
                          strokeDasharray={`${difficulty.success}, 100`}
                          className="drop-shadow-md"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-lg font-bold font-mono">{difficulty.success}%</span>
                        <span className="text-xs text-gray-400 font-mono">{difficulty.completed}</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium font-mono">{difficulty.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Activity Chart */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-green-400" />
            <h2 className="text-lg font-medium text-green-400 font-mono">Monthly Activity</h2>
          </div>

          <div className="bg-[#131a2b] rounded-lg p-6">
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
                  <span className="text-sm text-gray-400 font-mono">Attempted</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500/70 border border-green-500/50"></div>
                  <span className="text-sm text-gray-400 font-mono">Succeeded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Strengths & Weaknesses */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Strengths */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-green-400" />
              <h2 className="text-lg font-medium text-green-400 font-mono">Strengths</h2>
            </div>
            <div className="bg-[#131a2b] border-l-4 border-green-500 rounded-lg p-5">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">Best Category</span>
                  <span className="font-semibold font-mono">{userData.bestCategory}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">Most Used Language</span>
                  <span className="font-semibold font-mono">{userData.mostUsedLanguage}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">Successful Challenges</span>
                  <span className="font-semibold font-mono">{Math.round(userData.totalChallenges * (userData.successRate / 100))}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">Beginner Success Rate</span>
                  <span className="font-semibold text-green-400 font-mono">{difficulties[0].success}%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Weaknesses */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Server className="w-5 h-5 text-red-400" />
              <h2 className="text-lg font-medium text-red-400 font-mono">Areas to Improve</h2>
            </div>
            <div className="bg-[#131a2b] border-l-4 border-red-500 rounded-lg p-5">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">Weakest Category</span>
                  <span className="font-semibold font-mono">{userData.worstCategory}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">Failed Challenges</span>
                  <span className="font-semibold font-mono">{userData.totalChallenges - Math.round(userData.totalChallenges * (userData.successRate / 100))}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">Advanced Success Rate</span>
                  <span className="font-semibold text-red-400 font-mono">{difficulties[2].success}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">Average Solve Time</span>
                  <span className="font-semibold font-mono">{userData.avgSolveTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recommended Actions */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <FileCode2 className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-medium text-blue-400 font-mono">Recommended Actions</h2>
          </div>
          
          <div className="bg-[#131a2b] rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              <RecommendedAction
                title="Database Design Practice"
                description="Improve your weakest category with targeted practice"
                linkText="Start Practice"
                linkHref="/challenges/database-design"
              />
              <RecommendedAction
                title="Advanced Algorithms"
                description="Challenge yourself with advanced difficulty problems"
                linkText="Take Challenge"
                linkHref="/challenges/advanced-algorithms"
              />
              <RecommendedAction
                title="Speed Coding"
                description="Improve your solving time with quick challenges"
                linkText="Speed Challenge"
                linkHref="/challenges/speed-coding"
              />
            </div>
          </div>
        </div>
        
        {/* Start New Challenge Button */}
        <div className="mt-8 flex justify-center mb-10">
          <Button className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg font-mono" asChild>
            <Link href="/user-challenge/setup">
              <Code className="mr-2 h-5 w-5" />
              Start New Challenge
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

function StatCard({ title, value, icon, bgColor }) {
  return (
    <div className={`${bgColor} rounded-lg p-4 flex flex-col`}>
      <div className="text-gray-400 text-sm mb-1 font-mono">{title}</div>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold font-mono">{value}</div>
        {icon}
      </div>
    </div>
  )
}

function CircularStatCard({ title, value, icon, color, maxValue = 100, suffix = "" }) {
  const percentage = Math.min(100, (value / maxValue) * 100);
  
  return (
    <div className="bg-[#131a2b] rounded-lg p-5 flex flex-col items-center">
      <div className="text-gray-400 text-sm mb-3 font-mono">{title}</div>
      <div className="relative w-24 h-24 mb-3">
        {/* Background circle */}
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#444"
            strokeWidth="3"
            strokeDasharray="100, 100"
          />
          {/* Foreground circle */}
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
            className="drop-shadow-md"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-[#1a2135] p-2 flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold font-mono">{value}{suffix}</div>
    </div>
  )
}

function RecommendedAction({ title, description, linkText, linkHref }) {
  return (
    <div className="bg-[#1c2539] hover:bg-[#232f4a] transition-colors duration-200 rounded-lg p-4 flex flex-col">
      <h3 className="font-medium text-white mb-2 font-mono">{title}</h3>
      <p className="text-sm text-gray-400 mb-3 flex-grow font-mono">{description}</p>
      <Button variant="outline" className="self-start bg-blue-900/30 border-blue-500/30 hover:bg-blue-800/50 text-blue-400 font-mono" asChild>
        <Link href={linkHref}>
          {linkText}
        </Link>
      </Button>
    </div>
  )
}