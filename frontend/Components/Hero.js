"use client";
import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import Card from "./Card";

import {
  asyncAllSongs,
  asyncCurrentUser,
  asyncUserLikedSongs,
} from "@/store/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";

import AddToPlaylist from "./AddToPlaylist";

const Hero = () => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => state.userReducer);
  const { likedSong } = useSelector((state) => state.userReducer);
  const [addToPlaylistBtn, setaddToPlaylistBtn] = useState(false);
  const [songId, setsongId] = useState(null);
  useEffect(() => {
    dispatch(asyncUserLikedSongs());
  }, []);
  return (
    <div className="h-[92vh] w-full bg-black/100">
      <TopNav />
      {/* <CurrentSong/> */}
      <div className="max-h-[85vh] w-full gap-2 pt-4 pl-3 !overflow-y-auto">
        {songs &&
          songs.map((song) => {
            return (
              <Card
                key={song._id}
                setSong={setsongId}
                btn={setaddToPlaylistBtn}
                condition={likedSong.indexOf(song._id) !== -1 ? true : false}
                songId={song.fileName}
                songName={song.album}
                poster={song.poster}
                id={song._id}
              />
            );
          })}
      </div>

      {addToPlaylistBtn && (
        <AddToPlaylist songId={songId} btn={setaddToPlaylistBtn} />
      )}
    </div>
  );
};

export default Hero;
