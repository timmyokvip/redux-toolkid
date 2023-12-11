import { Table } from "antd";
import React from "react";

const TodoItem = (props) => {
  const { columns, dataSource } = props;
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
