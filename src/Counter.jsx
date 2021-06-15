import React from "react";

const Counter = () => {
  let counter = 10;
  const increase = () => {
      counter += 1;
      console.log("Increase Called : ",counter);
  };
  const decrease = () => {
      counter -= 1;
      console.log("Descrese Called : ",counter);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button onClick={increase}>+</button>
        <h1>{counter}</h1>
        <button onClick={decrease}>-</button>
      </div>
    </>
  );
};

export { Counter };
