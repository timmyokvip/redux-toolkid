import { Space, Table, Tag } from "antd";
import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  ExclamationOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setEditTodo } from "../../redux/reducers/todoSlice";

const TodoItem = (props) => {
  const { dataSource } = props;
  const dispatch = useDispatch();

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
          <button>
            <CheckOutlined className="text-2xl text-blue-400" />
          </button>
          <button>
            <ExclamationOutlined className="text-2xl text-red-600" />
          </button>
          <button onClick={() => dispatch(setEditTodo(data))}>
            <EditOutlined className="text-2xl text-yellow-400" />
          </button>
          <button>
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
