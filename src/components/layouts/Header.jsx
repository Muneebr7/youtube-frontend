import React, { useEffect, useState } from "react";
import Logo from "../../assets/YoutubeLogo.svg";
import Burger from "../../assets/burgerMenu.svg";
import useStore from "../../Store";

export default function Header() {

const {intializeAuth , user} = useStore();

useEffect(()=>{
    intializeAuth()
},[])

  return (
    <header className="flex justify-between gap-10 p-2 lg:gap-20">
      {/* Logo */}
      <div className="flex items-center gap-2 text-white">
        <img src={Burger} alt="burger menu" className="w-10 p-2 h10" />
        <a href="/">
        <img src={Logo} alt="Logo" className="w-full" /></a>
      </div>

      {/* Search */}

      <div className="relative items-center hidden px-4 rounded-full bg-accent md:flex">
        <input
          type="text"
          placeholder="Search"
          className="px-6 py-1 h-full w-[30rem] text-white rounded-s-full border border-[#262626] bg-accent placeholder:text-[#888888] focus:outline-none left-0"
        />
        <div className=" bg-[#1d1d1d] h-full flex justify-center items-center px-4 rounded-e-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        </div>
        
      </div>

      {/* User Buttons */}
      <div className="flex items-center gap-4 text-white">
        {/* Mobile Burger Menu */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-white md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        {/* Mobile Burger Menu End */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
          />
        </svg>

        {
          !user?.avatar ? <>
              <a href="/login">

              <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>

              </a>
          </>
           :  <>
              <a href="/my-account" className="relative w-8 overflow-hidden border rounded-full border-white/30">
              <img src={user?.avatar} className="object-cover object-top " />
              </a>
           </>}

        
      </div>
    </header>
  );
}
