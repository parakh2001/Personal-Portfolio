"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from "./NavLink";
import { Bars3Icon,XMarkIcon } from '@heroicons/react/16/solid';
const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>LOGO</Link>
            <button 
              className='md:hidden text-white' 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              ☰
            </button>
            <div className={`menu ${menuOpen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
                <ul className='flex flex-col md:flex-row p-4 md:p-0 md:space-x-8'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  );
}
export default Navbar;