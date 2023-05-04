import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogin from "../components/GoogleLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        email,
        password,
      });

      let config = {
        method: "post",
        url: `${process.env.REACT_APP_API}/v1/auth/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      localStorage.setItem("token", token);

      // navigate("/");

      // Temporary solution
      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

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

          <GoogleLogin></GoogleLogin>
          {/* Form  End*/}
          <div className="flex justify-center gap-2 mt-4">
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
