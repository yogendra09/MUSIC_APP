"use client";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { LuListMusic } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
const Nav = () => {
  return (
    <div className="h-[8vh] w-full bg-black flex items-center  justify-between px-10">
      {[
        {
          name: "Home",
          icon: <IoMdHome className="text-3xl" />,
          redirect: "/auth",
        },
        {
          name: "Search",
          icon: <FiSearch className="text-3xl" />,
          redirect: "/auth/search",
        },
        {
          name: "Your Library",
          icon: <LuListMusic className="text-3xl" />,
          redirect: "/auth/library",
        },
      ].map((obj, index) => {
        return (
          <div key={index} className="h-fit w-fit flex-col gap-[10px]">
            <Link href={obj.redirect}>
              <div className="flex items-center justify-center h-fit ">
                {obj.icon}
              </div>
            </Link>
            <h6 className="text-xs">{obj.name}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
