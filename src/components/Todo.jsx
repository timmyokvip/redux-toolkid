import React from "react";
import ManageTodo from "./Todo/ManageTodo";
import TodoItem from "./Todo/TodoItem";
import HeaderTodo from "./Todo/HeaderTodo";

const Todo = () => {
  return (
    <div className="m-16 mt-8">
      <HeaderTodo />
      {/* search && filter */}
      <ManageTodo />
      {/* data todo */}
      <TodoItem />
    </div>
  );
};

export default Todo;
