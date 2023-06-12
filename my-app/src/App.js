import Sude from "./components/Sude";
import Deneme from "./components/Deneme";
import { useState } from "react";

function App() {
  const [status,setStatus]= useState(false)

 if (status){
  return(
    <div>statu durumu true</div>
  )
 }
 
 else{
  return(
    <div>statu durumu false
      <button onClick={()=> setStatus(!status)}>tıkla</button>
    </div>
    
  )
 }
}

export default App;
