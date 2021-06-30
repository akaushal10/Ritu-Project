import React from "react";
import { Switch,Route } from "react-router-dom";
import HelloRitu from "./HelloRitu";
import HelloIngle from "./HelloIngle";
import Hello from "./Hello";
import Base from "./Base";
import { Counter } from "./Counter";
const RouteList = () => {
  return (
    <>
      <Switch>  
        <Route  exact path="/ritu">
          <HelloRitu />
        </Route>
        <Route  exact path="/ingle">
          <HelloIngle/>
        </Route>
        <Route exact path="/hello/ingle">
            <HelloIngle/>
        </Route>
        <Route  exact path="/">
            <h1 className="text-center">Home Page</h1>
        </Route>

        <Route  exact path="/hello">
            <h1>HEllo Componet</h1>
        </Route>
        <Route  exact path="/hello/:id/:eid">
          <Hello userName="Abhishek" age="21" />
        </Route>
      </Switch>
    </>
  );
};
export default RouteList;
