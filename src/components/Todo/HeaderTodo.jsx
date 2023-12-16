import { Button, Input, Space, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../../redux/reducers/todoSlice";

const HeaderTodo = () => {
  const { editTodo } = useSelector((state) => state.todoSlice);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if (editTodo !== null) {
      setNewTodo(editTodo.name);
    }
  }, [editTodo]);

  const handleSubmit = () => {
    if (newTodo.trim()) {
      if (editTodo !== null) {
        dispatch(
          updateTodo({
            ...editTodo,
            name: newTodo,
          })
        );
        message.success("Sửa thành công!");
        setNewTodo("");
      } else {
        dispatch(addTodo(newTodo));
        message.success("Thêm thành công!");
        setNewTodo("");
      }
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
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
          ref={inputRef}
        />
        {editTodo !== null ? (
          <Button onClick={() => handleSubmit()}>Update</Button>
        ) : (
          <Button onClick={() => handleSubmit()}>Add</Button>
        )}
      </Space>
    </header>
  );
};

export default HeaderTodo;
