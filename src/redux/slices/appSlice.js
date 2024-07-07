import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  hasSeenIntroCarousel: false,
};

export const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setHasSeenIntroCarousel: (state, action) => {
      state.hasSeenIntroCarousel = action.payload;
    },
  },
});

export const {setHasSeenIntroCarousel} = appSlice.actions;
export default appSlice.reducer;
