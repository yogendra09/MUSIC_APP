"use client";
import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <div className="h-[8vh] w-full flex items-center gap-3 px-4 ">
    <Link href={"/auth/profile"}><div className="h-[5vh] w-[5vh] rounded-full bg-lime-300 flex items-center justify-center">
        Y
      </div></Link>
      <div className="h-[4.5vh] w-[7vh] rounded-[50px] bg-green-600 flex items-center justify-center">
        All
      </div>
      {["Music", "Podcast"].map((btn,index) => {
        return (
          <button key={index} className="h-fit bg-slate-600 px-3 py-2 rounded-2xl text-sm">
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default TopNav;
