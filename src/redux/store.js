import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";

const store ={
    products: reducer
}

export default configureStore({
    reducer: store
})