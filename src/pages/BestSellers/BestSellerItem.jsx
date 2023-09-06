import React, { useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { projectFirestore } from "../../Firebase/Config";
import { useQuery } from "react-query";
import axios, { all } from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import Swipper from "../../Components/Swiper";
import Complect1 from "./Complect1";
import Register from "../../Components/Register";

function BestSellerItem() {
  const { id } = useParams();
  const [topSellers, setTopSellers] = useState([]);
  const [allTopSells, setAllTopSells] = useState([]);
  // const { data, isLoading } = useQuery(
  //   "topSellers",
  //   async () => {
  //     const { data } = await axios.get(
  //       `http://localhost:3000/topSellers/${id}`
  //     );
  //     setTopSellers(data);
  //   },
  //   setTimeout(
  //     async () => {
  //       const { data } = await axios.get(`http://localhost:3000/topSellers`);
  //       setAllTopSells(data);
  //     }
  //   , 2000)
  // );
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-[30px] flex flex-col items-start h-[100%] w-[100%]">
      <div className="flex flex-col items-start gap-[50px]">
        <h1 className="text-[40px] text-[#49423D] max-sm:text-[28px]">
          {topSellers.h1}
        </h1>
        <div className="flex items-start max-sm:flex-col gap-[100px]">
          <div className="flex flex-col items-start gap-0">
            <div className="flex items-end max-sm:hidden">
              <button className="px-[44px] py-[13px] bg-white hover:bg-[#F5F5F6] group relative">
                <span className="absolute top-0 left-0 h-[5px] w-[0%] bg-[#8DB338] group-hover:w-[100%]"></span>
                <h1 className="text-[16px] font-bold text-[#49423D]">Фасады</h1>
              </button>
              <button className="px-[44px] py-[13px] bg-white hover:bg-[#F5F5F6] group relative">
                <span className="absolute top-0 left-0 h-[5px] w-[0%] bg-[#8DB338] group-hover:w-[100%]"></span>
                <h1 className="text-[16px] font-bold text-[#49423D]">
                  Планировки
                </h1>
              </button>
              <button className="px-[44px] py-[13px] bg-white hover:bg-[#F5F5F6] group relative">
                <span className="absolute top-0 left-0 h-[5px] w-[0%] bg-[#8DB338] group-hover:w-[100%]"></span>
                <h1 className="text-[16px] font-bold text-[#49423D]">
                  Интерьер
                </h1>
              </button>
            </div>
            <img
              src={topSellers.img}
              className="p-[20px] bg-[#F5F5F6] w-[770px] h-[420px] max-sm:w-[328px] max-sm:h-[196px]"
            />
            <Swipper
              data={topSellers.slideImages}
              slidesPerView={window.innerWidth <= 42 ? 2 : 1}
              space={100}
              additionallClass={"w-[770px] max-sm:w-[328px]"}
            />
          </div>
          <div className="flex flex-col items-start gap-[30px] w-[400px] max-sm:w-[320px]">
            <div className="flex justify-between w-[100%]">
              <h1>Артикул: 611HSK22F</h1>
              <div className="flex items-center gap-[10px]">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
            <h1 className="text-[32px] text-[#49423D]">{topSellers.h1}</h1>
            <ul className="text-[16px] flex flex-col gap-[20px]">
              <li className="w-[100%] flex justify-start">
                <h1 className="text-[#909090]">
                  Тип строения...............................
                </h1>
                <h1 className="text-[#8DB338]">{topSellers.typeofBuilding}</h1>
              </li>
              <li className="w-[100%] flex justify-start ">
                <h1 className="text-[#909090]">
                  Стиль.................................................
                </h1>
                <h1 className="text-[#8DB338]">{topSellers.style}</h1>
              </li>
              <li className="w-[100%] flex justify-start ">
                <h1 className="text-[#909090]">
                  Технология....................................
                </h1>
                <h1 className="text-[#8DB338]">{topSellers.technology}</h1>
              </li>
              <li className="w-[100%] flex justify-start ">
                <h1 className="text-[#909090]">
                  Габаритные размеры..............
                </h1>
                <h1 className="text-[#8DB338]">{topSellers.size}</h1>
              </li>
              <li className="w-[100%] flex justify-start ">
                <h1 className="text-[#909090]">
                  Общая площадь.........................
                </h1>
                <h1 className="text-[#8DB338]">{topSellers.surface}</h1>
              </li>
              <li className="w-[100%] flex justify-start ">
                <h1 className="text-[#909090]">
                  Этажность.......................................
                </h1>
                <h1 className="text-[#8DB338]">{topSellers.floors}</h1>
              </li>
              <li className="w-[100%] flex justify-start ">
                <h1 className="text-[#909090]">
                  Количество комнат..................
                </h1>
                <h1 className="text-[#8DB338]">{topSellers.rooms}</h1>
              </li>
              <li className="w-[100%] flex justify-start ">
                <h1 className="text-[#909090]">
                  Количество санузлов..............
                </h1>
                <h1 className="text-[#8DB338]">{topSellers.sanuzel}</h1>
              </li>
            </ul>
            <h1 className="text-[30px] text-[#8DB338] font-bold">
              {topSellers.cost}
            </h1>
            <button className="w-[100%] h-[50px] bg-[#8DB338] text-[16px] text-white">
              Получить консультацию
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[50px]">
          <h1 className="text-[40px] max-sm:text-[28px] font-bold text-[#49423D]">
            Описание проекта
          </h1>
          <div className="flex items-center gap-[100px] max-sm:flex-col max-sm:w-[320px]">
            <h1 className="text-[16px] text-[#49423D] text-left">
              {topSellers.description1}
            </h1>
            <h2 className="text-[16px] text-[#49423D] text-left">
              {topSellers.description2}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[50px] max-sm:w-[320px]">
          <h1 className="text-[40px] max-sm:text-[28px] font-bold text-[#49423D]">
            Общая информация
          </h1>
          <ul className="text-[16px] flex flex-wrap w-[1260px] gap-[20px] max-sm:w-[320px]">
            <li className="w-[520px] flex justify-between max-sm:w-[320px]">
              <h1 className="text-[#909090]">Страна</h1>
              <h1 className="text-[#8DB338]">{topSellers.country}</h1>
            </li>
            <li className="w-[520px] flex justify-between max-sm:w-[320px]">
              <h1 className="text-[#909090]">Производитель</h1>
              <h1 className="text-[#8DB338]">{topSellers.company}</h1>
            </li>
            <li className="w-[520px] flex justify-between max-sm:w-[320px]">
              <h1 className="text-[#909090]">Сезонность</h1>
              <h1 className="text-[#8DB338]">{topSellers.season}</h1>
            </li>
            <li className="w-[520px] flex justify-between max-sm:w-[320px]">
              <h1 className="text-[#909090]">Форма здания</h1>
              <h1 className="text-[#8DB338]">{topSellers.form}</h1>
            </li>
            <li className="w-[520px] flex justify-between max-sm:w-[320px]">
              <h1 className="text-[#909090]">Форма кровли</h1>
              <h1 className="text-[#8DB338]">{topSellers.formaKrovli}</h1>
            </li>
            <li className="w-[520px] flex justify-between max-sm:w-[320px]">
              <h1 className="text-[#909090]">Жилая площадь</h1>
              <h1 className="text-[#8DB338]">{topSellers.jilayaPloshad}</h1>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h1 className="text-[24px] font-bold text-[#49423D]">
            Дополнительная информация
          </h1>
          <div className="flex flex-wrap w-[1320px] justify-start max-sm:w-[320px]">
            {topSellers.included &&
              topSellers.included.map((item) => {
                return (
                  <div className="w-[200px] flex flex-col items-start m-[10px]">
                    <div className="flex items-center">
                      <HiCheckCircle className="text-[24px] text-[#8DB338]" />
                      {item}
                    </div>
                  </div>
                );
              })}
            {topSellers.notIncluded &&
              topSellers.notIncluded.map((item) => {
                return (
                  <div className="w-[200px] flex flex-col items-start m-[10px]">
                    <div className="flex items-center">
                      <HiXCircle className="text-[24px] text-[#BF2020]" />
                      {item}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <div className="flex flex-col items-start gap-0 max-sm:gap-[30px]">
            <div className="flex items-end gap-[30px] max-sm:hidden">
              <NavLink>
                <button className="w-[300px] px-[44px] py-[13px] bg-white hover:bg-[#F5F5F6] group relative">
                  <span className="absolute top-0 left-0 h-[5px] w-[0%] bg-[#8DB338] group-hover:w-[100%]"></span>
                  <h1 className="text-[16px] font-bold text-[#49423D]">
                    Комплектация 0
                  </h1>
                </button>
              </NavLink>
              <NavLink>
                <button className="w-[300px] px-[44px] py-[13px] bg-white hover:bg-[#F5F5F6] group relative">
                  <span className="absolute top-0 left-0 h-[5px] w-[0%] bg-[#8DB338] group-hover:w-[100%]"></span>
                  <h1 className="text-[16px] font-bold text-[#49423D]">
                    Комплектация 1
                  </h1>
                </button>
              </NavLink>
              <NavLink>
                <button className="w-[300px] px-[44px] py-[13px] bg-white hover:bg-[#F5F5F6] group relative">
                  <span className="absolute top-0 left-0 h-[5px] w-[0%] bg-[#8DB338] group-hover:w-[100%]"></span>
                  <h1 className="text-[16px] font-bold text-[#49423D]">
                    Комплектация 2
                  </h1>
                </button>
              </NavLink>
              <NavLink>
                <button className="w-[300px] px-[44px] py-[13px] bg-white hover:bg-[#F5F5F6] group relative">
                  <span className="absolute top-0 left-0 h-[5px] w-[0%] bg-[#8DB338] group-hover:w-[100%]"></span>
                  <h1 className="text-[16px] font-bold text-[#49423D]">
                    Комплектация 3
                  </h1>
                </button>
              </NavLink>
            </div>
            <select className="w-[100%] px-[44px] py-[13px] bg-[#F5F5F6] relative">
              <span className="absolute top-0 left-0 h-[5px] w-[100%] bg-[#8DB338]"></span>
              <option value="Комплектация1">Комплектация1</option>
            </select>
            <div className="w-[1290px] h-[446px] bg-[#F5F5F6] max-sm:w-[328px]">
              {/* <BrowserRouter>
              <Routes>
                <Route path={`/bestSellerItem/${id}/complect1`} element={<Complect1/>}/>
              </Routes>
              </BrowserRouter> */}
            </div>
          </div>
        </div>
        <div className="relative top-[0px] w-[100%] bg-gradient-to-r from-[#8DB338] to-[#739A1D] left-auto">
          <div className="flex items-center m-[60px] justify-center gap-[200px] max-sm:m-[10px] max-sm:flex-col-reverse">
            <Register bgclr={"#FFFFFF"} inpclr={"#F5F5F6"} />
            <div className="flex flex-col items-start text-left gap-[40px] w-[519px] max-sm:w-[100%]">
              <h1 className="text-white text-[40px] max-sm:text-[28px] font-bold">
                Расчёт стоимости <br /> по вашему проекту
              </h1>
              <h1 className="text-white text-[20px] max-sm:text-[16px] font-[350]">
                Мы считаем большим заблуждением, когда клиенты выбирают
                архитектурную студию по стоимости проектирования. В частном
                жилом строительстве есть правило: стоимость проекта составляет
                5−10% от стоимости его реализации.
              </h1>
              <h1 className="text-white text-[20px] max-sm:text-[16px] font-[350]">
                Не откладывайте с реализацией своих задумок, <br /> обращайтесь
                прямо сейчас!
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <div className="flex items-center justify-between w-[1290px] max-sm:w-[328px] max-sm:flex-col max-sm:text-left max-sm:items-start">
            <h1 className="text-[40px] max-sm:text-[28px] font-bold text-[#49423D]">
              Похожие проекты
            </h1>
            <h1 className="text-[20px] font-medium text-[#8DB338]">
              Все похожие проекты
            </h1>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></script>
          <Swipper
            data={allTopSells.filter((item) => {
              return (
                item.typeofBuilding == topSellers.typeofBuilding ||
                item.size == topSellers.size ||
                item.technology == topSellers.technology
              );
            })}
            slidesPerView={window.innerWidth <= 426 ? 1 : 4}
            space={window.innerWidth <= 426 ? 200 : 130}
            isLink={`/bestSellerItem`}
            additionallClass={" w-[1290px] px-[100px] max-sm:w-[320px]"}
          />
        </div>
      </div>
    </div>
  );
}

export default BestSellerItem;
