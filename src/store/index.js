
import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
	counter : 0,
	show : true
}

const counterSlice = createSlice({
	name : 'counter',
	initialState,
	reducers : {
		increment (state){
			state.counter++;
		},
		decrement (state){
			state.counter--;
		},
		increase (state, action){
			state.counter = state.counter + action.amount;
		},
		decrease (state, action){
			state.counter = state.counter - action.amount;
		},
		show (state){
			state.show = !state.show;
		}
	}
})




const store = configureStore({
	reducer:  counterSlice.reducer
});

export default store;