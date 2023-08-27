import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name : 'counter',
    initialState : {value : 0},
    reducers : {
        increment : (state)=>{
            state.value += 1;
        },
        decrement : (state)=>{
            state.value -= 1;
        },
        addDyn : (state, action)=>{
            state.value+=action.payload;
        },
        addTen : (state)=>{
            state.value+=10;
        }
    }
});

export const {increment, decrement, addDyn, addTen} = counterSlice.actions;
export const selectCount = (state)=>state.counter.value;
export default counterSlice.reducer;