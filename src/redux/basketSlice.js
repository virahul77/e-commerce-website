import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('amazon')) || {
    loading: false,
    basket: [],
    user: null,
    error: null,
    searchTerm:'',
    category: 'all',
};

const basketSlice = createSlice({
  name: 'amazon',
  initialState,
  reducers: {
    addToBasket(state,action){
        let exInd = state.basket.findIndex(item => item.id === action.payload.id);
        if(exInd >=0 ){
            state.basket[exInd].qty++;
        } 
        else state.basket.push(action.payload);
    },
    removeFromBasket(state,action){
        let exInd = state.basket.findIndex(item => item.id == action.payload);
        if(state.basket[exInd].qty == 1) {
            state.basket = state.basket.filter(item => item.id !== action.payload)
        }
        else state.basket[exInd].qty--;
    },
    emptyBasket(state){
        state.basket = [];
    },
    login(state,action){
        state.user = action.payload;
    },
    logout(state){
        state.user = null;
    },
    setSearchTerm(state,action){
        state.searchTerm = action.payload
    },
    changeCatogery(state,action){
        state.category = action.payload
    }
  }
});

export const {addToBasket,removeFromBasket,emptyBasket,login,logout,setSearchTerm,changeCatogery} = basketSlice.actions

export default basketSlice.reducer