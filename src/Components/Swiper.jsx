import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

function Swipper({ data, isLink, slidesPerView, space, additionallClass }) {
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
          <NavLink to={`/bestSellerItem/1`}>
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
                {isLink ? (
                  <NavLink to={`${isLink}/${item.id}`}>
                    <div className="flex items-center">
                      <div className="flex flex-col items-start w-[234px] border-[2px] gap-[20px]">
                        {item.img && (
                          <img src={item.img} className="w-[100%] h-[100%]" />
                        )}
                        <ul className="flex flex-col items-start gap-[10px] pl-[30px]">
                          {item.h1 && (
                            <h1 className="text-[#49423D] text-[16[px]">
                              {item.h1}
                            </h1>
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
                ) : (
                  <div className="flex items-center">
                    <div className="flex flex-col items-start w-[234px] border-[2px] gap-[20px]">
                      {item.img ? (
                        <img src={item.img} className="w-[100%] h-[100%]" />
                      ) : (
                        <img src={item} className="w-[100%] h-[100%]" />
                      )}
                      <ul className="flex flex-col items-start gap-[10px] pl-[30px]">
                        {item.h1 && (
                          <h1 className="text-[#49423D] text-[16[px]">
                            {item.h1}
                          </h1>
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
                )}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default Swipper;
