// import React from 'react'
// import Link from 'next/link'
// import { Code2 } from 'lucide-react'
// const Navbar = () => {
//   return (
//     <div>
//          <nav className="relative z-10 px-6 py-4 flex justify-between items-center">
//         <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
//           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-300">
//             <Code2 className="w-6 h-6 text-black" />
//           </div>
//           CODUTER
//         </Link>
        
//       </nav>

//     </div>
//   )
// }

// export default Navbar
"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Code2, Users, Mail, Phone, X, Instagram, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const contactMenuRef = useRef<HTMLDivElement>(null);
  const contactButtonRef = useRef<HTMLButtonElement>(null);

  const toggleContactMenu = () => {

    setShowContactMenu(!showContactMenu);
  };

  // Handle clicks outside the contact menu
  useEffect(() => {
    const handleClickOutside = (event :any) => {
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
    <div>
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center bg-gray-900">
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
        <span className="bg-clip-text font-mono text-transparent text-white">
          CODUTER
        </span>
      </Link>
        
        <div className="flex items-center gap-4">
          {/* <Link 
            href="/about" 
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-green-700 hover:bg-green-900/20 transition-all duration-300 text-lg font-mono"
          >
            <Users className="w-5 h-5 text-green-400" />
            <span>About Us</span>
          </Link> */}
          
          {/* Contact Button */}
          {/* <div className="relative">
            <button 
              ref={contactButtonRef}
              onClick={toggleContactMenu}
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                showContactMenu 
                  ? 'bg-red-500/20 border-red-500' 
                  : 'bg-green-500/20 border-green-500 hover:bg-green-500/30'
              }`}
              aria-label="Contact Us"
            >
              {showContactMenu ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Mail className="w-5 h-5 text-white" />
              )}
            </button> */}
            
            {/* Contact Menu */}
            {/* {showContactMenu && (
              <div 
                ref={contactMenuRef}
                className="absolute right-0 mt-2 w-56 rounded-md bg-gray-900/90 border border-green-500/30 shadow-lg shadow-green-900/20 backdrop-blur-sm p-2 z-20 transition-all duration-300 animate-in fade-in slide-in-from-top-5"
              >
                <div className="py-1 space-y-1">
                  <a href="mailto:contact@coduter.com" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-900/30 transition-colors text-sm">
                    <Mail className="w-4 h-4 text-green-400" />
                    <span>contact@coduter.com</span>
                  </a>
                  <a href="https://instagram.com/coduter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-900/30 transition-colors text-sm">
                    <Instagram className="w-4 h-4 text-green-400" />
                    <span>@coduter</span>
                  </a>
                  <a href="https://twitter.com/coduter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-900/30 transition-colors text-sm">
                    <Twitter className="w-4 h-4 text-green-400" />
                    <span>@coduter</span>
                  </a>
                  <a href="tel:+18014289003" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-900/30 transition-colors text-sm">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span>+1 (801) 428-9003</span>
                  </a>
                </div>
              </div>
            )} */}
          {/* </div> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar