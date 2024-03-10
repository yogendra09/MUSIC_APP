"use client"
import PlaylistInputBox from '@/Components/PlaylistInputBox';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoAddSharp } from 'react-icons/io5';

const layout = ({children}) => {
  const [inputBox, setinputBox] = useState(false);
  
  const inputBoxHandler = () => {
    setinputBox(true);
  };

  return (
    <div>
        <div className="h-fit w-full flex items-center justify-between px-4 py-4 bg-black">
        <div className="flex h-fit items-center gap-2">
        <Link href={"/auth/profile"}><div className="h-[5vh] w-[5vh] rounded-full bg-lime-300 flex items-center justify-center">
            Y
          </div></Link>
          <h1>Your Library</h1>
        </div>
        <div className="flex gap-2">
          <IoAddSharp onClick={inputBoxHandler} className="text-2xl" />
         <Link href={"/auth/profile"}><FaUser className="text-2xl" /></Link>
        </div>
      </div>
      {inputBox && <PlaylistInputBox setinputBox={setinputBox} />}
        {children}
    </div>
  )
}

export default layout