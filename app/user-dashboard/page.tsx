"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Code2, Users, Mail, Phone, ChevronRight, ChevronLeft, Instagram, Twitter, UserCircle, BarChart2, LogOut, Home } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({
    username: 'User_1337',
    level: 'Level 5 Coder',
    profilePic: '' // Will store the profile picture URL
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const profileButtonRef = useRef<HTMLButtonElement>(null);

  // Check if user is logged in when component mounts
  useEffect(() => {
    // Function to check login status
    const checkLoginStatus = () => {
      if (typeof window !== 'undefined') {
        // Check for challenge preferences (existing check)
        const hasPreferences = localStorage.getItem('challengePreferences');
        // Also check for direct login flag
        const isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        // Set logged in if either condition is true
        setIsLoggedIn(hasPreferences !== null || isUserLoggedIn);
        
        // Get user profile data if available
        const profileData = localStorage.getItem('userProfile');
        if (profileData) {
          try {
            const userData = JSON.parse(profileData);
            setUserProfile(prevProfile => ({
              ...prevProfile,
              ...userData
            }));
          } catch (e) {
            console.error('Error parsing user profile data', e);
          }
        }
      }
    };
    
    // Check immediately when component mounts
    checkLoginStatus();
    
    // Add event listener to window storage event to detect changes
    window.addEventListener('storage', checkLoginStatus);
    
    // Create a custom interval to periodically check (helps with login flow)
    const checkInterval = setInterval(checkLoginStatus, 1000);
    
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
      clearInterval(checkInterval);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (showProfileMenu) setShowProfileMenu(false);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
    // Clear user data and preferences
    if (typeof window !== 'undefined') {
      localStorage.removeItem('challengePreferences');
      localStorage.removeItem('isLoggedIn');
      // Don't remove profile data on logout so it persists between sessions
      // localStorage.removeItem('userProfile');
    }
    setIsLoggedIn(false);
    setShowProfileMenu(false);
    
    // Redirect to home page
    window.location.href = '/';
  };

  // Handle clicks outside the menus
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current && !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
      
      if (
        showProfileMenu && 
        profileMenuRef.current && 
        !profileMenuRef.current.contains(event.target) &&
        profileButtonRef.current && !profileButtonRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, showProfileMenu]);

  // Logo animation variants
  const logoVariants = {
    normal: { 
      scale: 1,
      rotate: 0 
    },
    hovered: { 
      scale: 1.1,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        rotate: {
          duration: 0.6,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.3
        }
      }
    }
  };

  const codeIconVariants = {
    normal: {
      y: 0
    },
    hovered: {
      y: [0, -5, 5, -3, 3, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // Slide menu animation
  const slideMenuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
        staggerChildren: 0.1
      } 
    },
    exit: { 
      x: '100%', 
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut" 
      }
    }
  };

  const menuItemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    }
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-black backdrop-blur-sm shadow-md">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-2xl font-bold group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 shadow-md"
            variants={logoVariants}
            animate={isHovered ? "hovered" : "normal"}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              variants={codeIconVariants}
              animate={isHovered ? "hovered" : "normal"}
            >
              <Code2 className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
          <span className="text-white font-bold">
            CODUTER
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Profile Button - only visible when logged in */}
          {isLoggedIn && (
            <div className="relative">
              <button 
                ref={profileButtonRef}
                onClick={toggleProfileMenu}
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 shadow-lg overflow-hidden ${
                  showProfileMenu 
                    ? 'bg-purple-600 border-2 border-white' 
                    : 'bg-purple-600 hover:bg-purple-500 border-2 border-transparent hover:border-white'
                }`}
                aria-label="Profile"
              >
                {userProfile.profilePic ? (
                  <img 
                    src={userProfile.profilePic} 
                    alt="User Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <UserCircle className="w-5 h-5 text-white" />
                )}
              </button>
              
              {/* Profile Menu */}
              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div 
                    ref={profileMenuRef}
                    className="absolute right-0 mt-2 w-56 rounded-md bg-gray-900/90 border border-purple-500/30 shadow-lg shadow-purple-900/20 backdrop-blur-sm p-2 z-20"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-2 px-4 border-b border-gray-700 mb-2">
                      <div className="font-semibold text-purple-400">{userProfile.username}</div>
                      <div className="text-xs text-gray-400">{userProfile.level}</div>
                    </div>
                    <div className="py-1 space-y-1">
                      <Link href="/user-dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-purple-900/30 transition-colors text-sm">
                        <UserCircle className="w-4 h-4 text-purple-400" />
                        <span>Dashboard</span>
                      </Link>
                      <Link href="/edit-profile" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-purple-900/30 transition-colors text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <span>Edit Profile</span>
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-red-900/30 transition-colors text-sm text-red-400 w-full text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Log Out</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
          
          {/* Menu Toggle Button */}
          <button 
            ref={toggleButtonRef}
            onClick={toggleMenu}
            className={`flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 shadow-lg bg-green-600 hover:bg-green-500 gap-1.5`}

            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}

          >

            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>

            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>

            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Slide-out Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="fixed top-0 right-0 h-screen w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-xl z-40 border-l border-green-500/20 pt-20 overflow-y-auto flex flex-col"
            variants={slideMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Add User Profile at Top */}
            <div className="flex flex-col items-center justify-center mb-6 px-6 py-4">
              <div className="w-20 h-20 rounded-full bg-gray-700 border-2 border-green-400/50 flex items-center justify-center overflow-hidden shadow-lg mb-3">
                {userProfile.profilePic ? (
                  <img 
                    src={userProfile.profilePic} 
                    alt="User Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <UserCircle className="w-16 h-16 text-green-400" />
                )}
              </div>
              <div className="text-center">
                <div className="font-semibold text-white text-lg">{userProfile.username}</div>
                <div className="text-xs text-green-400/80">{userProfile.level}</div>
              </div>
            </div>
            
            <div className="space-y-3 px-4 flex flex-col items-center">
              {/* Navigation Links */}
              <div className="w-full flex flex-col items-center space-y-3">
                {/* Home Link */}
                <motion.div variants={menuItemVariants}>
                  <Link 
                    href="/" 
                    className="flex items-center gap-4 px-6 py-4 rounded-lg bg-gray-800/60 hover:bg-gray-700 transition-all text-white w-72 justify-center shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Home className="w-6 h-6 text-blue-400" />
                    <span className="text-lg font-mono">Home</span>
                  </Link>
                </motion.div>
                
                {/* About Us Link */}
                <motion.div variants={menuItemVariants}>
                  <Link 
                    href="/about-us" 
                    className="flex items-center gap-4 px-6 py-4 rounded-lg bg-gray-800/60 hover:bg-gray-700 transition-all text-white w-72 justify-center shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Users className="w-6 h-6 text-yellow-400" />
                    <span className="text-lg font mono">About Us</span>
                  </Link>
                </motion.div>
                
                {/* Statistics - only visible when logged in */}
                {isLoggedIn && (
                  <motion.div variants={menuItemVariants}>
                    <Link 
                      href="/user-stats" 
                      className="flex items-center gap-4 px-6 py-4 rounded-lg bg-gray-800/60 hover:bg-gray-700 transition-all text-white w-72 justify-center shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <BarChart2 className="w-6 h-6 text-red-400" />
                      <span className="text-lg font-mono">Statistics</span>
                    </Link>
                  </motion.div>
                )}
                
                {/* Dashboard - only visible when logged in */}
                {isLoggedIn && (
                  <motion.div variants={menuItemVariants}>
                    <Link 
                      href="/user-dashboard" 
                      className="flex items-center gap-4 px-6 py-4 rounded-lg bg-gray-800/60 hover:bg-gray-700 transition-all text-white w-72 justify-center shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserCircle className="w-6 h-6 text-purple-400" />
                      <span className="text-lg font-mono">Dashboard</span>
                    </Link>
                  </motion.div>
                )}
                
                {/* Daily Challenge */}
                <motion.div variants={menuItemVariants}>
                  <Link 
                    href="/daily-challenge" 
                    className="flex items-center gap-4 px-6 py-4 rounded-lg bg-gray-800/60 hover:bg-gray-700 transition-all text-white w-72 justify-center shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                    </svg>
                    <span className="text-lg font-mono">Daily Challenge</span>
                  </Link>
                </motion.div>
                
                <div className="my-5 border-b border-green-500/20"></div>
                
                {/* Contact section - Icon only */}
                <motion.div variants={menuItemVariants}>
                  <div className="px-4 py-3 text-center">
                    <h3 className="text-xl font-mono bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-emerald-300 mb-4">Contact Us</h3>
                    
                    <div className="flex justify-center gap-6 mt-4">
                      <a 
                        href="mailto:contact@coduter.com" 
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all shadow-md hover:shadow-lg hover:scale-110"
                        aria-label="Email contact@coduter.com"
                      >
                        <Mail className="w-6 h-6 text-green-400" />
                      </a>
                      <a 
                        href="https://instagram.com/coduter" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all shadow-md hover:shadow-lg hover:scale-110"
                        aria-label="Instagram @coduter"
                      >
                        <Instagram className="w-6 h-6 text-green-400" />
                      </a>
                      <a 
                        href="https://twitter.com/coduter" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all shadow-md hover:shadow-lg hover:scale-110"
                        aria-label="Twitter @coduter"
                      >
                        <Twitter className="w-6 h-6 text-green-400" />
                      </a>
                      <a 
                        href="tel:+18014289003" 
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all shadow-md hover:shadow-lg hover:scale-110"
                        aria-label="Call +1 (801) 428-9003"
                      >
                        <Phone className="w-6 h-6 text-green-400" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Spacer to push logout button down */}
              <div className="flex-grow min-h-[100px]"></div>
              
              {/* Logout Button at Bottom */}
              <motion.div variants={menuItemVariants} className="w-full px-4 pb-10 pt-4">
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-4 px-6 py-4 rounded-lg bg-transparent hover:bg-gray-800/60 transition-all text-red-500 w-72 justify-center mx-auto"
                >
                  <LogOut className="w-6 h-6 text-red-500" />
                  <span className="text-lg font-mono">Logout</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;