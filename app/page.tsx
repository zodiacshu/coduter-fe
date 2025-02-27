"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Code2, UserPlus } from "lucide-react"
import { useState,useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "./components/Navbar"

export default function LandingPage() {
  const [name, setName] = useState("")
  const [codingType, setCodingType] = useState("")
  const [lines, setLines] = useState<{ y: number; rotate: number }[]>([]);
  

  useEffect(() => {
    setLines(
      [...Array(15)].map(() => ({
        y: Math.random() * 1000,
        rotate: Math.random() * 45,
      }))
    );
  }, []);

  const handleStartCoding = () => {
    if (!name) {
      return
    }
    // Handle the start coding action
    console.log("Starting coding with:", { name, codingType })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className={`absolute h-1 w-20 rounded-full ${
              ["bg-purple-500", "bg-orange-500", "bg-green-500", "bg-blue-500", "bg-red-500"][i % 5]
            }`}
            initial={{
              x: -100,
              y: Math.random() * 1000,
              rotate: Math.random() * 45,
            }}
            animate={{
              x: ["100vw", "-100px"],
              y: [Math.random() * 1000, Math.random() * 1000],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      
<Navbar/>
      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
            <motion.div
            className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-red-500 to-orange-500 mb-8 mx-auto relative"
            animate={{
              // rotate: 360,
              scale: [1, 1.05, 1],
              background: [
              "linear-gradient(to right, #ff0000, #ff7f00)",
              "linear-gradient(to right, #ff7f00, #ffff00)",
              "linear-gradient(to right, #ffff00, #00ff00)",
              "linear-gradient(to right, #00ff00, #0000ff)",
              "linear-gradient(to right, #0000ff, #4b0082)",
              "linear-gradient(to right, #4b0082, #8b00ff)",
              "linear-gradient(to right, #8b00ff, #ff0000)",
              ],
            }}
            transition={{
              rotate: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              },
              scale: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              },
              background: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              },
            }}
            >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
              animate={{
              opacity: [0.7, 0.3, 0.7],
              }}
              transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              }}
            />
            <motion.div
              className="relative z-10 flex items-center justify-center"
              // animate={{ rotate: -360 }}
              transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              }}
            >
              <Code2 className="w-16 h-16 text-black" />
            </motion.div>
            </motion.div>
          <h1 className="text-4xl h-28 md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Code Together, Grow Together
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Join our community of developers. Learn, collaborate, and build amazing projects together.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
       
<Popover >
            <PopoverTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-4 rounded-md bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-colors text-lg font-semibold flex items-center gap-2"
              >
                <Code2 className="w-5 h-5" />
                Start Coding
              </motion.button>
            </PopoverTrigger>
            <PopoverContent className="w-96 bg-gradient-to-r bg-opacity-10 backdrop-filter backdrop-blur-lg border border-zinc-800 text-white">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none ">Get Started</h4>
                  <p className="text-sm text-muted-foreground text-gray-200">Enter your details to start coding</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-zinc-800 border-zinc-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coding-type">What would you like to code?</Label>
                    <Select value={codingType} onValueChange={setCodingType}>
                      <SelectTrigger className="bg-zinc-800 border-zinc-700">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="mobile">Mobile Development</SelectItem>
                        <SelectItem value="desktop">Desktop Applications</SelectItem>
                        <SelectItem value="game">Game Development</SelectItem>
                        <SelectItem value="ai">AI & Machine Learning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <Button
                      className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                      onClick={handleStartCoding}
                      disabled={!name}
                    >
                      Continue
                    </Button>
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground">or</span>
                    </div>
                    <Link
                      href="/signup"
                      className="block w-full text-center px-4 py-2 rounded-md border border-zinc-700 hover:bg-zinc-800 transition-colors"
                    >
                      Sign Up for Full Access
                    </Link>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-4 rounded-md border border-red-500 hover:bg-red-500/10 transition-colors text-lg font-semibold flex items-center gap-2"
          >
            <UserPlus className="w-5 h-5" />
            Invite Friend
          </motion.button>
        </div>
      </main>
    </div>
  )
}

