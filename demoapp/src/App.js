import React from "react";
import { add, sub, div, mul } from "./Cal"

const App = () => {
  return (
    <>
      <ul>
        <li>Sum is : {add(20, 5)}</li>
        <li>Sub is : {sub(20, 55)}</li>
        <li>Div is : {div(20, 5)}</li>
        <li>Mul is : {mul(20, 5)}</li>
      </ul>
    </>
  );
}

export default App;

