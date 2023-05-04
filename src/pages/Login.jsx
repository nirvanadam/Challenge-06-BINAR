import React from "react";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

function Login() {
  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div>
      {/* Container */}
      <div className="grid grid-cols-2 h-[100vh] font-quicksand">
        {/* Left */}
        <div className="flex flex-col w-full p-28 bg-white text-black border">
          <div className="flex flex-col gap-3 items-center">
            <img src="icons/binar_icon.png" alt="" width="50px" />
            <h1 className="font-bold text-4xl">Welcome Back!</h1>
          </div>
          {/* Form */}
          <form action="" className="flex flex-col mt-8 gap-3">
            {/* Email Input */}
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="w-full border border-slate-300 py-[10px] px-[15px] rounded-[5px] outline-none transition duration-200 placeholder:text-[#263238] placeholder:text-base placeholder:font-medium placeholder:transition placeholder:duration-500 focus:placeholder:-translate-x-48 focus:border-[#263238] invalid:focus:border-red-600"
            />
            {/* Email Input End */}

            {/* Password Input */}
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="w-full border border-slate-300 py-[10px] px-[15px] rounded-[5px] outline-none transition duration-200 placeholder:text-[#263238] placeholder:text-base placeholder:font-medium placeholder:transition placeholder:duration-500 focus:placeholder:-translate-x-48 focus:border-[#263238] invalid:focus:border-red-600"
            />
            {/* Password Input End */}

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#121a1f] py-3 rounded-[5px] text-white">
              Login
            </button>
            {/* Submit Button End */}
          </form>

          <p className="text-center my-3 text-sm font-semibold">Or</p>

          <button onClick={() => loginWithGoogle()}>Sign in with Google 🚀 </button>
          {/* Form  End*/}
          <div className="flex gap-2 mt-4">
            <p>Don't have an account yet?</p>
            <Link to="/register" className="text-blue-600 font-semibold underline">
              Sign Up
            </Link>
          </div>
        </div>
        {/* Left End */}

        {/* Right */}
        <div className="w-full flex justify-center">
          <img src="images/login-illustration.svg" alt="" className="w-3/4" />
        </div>
        {/* Right End */}
      </div>
      {/* Container End */}
    </div>
  );
}

export default Login;
