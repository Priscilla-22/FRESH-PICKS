import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const initialState = {
  cartItems: storedCartItems,
  cartTotalQuantity: storedCartItems.reduce((total, item) => total + item.cartQuantity, 0),
  cartTotalAmount: storedCartItems.reduce((total, item) => total + item.cartQuantity * item.price, 0),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.cartQuantity += 1;
        toast.info(`increased quantity of ${name}`, { position: "top-center" });
      } else {
        state.cartItems.push({ id, name, price, image, cartQuantity: 1 });
        toast.success(`Added ${name} in Cart`, { position: "top-center" });
      }
      state.cartTotalQuantity += 1;
      state.cartTotalAmount += price;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.cartItems.find((item) => item.id === action.payload);
      if (itemToRemove) {
        state.cartTotalQuantity -= itemToRemove.cartQuantity;
        state.cartTotalAmount -= itemToRemove.cartQuantity * itemToRemove.price;
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        toast.error(`Successfully removed ${itemToRemove.name} from cart`, { position: "top-left" });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    clearCart(state) {
        state.cartItems = [];
        state.cartTotalQuantity = 0;
        state.cartTotalAmount = 0;
        localStorage.removeItem("cartItems");
        toast.error("Cart is Empty", { position: "bottom-left" });
      },
    decrementItems: (state, action) => {
      const itemToDecrement = state.cartItems.find((item) => item.id === action.payload);
      if (itemToDecrement && itemToDecrement.cartQuantity > 1) {
        itemToDecrement.cartQuantity--;
        state.cartTotalQuantity--;
        state.cartTotalAmount -= itemToDecrement.price;
        toast.error(`Successfully decreased ${itemToDecrement.name} quantity`, { position: "bottom-left" });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    incrementItems: (state, action) => {
      const itemToIncrement = state.cartItems.find((item) => item.id === action.payload);
      if (itemToIncrement) {
        itemToIncrement.cartQuantity++;
        state.cartTotalQuantity++;
        state.cartTotalAmount += itemToIncrement.price;
        toast.success(`Successfully increased ${itemToIncrement.name} quantity`, { position: "bottom-left" });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
});

export const { addToCart, removeFromCart, decrementItems, incrementItems,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
