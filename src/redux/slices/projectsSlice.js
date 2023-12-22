import { createSlice } from '@reduxjs/toolkit';
import { projects } from '../../data/data';

const initialState = {
  projects: projects,
};

export const projectsSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
