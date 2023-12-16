import { createSlice, current } from "@reduxjs/toolkit";
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
      const cloneList = [...current(state.listTodo)];
      const index = state.listTodo.findIndex(
        (item) => item.id === action.payload.key
      );
      if (index !== -1) {
        cloneList[index] = {
          ...cloneList[index],
          name: action.payload.name,
          completed: false,
        };
        state.listTodo = cloneList;
      }
      state.editTodo = null;
    },
    deleteTodo: (state, action) => {
      const deleteTodo = state.listTodo.filter(
        (item) => item.id !== action.payload.key
      );
      state.listTodo = deleteTodo;
    },
    completedTodo: (state, action) => {
      const todoId = action.payload.key;
      state.listTodo = state.listTodo.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
    importantTodo: (state, action) => {
      state.listTodo = state.listTodo.map((todo) => {
        if (todo.id === action.payload.key) todo.important = !todo.important;
        return todo;
      });
    },
    searchTodo: (state, action) => {},
    filterTodo: (state, action) => {},
    getTodoLocal: (state, action) => {
      console.log(action.payload);
      state.listTodo = action.payload;
    },
  },
});

export const {
  addTodo,
  getTodoLocal,
  setEditTodo,
  updateTodo,
  deleteTodo,
  completedTodo,
  importantTodo,
  searchTodo,
  filterTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
