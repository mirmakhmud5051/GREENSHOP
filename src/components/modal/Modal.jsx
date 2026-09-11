import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function Modal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black/50 flex justify-center items-center z-9999">
      <div className="bg-[#FFFFFF] p-[40px] rounded-[6px] text-center shadow-xl relative w-[500px] max-w-[95%]">
        <Link to={"/"}>
          
          <button
            onClick={onClose}
            className="absolute top-[15px] right-[20px] bg-none border-none text-[22px] cursor-pointer text-[#46A358] font-light"
          >
            ✕
          </button>
        </Link>
        <div className="flex justify-center gap-[15px] mb-[15px] text-[20px] font-medium text-[#3D3D3D]">
          <span
            className={`cursor-pointer pb-[5px] ${isLogin ? "text-[#46A358] border-b-[3px] border-[#46A358] font-bold" : "text-[#3D3D3D]"}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
          <span className="text-[#EBEBEB]">|</span>
          <span
            className={`cursor-pointer pb-[5px] ${!isLogin ? "text-[#46A358] border-b-[3px] border-[#46A358] font-bold" : "text-[#3D3D3D]"}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </span>
        </div>

        <p className="text-[14px] text-[#727272] text-left mb-[15px]">
          {isLogin
            ? "Enter your username and password to login."
            : "Enter your email and password to register."}
        </p>

        <form className="flex flex-col gap-[16px]">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="w-full h-[40px] border border-[#EAEAEA] rounded-[5px] px-[15px] text-[14px] outline-none focus:border-[#46A358] text-[#A5A5A5]"
            />
          )}

          <input
            type="email"
            placeholder={
              isLogin ? "altextaeam@gmail.com" : "Enter your email address"
            }
            className="w-full h-[40px] border border-[#EAEAEA] rounded-[5px] px-[15px] text-[14px] outline-none focus:border-[#46A358] text-[#A5A5A5]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-[40px] border border-[#EAEAEA] rounded-[5px] px-[15px] text-[14px] outline-none focus:border-[#46A358] text-[#A5A5A5]"
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-[40px] border border-[#EAEAEA] rounded-[5px] px-[15px] text-[14px] outline-none focus:border-[#46A358] text-[#A5A5A5]"
            />
          )}

          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-[14px] text-[#46A358] ">
                Forgot Password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full h-[45px] bg-[#46A358] text-[#FFFFFF] font-bold rounded-[5px] mt-[10px] transition-all outline-none"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="flex items-center my-[30px]">
          <div className="flex-1 h-[1px] bg-[#EAEAEA]"></div>
          <span className="px-[10px] text-[13px] text-[#727272]">
            {isLogin ? "Or login with" : "Or register with"}
          </span>
          <div className="flex-1 h-[1px] bg-[#EAEAEA]"></div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <button className="w-full h-[40px] border border-[#EAEAEA] rounded-[5px] flex items-center justify-center gap-[10px] text-[13px] font-medium text-[#727272] ">
            <FcGoogle className="text-[18px]" />{" "}
            {isLogin ? "Continue with Google" : "Continue with Google"}
          </button>
          <button className="w-full h-[40px] border border-[#EAEAEA] rounded-[5px] flex items-center justify-center gap-[10px] text-[13px] font-medium text-[#727272] ">
            <FaFacebookF className="text-[16px] text-[#1877F2]" />{" "}
            {isLogin ? "Continue with Facebook" : "Continue with Facebook"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
