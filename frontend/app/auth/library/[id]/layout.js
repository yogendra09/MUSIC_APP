
import axios from "@/utils/axios";
import React from "react";

export async function generateStaticParams({params}) {
  const { data } = await axios.post(`/`);
 
  return data.map((playlist) => ({
    slug: playlist.slug,
  }))
}

const layout = ({ children, params }) => {
  return (
    <div>
      {children}

    </div>
  );
};

export default layout;
