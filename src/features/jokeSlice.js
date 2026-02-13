import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchJoke = createAsyncThunk("joke/fetch",async (category)=>{
    let url = "https://api.chucknorris.io/jokes/random"
    if(category){
        url += `?category=${category}`
    }
    const res = await fetch(url)
    const data = await res.json();
    return data.value
})

const jokeSlice = createSlice({
    name:"joke",
    initialState:{
        text:"",
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
          .addCase(fetchJoke.pending,(state)=>{
            state.status = "pending"
          })
          .addCase(fetchJoke.fulfilled,(state,action)=>{
            state.status = "succeeded"
            state.text = action.payload
          })
          .addCase(fetchJoke.rejected,(state,action)=>{
            state.status = "Failed"
            state.error = action.payload
          })

          
    }
})

export default jokeSlice.reducer