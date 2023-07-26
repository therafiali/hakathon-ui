import { Cart } from "@/app/utils/types";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000);
      let newObj = { ...action.payload, uuid };
      state.push(newObj);
    },
    delItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },
    addCart(state, action) {
      let obj = state.find(
        (val) =>
          val.id == action.payload.id && 
          val.colors == action.payload.colors &&
          val.size[0] == action.payload.size[0]
      );
      if (obj) {
        ++obj.qty;
        let newState = state.filter((val) => val.id !== obj?.id);
        state = [...newState, obj];
      }
    },
      subtractCart(state, action) {
        let obj = state.find(
          (val) =>
            val.id == action.payload.id &&
            val.colors == action.payload.colors &&
            val.size[0] == action.payload.size[0]
        );
        if (obj !== undefined) {
          if (obj.qty <= 1) {
            return state.filter((val) => val.uuid !== obj?.uuid);
          }
          --obj.qty;
          let newState = state.filter((val) => val.uuid == obj?.uuid);
          state = [...newState, obj];
          return;
        }
      },
  },
});

export const { addToCart, delItem,addCart,subtractCart } = cartSlice.actions;

export default cartSlice.reducer;
