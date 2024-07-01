import { createReducer } from "@reduxjs/toolkit";
import { addCart, addFavorites, removeAllCart, removeCart, removeFavorites } from "../actions/actions";

const initialState =  {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
}

const reducer = createReducer(initialState, (builder) =>{
    builder.addCase(addCart, (state, action )=>{ 
        
    const { id } = action.payload;
    const productExist = state.cart.findIndex(product => product.id === id);

    if (productExist !== -1) { 
      state.cart[productExist].quantity += 1;
    } else {
      state.cart.push({ ...action.payload, quantity: 1 })
    }
    localStorage.setItem("cart", JSON.stringify(state.cart));       
    })
    .addCase(removeCart, (state, action )=>{ 
        
    const { id } = action.payload;
    const productExist = state.cart.findIndex(product => product.id === id);

    if (productExist !== -1) { 
      if(state.cart[productExist].quantity > 1){
        state.cart[productExist].quantity -= 1;
      }else{
        state.cart.splice(productExist, 1, )
      }
    } 
    localStorage.setItem("cart", JSON.stringify(state.cart));       
    })
    .addCase(removeAllCart, (state, action )=>{    
    const { id } = action.payload;
    const productExist = state.cart.findIndex(product => product.id === id);

    if (productExist !== -1) { 
      state.cart.splice(productExist, 1, )
    } 
    localStorage.setItem("cart", JSON.stringify(state.cart));       
    })
    .addCase(addFavorites, (state, action)=>{
      const { id } = action.payload;
      const productExist = state.favorites.find(product => product.id === id);
      if (!productExist) {
        state.favorites.push(action.payload)
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));  
    })
    .addCase(removeFavorites, (state, action)=>{
      const { id } = action.payload;
      const productExist = state.favorites.findIndex(product => product.id === id);

      if (productExist !== -1) { 
        state.favorites.splice(productExist, 1, )
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites)); 
    })
})
export default reducer;