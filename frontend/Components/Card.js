import React, { useEffect } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { currentSong } from "@/store/Reducers/userReducer";
import { asyncCurrentUser, asyncLikeSong, asyncUserLikedSongs } from "@/store/Actions/userAction";
import { FcLikePlaceholder } from "react-icons/fc";

const Card = ({ songName, poster, id, songId, btn, setSong,condition }) => {
  const dispatch = useDispatch();
  const { likedSongs } = useSelector((state) => state.userReducer);
  const { user } = useSelector((state) => state.userReducer);
  const songLikedHandler = (likedsongid) => {
    dispatch(asyncLikeSong(likedsongid));
  };
  const updateCurrentSong = (songId) => {
    dispatch(currentSong(songId));
  };
  useEffect(()=>{
    dispatch(asyncUserLikedSongs());
  },[ user && user.liked])
  return (
    <div className="flex items-center justify-between h-[10vh] pl-3 pr-2">
      <div
        onClick={() => {
          updateCurrentSong(songId);
        }}
        className="flex items-center gap-5"
      >
        <div className="h-[8vh] w-[8vh] bg-blue-500 shrink-0">
          <img
            src={`${`http://localhost:8080/song/poster/` + poster}`}
            alt=""
          />
        </div>
        <div>
          <h1 className="leading-5">{songName}</h1>
          <div>
            <h1 className="text-xs opacity-70">playlist . 94songs</h1>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <IoIosAddCircleOutline
          onClick={() => {
            btn(true);
            setSong(id);
          }}
          className="text-2xl"
        />

        { condition ? (
          <FcLike onClick={() => songLikedHandler(id)} className="text-2xl" />
        ) : (
          <FcLikePlaceholder
            onClick={() => songLikedHandler(id)}
            className="text-2xl"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
