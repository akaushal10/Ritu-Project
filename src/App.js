import React from "react";
import HelloIngle from "./HelloIngle";
import HelloRitu from "./HelloRitu"
import Hello from "./Hello"
import CounterWithClass from "./classComponents/CounterWithClass";
import CounterWithHook from "./classComponents/CounterWithHook";
import Section from "./Section";
export default () => {
  const userData = ["Ingle","Ritu","Neha","Abhishek","Rohan"]
  // const userData = [{userName:"Ritu",age:23}]
  return (
    <div>
      {/* <HelloRitu/> */}
      {/* <HelloIngle/> */}

      {/* <Hello userName="Ingle" age="23" />
      <Hello userName="Ritu" age="23" />
      <Hello userName="Neha" age="23" />
      <Hello userName="Abhishek" age="23" /> */}

      {/* props */}
      {/* {userData.map((value,index)=>{
        return <Hello userName={value} age="23" />
      })} */}
      {/* <CounterWithClass /> */}
      {/* <CounterWithHook/> */}
      <Section/>
    </div>
  );
};
