import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <header className="bg-black shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-gray-100">Bowale</span>
            <span className="text-orange-500">Properties</span>
          </h1>
        </Link>

        <form className="bg-slate-50 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-gray-400" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="text-gray-100 hidden sm:inline hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-gray-100 hidden sm:inline hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-gray-100  hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
