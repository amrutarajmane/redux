import { createSlice } from "@reduxjs/toolkit";

export const taskFeatureKey = "task";

const initialState = {
  loading: false,
  error: false,
  taskList: [],
};

const taskSlice = createSlice({
  name: taskFeatureKey,
  initialState,
  reducers: {
    getAllTasks: (state) => {
      state.loading = true;
      state.error = false;
    },
    getAllTasksSuccess: (state, action) => {
      state.loading = false;
      state.taskList = action.payload;
    },
    getAllTasksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action to add a task 
    addTask: (state) => {
      state.loading = true;
      state.error = false;
    },
    addTaskSuccess: (state, action) => {
      state.loading = false;
      state.taskList.action.payload; // Append the new task
    },
    addTaskFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // New Delete Task Actions
    deleteTask: (state) => {
      state.loading = true;
      state.error = false;
    },
    deleteTaskSuccess: (state, action) => {
      state.loading = false;
      state.taskList = state.taskList.filter((task) => task.id !== action.payload);
    },
    deleteTaskFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Edit Task
    editTask: (state) => {
      state.loading = true;
      state.error = false;
    },
    editTaskSuccess: (state, action) => {
      state.loading = false;
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    editTaskFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const TaskActions = taskSlice.actions;
export default taskSlice;
