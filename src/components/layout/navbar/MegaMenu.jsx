import React from "react";
import { megaMenuData } from "../../../constants/megaMenuData";




const MegaMenu = () => {
  return (
    <div
      className="absolute left-0 top-full mt-4 flex
                     shadow-xl rounded-xl p-8 gap-8 z-50 font-body bg-bg"
    >
      {megaMenuData.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 w-26">
          <h4 className="font-semibold mb-3 onHoverGreen">{item.title}</h4>
          <ul className="space-y-3 text-gray-600">
            {item.items.map((subItem, subIndex) => (
              <li key={subIndex}  className="cursor-pointer onHoverGreenLight" >{subItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
