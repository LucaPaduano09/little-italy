// reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  // Aggiungi qui altri riduttori se necessario
});

export default rootReducer;
