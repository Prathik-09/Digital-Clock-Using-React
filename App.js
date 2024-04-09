import { useState } from "react";
const App=()=>{
let time=new Date().toLocaleTimeString();
  const [count, setCount] =useState(time);
  const Updatetime=()=>{
    time=new Date().toLocaleTimeString();
    setCount(time);
  };
  setInterval(Updatetime,1000);
  return(
    <>
    <h1>{count}</h1>
    </>
  )
}
export default App;