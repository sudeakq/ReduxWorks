
import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect, useState } from 'react';
import { decrement, increment } from './redux/features/counter/counterSlice';
import { initializeUseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import countrySlice, { getCountry } from './redux/country/countrySlice';

function App() {
const dispatch = useDispatch();


const {counter}= useSelector(state =>state.counter)
const {country}= useSelector(state =>state.country)
 
console.log(country);
useEffect(() => {
  dispatch(getCountry());
}, []);


  return (
    <div className="App">
      <span onClick={()=>dispatch(decrement())}>-</span>
      <span>{counter}</span>
      <span onClick={()=>dispatch(increment())}>+</span>
    </div>
  );
}

export default App;
