import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  useEffect(() => {
    if (userInfo) {
      navigate("/signin");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(signup(username, email, password));

    // Redirect to sign-in page after successful signup
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <div className="mb-3">
        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
      </div>
      <form
        className="flex flex-col items-center justify-center mx-auto gap-4"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg w-full"
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-orange-500 text-white p-3 rounded-lg mt-3 uppercase hover:opacity-95 disabled:opacity-80 w-full"
        >
          {loading ? <LoadingBox /> : "Sign Up"}
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
