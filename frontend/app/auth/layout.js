"use client";
import Nav from "@/Components/Nav";
import { asyncAllSongs, asyncCurrentUser, asyncUserLikedSongs } from "@/store/Actions/userAction";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useDispatch, useSelector } from "react-redux";

const layout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const { currentSong } = useSelector((state) => state.userReducer);

  useEffect(() => {
    // dispatch(asyncCurrentUser());
    dispatch(asyncAllSongs());
    if (!isAuthenticated) router.push("/login");
  }, [isAuthenticated]);
  return (
    <div className="text-white">
      {children}
      {currentSong && (
        <ReactAudioPlayer
          src={"http://localhost:8080/song/stream/" + currentSong}
          autoPlay
          controls
        />
      )}
      <Nav />
    </div>
  );
};

export default layout;
