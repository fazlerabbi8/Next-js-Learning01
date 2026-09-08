import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between px-5 py-5 border-b-2 border-gray-300">
        <h3 className="text-2xl font-bold">Enginner-story</h3>
        <nav className="space-x-3">
          <Link href={"/about/contact"}>Contact</Link>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
