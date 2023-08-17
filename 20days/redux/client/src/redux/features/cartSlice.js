import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

// card slice

const cartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    // add to cart

    addToCart: (state, action) => {
      // console.log(action)

      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      //   console.log(itemIndex)
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        // console.log("temp",temp)
        state.carts = [...state.carts, temp];
      }

      // state.carts =[...state.carts,action.payload]
    },

    // remove a particulart

    removeToCart: (state, action) => {
      const data = state.carts.filter((ele) => ele.id !== action.payload);

      state.carts = data;
    },

    // remove single iteams
    removeSingleIteams: (state, action) => {
      const IteamIndex_dec = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (state.carts[IteamIndex_dec].qnty >= 1) {
        state.carts[IteamIndex_dec].qnty -= 1;
      }
    },
    

       // clear cart
       emptycartIteam:(state,action)=>{
        state.carts = []
    }

  },
});

export const { addToCart, removeToCart, removeSingleIteams,emptycartIteam } =
  cartSlice.actions;

export default cartSlice.reducer;
