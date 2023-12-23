import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './slices/projectsSlice';
import userCredentialReducer from './slices/userCredentialsSlice';
export const store = configureStore({
  reducer: {
    user: userCredentialReducer,
    projects: projectsReducer,
  },
});
