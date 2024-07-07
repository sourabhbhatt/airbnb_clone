import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userConfig: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserConfig: (state, action) => {
      state.userConfig = action.payload;
    },
  },
});

export const {setUserConfig} = userSlice.actions;
export default userSlice.reducer;
