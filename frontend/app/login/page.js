"use client";
import { asyncCurrentUser, asyncUserLogin } from "@/store/Actions/userAction";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    // var re = /\S+@\S+\.\S+/;
    // if (!re.test(email)) {
    //   alert("enter valid email !");
    //   return;
    // }
    dispatch(
      asyncUserLogin({
        email,
        password,
      })
    );
    dispatch(asyncCurrentUser());

  };

  useEffect(() => {
    console.log(isAuthenticated);
    dispatch(asyncCurrentUser());
    if (isAuthenticated) {
      router.push("/auth/profile");
    }
  }, [isAuthenticated]);

  return (
    <>
    <form onSubmit={loginHandler}>
    <div className="h-screen w-full text-[#ffff] bg-black">
     <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-2xl font-thin mb-4">Login your account</h1>
      <input
        className="bg-black border-[1px] border-[#dadada] px-[2vh] py-[1vh] w-[90%] mb-[1.5vh]"
        type="text"
        onChange={(e) => setemail(e.target.value)}
        placeholder="email"
      />
      <input
        className="bg-black border-[1px] border-[#dadada] px-[2vh] py-[1vh] w-[90%] mb-[1.5vh]"
        type="text"
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />
       <div className="w-full flex flex-col items-center justify-center">
        <button className="mt-[2vh] px-[2vh] py-[1vh] rounded w-[50%] bg-[#1ED760] text-sm text-[#fff]">
          submit
        </button>
        <p className="mt-[3vh]">
          Don't have a account? <Link className="text-indigo-600" href={"/register"}>Register</Link>
        </p>
      </div>
     </div>
     
    </div>
    </form>
    </>
  );
};

export default page;
