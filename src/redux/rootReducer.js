import {combineReducers} from 'redux';
import appSlice from './slices/appSlice';
import userSlice from './slices/userSlice';

const rootReducer = combineReducers({
  user: userSlice,
  app: appSlice,
});

export default rootReducer;
