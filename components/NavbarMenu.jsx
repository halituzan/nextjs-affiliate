import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const NavbarMenu = () => {
  return (
    <div>
      <div className="flex justify-center flex-row p-3 w-full ">
        <label className="relative block w-5/6 md:w-2/4 mt-16 shadow-md">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <AiOutlineSearch/>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
      </div>
    </div>
  );
};

export default NavbarMenu;
