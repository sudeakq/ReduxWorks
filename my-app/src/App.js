import Sude from "./components/Sude";
import Deneme from "./components/Deneme";
function App() {
  const deneme="props mantigi";
  const clickFunction = () => {
    console.log("sen butona tıkladın")
  }
  return (
    <div className="App">
      {/* component mantigi */}
     <Sude sudeprop={deneme}/>
     <Deneme/>
     <button onClick={clickFunction}>tıkla</button>
    </div>
  );
}

export default App;
