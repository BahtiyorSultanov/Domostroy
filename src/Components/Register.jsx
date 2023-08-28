import React from "react";
import { FaPlus } from "react-icons/fa";
import { TbBrandTelegram, TbPhoneCall, TbPhone } from "react-icons/tb";
function Register({bgclr, inpclr}) {
  return (
    <div>
      <form className={`p-[30px] relative z-[20]`} style={{background:bgclr}}>
        <div className="flex flex-col items-center gap-[30px] relative z-[7]">
          <input
            placeholder="Имя"
            type="text"
            style={{background:inpclr}}
            className="pl-[16px] w-[350px] max-sm:w-[268px] py-[9px] px-[16px 8px]"
          />
          <input
            placeholder="Имя"
            type="text"
            style={{background:inpclr}}
            className="pl-[16px] w-[350px] max-sm:w-[268px] py-[9px] px-[16px 8px]"
          />
          <input
            placeholder="Имя"
            type="text"
            style={{background:inpclr}}
            className="pl-[16px] w-[350px] max-sm:w-[268px] py-[9px] px-[16px 8px]"
          />
          <input
            placeholder="Имя"
            type="text"
            style={{background:inpclr}}
            className="pl-[16px] w-[350px] max-sm:w-[268px] h-[120px]"
          />
          <div className="flex items-center gap-[30px]">
            <button className="cursor-pointer"><FaPlus className="text-[#8DB338]" /></button>
            <h1 className="text-[14px] text-[#49423D]">Прикрепить файлы</h1>
          </div>
          <button className="bg-[#8DB338] w-[350px] max-sm:w-[268px] py-[9px] text-white text-[14px] font-bold">
            Отправить
          </button>
          <div className="flex items-start gap-[25px] text-[#8DB338]">
            <TbBrandTelegram className="text-[36px]" />
            <TbPhone className="text-[41px] border-[#8DB338] border-[2px] p-[5px] rounded-[20px]" />
            <TbPhoneCall className="text-[41px] border-[#8DB338] border-[2px] p-[5px] rounded-[10px]" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
