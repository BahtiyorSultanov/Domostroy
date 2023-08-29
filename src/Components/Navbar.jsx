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
function Navbar() {
  const { isOpen, color, changeColor, isOpener } = useContext(Context);
  console.log(isOpen);
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
            <button className="focus:bg-[#8DB338] focus:text-white text-[12px] font-bold p-[7px]">
              
            </button>
            <button className="focus:bg-[#8DB338] focus:text-white text-[12px] font-bold p-[7px]">
              EN
            </button>
          </div>
          <img
            src="http://127.0.0.1:5500/src/assets/Logo.svg"
            className=" m-[0px auto]"
          />
          <div className="flex gap-[15px] text-[24px] text-[#8DB338] sm:hidden">
            <TbPhone />
            {isOpen ? <MdClose onClick={isOpener}/> : <MdMenu onClick={isOpener} />}
          </div>
          <Drawer open={isOpen} direction="top" className="">
            <div className="">
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
                  <ul className="w-[300px] text-[#49423D] text-[16px] flex flex-col items-start gap-[12px]">
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
                    <h1 className="text-[20px] text-[#8DB338]">
                      Типы строений
                    </h1>
                    <NavLink>
                      <li>Дома</li>
                    </NavLink>
                    <NavLink>
                      <li>Бани</li>
                    </NavLink>
                    <NavLink>
                      <li>Гаражи</li>
                    </NavLink>
                    <NavLink>
                      <li>Навесы</li>
                    </NavLink>
                    <NavLink>
                      <li>Коммерческие объекты</li>
                    </NavLink>
                  </ul>
                  <ul className="w-[300px] text-[#49423D] text-[16px] flex flex-col items-start gap-[12px]">
                    <h1 className="text-[20px] text-[#8DB338]">Технологии</h1>
                    <NavLink>
                      <li>Клееный брус</li>
                    </NavLink>
                    <NavLink>
                      <li>Лафет</li>
                    </NavLink>
                    <NavLink>
                      <li>Лафет</li>
                    </NavLink>
                    <NavLink>
                      <li>Рубленное бревно</li>
                    </NavLink>
                    <NavLink>
                      <li>Каркасные</li>
                    </NavLink>
                    <NavLink>
                      <li>CLT панели</li>
                    </NavLink>
                    <NavLink>
                      <li>Панельно-каркасные</li>
                    </NavLink>
                    <NavLink>
                      <li>Kelo (кело)</li>
                    </NavLink>
                  </ul>
                  <ul className="w-[300px] text-[#49423D] text-[16px] flex flex-col items-start gap-[12px]">
                    <h1 className="text-[20px] text-[#8DB338]">Магазин</h1>
                    <NavLink>
                      <li>Фермы на МЗП</li>
                    </NavLink>
                    <NavLink>
                      <li>Фермы на МЗП</li>
                    </NavLink>
                    <NavLink>
                      <li>Отделка бань и саун</li>
                    </NavLink>
                    <NavLink>
                      <li>Термодревисина</li>
                    </NavLink>
                    <NavLink>
                      <li>Терраса</li>
                    </NavLink>
                    <NavLink>
                      <li>Крашенная древисина</li>
                    </NavLink>
                    <NavLink>
                      <li>Внутренняя отделка</li>
                    </NavLink>
                    <NavLink>
                      <li>Окна</li>
                    </NavLink>
                  </ul>
                  <ul className="w-[300px] text-[#49423D] text-[16px] flex flex-col items-start gap-[12px]">
                    <h1 className="text-[20px] text-[#8DB338]">Сервис</h1>
                    <NavLink>
                      <li>О сервисе</li>
                    </NavLink>
                    <NavLink>
                      <li>Галерея</li>
                    </NavLink>
                    <NavLink>
                      <li>Галерея</li>
                    </NavLink>
                    <NavLink>
                      <li>Блог</li>
                    </NavLink>
                    <NavLink>
                      <li>Отзывы</li>
                    </NavLink>
                    <NavLink>
                      <li>Услуги</li>
                    </NavLink>
                  </ul>
                  <ul className="w-[300px] text-[#49423D] text-[16px] flex flex-col items-start gap-[12px]">
                    <h1 className="text-[20px] text-[#8DB338]">Информация</h1>
                    <NavLink>
                      <li>Оплата</li>
                    </NavLink>
                    <NavLink>
                      <li>Документы</li>
                    </NavLink>
                    <NavLink>
                      <li>Контакты</li>
                    </NavLink>
                    <NavLink>
                      <li>Контакты</li>
                    </NavLink>
                  </ul>
                  <ul className="w-[300px] text-[#49423D] text-[16px] flex flex-col items-start gap-[12px]">
                    <h1 className="text-[20px] text-[#8DB338]">
                      Партнеры сервиса
                    </h1>
                    <NavLink>
                      <li>Архитекторы</li>
                    </NavLink>
                    <NavLink>
                      <li>Дизайнеры</li>
                    </NavLink>
                    <NavLink>
                      <li>Заводы</li>
                    </NavLink>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[80px] px-[16px] py-[30px] sm:hidden">

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
