import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20">
        <h1 className=" pt-10 text-2xl font-black leading-4 sm:text-3xl xl:text-5xl">
          Login
        </h1>
      </div>
      <div className=" pb-60">
        <div className="flex w-96 flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto">
          <div>
            <div className="relative mt-2 w-full">
              <input
                type="text"
                id="email"
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=""
              />
              <label
                for="email"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Enter Your Email
              </label>
            </div>
          </div>

          <div>
            <div className="relative mt-2 w-full">
              <input
                type="text"
                id="password"
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                for="password"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                {" "}
                Enter Your Password
              </label>
            </div>
          </div>

          <button className="rounded-lg bg-blue-600 py-3 font-bold text-white">
            Login
          </button>
          <div className="mt-6 text-center ">
            <Link
              to="/register"
              className="text-sm text-blue-500 hover:underline dark:text-blue-400"
            >
              Don't have an account? Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
