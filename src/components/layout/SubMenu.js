import React from "react";
import { NavLink } from "react-router-dom";

function SubMenu({ submenu }) {
  if (submenu) {
    console.log(submenu);
    return submenu.map((e) => {
      return (
        <div>
          <h1 className="text-[1.2rem]">{e.name}</h1>
        </div>
      );
    });
  }
}

export default SubMenu;
