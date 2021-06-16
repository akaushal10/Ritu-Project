import React, { useState } from "react";
const CounterWithHook = () => {
  const [counter, setCounter] = useState(34);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const [username, setUsername] = useState("");
  const handleUSername = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div className="container text-center">
      <div className="">
        <p className="h1 my-5">Counter</p>
        <button className="btn btn-primary fw-bold" onClick={increment}>
          <span className="h1">+</span>
        </button>
        <span className="mx-5">{counter}</span>
        <button className="btn btn-primary fw-bold" onClick={decrement}>
          <span className="h1">-</span>
        </button>
        <div className="text-left">
          <label>UserName</label>
          <input
            className="form-control"
            type="text"
            value={username}
            onChange={handleUSername}
            placeholder="Enter Email"
          />
        </div>
        <div>{username}</div>
      </div>
    </div>
  );
};
export default CounterWithHook;
