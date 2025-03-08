"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Code2, Users, Mail, Phone, X, Instagram, Twitter, Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const contactMenuRef = useRef<HTMLDivElement>(null);
  const contactButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const showSidebarTrigger = pathname === "/user-challenge/setup" || pathname === "/user-dashboard";

  const toggleContactMenu = () => {
    setShowContactMenu(!showContactMenu);
  };

  // Handle clicks outside the contact menu
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        showContactMenu && 
        contactMenuRef.current && 
        !contactMenuRef.current.contains(event.target) 
      ) {
        setShowContactMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showContactMenu]);

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

  return (
    <nav className="sticky top-0 z-50 px-6 py-4 flex justify-between items-center bg-gray-900 border-b border-gray-800">
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
            <Code2 className="w-6 h-6 text-black" />
          </motion.div>
        </motion.div>
        <span className="bg-clip-text font-mono text-white">
          CODUTER
        </span>
      </Link>
      
      <div className="flex items-center gap-4">
        {/* Use a custom attribute to identify this as a sidebar toggle */}
        {showSidebarTrigger && (
          <button 
            data-sidebar-toggle="true"
            className="border border-gray-700 rounded-md p-1 hover:bg-gray-800 transition-colors"
          >
            <Menu className="text-white h-7 w-7" />
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar