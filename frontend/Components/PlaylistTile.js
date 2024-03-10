import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const PlaylistTile = ({name,imageUrl,noSong}) => {
  return (
    <>
    <div className="flex items-center justify-between h-[10vh] pl-3 pr-2">
      <div className="flex items-center gap-5">
        <div className="h-[8vh] w-[8vh] bg-blue-500 ">
          <img className="h-full w-full object-cover" src={imageUrl} alt="" />
        </div>
        <div>
          <h1 className="leading-5">{name}</h1>
          <div>
            <h1 className="text-xs opacity-70">playlist . {noSong} songs</h1>
          </div>
        </div>
      </div>
      <HiOutlineDotsVertical className="text-2xl" />
    </div>
  
    </>
  );
};

export default PlaylistTile;
