// Main Imports
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.find((el) => el.ID === action.payload.ID);
      if (isExist) {
        return alert("This Product Already Exist");
      } else {
        action.payload.Quantity = 1;

        const neededIngred = action?.payload?.Ingridents?.filter(
          (ing) => ing.Quantity > 0
        );

        const price = neededIngred.reduce((prev, curr) => {
          return prev + curr.Quantity * curr.Price;
        }, action.payload.DefaultPrice * action.payload.Quantity);

        action.payload.Price = price;
        return [...state, action.payload];
      }
    },
    increment: (state, action) => {
      return state.map((el) => {
        if (el.ID === action.payload) {
          return {
            ...el,
            Quantity: el.Quantity + 1,
          };
        }
        return el;
      });
    },
    decrement: (state, action) => {
      const product = state.find((el) => el.ID === action.payload);
      if (product.Quantity > 1) {
        return state.map((el) => {
          if (el.ID === action.payload) {
            return {
              ...el,
              Quantity: el.Quantity - 1,
            };
          }
          return el;
        });
      }
      if (product.Quantity <= 1) {
        const confirm = window.confirm("Delete This From Cart??");
        return confirm ? state.filter((el) => el.ID !== action.payload) : state;
      }
      return state;
    },
    deleteFood: (state, action) => {
      return state.filter((el) => el.ID !== action.payload);
    },
  },
});

export const { addToCart, increment, decrement, deleteFood } =
  cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
