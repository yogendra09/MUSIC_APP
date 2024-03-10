"use client";
import { asyncCreatePlaylist, asyncMyPlaylist } from "@/store/Actions/userAction";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";

const PlaylistInputBox = ({ setinputBox }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const createPlaylistHandler = () => {
    console.log(name);
    dispatch(
      asyncCreatePlaylist({
        name,
      })
    );
    dispatch(asyncMyPlaylist());
    setinputBox(false);
    router.push("/auth/library");
  };

  const closeHandler = () => {
    setinputBox(false);
  };
  return (
    <div className=" absolute flex items-center justify-center gap-2 top-[20vh] h-[20vh] w-full bg-black/30">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="text-black h-[8vh] w-[70%]  p-2 rounded-md"
        placeholder="Playlist Name"
      />
      <button  
       onClick={createPlaylistHandler}
      className="text-white px-4 py-[14px] bg-slate-600 h-fit text-lg rounded-md">
        create
      </button>
      <IoIosClose
        onClick={closeHandler}
        className="absolute right-0 top-0 text-3xl"
      />
    </div>
  );
};

export default PlaylistInputBox;
