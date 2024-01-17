import React from "react";
import { NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";

function NavMenu({ menu, open }) {
  const [drop, setDrop] = React.useState(null);
  console.log(drop);

  return menu.map((e, index) => {
    return (
      <div className="w-full flex flex-col justify-center pl-2  " key={index}>
        <NavLink
          className={"text-[1.4rem] flex flex-col flex items-center bg-[white]"}
          to={e.url}
        >
          <div
            className={`flex w-full transition-bg hover:bg-[#f1f5f8] hover:rounded-l-[100px] duration-300  p-4 ${
              drop === index ? "rounded-l-[100px] bg-[#f1f5f8]" : ""
            } ${open ? "" : "justify-center"}`}
            onClick={() => {
              if (drop === null) {
                setDrop(index);
              } else if (drop === index) {
                setDrop(null);
              } else {
                setDrop(index);
              }
            }}
          >
            <img
              className="w-[2.5rem] h-[2.5rem] object-contain"
              src={e.iconurl}
              alt="logo"
            />
            <h1 className={`text-[#1974C7] ${open ? "" : "hidden"}`}>
              {e.name}
            </h1>
          </div>
          <div
            className={`w-full px-[15%] transition-all duration-300 delay-1000 ${
              drop === index ? "scale-100" : "scale-0 hidden"
            }`}
          >
            <SubMenu submenu={e.sub} />
          </div>
        </NavLink>
      </div>
    );
  });
}

export default NavMenu;
