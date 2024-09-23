// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        if (action.payload.fromCart) {
          existingItem.quantity += 1;
        } else {
          existingItem.quantity += action.payload.quantity; // Incrementa la quantità se già presente
        }
      } else {
        const newItem = {
          ...action.payload,
          quantity: action.payload.quantity || 1,
        }; // Aggiungi nuovo oggetto con quantità 1
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrementa la quantità
        } else {
          state.items = state.items.filter(
            (item) => item._id !== action.payload._id
          ); // Rimuovi l'elemento se quantità = 0
        }
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
