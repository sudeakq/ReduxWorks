import {useState} from 'react';

function App() {
    const [text,setText]=useState("")
    const [message,setMessage]=useState()
    console.log(text,"text")

    const onChangeFunc = (e) =>{
        setText{e.target.value}
    }

    const messageFunc=()=>{
        setMessage{prev=>[...prev,text]}
        setText('')
    }
    console.log(message,"message")
  
 return(
  <>
  <input value={text} onChange={onChangeFunc} type="text" placeholder="ekle"/>
  <button onClick={messageFunc}>ekle</button>
  {
    message?.map((msg,i) =>(
        <div key={i}{msg}></div>
    ))
    
  }
  </>
 )

}

export default App;
