"use client";
import {
  asyncCurrentUser,
  asyncUserLogin,
  asyncUserRegister,
} from "@/store/Actions/userAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const router = useRouter();
  const registerHandler = (e) => {
    e.preventDefault();
    // var re = /\S+@\S+\.\S+/;
    // if (!re.test(email)) {
    //   alert("enter valid email !");
    //   return;
    // }
    console.log(name);
    const newUser = {
      name,
      email,
      contact,
      password,
    };
    dispatch(asyncUserRegister(newUser));
  };
  useEffect(() => {
    if (isAuthenticated) router.push("/auth");
  }, [isAuthenticated]);

  return (
    <form onSubmit={registerHandler}>
      <div className="h-screen w-full text-[#ffff] bg-black">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl font-thin mb-4">Register your account</h1>
          <input
            className="bg-black border-[1px] border-[#dadada] px-[2vh] py-[1vh] w-[90%] mb-[1.5vh]"
            type="text"
            onChange={(e) => setname(e.target.value)}
            placeholder="Name"
          />
          <input
            className="bg-black border-[1px] border-[#dadada] px-[2vh] py-[1vh] w-[90%] mb-[1.5vh]"
            type="text"
            onChange={(e) => setcontact(e.target.value)}
            placeholder="Contact"
          />
          <input
            className="bg-black border-[1px] border-[#dadada] px-[2vh] py-[1vh] w-[90%] mb-[1.5vh]"
            type="text"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="bg-black border-[1px] border-[#dadada] px-[2vh] py-[1vh] w-[90%] mb-[1.5vh]"
            type="text"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
          />
          <div className="w-full flex flex-col items-center justify-center">
            <button className="mt-[2vh] px-[2vh] py-[1vh] rounded w-[50%] bg-[#1ED760] text-sm text-[#fff]">
              submit
            </button>
            <p className="mt-[3vh]">
              already have a account?{" "}
              <Link className="text-indigo-600" href={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default page;
