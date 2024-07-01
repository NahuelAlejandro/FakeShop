import { createAction } from "@reduxjs/toolkit";


export const addCart = createAction("addCart", (product)=>{
    return{
        payload: product
    }
})
export const removeCart = createAction("removeCart", (product)=>{
    return{
        payload: product
    }
})
export const removeAllCart = createAction("removeAllCart", (product)=>{
    return{
        payload: product
    }
})

export const addFavorites = createAction("addFavorites", (product)=>{
return{
    payload:product
}
})

export const removeFavorites = createAction("removeFavorites", (product)=>{
return{
    payload:product
}
})