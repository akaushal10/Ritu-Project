import React from "react";
import { useParams } from "react-router-dom";
const Hello = (props) => {
  const { userName, age } = props;
    const nehaDetails = {myname:"Neha",mobile:9743827483,friend:"Ritu"}
    const {myname,mobile} = nehaDetails
    const {id,eid} = useParams()
  return (
    <div>
{      console.log("param : ",id)}
      <h1>
        Hello {userName}: {age}
        {id}
        {myname}
      </h1>
    </div>
  );
};
export default Hello;
