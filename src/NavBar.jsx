import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="d-flex justify-content-evenly border border-danger p-4 my-5">
        <div className="">
          <NavLink to="/hello" activeClassName="temp">Hello</NavLink>
        </div>
        <div className="">
          <NavLink to="/hello/ingle">Hello-Ingle</NavLink>
        </div>
        <div className="">
          <NavLink to="/ingle"  activeClassName="temp">Ingle</NavLink>
        </div>
        <div className="">
          <NavLink to="/ritu"  activeClassName="temp">Ritu</NavLink>
        </div>
        <div className="" >
          <NavLink to=""  activeClassName="temp">Home</NavLink>
        </div>
      </div>
    </>
  );
};
export default NavBar;
