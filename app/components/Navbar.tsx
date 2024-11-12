"use client";

import React from 'react'
import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';
import Logo from '../../public/assets/onelot-logo.webp'
import { AiOutlineMenu } from "react-icons/ai";
const navLinks = [
    { name: "Home" },
    { name: "Products " },
    { name: "About" },
    { name: "Contact" },
  ];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className=" fixed flex w-full dark:border-gray-700 shadow-x2  bg-white items-center justify-between px-2 py-2.5  sm:px-4 sticky top-0 z-10">
   <div className="flex items-center">
   <Image src={Logo} width={120} height={100} alt="Logo" />
   <div className="hidden lg:flex pl-[2rem] gap-x-[2rem] font-medium">
    {/* Desktop Menu */}
    <nav className="hidden md:flex space-x-4">
      <Link href="/" className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C]">Home</Link>
      <Link href="/products" className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C]">Products</Link>
      <Link href="/about" className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C]">About</Link>
      <Link href="/contact" className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C]">Contact</Link>
    </nav>
    </div>
   </div>
   <div className="flex items-center gap-x-2">
        <span className="group items-center justify-center pr-[1rem] text-center font-medium relative focus:z-10 focus:outline-none focus:ring-transparent rounded-lg focus:ring-2 hidden sm:inline  text-gray-700 ">
          Log In
        </span>
        <button type="button" className="flex text-white bg-purple-900 border border-transparent rounded-lg w-30 my-4 ">
            <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm"><a href="/contact">View Loans</a></span>
          </button>
    </div>
    
    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <AiOutlineMenu fontSize={"1.7rem"} />
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col pl-3 pr-4 space-y-4 py-2 md:hidden">
        <Link href="/" className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C]" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link href="/products" className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C]" onClick={() => setIsMenuOpen(false)}>Products</Link>
        <Link href="/about" className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C]" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link href="/contact" className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        <div className="md:hidden">
        <a href="/app/login" type="button" className="group relative flex items-stretch justify-start p-0.5 text-start font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none focus:ring-0 focus:ring-transparent rounded-lg w-full text-gray-700">
        <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">Login</span>
        </a>
        <button type="button" className="flex text-white bg-purple-900 border border-transparent rounded-lg w-30 my-4 ">
            <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm"><a href="/contact">View Loans</a></span>
          </button>
      </div>
      </nav>
    )}
  </nav>
  )
}

export default Navbar