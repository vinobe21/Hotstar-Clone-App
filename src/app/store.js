import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

//userReducer data get from userSlice.js file
export default configureStore({
    reducer: {
        user: userReducer,
    }, //store the userReducer in reducer
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
