import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    listTodo: [],
    editTodo: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.listTodo.unshift({
        id: uuidv4(),
        name: action.payload,
        completed: false,
        important: false,
      });
      localStorage.setItem("todo", JSON.stringify(state.listTodo));
    },
    setEditTodo: (state, action) => {
      state.editTodo = action.payload;
    },
    updateTodo: (state, action) => {
      const cloneList = [...state.listTodo];
      console.log(cloneList);
      const index = state.listTodo.find(action.payload.key);
      console.log(index);
    },
    getTodoLocal: (state, action) => {
      console.log(action.payload);
      state.listTodo = action.payload;
    },
  },
});

export const { addTodo, getTodoLocal, setEditTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
