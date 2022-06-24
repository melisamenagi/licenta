import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: {},
    isLoggedIn: false,
    isFeedbackIntermediar: false
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.user = {};
      state.isLoggedIn = false;
    },
    startFeedbackIntermediar: (state, action) => {
      state.isFeedbackIntermediar = true;
    }
  }
});

export const { signIn, logOut, startFeedbackIntermediar } = sessionSlice.actions;
export default sessionSlice.reducer;
