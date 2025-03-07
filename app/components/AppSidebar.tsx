// "use client"

// import * as React from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { AlignLeft, Award, BookOpen, Calendar, ChevronDown, Code, CodeSquare, Compass, Crown, FileCode2, Flame, GraduationCap, Home, LayoutDashboard, LineChart, ListChecks, MessageSquare, PanelLeft, Settings, Star, Tag, Timer, Trophy, Users } from 'lucide-react'

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
// import { Progress } from "@/components/ui/progress"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
//   SidebarMenuSubItem,
//   SidebarRail,
//   SidebarSeparator,
// } from "@/components/ui/sidebar"

// // Sample user data
// const userData = {
//   name: "Alex Chen",
//   username: "alexc",
//   avatar: "/placeholder.svg?height=32&width=32",
//   rank: 1542,
//   streak: 7,
//   solved: 127,
//   total: 1500,
//   level: "Intermediate",
// }

// // Sample problem categories
// const problemCategories = [
//   {
//     name: "Data Structures",
//     count: 152,
//     subcategories: [
//       { name: "Arrays", count: 42 },
//       { name: "Linked Lists", count: 23 },
//       { name: "Trees", count: 35 },
//       { name: "Graphs", count: 28 },
//       { name: "Hash Tables", count: 24 },
//     ],
//   },
//   {
//     name: "Algorithms",
//     count: 248,
//     subcategories: [
//       { name: "Sorting", count: 18 },
//       { name: "Searching", count: 15 },
//       { name: "Dynamic Programming", count: 65 },
//       { name: "Greedy", count: 32 },
//       { name: "Backtracking", count: 27 },
//     ],
//   },
//   {
//     name: "System Design",
//     count: 45,
//     subcategories: [
//       { name: "Distributed Systems", count: 12 },
//       { name: "Database Design", count: 15 },
//       { name: "API Design", count: 18 },
//     ],
//   },
// ]

// // Sample learning paths
// const learningPaths = [
//   { name: "Coding Interview Prep", progress: 65 },
//   { name: "Algorithms Mastery", progress: 42 },
//   { name: "System Design Fundamentals", progress: 28 },
// ]

// // Sample contests
// const contests = [
//   { name: "Weekly Challenge #42", date: "Starts in 2 days", isLive: false },
//   { name: "Daily Byte", date: "Live Now", isLive: true },
//   { name: "Company Challenge: Google", date: "In 5 days", isLive: false },
// ]

// export function AppSidebar() {
//   const pathname = usePathname()
  
//   return (
//     <Sidebar className="border-r border-border/50">
//       <SidebarHeader className="border-b border-border/50">
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton size="lg" asChild>
//               <Link href="/dashboard">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
//                   <Code className="h-4 w-4" />
//                 </div>
//                 <div className="flex flex-col gap-0.5 leading-none">
//                   <span className="font-semibold text-green-400">CODUTER</span>
//                   <span className="text-xs text-muted-foreground">Coding Platform</span>
//                 </div>
//               </Link>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>
      
//       <SidebarContent>
//         {/* User Profile Summary */}
//         <SidebarGroup>
//           <div className="flex items-center gap-3 px-2 py-2">
//             <Avatar className="h-10 w-10 border border-border">
//               <AvatarImage src={userData.avatar} alt={userData.name} />
//               <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
//             </Avatar>
//             <div className="flex flex-col">
//               <span className="font-medium">{userData.name}</span>
//               <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
//                 <Trophy className="h-3 w-3 text-yellow-500" />
//                 <span>Rank #{userData.rank}</span>
//                 <span className="text-xs">•</span>
//                 <Flame className="h-3 w-3 text-orange-500" />
//                 <span>{userData.streak} day streak</span>
//               </div>
//             </div>
//           </div>
//           <div className="px-3 py-1">
//             <div className="mb-1 flex items-center justify-between text-xs">
//               <span className="text-muted-foreground">Problems Solved</span>
//               <span className="font-medium">{userData.solved}/{userData.total}</span>
//             </div>
//             <Progress value={(userData.solved / userData.total) * 100} className="h-1.5" />
//           </div>
//         </SidebarGroup>
        
//         <SidebarSeparator />
        
