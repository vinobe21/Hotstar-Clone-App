import { createSlice } from "@reduxjs/toolkit";

//initial state of user
const initialState = {
    name: "",
    email: "",
    photo: ""
};

//createSlice -> when user loged in and logout details store the reducers
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        }, //When user is logged in set the details
        setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }, // When user is logged out set the details
    },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

//these 3 data send to components/Header.js
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;