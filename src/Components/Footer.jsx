import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer absolute left-0 mt-[100px] w-[100%] h-[581px] bg-[#1C1C1C] flex flex-col items-center gap-[100px] pt-[70px] max-sm:w-[100%] max-sm:h-[2125px]">
      <div className="flex items-start gap-[70px] relative max-sm:flex-col">
        <ul className="footUl">
          <NavLink to={'/'}>
            <li>
              <img
                src="http://127.0.0.1:5500/src/assets/Logo.svg"
                className="w-[137px] h-[40px]"
              />
            </li>
          </NavLink>
          <li className="hover:text-[#8DB338] text-[12px] text-[#F5F5F6]">
            ООО «Основа»
          </li>
          <li className="hover:text-[#8DB338] text-[12px] text-[#F5F5F6]">
            ИНН: 7814791026
          </li>
          <li className="hover:text-[#8DB338] text-[12px] text-[#F5F5F6]">
            ОГРН: 12178000762401
          </li>
          <li className="hover:text-[#8DB338] text-[12px] text-[#F5F5F6]">
            Сервис DOMOSBOR
          </li>
        </ul>
        <ul className="footUl">
          <h1 className="text-[16px] text-[#8DB338] font-semibold">
            Типы строений
          </h1>
          <NavLink>
            <li className="hover:text-[#8DB338]">Дома</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338]">Бани</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338]">Гаражи</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338]">Навесы</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338] w-[100px]">
              Коммерческие объекты
            </li>
          </NavLink>
        </ul>
        <ul className="footUl">
          <h1 className="text-[16px] text-[#8DB338] font-semibold">Сервис</h1>
          <NavLink>
            <li className="hover:text-[#8DB338]">О сервисе</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338]">Галерея</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338]">Блог</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338]">Отзывы</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338]">Услуги</li>
          </NavLink>
        </ul>
        <ul className="footUl">
          <h1 className="text-[16px] text-[#8DB338] font-semibold">
            Информация
          </h1>
          <NavLink>
            <li className="hover:text-[#8DB338]">Оплата</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338]">Документы</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338]">Контакты</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338]">Сотрудничество</li>
          </NavLink>
        </ul>
        <ul className="footUl">
          <h1 className="text-[16px] text-[#8DB338] font-semibold">
            Партнеры сервиса
          </h1>
          <NavLink>
            <li className="hover:text-[#8DB338]">Архитекторы</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338]">Дизайнеры</li>
          </NavLink>
          <NavLink>
            <li className="hover:text-[#8DB338]">Заводы</li>
          </NavLink>
        </ul>
        <ul className="text-right items-end flex flex-col gap-[10px] max-sm:text-center max-sm:items-center">
          <h1 className="text-[16px] text-[#8DB338] font-semibold">
            DOMOSBOR - Магазин
          </h1>
          <h1 className="text-[16px] text-[#8DB338] font-semibold">
            DOMOSBOR - Форум
          </h1>
          <div className="">
            <h1 className="text-[20px] text-white font-semibold">
              8 (800) 301-50-51
            </h1>
            <h1 className="text-[12px] text-[#8DB338] font-semibold">
              Заказать обратный звонок
            </h1>
          </div>
          <h1 className="text-[16px] text-white font-semibold">
            info@domosbor.ru
          </h1>
          <h1 className="text-[14px] text-[#F5F5F6] font-semibold w-[145px]">
            Санкт-Петербург, Московский пр. 212,офис 3035
          </h1>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-[20px]">
        <div className="flex items-center max-sm:justify-center gap-[30px] max-sm:flex-wrap max-sm:w-[207px] icons">
          <img src="http://127.0.0.1:5500/src/assets/Odnoklasniki.svg" alt="" />
          <img src="http://127.0.0.1:5500/src/assets/dzen.svg" alt="" />
          <img src="" alt="" />
          <img src="http://127.0.0.1:5500/src/assets/pinterest.svg" alt="" />
          <img src="http://127.0.0.1:5500/src/assets/rlogo.svg" alt="" />
          <img src="http://127.0.0.1:5500/src/assets/youtube.svg" alt="" />
          <img src="http://127.0.0.1:5500/src/assets/instagramm.svg" alt="" />
          <img src="http://127.0.0.1:5500/src/assets/tik-tok.svg" alt="" />
          <img src="http://127.0.0.1:5500/src/assets/wk.svg" alt="" />
          <img src="http://127.0.0.1:5500/src/assets/fbk.svg" alt="" />
          <img src="http://127.0.0.1:5500/src/assets/twitt.svg" alt="" />
        </div>
        <div className="">
          <h1 className="text-[12px] text-[#606060] font-[400]">
            Политика конфиденциальности
          </h1>
          <h1 className="text-[12px] text-[#606060] font-[400]">
            © 2022 «DOMOSBOR». Все права защищены.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
