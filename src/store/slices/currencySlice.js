import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name:"currency",
    initialState: "INR",
    reducers: {
        //action: (state, action info)=>()
        //state: current data inside the store
        //action_info : some information to the action dispatched
        changeCurrency: (state, action) => {
            return action.payload;
        },
    },
});

//actions are used by components to do the data changes in the store
export const { changeCurrency } = currencySlice.actions;
// reducers is used by the store to manage the data 
export default currencySlice.reducer;




