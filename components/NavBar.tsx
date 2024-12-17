/*
import { fugaz } from "@/libs/fonts";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="flex text-xl justify-between items-center p-5 shadow-sm border-b-[1px]">
      <Link href={"/"}>
        <p className={`textGradient ${fugaz.className}`}>OnTheGo</p>
      </Link>

      <ul className="hidden lg:flex space-x-10">
        <li className="hover:text-blue-600 hover:underline hover:underline-offset-8 duration-200">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-blue-600 hover:underline hover:underline-offset-8 duration-200">
          <Link href={"/hirestory"}>Hire story</Link>
        </li>
        <li className="hover:text-blue-600 hover:underline hover:underline-offset-8 duration-200">
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>

      <UserButton />
    </nav>
  );
}

export default NavBar;
*/

"use client";

import { fugaz } from "@/libs/fonts";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Updated import
import React from "react";

function NavBar() {
  const pathname = usePathname(); // Access the current route

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Hire story", path: "/hirestory" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="flex text-xl justify-between items-center p-5 shadow-sm border-b-[1px]">
      <Link href={"/"}>
        <p className={`textGradient ${fugaz.className}`}>OnTheGo</p>
      </Link>

      <ul className="hidden lg:flex space-x-10">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`duration-200 ${
              pathname === item.path
                ? "text-blue-600 underline underline-offset-8"
                : "hover:text-blue-600 hover:underline hover:underline-offset-8"
            }`}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <UserButton />
    </nav>
  );
}

export default NavBar;
