import React, { useEffect, useState } from "react";
import QuestionComponent from "../Components/QuestionComponent";
import { NavLink, useParams } from "react-router-dom";
import { projectFirestore } from "../Firebase/Config";
import { useQuery } from "react-query";
import axios from "axios";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  let galleryExt = gallery.filter((item) => {
    return item.type == "Экстерьеры";
  });
  let galleryInt = gallery.filter((item) => {
    return item.type == "Интерьеры";
  });
  let gallerySpa = gallery.filter((item) => {
    return item.type == "Спа-комплексы";
  });
  const api = `http://localhost:3000/gallery`
  const {data, isLoading} = useQuery(
    "images",
    async()=>{
      const {data} = await axios.get(api)
      setGallery(data)
    }
  )
  return (
    <div className="w-[100%] flex flex-col items-start gap-[100px]">
      <div className="flex flex-col items-start">
        <h1 className="text-[40px] text-[#49423D] font-boldnpm run de">
          Галерея
        </h1>
      </div>
      <div className="flex max-sm:flex-col-reverse max-sm:gap-[30px] max-sm:items-start items-center justify-between w-[100%]">
        <h1 className="w-[340px] text-left">
          На этой странице представлены все проекты, которые были реализованы
          силами нашей команды. Это дома, бани, гаражи, навесы, коммерческие
          объекты и иные сооружения. Внимательно изучите нашу галерею, и вам
          будет гораздо проще подобрать для себя оптимальное решение.{" "}
        </h1>
        <img src="" className="w-[690px] h-[400px] max-sm:w-[100%] max-sm:h-[200px]" />
      </div>
      {galleryExt.map((item) => {
        return (
          <div className="flex flex-col gap-[80px] w-[100%]">
            <div className="flex max-sm:flex-col max-sm:items-start items-center justify-between w-[100%]">
              <h1 className="text-[24px] text-[#49423D]">{item.type}</h1>
              <NavLink to={`/galleryItem/${item.id}`}>
                <h1 className="text-[14px] text-[#8DB338]">
                  Все {item.type.toLowerCase()}
                </h1>
              </NavLink>
            </div>
            <div className="flex max-sm:flex-col gap-[50px] items-center">
              {item.img &&
                item.img.slice(0, 3).map((sorce) => {
                  return <img src={sorce} className="w-[410px] h-[410px] max-sm:w-[100%]" />;
                })}
            </div>
          </div>
        );
      })}
      {galleryInt.map((item) => {
        return (
          <div className="flex flex-col gap-[80px] w-[100%]">
            <div className="flex max-sm:flex-col max-sm:items-start items-center justify-between w-[100%]">
              <h1 className="text-[24px] text-[#49423D]">{item.type}</h1>
              <NavLink to={`/galleryItem/${item.id}`}>
                <h1 className="text-[14px] text-[#8DB338]">
                  Все {item.type.toLowerCase()}
                </h1>
              </NavLink>
            </div>
            <div className="flex max-sm:flex-col gap-[50px] items-center">
              {item.img &&
                item.img.slice(0, 3).map((sorce) => {
                  return <img src={sorce} className="w-[410px] h-[410px]  max-sm:w-[100%]" />;
                })}
            </div>
          </div>
        );
      })}
      {gallerySpa.map((item) => {
        return (
          <div className="flex flex-col gap-[80px] w-[100%]">
            <div className="flex max-sm:flex-col max-sm:items-start items-center justify-between w-[100%]">
              <h1 className="text-[24px] text-[#49423D]">{item.type}</h1>
              <NavLink to={`/galleryItem/${item.id}`}>
                <h1 className="text-[14px] text-[#8DB338]">
                  Все {item.type.toLowerCase()}
                </h1>
              </NavLink>
            </div>
            <div className="flex max-sm:flex-col gap-[50px] items-center">
              {item.img &&
                item.img.slice(0, 3).map((sorce) => {
                  return <img src={sorce} className="w-[410px] h-[410px]  max-sm:w-[100%]" />;
                })}
            </div>
          </div>
        );
      })}

      <QuestionComponent />
    </div>
  );
}

export default Gallery;
