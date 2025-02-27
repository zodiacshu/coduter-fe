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
        <div className="flex gap-4">
            <Link
            href="/login"
            className="px-6 py-2 rounded-md border border-red-500 hover:bg-orange-600 transition-colors text-white hover:text-black"
            >
            Login
            </Link>
          <Link
            href="/signup"
            className="px-6 py-2 rounded-md bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-colors"
          >
            Signup
          </Link>
        </div>
      </nav>

    </div>
  )
}

export default Navbar