import React, { useState } from "react";
import { Button, Input, Space } from "antd";
import ManageTodo from "./Todo/ManageTodo";
import { columns } from "./common/common";
import TodoItem from "./Todo/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  console.log(listTodo, "count");
  const { listTodo } = useSelector((state) => state.todoSlice);
  // rồi ông
  const [newTodo, setNewTodo] = useState("");
  const dataSource = [
    {
      key: 1,
      name: "name",
      completed: false,
      important: false,
    },
  ];

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()));
      setNewTodo("");
    }
  };

  return (
    <div className="w-[1280px] m-auto mt-8">
      <header className="mb-4 text-center">
        <h1 className="text-2xl">Todo list</h1>
        <Space>
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add Todo..."
            style={{
              width: 304,
            }}
          />
          <Button onClick={() => handleAddTodo()}>Add</Button>
        </Space>
      </header>
      {/* search && filter */}
      <ManageTodo />
      {/* data todo */}
      <TodoItem columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default Todo;
