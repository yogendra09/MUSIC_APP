import axios from "@/utils/axios";
import {
  addUser,
  isError,
  removeError,
  removeUser,
  userReducer,
  addSongs,
  currentSong,
  myPlaylist,
  likedSongs,
} from "../Reducers/userReducer";
import { toast } from "react-toastify";

export const asyncCurrentUser = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/user");
    dispatch(addUser(data.user));
    console.log(data);
  } catch (error) {
   console.log(error?.response?.data.message)
    toast.error(error?.response?.data.message || error);
  }
};

export const asyncUserLogin = (userObj) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/login", userObj);
    console.log(data,data.user)
    dispatch(asyncCurrentUser());
  } catch (error) {
    toast.error(error?.response?.data.message || error);
    toast.error(error?.response?.data.message || error);
  }
};
export const asyncUserLogout = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/logout");
    dispatch(removeUser());
  } catch (error) {
    toast.error(error?.response?.data.message || error);
    toast.error(error?.response?.data.message || error);
  }
};

export const asyncUserRegister = (userObj) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/register", userObj);
    console.log(data)
    dispatch(asyncCurrentUser());
  } catch (error) {
   console.log(error?.response?.data.message)
    toast.error(error?.response?.data.message || error);
  }
};

export const asyncAllSongs = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/song/allsongs");
    dispatch(addSongs(data.song));
    dispatch(asyncCurrentUser());
  } catch (error) {
   console.log(error?.response?.data.message)
    toast.error(error?.response?.data.message || error);
  }
};
export const asyncLikeSong = (songId) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post(`/song/likesong/${songId}`);
    dispatch(asyncCurrentUser());
  } catch (error) {
   console.log(error?.response?.data.message)
    toast.error(error?.response?.data.message || error);
  }
};
export const asyncUserLikedSongs = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post(`/song/likedSongs`);
    // console.log(data.likedSongs)
    dispatch(likedSongs(data.likedSongs));
    // dispatch(asyncCurrentUser());
  } catch (error) {
   console.log(error?.response?.data.message)
    toast.error(error?.response?.data.message || error);
  }
};
export const asyncCreatePlaylist = (obj) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post(`/song/create/playlist`, obj);
    dispatch(asyncCurrentUser());
  } catch (error) {
   console.log(error?.response?.data.message)
    toast.error(error?.response?.data.message || error);
  }
};

export const asyncMyPlaylist = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post(`/song/myplaylist`);
    // console.log(data.playlist);
    dispatch(myPlaylist(data.playlist));
    dispatch(asyncCurrentUser());
  } catch (error) {
   console.log(error?.response?.data.message)
    toast.error(error?.response?.data.message || error);
  }
};

export const asyncAddSongToPlaylist =
  (playlistId, songId) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.post(`/song/add/playlist`, {
        playlistId,
        songId,
      });
      dispatch(asyncCurrentUser());
    } catch (error) {
     console.log(error?.response?.data.message)

      toast.error(error?.response?.data.message || error);
    }
  };

export const asyncUserImage = (user) => async (dispatch, getstate) => {
  try {
    const { _id } = getstate().userReducer.user;
    const { data } = await axios.post(`/uploadimage`,user);
    toast.success(`${data.message}`);
    console.log(data);
    dispatch(asyncCurrentUser());
  } catch (error) {
   console.log(error?.response?.data.message)
    toast.error(error?.response?.data.message || error);
  }
};
export const asyncUploadMusic = (formdata) => async (dispatch, getstate) => {
  console.log(formdata);
  try {
    const { data } = await axios.post(`/song/uploadmusic`, formdata);
    console.log(data);
    toast.success(`${data.message}`);
    dispatch(asyncCurrentUser());
  } catch (error) {
   console.log(error?.response?.data.message)
    toast.error(error?.response?.data.message || error);
  }
};
