import React from "react";
const Hello = (props) => {
  // local vairblae => state
  const { userName, age } = props;
  // Object Desturing
//   const friends = [{name:"Neha",mobile:9743827483},{name:"Ingle",mobile:83433827483}]
//   const [neha,ingle] = friends
    const nehaDetails = {myname:"Neha",mobile:9743827483,friend:"Ritu"}
    // const mobile =nehaDetails.mobile 
    // const myname = nehaDetails.myname
    const {myname,mobile} = nehaDetails
  return (
    <div>
      <h1>
        Hello {userName}: {age}
        {mobile}
        {myname}
      </h1>
    </div>
  );
};
export default Hello;
