import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Context } from "../context/Context";
function MenuUls({ h1, lis }) {
  const [open, setOpen] = useState(false)
  const {isOpener } = useContext(Context);
  return (
    <div className="flex flex-col items-start max-sm:items-center gap-[10px]">
      {h1&& h1.map(item =>{return(<h1 className="text-[20px] text-[#8DB338] flex items-center" onClick={()=>{setOpen(!open)}}>{item} {window.innerWidth <= 426? open? <MdKeyboardArrowUp/>:<MdKeyboardArrowDown/>:<></>}</h1>)})}
      <ul className={`w-[300px] text-[#49423D] text-[16px] flex max-sm:${open? "flex":"hidden"} flex-col items-start max-sm:items-center gap-[12px]`}>
        {lis &&
          lis.map((item) => {
            return (
              <NavLink to={item.linkPath}>
                <li onClick={isOpener}>{item.linkName}</li>
              </NavLink>
            );
          })}
      </ul>
    </div>
  );
}

export default MenuUls;
