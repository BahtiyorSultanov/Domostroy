import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import QuestionComponent from "../Components/QuestionComponent";

function GalleryItem() {
  const [gallery, setGallery] = useState([]);
  const { id } = useParams();
  const api = `http://localhost:3000/gallery/${id}`;
  const { data, isLoading } = useQuery("images", async () => {
    const { data } = await axios.get(api);
    setGallery(data);
  });
  return (
    <div className="w-[100%] flex flex-col items-start gap-[100px] max-sm:gap-[30px] mt-[100px]">
      <div className="flex flex-col items-start">
        <h1 className="text-[40px] text-[#49423D] font-bold">
            {gallery.type}
        </h1>
      </div>
      <div className="flex flex-wrap items-center gap-[50px] max-sm:flex-col w-[100%]">
        {gallery.img&& gallery.img.map(item =>{
            return <img src={item} className="w-[410px] h-[410px] max-sm:w-[100%]"/>
        })}
      </div>
      <QuestionComponent/>
    </div>
  );
}

export default GalleryItem;
