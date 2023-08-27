import React from "react";

function BuildingSelect() {
  return (
    <div>
      <select className="w-[190px] py-[8px] pl-[16px] bg-[#F5F5F6] text-[14px] text-[#49423D]">
        <option value="Дом">Дом</option>
        <option value="Дом">Бани</option>
        <option value="Дом">Гаражи</option>
        <option value="Дом">Навесы</option>
        <option value="Дом">Комм. объекты</option>
        <option value="Не имеет значения">Не имеет значения</option>
      </select>
    </div>
  );
}

export default BuildingSelect;
