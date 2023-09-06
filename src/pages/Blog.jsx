import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { projectFirestore } from "../Firebase/Config";
function Blog() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    projectFirestore.collection("blog").onSnapshot((data) => {
      let result = [];
      if (!data.empty) {
        data.docs.forEach((item) => {
          result.push({ ...item.data(), id: item.id });
          setBlog(result);
        });
      } else {
      }
    });
  }, []);
  return (
    <div className="w-[100%] flex flex-col items-start gap-[100px] max-sm:gap-[70px] mt-[100px]">
      <div className="flex flex-col items-start w-[100%] gap-[20px]">
        <h1 className="text-[40px] text-[#49423D] font-bold">Блог</h1>
        <div className="flex items-center max-sm:flex-col w-[100%] gap-[20px] justify-between">
          <h1 className="text-[#49423D] text-[20px] w-[630px] max-sm:w-[320px] text-left">
            Следите за новостями на нашем сайте. Нам важно, чтобы вы всегда были
            в курсе всего интересного и важного, связанного с деревянным
            домостроением!
          </h1>
          <div className="flex items-center max-sm:flex-col max-sm:items-start gap-[40px]">
            <input
              placeholder="Поиск..."
              type="text"
              className="pl-[20px] w-[410px] max-sm:w-[320px] h-[50px] border-[2px] "
            />
            <button className="w-[190px] h-[50px] bg-[#8DB338] text-white text-[14px] font-bold">
              Искать в блоге
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-[100%] items-center gap-[30px]">
        {blog &&
          blog.map((item) => {
            return (
              <NavLink to={`/blogItem/${item.id}`}>
                <div className="flex flex-col items-center w-[100%] h-[482px] justify-between pb-[30px] border-[2px] relative gap-[10px]">
                  <img src={item.img} className="w-[100%] h-[270px]" />
                  <div className="flex flex-col items-start text-left w-[100%] px-[30px] gap-[10px]">
                    <h1 className="text-[14px] text-[#909090]">
                      {item.date && item.date}
                    </h1>
                    <div className="">
                      <h1 className="text-[16px] text-[#49423D]">
                        {item.h1 && item.h1}
                      </h1>
                      <h1 className="text-[14px] text-[#909090]">
                        {item.text && item.text}
                      </h1>
                    </div>
                    <NavLink className="flex items-center gap-[9px] text-[14px] text-[#8DB338]">
                      <NavLink to={`/blogItem/${item.id}`}>
                        <h1>Читать далее</h1>
                      </NavLink>
                      <IoIosArrowForward />
                    </NavLink>
                  </div>
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}

export default Blog;
