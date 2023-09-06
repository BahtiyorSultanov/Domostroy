import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineExitToApp, MdMenu, MdClose } from "react-icons/md";
import { TbArrowsLeftRight, TbPhone } from "react-icons/tb";
import { RiSearchLine } from "react-icons/ri";
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Context } from "../context/Context";
import { NavLink } from "react-router-dom";
import MenuUls from "./MenuUls";
function Navbar() {
  const { isOpen, color, changeColor, isOpener } = useContext(Context);
  return (
    <div className="absolute top-0 left-0 w-[100%] h-[80px] flex flex-col max-sm:h-[60px] items-center max-sm:pl-[20px]">
      <div className="flex flex-col items-center gap-[40px]">
        <div className="flex items-end justify-end gap-[100px] max-sm:justify-between max-sm:px-[40px] max-sm:gap-[40px]">
          <div className="flex items-center gap-[15px] text-[#8DB338] max-sm:hidden">
            {isOpen ? (
              <MdClose
                className="text-[24px] cursor-pointer"
                onClick={isOpener}
              />
            ) : (
              <MdMenu
                className="text-[24px] cursor-pointer"
                onClick={isOpener}
              />
            )}
            <RiSearchLine className="text-[20px] cursor-pointer" />
            <button className="focus:bg-[#8DB338] focus:text-white text-[12px] font-bold p-[7px]"></button>
            <button className="focus:bg-[#8DB338] focus:text-white text-[12px] font-bold p-[7px]">
              EN
            </button>
          </div>
          <NavLink to="/">
            <img
              src="http://127.0.0.1:5500/src/assets/Logo.svg"
              className=" m-[0px auto]"
            />
          </NavLink>
          <div className="flex gap-[15px] text-[24px] text-[#8DB338] sm:hidden">
            <TbPhone />
            {isOpen ? (
              <MdClose onClick={isOpener} />
            ) : (
              <MdMenu onClick={isOpener} />
            )}
          </div>
          <Drawer open={isOpen} direction="top" className="">
            <div className="w-[100%]">
              <div className="flex flex-col items-center gap-[80px] px-[75px] py-[40px] max-sm:hidden">
                <div className="flex items-center justify-between w-[100%]">
                  <button className="w-[410px] px-[45px] py-[12px] focus:bg-[#8DB338] text-[16px] focus:text-white text-[#909090] bg-[#F5F5F6]">
                    Построить
                  </button>
                  <button className="w-[410px] px-[45px] py-[12px] focus:bg-[#8DB338] text-[16px] focus:text-white text-[#909090] bg-[#F5F5F6]">
                    Купить
                  </button>
                  <button className="w-[410px] px-[45px] py-[12px] focus:bg-[#8DB338] text-[16px] focus:text-white text-[#909090] bg-[#F5F5F6]">
                    Арендовать
                  </button>
                </div>
                <div className="flex items-start flex-wrap w-[100%] gap-x-[180px] gap-y-[50px]">
                  <MenuUls
                    h1={[
                      "DOMOSBOR - Магазин",
                      "DOMOSBOR - Магазин",
                      "Типы строений",
                    ]}
                    lis={[
                      { linkName: "Дома", linkPath: "/homes" },
                      { linkName: "Бани", linkPath: "/baths" },
                      { linkName: "Гаражи", linkPath: "/garages" },
                      { linkName: "Навесы", linkPath: "/canopies" },
                      {
                        linkName: "Коммерческие объекты",
                        linkPath: "/commercial",
                      },
                    ]}
                  />

                  <MenuUls
                    h1={["Технологии"]}
                    lis={[
                      { linkName: "Клееный брус", linkPath: "/glulam" },
                      { linkName: "Лафет", linkPath: "/lafet" },
                      { linkName: "Рубленное бревно", linkPath: "/log" },
                      { linkName: "Каркасные", linkPath: "/frame" },
                      { linkName: "CLT панели", linkPath: "/clt-panels" },
                      {
                        linkName: "Панельно-каркасные",
                        linkPath: "/panel-frame",
                      },
                      { linkName: "Kelo (кело)", linkPath: "/kelo" },
                    ]}
                  />

                  <MenuUls
                    h1={["Магазин"]}
                    lis={[
                      { linkName: "Фермы на МЗП", linkPath: "/roof-trusses" },
                      {
                        linkName: "Наружная отделка",
                        linkPath: "/exterior-finishing",
                      },
                      {
                        linkName: "Отделка бань и саун",
                        linkPath: "/sauna-finishing",
                      },
                      { linkName: "Термодревисина", linkPath: "/thermo-wood" },
                      { linkName: "Терраса", linkPath: "/terrace" },
                      {
                        linkName: "Крашенная древисина",
                        linkPath: "/painted-wood",
                      },
                      {
                        linkName: "Внутренняя отделка",
                        linkPath: "/interior-finishing",
                      },
                      { linkName: "Окна", linkPath: "/windows" },
                    ]}
                  />

                  <MenuUls
                    h1={["Сервис"]}
                    lis={[
                      { linkName: "О сервисе", linkPath: "/about" },
                      { linkName: "Галерея", linkPath: "/gallery" },
                      { linkName: "Блог", linkPath: "/blog" },
                      { linkName: "Отзывы", linkPath: "/reviews" },
                      { linkName: "Услуги", linkPath: "/services" },
                    ]}
                  />

                  <MenuUls
                    h1={["Информация"]}
                    lis={[
                      { linkName: "Оплата", linkPath: "/payment" },
                      { linkName: "Документы", linkPath: "/documents" },
                      { linkName: "Контакты", linkPath: "/contacts" },
                      { linkName: "Сотрудничество", linkPath: "/partnership" },
                    ]}
                  />

                  <MenuUls
                    h1={["Партнеры сервиса"]}
                    lis={[
                      { linkName: "Архитекторы", linkPath: "/architects" },
                      { linkName: "Дизайнеры", linkPath: "/designers" },
                      { linkName: "Заводы", linkPath: "/factories" },
                    ]}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-[80px] w-[100%] px-[16px] py-[30px] sm:hidden">
                <div className="flex flex-col items-center w-[100%]">
                  <div className="flex items-center w-[100%] justify-between">
                    <div className="flex items-center">
                      <button className="focus:bg-[#8DB338] focus:text-white text-[12px] font-bold p-[7px]">
                        RU
                      </button>
                      <button className="focus:bg-[#8DB338] focus:text-white text-[12px] font-bold p-[7px]">
                        EN
                      </button>
                    </div>
                    <div className="flex items-center gap-[15px]">
                      <button className="text-[#8DB338]">
                        <TbArrowsLeftRight />
                      </button>
                      <button className="text-[#8DB338]">
                        <AiOutlineHeart />
                      </button>
                      <button className="text-[#8DB338]">
                        <MdOutlineExitToApp />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-start items-end gap-[10px] w-[100%]">
                    <RiSearchLine className="text-[20px] text-[#8DB338]" />
                    <input
                      placeholder="Поиск..."
                      type="text"
                      className="border-b-2 border-[#8DB338] text-[14px] text-[#909090] w-[100%]"
                    />
                  </div>
                  <div>
                    <div className="flex flex-col text-center">
                      <h1 className="text-[20px] text-[#49423D] font-bold">
                        8 (800) 301-50-51
                      </h1>
                      <h1 className="text-[#8DB338] text-[12px]">
                        Заказать обратный звонок
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center flex-wrap w-[100%] gap-x-[180px] gap-y-[50px]">
                  <NavLink>
                    <h1 className="text-[20px] text-[#8DB338]">
                      DOMOSBOR - Магазин
                    </h1>
                  </NavLink>
                  <NavLink>
                    <h1 className="text-[20px] text-[#8DB338]">
                      DOMOSBOR - Магазин
                    </h1>
                  </NavLink>
                  <MenuUls
                    h1={["Типы строений"]}
                    lis={[
                      { linkName: "Дома", linkPath: "/homes" },
                      { linkName: "Бани", linkPath: "/baths" },
                      { linkName: "Гаражи", linkPath: "/garages" },
                      { linkName: "Навесы", linkPath: "/canopies" },
                      {
                        linkName: "Коммерческие объекты",
                        linkPath: "/commercial",
                      },
                    ]}
                  />

                  <MenuUls
                    h1={["Технологии"]}
                    lis={[
                      { linkName: "Клееный брус", linkPath: "/glulam" },
                      { linkName: "Лафет", linkPath: "/lafet" },
                      { linkName: "Рубленное бревно", linkPath: "/log" },
                      { linkName: "Каркасные", linkPath: "/frame" },
                      { linkName: "CLT панели", linkPath: "/clt-panels" },
                      {
                        linkName: "Панельно-каркасные",
                        linkPath: "/panel-frame",
                      },
                      { linkName: "Kelo (кело)", linkPath: "/kelo" },
                    ]}
                  />

                  <MenuUls
                    h1={["Магазин"]}
                    lis={[
                      { linkName: "Фермы на МЗП", linkPath: "/roof-trusses" },
                      {
                        linkName: "Наружная отделка",
                        linkPath: "/exterior-finishing",
                      },
                      {
                        linkName: "Отделка бань и саун",
                        linkPath: "/sauna-finishing",
                      },
                      { linkName: "Термодревисина", linkPath: "/thermo-wood" },
                      { linkName: "Терраса", linkPath: "/terrace" },
                      {
                        linkName: "Крашенная древисина",
                        linkPath: "/painted-wood",
                      },
                      {
                        linkName: "Внутренняя отделка",
                        linkPath: "/interior-finishing",
                      },
                      { linkName: "Окна", linkPath: "/windows" },
                    ]}
                  />

                  <MenuUls
                    h1={["Сервис"]}
                    lis={[
                      { linkName: "О сервисе", linkPath: "/about" },
                      { linkName: "Галерея", linkPath: "/gallery" },
                      { linkName: "Блог", linkPath: "/blog" },
                      { linkName: "Отзывы", linkPath: "/reviews" },
                      { linkName: "Услуги", linkPath: "/services" },
                    ]}
                  />

                  <MenuUls
                    h1={["Информация"]}
                    lis={[
                      { linkName: "Оплата", linkPath: "/payment" },
                      { linkName: "Документы", linkPath: "/documents" },
                      { linkName: "Контакты", linkPath: "/contacts" },
                      { linkName: "Сотрудничество", linkPath: "/partnership" },
                    ]}
                  />

                  <MenuUls
                    h1={["Партнеры сервиса"]}
                    lis={[
                      { linkName: "Архитекторы", linkPath: "/architects" },
                      { linkName: "Дизайнеры", linkPath: "/designers" },
                      { linkName: "Заводы", linkPath: "/factories" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </Drawer>
          <div className="flex gap-[15px] max-sm:hidden">
            <button className="text-[#8DB338]">
              <TbArrowsLeftRight />
            </button>
            <button className="text-[#8DB338]">
              <AiOutlineHeart />
            </button>
            <button className="text-[#8DB338]">
              <MdOutlineExitToApp />
            </button>
            <div className="flex flex-col text-right">
              <h1 className="text-[20px] text-[#49423D] font-bold">
                8 (800) 301-50-51
              </h1>
              <h1 className="text-[#8DB338] text-[12px]">
                Заказать обратный звонок
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
