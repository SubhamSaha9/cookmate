import { createSlice } from "@reduxjs/toolkit";

interface IUser {
    _id: string;
    __v: number;
    createdAt: string;
    updatedAt: string;
    email: string;
    image: string;
    userName: string;
    credits: number,
}

interface AuthState {
    user: IUser | null;
    token: string | null;
}
const initialState: AuthState = {
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
        },
        checkAuth(state, action) {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
    },
});

export const { setUser, checkAuth, setToken } = authSlice.actions;
export default authSlice.reducer;