//         {/* Main Navigation */}
//         <SidebarGroup>
//           <SidebarMenu>
//             <SidebarMenuItem>
//               <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
//                 <Link href="/dashboard">
//                   <LayoutDashboard className="h-4 w-4" />
//                   <span>Dashboard</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//             <SidebarMenuItem>
//               <SidebarMenuButton asChild isActive={pathname === "/problems"}>
//                 <Link href="/problems">
//                   <FileCode2 className="h-4 w-4" />
//                   <span>Problems</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//             <SidebarMenuItem>
//               <SidebarMenuButton asChild isActive={pathname === "/contests"}>
//                 <Link href="/contests">
//                   <Trophy className="h-4 w-4" />
//                   <span>Contests</span>
//                   {contests.some(c => c.isLive) && (
//                     <Badge variant="destructive" className="ml-auto h-5 rounded-sm px-1 text-[10px]">LIVE</Badge>
//                   )}
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//             <SidebarMenuItem>
//               <SidebarMenuButton asChild isActive={pathname === "/leaderboard"}>
//                 <Link href="/leaderboard">
//                   <Crown className="h-4 w-4" />
//                   <span>Leaderboard</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//             <SidebarMenuItem>
//               <SidebarMenuButton asChild isActive={pathname === "/learn"}>
//                 <Link href="/learn">
//                   <GraduationCap className="h-4 w-4" />
//                   <span>Learn</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//             <SidebarMenuItem>
//               <SidebarMenuButton asChild isActive={pathname === "/discuss"}>
//                 <Link href="/discuss">
//                   <MessageSquare className="h-4 w-4" />
//                   <span>Discuss</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           </SidebarMenu>
//         </SidebarGroup>
        
//         <SidebarSeparator />
        
//         {/* Problem Categories */}
//         <SidebarGroup>
//           <SidebarGroupLabel>Problem Categories</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {problemCategories.map((category) => (
//                 <Collapsible key={category.name} className="w-full">
//                   <SidebarMenuItem>
//                     <CollapsibleTrigger className="flex w-full">
//                       <SidebarMenuButton className="flex-1">
//                         <CodeSquare className="h-4 w-4" />
//                         <span>{category.name}</span>
//                         <Badge variant="outline" className="ml-auto h-5 rounded-sm px-1 text-[10px]">
//                           {category.count}
//                         </Badge>
//                         <ChevronDown className="ml-1 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
//                       </SidebarMenuButton>
//                     </CollapsibleTrigger>
//                     <CollapsibleContent>
//                       <SidebarMenuSub>
//                         {category.subcategories.map((sub) => (
//                           <SidebarMenuSubItem key={sub.name}>
//                             <SidebarMenuSubButton asChild>
//                               <Link href={`/problems/category/${category.name.toLowerCase()}/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}>
//                                 <span>{sub.name}</span>
//                                 <Badge variant="outline" className="ml-auto h-4 rounded-sm px-1 text-[10px]">
//                                   {sub.count}
//                                 </Badge>
//                               </Link>
//                             </SidebarMenuSubButton>
//                           </SidebarMenuSubItem>
//                         ))}
//                       </SidebarMenuSub>
//                     </CollapsibleContent>
//                   </SidebarMenuItem>
//                 </Collapsible>
//               ))}
//               <SidebarMenuItem>
//                 <SidebarMenuButton asChild>
//                   <Link href="/problems/all">
//                     <ListChecks className="h-4 w-4" />
//                     <span>All Problems</span>
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//               <SidebarMenuItem>
//                 <SidebarMenuButton asChild>
//                   <Link href="/problems/tags">
//                     <Tag className="h-4 w-4" />
//                     <span>Problem Tags</span>
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
        
//         <SidebarSeparator />
        
//         {/* Learning Paths */}
//         <SidebarGroup>
//           <SidebarGroupLabel>Learning Paths</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {learningPaths.map((path) => (
//                 <SidebarMenuItem key={path.name}>
//                   <SidebarMenuButton asChild>
//                     <Link href={`/learn/${path.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex flex-col gap-1">
//                       <div className="flex w-full items-center">
//                         <BookOpen className="h-4 w-4" />
//                         <span className="ml-2">{path.name}</span>
//                       </div>
//                       <div className="flex w-full items-center gap-2">
//                         <Progress value={path.progress} className="h-1.5" />
//                         <span className="text-xs text-muted-foreground">{path.progress}%</span>
//                       </div>
//                     </Link>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//               <SidebarMenuItem>
//                 <SidebarMenuButton asChild>
//                   <Link href="/learn/explore">
//                     <Compass className="h-4 w-4" />
//                     <span>Explore All Paths</span>
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
        
