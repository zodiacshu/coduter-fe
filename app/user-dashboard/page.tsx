"use client"

import { useState } from "react"
import { Award, Calendar, ChevronLeft, Clock, Code, FileText, Flame, HardDrive, CloudLightningIcon as Lightning, List, Server, Star, Trophy, User } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("activity")

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white">
      {/* Header */}
     

      <main className="container mx-auto p-4 max-w-6xl">
        {/* Back button */}
        <Button variant="outline" className="mb-6 bg-[#131a2b] border-gray-700 hover:bg-[#1c2539] text-gray-300">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Challenge Setup
        </Button>

        {/* User Profile */}
        <div className="bg-[#131a2b] rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Avatar className="w-20 h-20 bg-purple-600 text-white text-4xl">
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">User_1337</h1>
              <div className="flex flex-wrap gap-3 mb-3">
                <Badge className="bg-purple-600 hover:bg-purple-700 flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  Level 5
                </Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700 flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  Rank #234
                </Badge>
                <Badge className="bg-green-600 hover:bg-green-700 flex items-center gap-1">
                  <Code className="w-3 h-3" />
                  JavaScript
                </Badge>
                <Badge className="bg-orange-600 hover:bg-orange-700 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Joined Dec 12, 2023
                </Badge>
              </div>
              <div className="text-sm text-gray-400 mb-2">XP: 753/1000</div>
              <Progress value={75} className="h-2 bg-gray-700" indicatorClassName="bg-blue-500" />
              <div className="text-xs text-right mt-1 text-gray-400">94% to Level 6</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="Completed Challenges" 
            value="38" 
            icon={<List className="w-5 h-5 text-green-500" />} 
            bgColor="bg-[#131a2b]" 
          />
          <StatCard 
            title="Win Rate" 
            value="67%" 
            icon={<Trophy className="w-5 h-5 text-blue-500" />} 
            bgColor="bg-[#131a2b]" 
          />
          <StatCard 
            title="Highest Streak" 
            value="8 wins" 
            icon={<Flame className="w-5 h-5 text-orange-500" />} 
            bgColor="bg-[#131a2b]" 
          />
          <StatCard 
            title="Total Coding Time" 
            value="48h 32m" 
            icon={<Clock className="w-5 h-5 text-purple-500" />} 
            bgColor="bg-[#131a2b]" 
          />
        </div>

        {/* Tabs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Lightning className="w-5 h-5 text-blue-400" />
                <h2 className="text-lg font-medium text-blue-400">Recent Activity</h2>
              </div>
              <Button variant="link" className="text-blue-400 p-0 h-auto">View All</Button>
            </div>

            <div className="space-y-4">
              <ActivityItem 
                type="challenge"
                title="Binary Search Implementation"
                tags={[
                  { label: "Win", color: "bg-green-600" },
                  { label: "Intermediate", color: "bg-orange-700" }
                ]}
                xp="+150 XP"
                time="3 days ago"
              />
              
              <ActivityItem 
                type="level"
                title="Reached Level 5"
                tags={[
                  { label: "+200 XP", color: "bg-orange-700" }
                ]}
                time="5 days ago"
              />
              
              <ActivityItem 
                type="challenge"
                title="Linked List Reversal"
                tags={[
                  { label: "Lost", color: "bg-red-700" },
                  { label: "Advanced", color: "bg-red-600" }
                ]}
                xp="+80 XP"
                time="1 week ago"
              />
              
              <ActivityItem 
                type="badge"
                title="Earned Algorithm Master Badge"
                tags={[
                  { label: "+60 XP", color: "bg-orange-700" }
                ]}
                time="1 week ago"
              />
              
              <ActivityItem 
                type="challenge"
                title="Sorting Algorithm"
                tags={[
                  { label: "Win", color: "bg-green-600" },
                  { label: "Beginner", color: "bg-blue-700" }
                ]}
                xp="+100 XP"
                time="2 weeks ago"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-medium text-purple-400">Badges Progress</h2>
            </div>

            <div className="space-y-6">
              <BadgeItem 
                icon={<Award className="w-5 h-5" />}
                title="Algorithm Master"
                description="Completed 10 algorithm challenges"
                progress={100}
                completed={true}
                bgColor="bg-purple-900"
              />
              
              <BadgeItem 
                icon={<Lightning className="w-5 h-5" />}
                title="Speed Coder"
                description="Completed challenges under time limit"
                progress={80}
                bgColor="bg-orange-900"
              />
              
              <BadgeItem 
                icon={<List className="w-5 h-5" />}
                title="Problem Solver"
                description="Solved 50 coding problems"
                progress={60}
                bgColor="bg-green-900"
              />
              
              <BadgeItem 
                icon={<FileText className="w-5 h-5" />}
                title="Documentation Pro"
                description="Write well-documented code"
                progress={40}
                bgColor="bg-blue-900"
              />
              
              <BadgeItem 
                icon={<Server className="w-5 h-5" />}
                title="Backend Specialist"
                description="Completed 10 server-side challenges"
                progress={20}
                bgColor="bg-red-900"
              />
            </div>
          </div>
        </div>

        {/* Upcoming Challenges */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-400" />
              <h2 className="text-lg font-medium text-green-400">Upcoming Challenges</h2>
            </div>
            <Button variant="link" className="text-green-400 p-0 h-auto">Browse All</Button>
          </div>

          <div className="space-y-4">
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
    </div>
  )
}

