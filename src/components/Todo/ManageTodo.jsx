import React, { useState } from "react";
import { Input, Select, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const ManageTodo = () => {
  const [search, setSearch] = useState("");
  const onSearch = (value) => {
    setSearch(value);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Space className="mb-6">
      <Input
        addonBefore={<SearchOutlined />}
        placeholder="Tìm kiếm..."
        onChange={(e) => onSearch(e.target.value)}
        allowClear
        value={search}
      />
      <Select
        defaultValue="all"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "done",
            label: "Done",
          },
          {
            value: "pending",
            label: "Pending",
          },
        ]}
      />
      <p>Total to do: </p>
    </Space>
  );
};

export default ManageTodo;
