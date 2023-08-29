import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineExitToApp, MdMenu } from "react-icons/md";
import { TbArrowsLeftRight, TbPhone } from "react-icons/tb";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Context } from "../context/Context";
function Navbar() {
  const {isOpen, color, changeColor, isOpener } = useContext(Context);
  console.log(isOpen);
  return (
    <div className="absolute top-0 left-0 w-[100%] h-[80px] flex flex-col max-sm:h-[60px] items-center max-sm:pl-[20px]">
      <div className="flex flex-col items-center gap-[40px]">
        <div className="flex items-end justify-end gap-[100px] max-sm:justify-between max-sm:px-[40px] max-sm:gap-[40px]">
          <div className="flex gap-[15px] max-sm:hidden">
            <button
              onClick={() => {
                isOpener()
              }}
            >
              <MdMenu className="text-[24px] text-[#8DB338]"/>
            </button>
            <button>
              <img src="http://127.0.0.1:5500/src/assets/Search%20(2).svg" />
            </button>
            <button className="focus:bg-[#8DB338] focus:text-white text-[12px] font-bold p-[7px]">
              RU
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
            <MdMenu />
          </div>
          <Drawer
            open={isOpen}
            direction="top"
            className=""
          >
            <div className="flex flex-col">
              <div className="flex items-center">
                <button className="w-[410px] px-[45px] py-[12px] hover:bg-[#8DB3380] text-[16px] hover:text-white text-[#909090] bg-[#F5F5F6]"></button>
                <button className="w-[410px] px-[45px] py-[12px] hover:bg-[#8DB3380] text-[16px] hover:text-white text-[#909090] bg-[#F5F5F6]"></button>
                <button className="w-[410px] px-[45px] py-[12px] hover:bg-[#8DB3380] text-[16px] hover:text-white text-[#909090] bg-[#F5F5F6]"></button>
              </div>
              <div className="flex items-center"></div>
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
