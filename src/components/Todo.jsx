import React, { useEffect, useState } from "react";
import { Button, Input, Space } from "antd";
import ManageTodo from "./Todo/ManageTodo";
import TodoItem from "./Todo/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, getTodoLocal, updateTodo } from "../redux/reducers/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const { listTodo, editTodo } = useSelector((state) => state.todoSlice);
  const [newTodo, setNewTodo] = useState("");

  const dataSource = listTodo.map((item) => ({
    key: item.id,
    name: item.name,
    completed: false,
    important: false,
  }));

  useEffect(() => {
    const getTodo = JSON.parse(localStorage.getItem("todo"));
    if (getTodo) {
      const action = getTodoLocal(getTodo);
      dispatch(action);
    }
  }, []);

  useEffect(() => {
    if (editTodo !== null) {
      setNewTodo(editTodo.name);
    }
  }, [editTodo]);

  const handleSubmit = () => {
    if (newTodo.trim()) {
      if (editTodo !== null) {
        dispatch(updateTodo(editTodo));
        setNewTodo("");
      } else {
        dispatch(addTodo(newTodo.trim()));
        setNewTodo("");
      }
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
          {editTodo !== null ? (
            <Button onClick={() => handleSubmit()}>Update</Button>
          ) : (
            <Button onClick={() => handleSubmit()}>Add</Button>
          )}
        </Space>
      </header>
      {/* search && filter */}
      <ManageTodo />
      {/* data todo */}
      <TodoItem dataSource={dataSource} />
    </div>
  );
};

export default Todo;
