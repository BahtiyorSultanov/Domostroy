import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Slider from "../Components/Slider";
import SliderComponent from "../Components/Slider";
import BuildingSelect from "../Components/BuildingSelect";
import SurfaceSelect from "../Components/SurfaceSelect";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Register from "../Components/Register";
import QuestionMenu from "../Components/QuestionMenu";
import { projectFirestore } from "../Firebase/Config";
function Home() {
  const [data, setData] = useState([]);
  let result = [];
  useEffect(() => {
    projectFirestore
      .collection("buildingTricks").onSnapshot((data) => {
        if (!data.empty) {
          data.docs.forEach((item) => {
            result.push(item.data());
            setData(result);
          });
        } else {
        }
      });
  });
  return (
    <div className="absolute top-[80px] left-0 flex flex-col items-center gap-[100px]">
      <div className="">
        <div className="border-[2px] m-[40px] mt-[350px] px-[20px] py-[20px] flex flex-col gap-[60px] bg-white max-sm:w-[328px] max-sm:m-0">
          <div className="flex items-center gap-[472px] max-sm:hidden">
            <div className="flex gap-[40px] max-sm:flex-col">
              <button className="w-[190px] py-[13px] bg-[#F5F5F6] focus:bg-[#8DB338] focus:text-white focus:font-bold text-[16px] text-[#49423D]">
                Построить
              </button>
              <button className="w-[190px] py-[13px] bg-[#F5F5F6] focus:bg-[#8DB338] focus:text-white focus:font-bold text-[16px] text-[#49423D]">
                Купить
              </button>
              <button className="w-[190px] py-[13px] bg-[#F5F5F6] focus:bg-[#8DB338] focus:text-white focus:font-bold text-[16px] text-[#49423D]">
                Арендовать
              </button>
            </div>
            <div className="flex items-center gap-[40px]">
              <button className="text-[20px]">
                <HiOutlineMenuAlt1 />
              </button>
              <h1 className="text-[14px] text-[#49423D]">Расширенный поиск</h1>
            </div>
          </div>
          <select className="px-[44px] py-[13px] bg-[#8DB338] text-white text-[16px] font-bold">
            <option value="Построить">Построить</option>
            <option value="Бани">Бани</option>
            <option value="Гаражи">Гаражи</option>
            <option value="Навесы">Навесы</option>
            <option value="Навесы">Коммерческие объекты</option>
          </select>
          <div className="flex items-start gap-[40px] max-sm:flex-col">
            <div className="flex flex-col text-left gap-[10px]">
              <h1>Тип строения</h1>
              <BuildingSelect />
            </div>
            <div className="flex flex-col text-left gap-[10px]">
              <h1>Габариты, м</h1>
              <SurfaceSelect />
            </div>
            <div className="flex flex-col items-start text-left gap-[10px]">
              <h1>Общая площадь, м²</h1>
              <div className="flex items-center w-[300px] px-[16px] py-[9px] bg-[#F5F5F6] justify-between text-[14px] font-light">
                <h1>от 100</h1>
                <h1>до 1000</h1>
              </div>
              <SliderComponent />
            </div>
            <div className="flex flex-col items-start text-left gap-[10px]">
              <h1>Стоимость, ₽</h1>
              <div className="flex items-center w-[300px] px-[16px] py-[9px] bg-[#F5F5F6] justify-between text-[14px] font-light">
                <h1>от 100 000</h1>
                <h1>до 1 000 000</h1>
              </div>
              <SliderComponent />
            </div>
            <button className="w-[190px] py-[9px] bg-[#F5F5F6] focus:bg-[#8DB338] focus:text-white focus:font-bold text-[16px] text-[#49423D]">
              Построить
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[20px]">
        <h1 className="text-[40px] font-bold">Типы строений</h1>
        <div className="flex items-center gap-[50px] max-sm:hidden">
          <div className="relative w-[234px] h-[312px]">
            <span className="absolute left-[20px] text-[20px] text-white font-semibold top-[20px] px-[12px] py-[4px] bg-[#8DB338]">
              332
            </span>
            <img
              src="http://127.0.0.1:5500/src/assets/Image%20(2).svg"
              className="w-[100%]"
            />
            <h1 className="text-[20px] font-bold absolute bottom-[20px] left-[20px]">
              Дома
            </h1>
          </div>
          <div className="relative w-[234px] h-[312px]">
            <span className="absolute left-[20px] text-[20px] text-white font-semibold top-[20px] px-[12px] py-[4px] bg-[#8DB338]">
              332
            </span>
            <img
              src="http://127.0.0.1:5500/src/assets/Image%20(2).svg"
              className="w-[100%]"
            />
            <h1 className="text-[20px] font-bold absolute bottom-[20px] left-[20px]">
              Дома
            </h1>
          </div>
          <div className="relative w-[234px] h-[312px]">
            <span className="absolute left-[20px] text-[20px] text-white font-semibold top-[20px] px-[12px] py-[4px] bg-[#8DB338]">
              332
            </span>
            <img
              src="http://127.0.0.1:5500/src/assets/Image%20(2).svg"
              className="w-[100%]"
            />
            <h1 className="text-[20px] font-bold absolute bottom-[20px] left-[20px]">
              Дома
            </h1>
          </div>
          <div className="relative w-[234px] h-[312px]">
            <span className="absolute left-[20px] text-[20px] text-white font-semibold top-[20px] px-[12px] py-[4px] bg-[#8DB338]">
              332
            </span>
            <img
              src="http://127.0.0.1:5500/src/assets/Image%20(2).svg"
              className="w-[100%]"
            />
            <h1 className="text-[20px] font-bold absolute bottom-[20px] left-[20px]">
              Дома
            </h1>
          </div>
          <div className="relative w-[234px] h-[312px]">
            <span className="absolute left-[20px] text-[20px] text-white font-semibold top-[20px] px-[12px] py-[4px] bg-[#8DB338]">
              332
            </span>
            <img
              src="http://127.0.0.1:5500/src/assets/Image%20(2).svg"
              className="w-[100%]"
            />
            <h1 className="text-[20px] font-bold absolute bottom-[20px] left-[20px]">
              Дома
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[20px]">
        <h1 className="text-[40px] font-bold">Технологии строительства</h1>
        <div className="flex items-center w-[1300px] flex-wrap gap-[20px] max-sm:w-[420px]">
          {data.map((item) => {
            return (
              <div className="w-[410px] h-[120px] relative flex items-center">
                <h1 className="absolute text-[20px] text-[#49423D] left-[20px]">
                  {item.text}
                </h1>
                <img src={item.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-start gap-[20px]">
        <h1 className="text-[40px] font-bold">Полезные ссылки</h1>
        <div className="flex items-center">
          <div className="flex flex-col items-center w-[234px] border-[2px] gap-[20px]">
            <img src="" className="w-[100%] h-[150px]" />
            <ul className="flex flex-col items-start gap-[10px]">
              <li className="text-[16px] font-semibold">По этажности дома</li>
              <li className="text-[14px] underline">Одноэтажные</li>
              <li className="text-[14px] underline">Одноэтажные</li>
              <li className="text-[14px] underline">Одноэтажные</li>
              <li className="text-[14px] underline">Одноэтажные</li>
              <li className="text-[14px] underline">Одноэтажные</li>
              <li className="text-[14px] underline">Одноэтажные</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[20px]">
        <h1 className="text-[40px] font-bold">Хиты продаж</h1>
        <Swiper
          spaceBetween={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex items-center">
              <div className="flex flex-col items-center w-[234px] border-[2px] gap-[20px]">
                <img src="" className="w-[100%] h-[150px]" />
                <ul className="flex flex-col items-start gap-[10px]">
                  <li className="text-[14px] ">Одноэтажные</li>
                  <li className="text-[14px] ">Одноэтажные</li>
                  <li className="text-[14px] ">Одноэтажные</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col items-start gap-[20px] max-sm:w-[100%]">
        <h1 className="text-[40px] font-bold">Наши преимущества</h1>
        <div className="flex items-center gap-[100px] max-sm:flex-col">
          <div className="flex items-center flex-wrap gap-[50px] w-[880px] max-sm:flex-col max-sm:w-[100%]">
            <div className="flex items-center gap-[40px]">
              <div className="w-[80px] h-[80px] bg-[#8DB338] text-[64px] text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex flex-col gap-[10px] items-start">
                <h1 className="text-[#585858] text-[20px]">Ассортимент</h1>
                <h1 className="text-[#585858] text-[14px] text-left">
                  Домокомплекты из самых разных <br /> пород древесины.
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-[40px]">
              <div className="w-[80px] h-[80px] bg-[#8DB338] text-[64px] text-white flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex flex-col gap-[10px] items-start">
                <h1 className="text-[#585858] text-[20px]">Ассортимент</h1>
                <h1 className="text-[#585858] text-[14px] text-left">
                  Домокомплекты из самых разных <br /> пород древесины.
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-[40px]">
              <div className="w-[80px] h-[80px] bg-[#8DB338] text-[64px] text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex flex-col gap-[10px] items-start">
                <h1 className="text-[#585858] text-[20px]">Ассортимент</h1>
                <h1 className="text-[#585858] text-[14px] text-left">
                  Домокомплекты из самых разных <br /> пород древесины.
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-[40px]">
              <div className="w-[80px] h-[80px] bg-[#8DB338] text-[64px] text-white flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex flex-col gap-[10px] items-start">
                <h1 className="text-[#585858] text-[20px]">Ассортимент</h1>
                <h1 className="text-[#585858] text-[14px] text-left">
                  Домокомплекты из самых разных <br /> пород древесины.
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-[40px]">
              <div className="w-[80px] h-[80px] bg-[#8DB338] text-[64px] text-white flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex flex-col gap-[10px] items-start">
                <h1 className="text-[#585858] text-[20px]">Ассортимент</h1>
                <h1 className="text-[#585858] text-[14px] text-left">
                  Домокомплекты из самых разных <br /> пород древесины.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-[40px] font-semibold absolute">Domosbor</h1>
            <img src="http://127.0.0.1:5500/src/assets/logoderevo.svg" />
          </div>
        </div>
      </div>
      <div className="mt-[100px] w-[100%] h-[100%] bg-gradient-to-r from-[#8DB338] to-[#739A1D] relative z-[10] max-sm:w-[425px]">
        <div className="flex items-center m-[60px] justify-center gap-[200px] max-sm:flex-col-reverse">
          <Register bgclr={"#FFFFFF"} inpclr={"#F5F5F6"} />
          <div className="flex flex-col items-start text-left gap-[40px] w-[519px] max-sm:w-[328px]">
            <h1 className="text-white text-[40px] font-bold">
              Расчёт стоимости <br /> по вашему проекту
            </h1>
            <h1 className="text-white text-[20px] font-[350]">
              Мы считаем большим заблуждением, когда клиенты выбирают
              архитектурную студию по стоимости проектирования. В частном жилом
              строительстве есть правило: стоимость проекта составляет 5−10% от
              стоимости его реализации.
            </h1>
            <h1 className="text-white text-[20px] font-[350]">
              Не откладывайте с реализацией своих задумок, <br /> обращайтесь
              прямо сейчас!
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-end gap-[150px] max-sm:flex-col-reverse">
        <div className="w-[590px] text-[#49423D] text-left flex flex-col gap-[50px] max-sm:w-[328px]">
          <h1 className="text-[40px] font-bold">О сервисе</h1>
          <h1>
            <b>DOMOSBOR</b> — уникальный сервис, который объединяет лучших
            производителей домокомплектов (частные дома, дачи, бани, гаражи,
            навесы, коммерческие постройки), архитекторов, дизайнеров,
            девелоперов, строителей и застройщиков. На нашем официальном сайте
            можно заказать услуги российских и иностранных компаний. Здесь
            всё понятно на интуитивном уровне, благодаря чему несложно подобрать
            для себя подходящее решение и заказать интересующие вас услуги.
          </h1>
          <h1>
            Сегодня <b>DOMOSBOR</b> — это 30 производителей, 8 технологий
            деревянного домостроения, 1253 проектных предложений в разных
            ценовых сегментах от российских и зарубежных производителей.
            Мы не ограничиваемся одной технологией строительства, а смотрим
            на все существующие методы строительства деревянных домов. Чему
            отдать предпочтение? Решать только вам!
          </h1>
          <h1>
            Выбирайте необходимые вам параметры (географическое положение,
            окружающий ландшафт) и сравнивайте приглянувшиеся проекты. С нами
            дом мечты — реальность! Не откладывайте с реализацией своих задумок,
            обращайтесь прямо сейчас!
          </h1>
          <button className="bg-[#8DB338] w-[350px] py-[9px] text-white text-[14px] font-bold">
            Подробнее
          </button>
        </div>
        <img
          src=""
          className="w-[630px] h-[630px] max-sm:w-[328px] max-sm:h-[230px]"
        />
      </div>
      <div className="flex flex-col items-start gap-[70px]">
        <div className="flex flex-col gap-[40px]">
          <div className="flex w-[1290px] justify-between max-sm:w-[400px] max-sm:flex-col max-sm:items-start">
            <h1 className="text-[24px] text-[#49423D]">Архитекторы</h1>
            <h1 className="text-[14px] text-[#8DB338]">Все архитекторы</h1>
          </div>
          <div className="flex items-center max-sm:flex-col max-sm:items-start">
            <div className="max-sm:w-[328px] max-sm:h-[118px] w-[410px] h-[150px] bg-[#F5F5F6] flex items-center justify-between px-[20px]">
              <div className="text-left">
                <h1>Кроссовский Виктор</h1>
                <h1>Санкт-Петербург</h1>
              </div>
              <img src="http://127.0.0.1:5500/src/assets/Image%20(5).svg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div className="flex w-[1290px] justify-between max-sm:w-[400px] max-sm:flex-col max-sm:items-start">
            <h1 className="text-[24px] text-[#49423D]">Архитекторы</h1>
            <h1 className="text-[14px] text-[#8DB338]">Все архитекторы</h1>
          </div>
          <div className="flex items-center max-sm:flex-col max-sm:items-start">
            <div className="max-sm:w-[328px] max-sm:h-[118px] w-[410px] h-[150px] bg-[#F5F5F6] flex items-center justify-between px-[20px]">
              <div className="text-left">
                <h1>Кроссовский Виктор</h1>
                <h1>Санкт-Петербург</h1>
              </div>
              <img src="http://127.0.0.1:5500/src/assets/Image%20(5).svg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div className="flex w-[1290px] justify-between max-sm:w-[400px] max-sm:flex-col max-sm:items-start">
            <h1 className="text-[24px] text-[#49423D]">Архитекторы</h1>
            <h1 className="text-[14px] text-[#8DB338]">Все архитекторы</h1>
          </div>
          <div className="flex items-center max-sm:flex-col max-sm:items-start">
            <div className="max-sm:w-[328px] max-sm:h-[118px] w-[410px] h-[150px] bg-[#F5F5F6] flex items-center justify-between px-[20px]">
              <div className="text-left">
                <h1>Кроссовский Виктор</h1>
                <h1>Санкт-Петербург</h1>
              </div>
              <img src="http://127.0.0.1:5500/src/assets/Image%20(5).svg" />
            </div>
          </div>
        </div>
        <button className="bg-[#8DB338] w-[350px] py-[9px] text-white text-[14px] font-bold">
          Стать партнером сервиса
        </button>
      </div>
      <div className="flex flex-col items-start gap-[20px] w-[1290px] max-sm:w-[400px]">
        <div className="flex w-[100%] justify-between items-center max-sm:flex-col max-sm:items-start">
          <h1 className="text-[40px] font-bold">Блог</h1>
          <h1 className="text-[28px] font-semibold text-[#8DB338]">
            Все блоги
          </h1>
        </div>
        <div className="flex items-center">
          {/* <div className="flex flex-col items-center w-[234px] border-[2px] gap-[20px] max-sm:hidden">
            <img src="" className="w-[234px] h-[234px]" />
            <div className="text-left my-[10px]">
              <h1 className="text-[16px] font-[600] text-[#49423D]">
                My House
              </h1>
              <h1 className="text-[14px] font-[400] text-[#909090]">
                Переосмысленный сарай с уютным характером
              </h1>
            </div>
          </div> */}
          <Swiper
            spaceBetween={1}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex items-center">
                <div className="flex flex-col items-center w-[234px] border-[2px] gap-[20px]">
                  <img src="" className="w-[234px] h-[234px]" />
                  <div className="text-left my-[10px]">
                    <h1 className="text-[16px] font-[600] text-[#49423D]">
                      My House
                    </h1>
                    <h1 className="text-[14px] font-[400] text-[#909090]">
                      Переосмысленный сарай с уютным характером
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[20px] w-[1290px] max-sm:w-[400px]">
        <div className="flex w-[100%] justify-between items-center max-sm:flex-col max-sm:items-start">
          <h1 className="text-[40px] font-bold">Отзывы</h1>
          <h1 className="text-[28px] font-semibold text-[#8DB338]">
            Все отзывы
          </h1>
        </div>
        <div className="flex items-center">
          {/* <div className="flex flex-col items-center w-[234px] border-[2px] gap-[20px] max-sm:hidden">
            <video src="" className="w-[234px] h-[360px]"></video>
            <div className="text-left my-[10px]">
              <h1 className="text-[16px] font-[600] text-[#49423D]">
                My House
              </h1>
              <h1 className="text-[14px] font-[400] text-[#909090]">
                Переосмысленный сарай с уютным характером
              </h1>
            </div>
          </div> */}
          <Swiper
            spaceBetween={1}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col items-center w-[234px] border-[2px] gap-[20px]">
                <video src="" className="w-[234px] h-[360px]"></video>
                <div className="text-left my-[10px]">
                  <h1 className="text-[16px] font-[600] text-[#49423D]">
                    My House
                  </h1>
                  <h1 className="text-[14px] font-[400] text-[#909090]">
                    Переосмысленный сарай с уютным характером
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[50px]">
        <h1 className="text-[40px] font-bold">Частые вопросы</h1>
        <div className="flex items-start gap-[100px] w-[1290px] max-sm:w-[400px] max-sm:flex-col">
          <div className="flex flex-col items-start gap-[30px]">
            <QuestionMenu
              question={"Вопрос 1 ?"}
              menuInfo={<video src="" className="w-[730px] h-[400px]"></video>}
            />
            <QuestionMenu
              question={"Вопрос 1 ?"}
              menuInfo={<video src="" className="w-[730px] h-[400px]"></video>}
            />
            <QuestionMenu
              question={"Вопрос 1 ?"}
              menuInfo={<video src="" className="w-[730px] h-[400px]"></video>}
            />
          </div>
          <div className="flex flex-col items-start gap-[30px]">
            <div className="text-left">
              <h1 className="text-[24px] text-[#49423D] font-[600]">
                Не нашли нужный ответ?
              </h1>
              <h1 className="text-[16px] text-[#49423D] font-[500]">
                Мы готовы ответить на любой ваш вопрос!
              </h1>
            </div>
            <Register bgclr={"#F5F5F6"} inpclr={"white"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
