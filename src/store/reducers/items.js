import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    items: [{name:'item1'}]
}

const usersSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem(state,action) {
        state.items=[...state.items,action.payload]
            state.username = "";
        }
    }})



export const {addItem} = usersSlice.actions
export default usersSlice.reducer