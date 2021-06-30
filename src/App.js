import React from "react";
import RouteList from "./RouteList";
import NavBar from "./NavBar";
import Base from "./Base";
import "./App.css"
import { BrowserRouter } from "react-router-dom";
export default () => {
  const userData = ["Ingle", "Ritu", "Neha", "Abhishek", "Rohan"];
  return (
    <div>
      <BrowserRouter>
        {/* <Base/> */}
        <NavBar/>
        <RouteList/>
      </BrowserRouter>
    </div>
  );
};
