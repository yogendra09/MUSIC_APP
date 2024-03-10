"use client";
import PlaylistTile from "@/Components/PlaylistTile";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoAddSharp } from "react-icons/io5";

import PlaylistInputBox from "@/Components/PlaylistInputBox";
import { useDispatch, useSelector } from "react-redux";
import { asyncMyPlaylist } from "@/store/Actions/userAction";
import Link from "next/link";
import { HiOutlineDotsVertical } from "react-icons/hi";

const page = () => {
  const { playlist } = useSelector((state) => state.userReducer);
  const { likedSong } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const hideinputBox = () => {
    setinputBox(null);
  };

  useEffect(() => {
    dispatch(asyncMyPlaylist());
  }, [playlist.length]);

  return (
    <div className="h-[92vh] w-full bg-black overflow-hidden">
      <div className="">
        <Link href={"/auth/library/likedSongs"}>
          <div className="flex items-center justify-between h-[10vh] pl-3 pr-2">
            <div className="flex items-center gap-5">
              <div className="h-[8vh] w-[8vh] bg-blue-500 ">
                <img
                  className="h-full w-full object-cover"
                  src={
                    "https://images.unsplash.com/photo-1495434942214-9b525bba74e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                />
              </div>
              <div>
                <h1 className="leading-5">Liked Songs</h1>
                <div>
                  <h1 className="text-xs opacity-70">
                    playlist . {likedSong && likedSong.length} songs
                  </h1>
                </div>
              </div>
            </div>
            <HiOutlineDotsVertical className="text-2xl" />
          </div>
        </Link>
        {playlist[0] &&
          playlist.map((elem) => {
            return (
              <Link key={elem._id} href={`/auth/library/${elem._id}`}>
                <PlaylistTile
                  key={elem._id}
                  name={elem.Name}
                  imageUrl={elem.poster}
                  noSong={elem.songs.length}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default page;
