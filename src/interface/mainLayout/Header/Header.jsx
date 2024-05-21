import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="shadow-md h-12 flex sticky top-0  items-center justify-between w-full bg-white">
        <h1 className="logo m-5 text-2xl  ">Info4us</h1>
        <NavLink className="flex space-x-7 m-4 font-normal">
          <Link to="/" className="font-normal cursor-pointer text-lg">
            Home
          </Link>
          <Link to="/favourite" className="font-normal cursor-pointer text-lg">
            Favourite
          </Link>
        </NavLink>
      </div>
    </>
  );
}

export default Header;
