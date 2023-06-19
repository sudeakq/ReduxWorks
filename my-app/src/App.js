import {useState} from 'react';
import axios from "axios";

function App(){
    const [country,setCountry] = useState([])
    useEffect(() => {
     const getcountry = async() =>{
        const data = await axios.get('https://restcountries.com/v3.1/all')
        setCountry(data)
     }
     getcountry()
    }, [])
    console.log(country,"country")
    
 return(
 <>
{country?.data?.map((dt,i)=>(
    <div key={id}>
{dt.name.common}
    </div>
))}
 </>

 )}

export default App;