//         <SidebarSeparator />
        
//         {/* Contests */}
//         <SidebarGroup>
//           <SidebarGroupLabel>Contests & Challenges</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {contests.map((contest) => (
//                 <SidebarMenuItem key={contest.name}>
//                   <SidebarMenuButton asChild>
//                     <Link href={`/contests/${contest.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex flex-col gap-0.5">
//                       <div className="flex w-full items-center">
//                         {contest.isLive ? (
//                           <Timer className="h-4 w-4 text-red-500" />
//                         ) : (
//                           <Calendar className="h-4 w-4" />
//                         )}
//                         <span className="ml-2">{contest.name}</span>
//                         {contest.isLive && (
//                           <Badge variant="destructive" className="ml-auto h-5 rounded-sm px-1 text-[10px]">LIVE</Badge>
//                         )}
//                       </div>
//                       <span className="text-xs text-muted-foreground">{contest.date}</span>
//                     </Link>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//               <SidebarMenuItem>
//                 <SidebarMenuButton asChild>
//                   <Link href="/contests/calendar">
//                     <Calendar className="h-4 w-4" />
//                     <span>Contest Calendar</span>
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
      
//       <SidebarFooter className="border-t border-border/50">
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton asChild>
//               <Link href="/profile">
//                 <Users className="h-4 w-4" />
//                 <span>Profile</span>
//               </Link>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//           <SidebarMenuItem>
//             <SidebarMenuButton asChild>
//               <Link href="/stats">
//                 <LineChart className="h-4 w-4" />
//                 <span>My Stats</span>
//               </Link>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//           <SidebarMenuItem>
//             <SidebarMenuButton asChild>
//               <Link href="/settings">
//                 <Settings className="h-4 w-4" />
//                 <span>Settings</span>
//               </Link>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarFooter>
      
//       <SidebarRail />
//     </Sidebar>
//   )
// }


"use client"
import Link from "next/link"
import type React from "react"

