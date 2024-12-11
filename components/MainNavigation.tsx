import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import NavItem from "./NavItem";

const MainNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-between max-w-full mx-auto p-4 bg-white/80 backdrop-blur-sm shadow-md items-center rounded-b-xl relative z-50">
        <div className="text-lg font-bold text-slate-800">My Trainings</div>
        <ul className="flex space-x-6">
          <NavItem href="/" label="Home" />
          <NavItem href="/create" label="Create Training" />
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white/90 p-2 shadow-sm backdrop-blur-sm rounded-b-xl relative z-50">
        <div className="flex justify-between items-center">
          <div className="text-base font-bold text-slate-800">Menu</div>
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
