import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      {/* Container */}
      <div className="grid grid-cols-2 h-[100vh] font-quicksand">
        {/* Left */}
        <div className="w-full flex justify-center">
          <img src="images/register-illustration.svg" alt="" className="w-3/4" />
        </div>
        {/* Left End */}

        {/* Right */}
        <div className="flex flex-col justify-center w-full px-28 bg-white text-black border">
          <div className="flex flex-col gap-3 items-center">
            <img src="icons/binar_icon.png" alt="" width="50px" />
            <h1 className="font-bold text-4xl">Create Account</h1>
          </div>
          {/* Form */}
          <form action="" className="flex flex-col mt-8 gap-3">
            <div className="flex gap-3">
              {/* First Name Input */}
              <input
                type="text"
                name=""
                id=""
                placeholder="First Name"
                className="w-full border border-slate-300 py-[10px] px-[15px] rounded-[5px] outline-none transition duration-200 placeholder:text-[#263238] placeholder:text-base placeholder:font-medium placeholder:transition placeholder:duration-500 focus:placeholder:-translate-x-48 focus:border-[#263238] invalid:focus:border-red-600"
              />
              {/* First Name Input End */}

              {/* Last Name Input */}
              <input
                type="text"
                name=""
                id=""
                placeholder="Last Name"
                className="w-full border border-slate-300 py-[10px] px-[15px] rounded-[5px] outline-none transition duration-200 placeholder:text-[#263238] placeholder:text-base placeholder:font-medium placeholder:transition placeholder:duration-500 focus:placeholder:-translate-x-48 focus:border-[#263238] invalid:focus:border-red-600"
              />
              {/* Last Name Input End */}
            </div>

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

            {/* Password Confirm Input */}
            <input
              type="password"
              name=""
              id=""
              placeholder="Password Confirmation"
              className="w-full border bg-gray-100 border-slate-300 py-[10px] px-[15px] rounded-[5px] outline-none transition duration-200 placeholder:text-[#263238] placeholder:text-base placeholder:font-medium placeholder:transition placeholder:duration-500 focus:placeholder:-translate-x-48 focus:border-[#263238] invalid:focus:border-red-600"
            />
            {/* Password Confirm Input End */}

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#121a1f] py-3 rounded-[5px] text-white">
              Sign Up
            </button>
            {/* Submit Button End */}
          </form>
          {/* Form  End*/}
          <div className="flex gap-2 mt-4">
            <p>Already have an account?</p>
            <Link to="/login" className="text-blue-600 font-semibold underline">
              Sign In
            </Link>
          </div>
        </div>
        {/* Right End */}
      </div>
      {/* Container End */}
    </div>
  );
}

export default Register;
