import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col items-center justify-center mx-auto gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg w-full"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg w-full"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg w-full"
          id="password"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white p-3 rounded-lg mt-3 uppercase hover:opacity-95 disabled:opacity-80 w-full"
        >
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-2">
        <p>Have an acount?</p>
        <Link to={"/signin"}>
          <span className="text-orange-500 hover:underline">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
