import Sude from "./components/Sude";
import Deneme from "./components/Deneme";
import { useEffect, useRef, useState } from "react";

function App() {
  const [status,setStatus]= useState("deneme")
  const firstRef = useRef(0);

  useEffect(()=>{
    setStatus("deneme2")
  },[])
  console.log("firstRef",firstRef.current.value = 5)
  const reffunc = () => {
    // firstRef.current
  }
 return(
  <>
  <div>{status}</div>
  <input onClick={reffunc} ref={firstRef} placeholder="ara"/>
  </>
 )

}

export default App;
