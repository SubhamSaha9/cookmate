import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
    token: null
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser(state, value) {
            state.user = value.payload;
        },
        setToken(state, value) {
            state.token = value.payload;
            console.log(value);
        },
        checkAuth(state, action) {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
    },
});

export const { setUser, checkAuth, setToken } = authSlice.actions;
export default authSlice.reducer;
