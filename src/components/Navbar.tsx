import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-center items-center">
      <h1 className="text-red-800">HeroPlay</h1>
      <Link href="/add" className="border">
        Add a new hero
      </Link>
    </nav>
  );
};

Navbar.displayName = "NavbarOne";

export default Navbar;
