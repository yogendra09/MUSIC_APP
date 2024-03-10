"use client";
import Card from "@/Components/Card";
import Hero from "@/Components/Hero";
import Left from "@/Components/TopNav";
import Nav from "@/Components/Nav";
import { asyncCurrentUser } from "@/store/Actions/userAction";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(isAuthenticated);
    dispatch(asyncCurrentUser());
    if (!isAuthenticated) router.push("/login");
  }, []);
  return (
    <div className="h-screen text-white overflow-hidden">
      
    </div>
  );
};

export default page;
