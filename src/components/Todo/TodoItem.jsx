import { Space, Table, Tag, message } from "antd";
import React, { useEffect } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  ExclamationOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  completedTodo,
  deleteTodo,
  getTodoLocal,
  importantTodo,
  setEditTodo,
} from "../../redux/reducers/todoSlice";

const TodoItem = () => {
  const dispatch = useDispatch();
  const { listTodo } = useSelector((state) => state.todoSlice);
  const dataSource = listTodo.map((item) => ({
    key: item.id,
    name: item.name,
    completed: item.completed,
    important: item.important,
  }));

  useEffect(() => {
    const getTodo = JSON.parse(localStorage.getItem("todo"));
    if (getTodo) {
      const action = getTodoLocal(getTodo);
      dispatch(action);
    }
  }, []);

  const columns = [
    {
      title: "STT",
      render: (text, data, index) => index + 1,
    },
    {
      title: "Todo",
      dataIndex: "name",
      key: "name",
      render: (text, data) =>
        data.important === true ? (
          <Tag
            color={data.completed === false ? "volcano" : ""}
            className={data.completed === true && "line-through"}
          >
            {text}
          </Tag>
        ) : (
          <Tag
            color={data.completed === false ? "green" : ""}
            className={data.completed === true && "line-through"}
          >
            {text}
          </Tag>
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, data, index) => (
        <Space size="middle">
          <button onClick={() => dispatch(completedTodo(data))}>
            <CheckOutlined className="text-2xl text-blue-400" />
          </button>
          <button onClick={() => dispatch(importantTodo(data))}>
            <ExclamationOutlined className="text-2xl text-red-600" />
          </button>
          <button onClick={() => dispatch(setEditTodo(data))}>
            <EditOutlined className="text-2xl text-yellow-400" />
          </button>
          <button
            onClick={() => (
              dispatch(deleteTodo(data)), message.success("Xóa thành công !!!")
            )}
          >
            <DeleteOutlined className="text-2xl text-red-400" />
          </button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      pagination={
        {
          //   position: ["bottomCenter"],
        }
      }
      dataSource={dataSource}
    />
  );
};

export default TodoItem;
