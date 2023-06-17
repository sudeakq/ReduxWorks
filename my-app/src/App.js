import {BrowseRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/detail';
function App() {
  
 return(
  <>
  <BrowseRouter>
  <Route path="/" element={<Home/>} />
  <Route path="Detail/" element={<Detail/>} />
  </BrowseRouter>
  </>
 )

}

export default App;
