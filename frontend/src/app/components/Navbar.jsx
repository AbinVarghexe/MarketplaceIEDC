import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className="p-6 border border-b-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-black font-bold text-xl transition-all duration-300 hover:scale-105">
          <Link href="/">
            LOGO
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-8">
          <Link href="/" className="text-black hover:text-gray-300 inline-flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px]">
           Home
          </Link>
          <Link href="/about" className="text-black hover:text-gray-300 inline-flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px]">

            About
          </Link>
          <Link href="/services" className="text-black hover:text-gray-300 inline-flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px]">

            Services
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-300 inline-flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px]">

            Contact
          </Link>
        </div>
        <div>
          <Link href="/cart" className="text-black hover:text-gray-300 inline-flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px]">
            <AiOutlineShoppingCart size={20} />
            Cart
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
