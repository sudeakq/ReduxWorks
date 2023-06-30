import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import axios from 'axios';



const initialState = {
    country:[]
}
export const getCountry= createAsyncThunk('getCoontry',async()=>{
    const {data}= await axios.get('https://restcountries.com/v3.1/all')
    return data
})
export const countrySlice = createSlice({
    name:"country",
    initialState,
    reducers :{

    },
    extraReducers:(builder)=>{

        builder.addCase(getCountry.fulfilled,(state,action)=>{
            state.country=action.payload
        })
    }
})






 export default countrySlice.reducer