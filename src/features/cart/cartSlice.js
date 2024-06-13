import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  oldListName: "",
  list_id: "",
};
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  // initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      const { drug } = action.payload;
      const product = state.cartItems.find(
        (i) => i.productID === drug.productID
      );
      if (product) {
        toast.warning("Item is already added to cart");
      } else {
        state.cartItems.push(drug);
        state.numItemsInCart += 1;
        toast.success("Item added to cart");
      }
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      // // localStorage.removeItem("cart");
      // // state.cartItems = defaultState
      // console.log("clearCart ya weld",action.payload);
      return defaultState;
    },
    removeItem: (state, action) => {
      const { productID } = action.payload;
      const product = state.cartItems.find((i) => i.productID === productID);
      if (product) {
        state.cartItems = state.cartItems.filter(
          (i) => i.productID !== productID
        );
        state.numItemsInCart -= 1;
        toast.success("Item removed from cart");
      } else {
        toast.error("item not found in cart");
        return;
      }
    },
    editList: (state, action) => {
      // const oldList = action.payload;
      // state.cartItems = oldList
      state.cartItems = action.payload.content;
      state.numItemsInCart = state.cartItems.length;
      state.oldListName = action.payload.Description;
      state.list_id = action.payload._id;

      console.log(state.cartItems);
      console.log(state.cartItems.length);
      console.log(state.oldListName);
      console.log(state.list_id);
    },
  },
});

export const { addItem, clearCart, removeItem, editList } = cartSlice.actions;

export default cartSlice.reducer;
