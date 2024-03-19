"use client";
import Card from "@/Components/Card";
import {
  asyncCurrentUser,
  asyncUploadMusic,
  asyncUserImage,
  asyncUserLogout,
} from "@/store/Actions/userAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import  Cookies from "js-cookie"
const page = () => {
  const [music, setmusic] = useState("");
  const { user } = useSelector((state) => state.userReducer);
  const { likedSong } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const uploadMusicHandler = (e) => {
    e.preventDefault();
    if (music === "") {
      alert("select file first to upload!");
      return;
    }
    console.log(e.target.song.files[0]);
    const formdata = new FormData(e.target);
    formdata.set("song", e.target.song.files[0]);
    dispatch(asyncUploadMusic(formdata));
    // dispatch(asyncCurrentUser());
  };

  const logoutHandler = ()=>{
    dispatch(asyncUserLogout());
    Cookies.remove("token")
    router.push("/login");
    
  }

  return (
    <div className="h-max-[93vh] bg-black text-white !overflow-auto">
      <div className="px-[2vh] pt-[1vh] h-[15vh] w-full ">
        <h2 className="text-lg font-semibold">Upload song</h2>
        <div className="h-[10hv] flex items-center gap-4">
          <h1
            onClick={() => {
              document.querySelector(".inpt").click();
            }}
            className="flex items-center gap-2 text-lg font-thin"
          >
            <IoCloudUploadOutline className="font-thin text-2xl" /> Choose song
          </h1>
          <form method="post" encType="multipart/form-data" onSubmit={uploadMusicHandler}>
            <input
              name="song"
              value={music}
              onChange={(e) => {
                setmusic(e.target.value);
              }}
              className="inpt hidden"
              type="file"
            />
            <button className="px-[1vh] py-[.5vh] rounded mt-[2vh] bg-green-400 text-xs text-gray-600]">
              upload
            </button>
          </form>
          <Link
            href={"/auth/profile/mysongs"}
            className="px-[1vh] py-[.5vh] rounded mt-[2vh] bg-green-400 text-xs text-gray-600]"
          >
            uploaded songs
          </Link>
          <button onClick={logoutHandler} className="px-[1vh] py-[.5vh] rounded mt-[2vh] bg-red-400 text-xs text-gray-600]">
            Logout
            </button>
        </div>
      </div>

      <div className="h-max-[48vh] w-full pl-[2vh] pt-[3vh] !overflow-auto">
        <h1 className="text-2xl mt-4 mb-4">Update Details</h1>

        <input
          className="w-[90%] mb-[2vh] px-[2vh] py-[1vh] rounded text-black"
          type="text"
          defaultValue={user && user.name}
          placeholder="name"
        />
        <input
          className="w-[90%] mb-[2vh] px-[2vh] py-[1vh] rounded text-black"
          type="text"
          defaultValue={user && user.email}
          placeholder="email"
        />
        <div>
          <button className="mb-[2vh] px-[2vh] py-[1vh] rounded bg-[#dadada] text-sm text-slate-900">
            update
          </button>
        </div>
      </div>
      <div className="pl-[2vh]">
        <h1 className="text-2xl mt-4 mb-4">Reset password</h1>
        <input
          className="w-[90%] mb-[2vh] px-[2vh] py-[1vh] rounded text-black"
          type="text"
          placeholder="reset password"
        />
        <div>
          <button className="mb-[2vh] px-[2vh] py-[1vh] rounded bg-[#dadada] text-sm text-slate-900">
            reset password
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
