import React from "react";

const Header = () => {
  return (
    <header className="w-full h-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        <h1 className="text-white text-2xl font-bold">
          G
        </h1>

        <nav>
          <ul className="flex items-center gap-6">
            <li className="text-white hover:text-gray-400 cursor-pointer transition-colors">
              Home
            </li>
            <li className="text-white hover:text-gray-400 cursor-pointer transition-colors">
              About
            </li>
            <li className="text-white hover:text-gray-400 cursor-pointer transition-colors">
              Projects
            </li>
            <li className="text-white hover:text-gray-400 cursor-pointer transition-colors">
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
