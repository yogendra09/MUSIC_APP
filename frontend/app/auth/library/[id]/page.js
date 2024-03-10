"use client";
import AddToPlaylist from "@/Components/AddToPlaylist";
import Card from "@/Components/Card";
import axios from "@/utils/axios";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [playListSongs, setplayListSongs] = useState([]);
  const [addToPlaylistBtn, setaddToPlaylistBtn] = useState(false);
  const [songId, setsongId] = useState(null);
  let songArr = [];
  const playlistHandler = async () => {
    const { data } = await axios.post(`/song/playlistSongs/${params.id}`);
    songArr = data.playlist;
    setplayListSongs(songArr);
    console.log(songArr);
  };
  useEffect(() => {
    playlistHandler();
  }, []);
  return (
    <div className="h-[83vh] w-full bg-black">
      {playListSongs &&
        playListSongs.map((song) => {
          return (
            <Card
              key={song._id}
              setSong={setsongId}
              btn={setaddToPlaylistBtn}
              songId={song.fileName}
              songName={song.album}
              poster={song.poster}
              id={song._id}
            />
          );
        })}
     <div className=" absolute z-10 bottom-0">
     {addToPlaylistBtn && (
        <AddToPlaylist songId={songId} btn={setaddToPlaylistBtn} />
      )}
     </div>
    </div>
  );
};

export default page;
