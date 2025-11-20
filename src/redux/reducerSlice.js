import {createSlice} from '@reduxjs/toolkit'


const counterSlice= createSlice({
    name:"Redux",
    initialState: {value:0},
    reducers: {
        increament: (state)=> {
            state.value +=1
        },
        decrement: (state)=> {
            state.value -=1
        },
        reset: (state) => {
           state.value = 0;
    },
    }
})


export const {increament, decrement, reset} = counterSlice.actions


export default counterSlice.reducer;