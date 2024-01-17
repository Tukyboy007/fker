import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../../utils/menu";
import NavMenu from "./NavMenu";

export default function SideMenu() {
  const [click, setClick] = useState(true);

  return (
    <div
      className={`h-screen overflow-auto bg-[white] transition-width duration-300  ${
        click ? "w-[30%]" : "w-[10%]"
      }`}
    >
      <nav className="w-full">
        <div className="flex justify-center items-center p-4 relative -space-x-6">
          <img
            className="w-[5rem] h-[6rem] object-contain"
            src="./logo.png"
            alt="logo"
            onClick={() => (click ? setClick(false) : setClick(true))}
          />
          <div
            className={`flex flex-col w-full transition-display duration-300 h-full justify-center items-center text-[1.2rem] tracking-tighter title font-bold text-[green] ${
              click ? "flex" : "hidden"
            }`}
          >
            <h1>Улсын хил хамгаалалтын</h1>
            <h1>цахим удирдлага</h1>
          </div>
        </div>
        <div className="w-[80%] flex justify-center items-center mx-[8%] h-[0.7px] bg-[#ced4da]"></div>
        <NavMenu menu={menu} open={click} />
      </nav>
      <div className="w-full">1</div>
    </div>
  );
}
