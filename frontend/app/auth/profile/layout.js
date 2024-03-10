"use client";
import { asyncUserImage } from "@/store/Actions/userAction";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const layout = ({ children }) => {
  const { user } = useSelector((state) => state.userReducer);
  const [newImage, setnewImage] = useState("");
  const [showBtn, setshowBtn] = useState(false)
  const dispatch = useDispatch();
  const imageHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("image", e.target.image.files[0]);
    console.log(e.target.image.files[0]);
    console.log(formdata);
    dispatch(asyncUserImage(formdata));
    setshowBtn(false)
  };
  return (
    <>
      <div className="flex gap-[2vh] items-center h-[35vh] w-full px-[1.5vh] bg-black">
        <div className="h-[15vh] w-[15vh]">
        <form onSubmit={imageHandler}>
          <input
            name="image"
            value={newImage}
            onChange={(e) => {
              setnewImage(e.target.value);
            }}
            className="imageinpt hidden"
            type="file"
          />
        { showBtn && <button>upload</button>}
          </form>
          <img
            onClick={()=>{
                document.querySelector(".imageinpt").click();
                setshowBtn(true);
            }}
            src={user && `http://localhost:8080/getimage/${user.image.url}`}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-3xl">{user && user.name }</h1>
          <h4 className="text-sm leading-6">99 songs . 20 playlist</h4>
        </div>
      </div>
      {children}
    </>
  );
};

export default layout;
