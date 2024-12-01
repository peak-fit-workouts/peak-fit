import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import NavItem from "./NavItem";

const MainNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="hidden md:flex justify-between max-w-full mx-auto pt-1 relative z-50">
        <div className="w-10/12 m-auto flex justify-between items-center bg-bgColor px-6 py-3 rounded-lg shadow-lg">
          <div className="text-base font-semibold">
            {/* <img className="h-12 w-auto -my-2" src={logo.src} /> */}
          </div>
          <ul className="flex flex-1 justify-center items-center gap-2">
            <NavItem href="/" label="Home" />
            <NavItem href="/create" label="Create Training" />
          </ul>
        </div>
      </nav>

      <nav className="md:hidden bg-black p-2">
        <div className="flex justify-between items-center">
          <div className="text-base font-semibold">
            {/* <img className="h-10 w-auto" src={logo.src} alt="Logo" /> */}
          </div>
          <button
            className="text-gray-300 focus:outline-none"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            {/* Burger icon */}
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>
        {toggleMenu && (
          <ul className="flex flex-col items-center justify-center text-center gap-3 mt-4">
            <li className="list-none">
              <NavItem href="/" label="Home" />
            </li>
            <li className="list-none">
              <NavItem href="/create" label="Create Training" />
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default MainNavigation;
