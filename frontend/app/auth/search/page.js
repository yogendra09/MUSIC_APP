"use client"
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "@/utils/axios";
import Card from "@/Components/Card";
const page = () => {
  const [searchResult, setsearchResult] = useState([])
  
  const searchHandler = async(song)=>{
    console.log(song.toString().length)
    if(song.toString().length === 0) {
      setsearchResult([]);
      return;
    }
    const {data} = await axios.get(`/song/search/${song}`);
    const {songs} = data;
    setsearchResult(songs)
    console.log(data)
  
   
  }
  return (
    <div className="h-[93vh] w-full bg-black">
      <div className="h-[8vh] p-2">
         <h1 className="text-3xl">Search</h1>
      </div>
      <div className="h-[85vh] w-full px-3 py-4 ">
        <div className="h-fit flex items-center bg-white rounded-xl">
          <FiSearch className="text-[#aaaa] text-2xl" />
          <input
            onChange={(e)=>searchHandler(e.target.value)}
            className="py-2 pl-2 text-black pr-16 border-none outline-none"
            type="text"
            placeholder="What you want to listen"
          />
        </div>
        <div className="max-h-[76vh] w-full gap-2 pt-4 pl-3 !overflow-y-auto">
        {searchResult &&
          searchResult.map((song) => {
            return (
              <div key={song._id}>
                <Card songId={song.fileName} songName={song.album} poster={song.poster} id={song._id} />
              </div>
            );
          })}
      </div>
      </div>
    </div>
  );
};

export default page;