import { usePathname } from "next/navigation"
import {
  BookOpen,
  Calendar,
  ChevronDown,
  Code,
  CodeSquare,
  Compass,
  Crown,
  FileCode2,
  Flame,
  GraduationCap,
  LayoutDashboard,
  LineChart,
  ListChecks,
  MessageSquare,
  Settings,
  Tag,
  Timer,
  Trophy,
  Users,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"

// Sample user data
const userData = {
  name: "Alex Chen",
  username: "alexc",
  avatar: "/placeholder.svg?height=32&width=32",
  rank: 1542,
  streak: 7,
  solved: 127,
  // total: 1500,
  level: "Intermediate",
}

// Sample problem categories
const problemCategories = [
  {
    name: "Data Structures",
    count: 152,
    subcategories: [
      { name: "Arrays", count: 42 },
      { name: "Linked Lists", count: 23 },
      { name: "Trees", count: 35 },
      { name: "Graphs", count: 28 },
      { name: "Hash Tables", count: 24 },
    ],
  },
  {
    name: "Algorithms",
    count: 248,
    subcategories: [
      { name: "Sorting", count: 18 },
      { name: "Searching", count: 15 },
      { name: "Dynamic Programming", count: 65 },
      { name: "Greedy", count: 32 },
      { name: "Backtracking", count: 27 },
    ],
  },
  {
    name: "System Design",
    count: 45,
    subcategories: [
      { name: "Distributed Systems", count: 12 },
      { name: "Database Design", count: 15 },
      { name: "API Design", count: 18 },
    ],
  },
]

// Sample learning paths
const learningPaths = [
  { name: "Coding Interview Prep", progress: 65 },
  { name: "Algorithms Mastery", progress: 42 },
  { name: "System Design Fundamentals", progress: 28 },
]

// Sample contests
const contests = [
  { name: "Weekly Challenge #42", date: "Starts in 2 days", isLive: false },
  { name: "Daily Byte", date: "Live Now", isLive: true },
  { name: "Company Challenge: Google", date: "In 5 days", isLive: false },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar
      className="border-r border-border/50 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 "
      style={{ "--sidebar-background": "#0a0c14" } as React.CSSProperties}
    >
      <SidebarHeader className="border-b border-border/50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Code className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-green-400"> Rank</span>
                  <span className="text-xs text-muted-foreground">Coding Platform</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* User Profile Summary */}
        <SidebarGroup>
          <div className="flex items-center gap-3 px-2 py-2">
            <Avatar className="h-10 w-10 border border-border">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">{userData.name}</span>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Trophy className="h-3 w-3 text-yellow-500" />
                <span>Rank #{userData.rank}</span>
                <span className="text-xs">•</span>
                <Flame className="h-3 w-3 text-orange-500" />
                <span>{userData.streak} day streak</span>
              </div>
            </div>
          </div>
          <div className="px-3 py-1">
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Problems Solved</span>
              <span className="font-medium">
                {userData.solved}
              </span>
            </div>
            {/* <Progress value={(userData.solved / userData.total) * 100} className="h-1.5" /> */}
          </div>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                <Link href="/user-dashboard">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/problems"}>
                <Link href="/problems">
                  <FileCode2 className="h-4 w-4" />
                  <span>Problems</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/contests"}>
                <Link href="/contests">
                  <Trophy className="h-4 w-4" />
                  <span>Contests</span>
                  {contests.some((c) => c.isLive) && (
                    <Badge variant="destructive" className="ml-auto h-5 rounded-sm px-1 text-[10px]">
                      LIVE
                    </Badge>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/leaderboard"}>
                <Link href="/leaderboard">
                  <Crown className="h-4 w-4" />
                  <span>Leaderboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/learn"}>
                <Link href="/learn">
                  <Users className="h-4 w-4" />
                  <span>Friends</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/discuss"}>
                <Link href="/discuss">
                  <MessageSquare className="h-4 w-4" />
                  <span>Message</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Problem Categories */}
        <SidebarGroup>
          <SidebarGroupLabel>Problem Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {problemCategories.map((category) => (
                <Collapsible key={category.name} className="w-full">
                  <SidebarMenuItem>
                    <CollapsibleTrigger className="flex w-full">
                      <SidebarMenuButton className="flex-1">
                        <CodeSquare className="h-4 w-4" />
                        <span>{category.name}</span>
                        <Badge variant="outline" className="ml-auto h-5 rounded-sm px-1 text-[10px]">
                          {category.count}
                        </Badge>
                        <ChevronDown className="ml-1 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {category.subcategories.map((sub) => (
                          <SidebarMenuSubItem key={sub.name}>
                            <SidebarMenuSubButton asChild>
                              <Link
                                href={`/problems/category/${category.name.toLowerCase()}/${sub.name.toLowerCase().replace(/\s+/g, "-")}`}
                              >
                                <span>{sub.name}</span>
                                <Badge variant="outline" className="ml-auto h-4 rounded-sm px-1 text-[10px]">
                                  {sub.count}
                                </Badge>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/problems/all">
                    <ListChecks className="h-4 w-4" />
                    <span>All Problems</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/problems/tags">
                    <Tag className="h-4 w-4" />
                    <span>Problem Tags</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Learning Paths */}
        <SidebarGroup>
          <SidebarGroupLabel>Learning Paths</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {learningPaths.map((path) => (
                <SidebarMenuItem key={path.name}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={`/learn/${path.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex flex-col gap-1"
                    >
                      <div className="flex w-full items-center">
                        <BookOpen className="h-4 w-4" />
                        <span className="ml-2">{path.name}</span>
                      </div>
                      <div className="flex w-full items-center gap-2">
                        <Progress value={path.progress} className="h-1.5" />
                        <span className="text-xs text-muted-foreground">{path.progress}%</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/learn/explore">
                    <Compass className="h-4 w-4" />
                    <span>Explore All Paths</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Contests */}
        <SidebarGroup>
          <SidebarGroupLabel>Contests & Challenges</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contests.map((contest) => (
                <SidebarMenuItem key={contest.name}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={`/contests/${contest.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex flex-col gap-0.5"
                    >
                      <div className="flex w-full items-center">
                        {contest.isLive ? <Timer className="h-4 w-4 text-red-500" /> : <Calendar className="h-4 w-4" />}
                        <span className="ml-2">{contest.name}</span>
                        {contest.isLive && (
                          <Badge variant="destructive" className="ml-auto h-5 rounded-sm px-1 text-[10px]">
                            LIVE
                          </Badge>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">{contest.date}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/contests/calendar">
                    <Calendar className="h-4 w-4" />
                    <span>Contest Calendar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/profile">
                <Users className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/stats">
                <LineChart className="h-4 w-4" />
                <span>My Stats</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

