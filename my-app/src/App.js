import Sude from "./components/Sude";
import Deneme from "./components/Deneme";
function App() {
  const deneme="props mantigi";
  const arr= [
    {name:'array1',id:0},
    {name:'array2',id:1},
    {name:'array3',id:2},
  ]
  const clickFunction = () => {
    console.log("sen butona tıkladın")
  }
  return (
    <div className="App">
      {/* component mantigi */}
     <Sude sudeprop={deneme}/>
     <Deneme/>

     {arr.map((ar, i)=>(<div key={i}>{ar.name}</div>))}

     <button onClick={clickFunction}>tıkla</button>
    </div>
  );
}

export default App;
