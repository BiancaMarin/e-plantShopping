import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        const plant = action.payload; 
        const existingItem = state.items.find(item => item.name === plant.name);
  
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push({ ...plant, quantity: 1 });
        }
      },
      removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
      },
      updateItemQuantity: (state, action) => {
         const { name, quantity } = action.payload; 
         const itemToUpdate = state.items.find(item => item.name === name); 
      
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity; 
        if (itemToUpdate.quantity <= 0) {
            state.items = state.items.filter(item => item.name !== name); 
          }
        }
    },
  },
});

export const { addItem, removeItem, updateItemQuantity } = CartSlice.actions;

export default CartSlice.reducer;
