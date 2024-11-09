import React from 'react'
import Image from "next/image";
import Logo from '../../public/assets/onelot-logo.webp'
const navLinks = [
    { name: "Home" },
    { name: "Products " },
    { name: "About" },
    { name: "Contact" },
  ];

const Navbar = () => {
  return (
    <nav className="fixed flex w-full dark:border-gray-700 shadow-x2  bg-white items-center justify-between px-2 py-2.5  sm:px-4 sticky top-0 z-10">
      <div className="flex items-center">
        <Image src={Logo} width={120} height={100} alt="Logo" />
        <div className="hidden lg:flex pl-[2rem] gap-x-[2rem] font-medium">
          {navLinks.map((item, index) => (
            <p className=" cursor-pointer hover:text-[#57009C] focus:text-[#57009C]">
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <span className="group items-center justify-center pr-[1rem] text-center font-medium relative focus:z-10 focus:outline-none focus:ring-transparent rounded-lg focus:ring-2 hidden sm:inline  text-gray-700 ">
          Log In
        </span>
        <button
          type="button"
          className="bg-[#57009C]  p-0.5 text-white rounded-[0.5rem] lg:w-fit group items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-[#57009C] border border-transparent focus:ring-transparent dark:enabled:hover:bg-purple-900 dark:focus:ring-purple- rounded-lg focus:ring-2 hidden sm:inline"
        >
          <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
            Inquire Now
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar