import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import passwordReducer from './slices/passwordSlice';
import projectsReducer from './slices/projectsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    password: passwordReducer,
    projects: projectsReducer,
  },
});
