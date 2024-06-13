import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authReducer";
import cartReducer from "../features/cart/cartSlice";
import specialArReducer from "../features/specialAr/specialArSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cartState: cartReducer,
    specialArState: specialArReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
