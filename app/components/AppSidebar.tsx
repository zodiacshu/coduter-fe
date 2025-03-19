"use client"
import Link from "next/link"
import type React from "react"

import { usePathname } from "next/navigation"
import {
  Calendar,
  ChevronDown,
  Code,
  CodeSquare,
  Compass,
  Crown,
  FileCode2,
  Flame,
  LayoutDashboard,
  LineChart,
  ListChecks,
  MessageSquare,
  PlayCircle,
  Settings,
  Tag,
  Timer,
  Trophy,
  Users,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  name: "Coduter Dummy",
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
            {/* Using asChild to avoid nesting buttons */}
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
        <SidebarGroup className="mt-6">
          <div className="flex items-center gap-3 px-4 py-3">
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
          </div>
          
          {/* Updated Start Challenge Button with blue and purple gradient */}
          <div className="px-3 py-2">
            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
            >
              <Link href="/user-challenge/setup" className="flex items-center justify-center gap-2">
                <PlayCircle className="h-4 w-4" />
                <span>Start Challenge</span>
              </Link>
            </Button>
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
                    {/* Fix: Use an appropriate element instead of button inside CollapsibleTrigger */}
                    <CollapsibleTrigger asChild>
                      <div className="flex w-full">
                        <SidebarMenuButton className="flex-1">
                          <CodeSquare className="h-4 w-4" />
                          <span>{category.name}</span>
                          <Badge variant="outline" className="ml-auto h-5 rounded-sm px-1 text-[10px]">
                            {category.count}
                          </Badge>
                          <ChevronDown className="ml-1 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </div>
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
              <Link href="/user-stats">
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