function StatCard({ title, value, icon, bgColor }) {
  return (
    <div className={`${bgColor} rounded-lg p-4 flex flex-col`}>
      <div className="text-gray-400 text-sm mb-1">{title}</div>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">{value}</div>
        {icon}
      </div>
    </div>
  )
}

function ActivityItem({ type, title, tags, xp, time }) {
  return (
    <div className="bg-[#131a2b] rounded-lg p-4 flex items-start gap-4">
      <div className={`
        flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center
        ${type === 'challenge' ? 'bg-[#1c2539]' : type === 'level' ? 'bg-purple-900' : 'bg-orange-900'}
      `}>
        {type === 'challenge' && <Code className="w-4 h-4 text-green-500" />}
        {type === 'level' && <Award className="w-4 h-4 text-purple-500" />}
        {type === 'badge' && <Star className="w-4 h-4 text-orange-500" />}
      </div>
      <div className="flex-1">
        <div className="font-medium mb-1">{title}</div>
        <div className="flex flex-wrap gap-2 mb-1">
          {tags.map((tag, index) => (
            <span key={index} className={`${tag.color} text-xs px-2 py-0.5 rounded`}>
              {tag.label}
            </span>
          ))}
          {xp && <span className="bg-orange-700 text-xs px-2 py-0.5 rounded">{xp}</span>}
        </div>
      </div>
      <div className="text-xs text-gray-400 whitespace-nowrap">{time}</div>
    </div>
  )
}

function BadgeItem({ icon, title, description, progress, completed, bgColor }) {
  return (
    <div className={`${bgColor} bg-opacity-30 rounded-lg p-4`}>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-md bg-purple-800 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-xs text-gray-400">{description}</div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-400">{progress}% complete</span>
          {completed && <span className="text-xs text-green-400">Achieved!</span>}
        </div>
        <Progress value={progress} className="h-1.5 bg-gray-700" indicatorClassName={completed ? "bg-green-500" : "bg-blue-500"} />
      </div>
    </div>
  )
}

function UpcomingChallenge({ title, difficulty, participants, startTime }) {
  return (
    <div className="bg-[#131a2b] rounded-lg p-4 flex justify-between items-center">
      <div>
        <div className="font-medium mb-1">{title}</div>
        <div className="flex items-center gap-2">
          <span className={`
            text-xs px-2 py-0.5 rounded
            ${difficulty === 'Beginner' ? 'bg-blue-700' : 
              difficulty === 'Intermediate' ? 'bg-orange-700' : 'bg-red-700'}
          `}>
            {difficulty}
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <User className="w-3 h-3" /> {participants}
          </span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-xs text-green-400 mb-1">Starts</div>
        <div className="text-sm">{startTime}</div>
      </div>
    </div>
  )
}
