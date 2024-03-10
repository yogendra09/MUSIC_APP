"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaylistTile from "./PlaylistTile";
import { myPlaylist } from "@/store/Reducers/userReducer";
import { asyncAddSongToPlaylist, asyncMyPlaylist } from "@/store/Actions/userAction";
import { IoIosClose } from "react-icons/io";

const AddToPlaylist = ({ btn, songId }) => {
  const dispatch = useDispatch();
  const { playlist } = useSelector((state) => state.userReducer);

  const addSongToPlayList = (playlistId) => {
    console.log(playlistId, songId);
    dispatch(asyncAddSongToPlaylist(playlistId,songId));
    btn(false);

  };

  useEffect(
    (state) => {
      dispatch(asyncMyPlaylist());
    },
    [myPlaylist.length]
  );
  return (
    <div className="absolute z-10 w-full -h-[40vh] !overflow-auto bg-black/50 ">
      <IoIosClose
        onClick={() => {
          btn(false);
        }}
        className="text-2xl absolute right-0 top-0"
      />
      {playlist &&
        playlist.map((elem) => {
          return (
            <div onClick={() => addSongToPlayList(elem._id)} key={elem._id}>
              <PlaylistTile
                name={elem.Name}
                imageUrl={elem.poster}
                noSong={elem.songs.length}
              />
            </div>
          );
        })}
    </div>
  );
};

export default AddToPlaylist;
