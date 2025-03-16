"use client"
import React, { useState, useEffect } from 'react'
import { 
  User, 
  Bell, 
  Shield, 
  Eye, 
  Monitor, 
  Moon, 
  Sun, 
  Globe, 
  Code, 
  Save, 
  Key,
  Lock,
  Mail,
  CreditCard,
  Trash2,
  LogOut,
  ArrowLeft,
  Terminal
} from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/app/components/Navbar'
import { signOut } from 'next-auth/react'

const Settings: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  // Active tab state
  const [activeTab, setActiveTab] = useState<string>('account')
  
  // Theme settings
  const [theme, setTheme] = useState<string>('dark')
  
  // Account settings
  const [email, setEmail] = useState<string>('user@example.com')
  const [fullName, setFullName] = useState<string>('John Doe')
  const [username, setUsername] = useState<string>('user_1337')
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true)
  const [challengeAlerts, setChallengeAlerts] = useState<boolean>(true)
  const [friendRequests, setFriendRequests] = useState<boolean>(true)
  const [weeklyDigest, setWeeklyDigest] = useState<boolean>(false)
  
  // Privacy settings
  const [profileVisibility, setProfileVisibility] = useState<string>('public')
  const [showActivity, setShowActivity] = useState<boolean>(true)
  const [allowFriendRequests, setAllowFriendRequests] = useState<boolean>(true)
  
  // Appearance settings
  const [codeTheme, setCodeTheme] = useState<string>('monokai')
  const [fontSize, setFontSize] = useState<string>('medium')
  const [language, setLanguage] = useState<string>('en')
  
  // Function to handle form submission
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock API call to save settings
    console.log('Saving settings...')
    
    // Show success message (in a real app, would be connected to API response)
    alert('Settings saved successfully!')
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
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

  // Load animations
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Matrix-like code rain background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-80"></div>
      
      {/* Terminal grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNTMsIDI1NSwgMTUzLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-30 pointer-events-none"></div>
      
      {/* Glowing horizontal lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
      </div>

      {/* Main content */}
      <main className="relative z-1 flex flex-col pt-6 px-4 md:px-6 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="w-full max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-between items-center">
            <Link href="/user-dashboard" className="flex items-center gap-2 px-4 py-2 bg-gray-900/60 rounded-md border border-green-700 hover:bg-green-900/20 transition-all duration-300 font-mono text-sm w-fit">
              <ArrowLeft className="w-4 h-4 text-green-400" />
              <span>Back to Dashboard</span>
            </Link>
            
            <button 
              onClick={handleSaveSettings}
              className="flex items-center gap-2 px-4 py-2 bg-green-900/60 rounded-md border border-green-500 hover:bg-green-700/50 text-green-300 transition-all duration-300 font-mono text-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <motion.div variants={itemVariants} className="w-full md:w-64 bg-gray-900/80 border border-green-500/20 rounded-xl overflow-hidden shadow-xl">
              <div className="p-4">
                <div className="terminal-header rounded-t-lg bg-gray-800 -mx-4 -mt-4 px-4 pt-2 pb-2 mb-4 border-b border-gray-700">
                  <div className="terminal-controls">
                    <span className="terminal-circle bg-red-500"></span>
                    <span className="terminal-circle bg-yellow-500"></span>
                    <span className="terminal-circle bg-green-500"></span>
                  </div>
                  <div className="terminal-title font-mono text-xs text-gray-300">settings.config</div>
                </div>
                
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('account')}
                    className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${
                      activeTab === 'account' 
                        ? 'bg-green-900/40 text-green-400 border border-green-500/50' 
                        : 'text-gray-300 hover:bg-gray-800/60'
                    }`}
                  >
                    <User className="w-5 h-5 mr-3" />
                    <span className="font-mono">Account</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('notifications')}
                    className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${
                      activeTab === 'notifications' 
                        ? 'bg-blue-900/40 text-blue-400 border border-blue-500/50' 
                        : 'text-gray-300 hover:bg-gray-800/60'
                    }`}
                  >
                    <Bell className="w-5 h-5 mr-3" />
                    <span className="font-mono">Notifications</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('privacy')}
                    className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${
                      activeTab === 'privacy' 
                        ? 'bg-purple-900/40 text-purple-400 border border-purple-500/50' 
                        : 'text-gray-300 hover:bg-gray-800/60'
                    }`}
                  >
                    <Shield className="w-5 h-5 mr-3" />
                    <span className="font-mono">Privacy & Security</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('appearance')}
                    className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${
                      activeTab === 'appearance' 
                        ? 'bg-yellow-900/40 text-yellow-400 border border-yellow-500/50' 
                        : 'text-gray-300 hover:bg-gray-800/60'
                    }`}
                  >
                    <Eye className="w-5 h-5 mr-3" />
                    <span className="font-mono">Appearance</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('billing')}
                    className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${
                      activeTab === 'billing' 
                        ? 'bg-red-900/40 text-red-400 border border-red-500/50' 
                        : 'text-gray-300 hover:bg-gray-800/60'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mr-3" />
                    <span className="font-mono">Billing</span>
                  </button>
                </nav>
                
                <div className="pt-6 mt-6 border-t border-gray-700">
                  <button
                  onClick={() => signOut()}
                    className="flex items-center w-full px-4 py-3 rounded-md text-red-400 hover:bg-red-900/30 transition-colors"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    <span className="font-mono">Logout</span>
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Main Content */}
            <motion.div variants={itemVariants} className="flex-1 bg-gray-900/80 border border-green-500/20 rounded-xl p-6 shadow-xl">
              {/* Account Settings */}
              {activeTab === 'account' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="terminal-header rounded-t-lg bg-gray-800 -mx-6 -mt-6 px-6 pt-2 pb-2 mb-6 border-b border-gray-700">
                    <div className="terminal-controls">
                      <span className="terminal-circle bg-red-500"></span>
                      <span className="terminal-circle bg-yellow-500"></span>
                      <span className="terminal-circle bg-green-500"></span>
                    </div>
                    <div className="terminal-title font-mono text-xs text-gray-300">user_account.config</div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-green-400 font-mono mb-1 flex items-center gap-2">
                      <Terminal className="w-5 h-5" />
                      Account Information
                    </h2>
                    <p className="text-gray-400 text-sm font-mono">Update your account details and personal information</p>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 font-mono mb-1 flex items-center gap-2">
                          <span className="text-green-500">$</span> user.fullName =
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 focus:border-green-500 rounded-md shadow-sm text-white font-mono focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-300 font-mono mb-1 flex items-center gap-2">
                          <span className="text-green-500">$</span> user.username =
                        </label>
                        <input
                          type="text"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 focus:border-green-500 rounded-md shadow-sm text-white font-mono focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                      </div>
                      
                      <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 font-mono mb-1 flex items-center gap-2">
                          <span className="text-green-500">$</span> user.email =
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 focus:border-green-500 rounded-md shadow-sm text-white font-mono focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-blue-400 font-mono mb-4 flex items-center gap-2">
                      <Key className="w-4 h-4" />
                      Password
                    </h3>
                    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 hover:border-blue-500 rounded-md flex items-center shadow-sm transition-colors">
                      <Key className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="font-mono">Change Password</span>
                    </button>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-red-400 font-mono mb-4 flex items-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      Danger Zone
                    </h3>
                    <button className="px-4 py-2 bg-gray-800 hover:bg-red-900/50 text-red-400 border border-gray-700 hover:border-red-500 rounded-md flex items-center shadow-sm transition-colors">
                      <Trash2 className="w-4 h-4 mr-2" />
                      <span className="font-mono">Delete Account</span>
                    </button>
                  </div>
                </motion.div>
              )}
              
              {/* Notification Settings */}
              {activeTab === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="terminal-header rounded-t-lg bg-gray-800 -mx-6 -mt-6 px-6 pt-2 pb-2 mb-6 border-b border-gray-700">
                    <div className="terminal-controls">
                      <span className="terminal-circle bg-red-500"></span>
                      <span className="terminal-circle bg-yellow-500"></span>
                      <span className="terminal-circle bg-green-500"></span>
                    </div>
                    <div className="terminal-title font-mono text-xs text-gray-300">notifications.config</div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-blue-400 font-mono mb-1 flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      Notification Preferences
                    </h2>
                    <p className="text-gray-400 text-sm font-mono">Manage how and when we contact you</p>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="emailNotifications"
                            type="checkbox"
                            checked={emailNotifications}
                            onChange={() => setEmailNotifications(!emailNotifications)}
                            className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="emailNotifications" className="font-medium text-blue-400 font-mono">Email Notifications</label>
                          <p className="text-gray-400 font-mono">Receive email notifications for important updates.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="challengeAlerts"
                            type="checkbox"
                            checked={challengeAlerts}
                            onChange={() => setChallengeAlerts(!challengeAlerts)}
                            className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="challengeAlerts" className="font-medium text-blue-400 font-mono">Challenge Alerts</label>
                          <p className="text-gray-400 font-mono">Get notified about new challenges matching your skill level.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="friendRequests"
                            type="checkbox"
                            checked={friendRequests}
                            onChange={() => setFriendRequests(!friendRequests)}
                            className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="friendRequests" className="font-medium text-blue-400 font-mono">Friend Requests</label>
                          <p className="text-gray-400 font-mono">Receive notifications for friend requests and friend activities.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="weeklyDigest"
                            type="checkbox"
                            checked={weeklyDigest}
                            onChange={() => setWeeklyDigest(!weeklyDigest)}
                            className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="weeklyDigest" className="font-medium text-blue-400 font-mono">Weekly Digest</label>
                          <p className="text-gray-400 font-mono">Get a weekly summary of your progress and platform updates.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Privacy Settings */}
              {activeTab === 'privacy' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="terminal-header rounded-t-lg bg-gray-800 -mx-6 -mt-6 px-6 pt-2 pb-2 mb-6 border-b border-gray-700">
                    <div className="terminal-controls">
                      <span className="terminal-circle bg-red-500"></span>
                      <span className="terminal-circle bg-yellow-500"></span>
                      <span className="terminal-circle bg-green-500"></span>
                    </div>
                    <div className="terminal-title font-mono text-xs text-gray-300">privacy.config</div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-purple-400 font-mono mb-1 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Privacy & Security
                    </h2>
                    <p className="text-gray-400 text-sm font-mono">Manage your privacy settings and account security</p>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-purple-400 font-mono mb-4">Profile Visibility</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          id="profilePublic"
                          type="radio"
                          name="profileVisibility"
                          value="public"
                          checked={profileVisibility === 'public'}
                          onChange={() => setProfileVisibility('public')}
                          className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-600 focus:ring-purple-500 focus:ring-offset-gray-900"
                        />
                        <label htmlFor="profilePublic" className="ml-3 block text-sm font-medium text-gray-300 font-mono">
                          Public <span className="text-gray-500 text-xs font-mono">(Anyone can view your profile)</span>
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="profileFriends"
                          type="radio"
                          name="profileVisibility"
                          value="friends"
                          checked={profileVisibility === 'friends'}
                          onChange={() => setProfileVisibility('friends')}
                          className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-600 focus:ring-purple-500 focus:ring-offset-gray-900"
                        />
                        <label htmlFor="profileFriends" className="ml-3 block text-sm font-medium text-gray-300 font-mono">
                          Friends Only <span className="text-gray-500 text-xs font-mono">(Only friends can view your profile)</span>
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="profilePrivate"
                          type="radio"
                          name="profileVisibility"
                          value="private"
                          checked={profileVisibility === 'private'}
                          onChange={() => setProfileVisibility('private')}
                          className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-600 focus:ring-purple-500 focus:ring-offset-gray-900"
                        />
                        <label htmlFor="profilePrivate" className="ml-3 block text-sm font-medium text-gray-300 font-mono">
                          Private <span className="text-gray-500 text-xs font-mono">(No one can view your profile)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-purple-400 font-mono mb-4">Activity Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="showActivity"
                            type="checkbox"
                            checked={showActivity}
                            onChange={() => setShowActivity(!showActivity)}
                            className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="showActivity" className="font-medium text-purple-400 font-mono">Show Activity Status</label>
                          <p className="text-gray-400 font-mono">Allow others to see when you're online and active.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="allowFriendRequests"
                            type="checkbox"
                            checked={allowFriendRequests}
                            onChange={() => setAllowFriendRequests(!allowFriendRequests)}
                            className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="allowFriendRequests" className="font-medium text-purple-400 font-mono">Allow Friend Requests</label>
                          <p className="text-gray-400 font-mono">Receive connection requests from other users.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-purple-400 font-mono mb-4">Security</h3>
                    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 hover:border-purple-500 rounded-md flex items-center shadow-sm transition-colors">
                      <Lock className="w-4 h-4 mr-2 text-purple-400" />
                      <span className="font-mono">Enable Two-Factor Authentication</span>
                    </button>
                  </div>
                </motion.div>
              )}
              
              {/* Appearance Settings */}
              {activeTab === 'appearance' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="terminal-header rounded-t-lg bg-gray-800 -mx-6 -mt-6 px-6 pt-2 pb-2 mb-6 border-b border-gray-700">
                    <div className="terminal-controls">
                      <span className="terminal-circle bg-red-500"></span>
                      <span className="terminal-circle bg-yellow-500"></span>
                      <span className="terminal-circle bg-green-500"></span>
                    </div>
                    <div className="terminal-title font-mono text-xs text-gray-300">appearance.config</div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-yellow-400 font-mono mb-1 flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      Appearance
                    </h2>
                    <p className="text-gray-400 text-sm font-mono">Customize your visual experience</p>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-yellow-400 font-mono mb-4">Theme</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <button
                        onClick={() => setTheme('light')}
                        className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                          theme === 'light' 
                            ? 'border-yellow-500 bg-yellow-900/50' 
                            : 'border-gray-700 hover:bg-gray-800/70'
                        }`}
                      >
                        <Sun className={`w-6 h-6 mb-2 ${theme === 'light' ? 'text-yellow-400' : 'text-gray-500'}`} />
                        <span className={`text-sm font-mono ${theme === 'light' ? 'font-medium text-yellow-400' : 'text-gray-300'}`}>Light</span>
                      </button>
                      
                      <button
                        onClick={() => setTheme('dark')}
                        className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                          theme === 'dark' 
                            ? 'border-yellow-500 bg-yellow-900/50' 
                            : 'border-gray-700 hover:bg-gray-800/70'
                        }`}
                      >
                        <Moon className={`w-6 h-6 mb-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-gray-500'}`} />
                        <span className={`text-sm font-mono ${theme === 'dark' ? 'font-medium text-yellow-400' : 'text-gray-300'}`}>Dark</span>
                      </button>
                      
                      <button
                        onClick={() => setTheme('system')}
                        className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                          theme === 'system' 
                            ? 'border-yellow-500 bg-yellow-900/50' 
                            : 'border-gray-700 hover:bg-gray-800/70'
                        }`}
                      >
                        <Monitor className={`w-6 h-6 mb-2 ${theme === 'system' ? 'text-yellow-400' : 'text-gray-500'}`} />
                        <span className={`text-sm font-mono ${theme === 'system' ? 'font-medium text-yellow-400' : 'text-gray-300'}`}>System</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-yellow-400 font-mono mb-4">Code Editor Theme</h3>
                    <select
                      value={codeTheme}
                      onChange={(e) => setCodeTheme(e.target.value)}
                      className="block w-full pl-3 pr-10 py-2 text-base bg-gray-800 border border-gray-700 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 rounded-md shadow-sm text-white font-mono"
                    >
                      <option value="monokai">Monokai</option>
                      <option value="github">GitHub</option>
                      <option value="dracula">Dracula</option>
                      <option value="solarized">Solarized</option>
                      <option value="vscode">VS Code</option>
                    </select>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-yellow-400 font-mono mb-4">Font Size</h3>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="fontSize"
                          value="small"
                          checked={fontSize === 'small'}
                          onChange={() => setFontSize('small')}
                          className="h-4 w-4 text-yellow-600 bg-gray-800 border-gray-600 focus:ring-yellow-500 focus:ring-offset-gray-900"
                        />
                        <span className="ml-2 text-sm text-gray-300 font-mono">Small</span>
                      </label>
                      
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="fontSize"
                          value="medium"
                          checked={fontSize === 'medium'}
                          onChange={() => setFontSize('medium')}
                          className="h-4 w-4 text-yellow-600 bg-gray-800 border-gray-600 focus:ring-yellow-500 focus:ring-offset-gray-900"
                        />
                        <span className="ml-2 text-sm text-gray-300 font-mono">Medium</span>
                      </label>
                      
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="fontSize"
                          value="large"
                          checked={fontSize === 'large'}
                          onChange={() => setFontSize('large')}
                          className="h-4 w-4 text-yellow-600 bg-gray-800 border-gray-600 focus:ring-yellow-500 focus:ring-offset-gray-900"
                        />
                        <span className="ml-2 text-sm text-gray-300 font-mono">Large</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-yellow-400 font-mono mb-4">Language</h3>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="block w-full pl-3 pr-10 py-2 text-base bg-gray-800 border border-gray-700 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 rounded-md shadow-sm text-white font-mono"
                    >
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                      <option value="zh">中文</option>
                      <option value="ja">日本語</option>
                    </select>
                  </div>
                </motion.div>
              )}
              
              {/* Billing Settings */}
              {activeTab === 'billing' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="terminal-header rounded-t-lg bg-gray-800 -mx-6 -mt-6 px-6 pt-2 pb-2 mb-6 border-b border-gray-700">
                    <div className="terminal-controls">
                      <span className="terminal-circle bg-red-500"></span>
                      <span className="terminal-circle bg-yellow-500"></span>
                      <span className="terminal-circle bg-green-500"></span>
                    </div>
                    <div className="terminal-title font-mono text-xs text-gray-300">billing.config</div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-red-400 font-mono mb-1 flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Billing & Subscription
                    </h2>
                    <p className="text-gray-400 text-sm font-mono">Manage your subscription and payment details</p>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Terminal className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-base font-medium text-blue-400 font-mono">Free Plan</h3>
                        <p className="mt-1 text-sm text-blue-300 font-mono">You are currently on the Free plan. Upgrade to Pro for more features.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-red-400 font-mono mb-4">Subscription Options</h3>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-700 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:border-green-500/50 hover:bg-green-900/20 cursor-pointer transition-colors">
                        <div>
                          <h4 className="text-base font-medium text-green-400 font-mono">Free Plan</h4>
                          <p className="text-sm text-gray-400 font-mono mt-1">Basic features for casual coders.</p>
                          <ul className="mt-2 text-xs text-gray-400 font-mono space-y-1">
                            <li className="flex items-center">
                              <span className="mr-1.5 text-green-500">$</span> Access to basic challenges
                            </li>
                            <li className="flex items-center">
                              <span className="mr-1.5 text-green-500">$</span> Public leaderboard access
                            </li>
                            <li className="flex items-center">
                              <span className="mr-1.5 text-green-500">$</span> Limited friend connections
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4 sm:mt-0 text-right">
                          <span className="text-lg font-bold text-green-400 font-mono">$0</span>
                          <span className="text-gray-400 text-sm font-mono"> / month</span>
                          <div className="mt-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-green-900/50 text-green-400 border border-green-500/30">
                              Current Plan
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-gray-700 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:border-blue-500/50 hover:bg-blue-900/20 cursor-pointer transition-colors">
                        <div>
                          <h4 className="text-base font-medium text-blue-400 font-mono">Pro Plan</h4>
                          <p className="text-sm text-gray-400 font-mono mt-1">Advanced features for serious competitors.</p>
                          <ul className="mt-2 text-xs text-gray-400 font-mono space-y-1">
                            <li className="flex items-center">
                              <span className="mr-1.5 text-blue-500">$</span> Access to all challenges
                            </li>
                            <li className="flex items-center">
                              <span className="mr-1.5 text-blue-500">$</span> Private leaderboards
                            </li>
                            <li className="flex items-center">
                              <span className="mr-1.5 text-blue-500">$</span> Advanced stats and insights
                            </li>
                            <li className="flex items-center">
                              <span className="mr-1.5 text-blue-500">$</span> Unlimited friend connections
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4 sm:mt-0 text-right">
                          <span className="text-lg font-bold text-blue-400 font-mono">$9.99</span>
                          <span className="text-gray-400 text-sm font-mono"> / month</span>
                          <div className="mt-2">
                            <button className="inline-flex items-center px-3 py-2 border border-blue-500 text-xs font-mono font-medium rounded-md text-blue-400 bg-blue-900/30 hover:bg-blue-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                              Upgrade Now
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-gray-700 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:border-purple-500/50 hover:bg-purple-900/20 cursor-pointer transition-colors">
                        <div>
                          <h4 className="text-base font-medium text-purple-400 font-mono">Team Plan</h4>
                          <p className="text-sm text-gray-400 font-mono mt-1">Collaborative features for teams.</p>
                          <ul className="mt-2 text-xs text-gray-400 font-mono space-y-1">
                            <li className="flex items-center">
                              <span className="mr-1.5 text-purple-500">$</span> All Pro features
                            </li>
                            <li className="flex items-center">
                              <span className="mr-1.5 text-purple-500">$</span> Team challenges and competitions
                            </li>
                            <li className="flex items-center">
                              <span className="mr-1.5 text-purple-500">$</span> Team analytics dashboard
                            </li>
                            <li className="flex items-center">
                              <span className="mr-1.5 text-purple-500">$</span> Admin controls
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4 sm:mt-0 text-right">
                          <span className="text-lg font-bold text-purple-400 font-mono">$29.99</span>
                          <span className="text-gray-400 text-sm font-mono"> / month</span>
                          <div className="mt-2">
                            <button className="inline-flex items-center px-3 py-2 border border-purple-500 text-xs font-mono font-medium rounded-md text-purple-400 bg-purple-900/30 hover:bg-purple-900/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                              Upgrade Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-red-400 font-mono mb-4">Payment Methods</h3>
                    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 hover:border-red-500 rounded-md flex items-center shadow-sm transition-colors">
                      <CreditCard className="w-4 h-4 mr-2 text-red-400" />
                      <span className="font-mono">Add Payment Method</span>
                    </button>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-red-400 font-mono mb-4">Billing History</h3>
                    <div className="text-center text-gray-500 py-8 font-mono">
                      <p>No billing history yet.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* CSS for terminal and other UI elements */}
      <style jsx global>{`
        .terminal-container {
          width: 100%;
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

export default Settings