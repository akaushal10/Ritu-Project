import React from "react";
import { Link } from "react-router-dom";
const Base = () => {
  return (
    <>
      <div className="d-flex justify-content-evenly border p-4 my-5">
        <div className="">
          <Link to="/hello">Hello</Link>
        </div>
        <div className="">
          <Link to="/ingle">Ingle</Link>
        </div>
        <div className="">
          <Link to="/ritu">Ritu</Link>
        </div>
        <div className="">
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  );
};
export default Base;
