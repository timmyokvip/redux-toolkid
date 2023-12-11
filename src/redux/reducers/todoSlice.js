import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initState = {
  listTodo: [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      state.listTodo.push({
        id: uuidv4(),
        name: action.payload,
        completed: false,
        important: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
