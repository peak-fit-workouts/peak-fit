import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import NavItem from "./NavItem";

const MainNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-between max-w-full mx-auto p-4 bg-gradient-to-b from-bgColor-light via-bgColor to-bgColor-dark backdrop-blur-sm shadow-md items-center rounded-b-xl relative z-50">
        <div className="flex items-center space-x-2">
          {/* SVG Икона - Сърце */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 text-red-500"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C15.46 5.99 16.96 5 18.5 5 20.5 5 22 6.5 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {/* Текст */}
          <div className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Peak Fit
          </div>
        </div>
        <ul className="flex space-x-6">
          <NavItem href="/" label="Home" />
          <NavItem href="/create" label="Create Training" />
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-gradient-to-b from-bgColor-light via-bgColor to-bgColor-dark p-2 shadow-sm backdrop-blur-sm rounded-b-xl relative z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* SVG Икона - Сърце */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-red-500"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C15.46 5.99 16.96 5 18.5 5 20.5 5 22 6.5 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {/* Текст */}
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Menu
            </div>
          </div>
          <button
            className="text-slate-600 focus:outline-none"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        {toggleMenu && (
          <ul className="flex flex-col space-y-3 mt-4">
            <NavItem href="/" label="Home" />
            <NavItem href="/create" label="Create Training" />
          </ul>
        )}
      </nav>
    </>
  );
};

export default MainNavigation;
