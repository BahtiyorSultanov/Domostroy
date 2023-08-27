import React from "react";

function SurfaceSelect() {
  return (
    <div>
      <select className="w-[190px] py-[8px] pl-[16px] bg-[#F5F5F6] text-[14px] text-[#49423D]">
        <option value="10x10">10x10</option>
        <option value="15x15">15x15</option>
        <option value="20x20">20x20</option>
        <option value="25x25">25x25</option>
        <option value="30x30">30x30</option>
        <option value="Не имеет значения">Не имеет значения</option>
      </select>
    </div>
  );
}

export default SurfaceSelect;
