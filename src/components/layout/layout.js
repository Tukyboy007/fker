import React from "react";
import UpperMenu from "./upperMenu";
import SideMenu from "./sideMenu";

function Layout({ children }) {
  return (
    <>
      <div className="w-full h-screen relative flex">
        <SideMenu />
        <div className="flex w-full h-full flex flex-col">
          <UpperMenu />
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
