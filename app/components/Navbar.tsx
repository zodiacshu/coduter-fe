import React from 'react'
import Link from 'next/link'
import { Code2 } from 'lucide-react'
const Navbar = () => {
  return (
    <div>
         <nav className="relative z-10 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500">
            <Code2 className="w-6 h-6 text-black" />
          </div>
          CODUTER
        </Link>
        
      </nav>

    </div>
  )
}

export default Navbar