import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <img src="" alt="" />
      <h1 className="text-red-800">HeroPlay</h1>
      <Link href="/add" className="border">
        Add a new hero
      </Link>
    </div>
  );
};

Navbar.displayName = "NavbarOne";

export default Navbar;
