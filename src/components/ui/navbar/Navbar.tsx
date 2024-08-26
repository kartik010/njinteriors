'use client'
import React from 'react';
import './styles.css';
import Nav from './hamburger';
import Link from 'next/link';
import Image from 'next/image';
import navIcon from '@/components/images/nav-icon.webp';

const Navbar = () => {
  return (
    <nav className=" p-8 flex justify-between items-center">
      <div className='logo'>
        <Link href="/" className="text-white text-2xl font-bold">
          NJInteriors
        </Link>
      </div>

      {/* Render Nav component */}
      <div className="md:hidden">
        <Nav />
      </div>

      {/* Hide menu items for tablet screens or larger */}
      <div className="hidden md:flex justify-center flex-1 font-light text-lg ">
        <Link href="#home" passHref className="text-white mx-4 xs:text-sm">
          Home
        </Link>
        <Link href="#our-services" passHref className="text-white mx-4">
          Our Services
        </Link>
        <Link href="/#projects" passHref className="text-white mx-4">
          Projects
        </Link>
        <Link href="/#aboutUs" passHref className="text-white mx-4">
          About Us
        </Link>
      </div>

      {/* Hide "Get in Touch" link for tablet screens or larger */}
      <div className="hidden md:block bg-black rounded-full p-2">
        <Link href="/#get-in-touch" passHref className="text-white mx-2 flex items-center justify-center mr-1 font-light text-lg">
          Get in Touch
          <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center ml-2">
            <Image src={navIcon} alt="Navigation Icon" width={16} height={16} />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
