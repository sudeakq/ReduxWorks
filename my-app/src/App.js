import Sude from "./components/Sude";
import Deneme from "./components/Deneme";
import {  useMemo,useState } from "react";

function App() {
  const [count,setCount]= useState(0)
  const [text,setText]= useState("")
 

  const func =(num)=>{
    console.log("hesaplanıyor....")
    for (let i = 0; i < 1000000; i++) {
      num+=1
    }
    return num
  }
const memo = useMemo (()=>func(count),[count])

  
 return(
  <>
{memo}
  <input value={text} onChange={e => setText(e.target.value)} placeholder="ara"/>
  </>
 )

}

export default App;
