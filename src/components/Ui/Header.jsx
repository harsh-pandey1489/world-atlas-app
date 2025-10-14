import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { GiWorld } from "react-icons/gi";

const Header = () => {
    const [open,setOpen]=useState(false);
  return (
   <nav className='text-white w-full h-[90px] grid grid-cols-2  bg-gray-900 navbar'>
     <div className='flex justify-evenly items-center '>
      <div className='flex gap-2.5'>
        <h1 className=' font-bold text-4xl animate-bounce '>WorldAtlas</h1>
         <div className='text-3xl'> <GiWorld /></div>
      </div>
        
     </div>

     <ul className='hidden md:flex  mr-2.5 items-center justify-evenly font-medium text-[1.2rem]'>
       <NavLink className='hover:text-blue-400 transition-colors' to='/'><li>Home</li></NavLink> 
         <NavLink className='hover:text-blue-400 transition-colors'  to='/country'><li>Country</li></NavLink>
           <NavLink className='hover:text-blue-400 transition-colors'  to='/about'><li>About</li></NavLink>
             <NavLink className='hover:text-blue-400 transition-colors'  to='/contact'><li>Contact</li></NavLink>
     </ul>
   
      {/* Hamburger Button */}
      <button
        className="md:hidden text-3xl z-50 absolute right-5 top-7 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? "" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[260px] bg-gray-800 bg-opacity-95 
        shadow-xl transform transition-transform duration-500 ease-in-out z-40
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="px-6 py-5 border-b border-gray-700 flex justify-between items-center">
          <h2 className=" flex text-2xl font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-2xl cursor-pointer">
            ✖
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-center space-y-4 px-6 py-8 text-lg font-medium">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400 transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/country"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400 transition-colors"
          >
            Country
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400 transition-colors"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </NavLink>
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}

   </nav>
  )
}

export default Header
