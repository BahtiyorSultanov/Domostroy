import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

function Swipper({
  data,
  isLink,
  slidesPerView,
  space,
  additionallClass,
  h1Class,
  spanClass,
  cardClass,
}) {
  return (
    <div>
      <Swiper
        spaceBetween={space}
        centeredSlides={false}
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper ${additionallClass}`}
      >
        <SwiperSlide>
          <NavLink to={`${isLink}`}>
            <div className="flex items-center">
              <div className="flex flex-col items-start w-[234px] border-[2px] gap-[20px]">
                <img src="" className="w-[100%] h-[100%]" />
                <ul className="flex flex-col items-start gap-[10px] pl-[30px]">
                  <h1 className="text-[#49423D] text-[16[px]">Test</h1>
                  <li className="text-[14px] text-[#909090] text-left">Test</li>
                  <h1 className="text-[20px] font-bold text-[#8DB338] max-sm:text-[16px]">
                    Test
                  </h1>
                </ul>
              </div>
            </div>
          </NavLink>
        </SwiperSlide>
        {data &&
          data.map((item) => {
            return (
              <SwiperSlide>
                <NavLink
                  to={`${isLink ? isLink : ""}/${
                    isLink && item.id ? item.id : ""
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={
                        cardClass
                          ? cardClass
                          : "flex flex-col relative items-start w-[234px] border-[2px] gap-[20px]"
                      }
                    >
                      {item.img && (
                        <img src={item.img} className="w-[100%] h-[100%]" />
                      )}
                      <ul className="flex flex-col items-start gap-[10px] pl-[30px]">
                        {item.h1 && (
                          <h1
                            className={`text-[#49423D] text-[16[px] ${
                              h1Class && h1Class
                            }`}
                          >
                            {item.h1}
                          </h1>
                        )}
                        {item.span && (
                          <span className={`${spanClass}`}>{item.span}</span>
                        )}
                        {item.text &&
                          item.text.map((punkt) => {
                            return (
                              <li className="text-[14px] text-[#909090] text-left">
                                {punkt}
                              </li>
                            );
                          })}
                        {item.cost && (
                          <h1 className="text-[20px] font-bold text-[#8DB338] max-sm:text-[16px]">
                            {item.cost}
                          </h1>
                        )}
                      </ul>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default Swipper;
