import React from "react";
import { Table as AntTable, Tag, Avatar } from "antd";
import type { TableProps } from "antd";
import { UserRounded } from "solar-icon-set";

interface DataType {
  key: string;
  customer: string;
  orderno: number;
  amount: number;
  status: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",

    render: (text) => (
      <div className="flex items-center gap-2">
        <Avatar className="lex" size={32} icon={<UserRounded />} />
        <a className="text-white">{text}</a>
      </div>
    ),
  },
  {
    title: "Order No.",
    dataIndex: "orderno",
    key: "orderno",

    render: (orderno) => <a className="text-white">{orderno}</a>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",

    render: (amount) => <a className="text-white">${amount}</a>,
  },
  {
    title: "status",
    key: "status",
    dataIndex: "status",

    render: (_, { status }) => (
      <>
        {status.map((tag) => {
          let color = tag === "Delivered" ? "green" : "red";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag
              color={color}
              key={tag}
              className={`rounded-full bg-${color}-500 text-${color}-500 font-bold bg-opacity-40 px-3 `}
            >
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    customer: "John Brown",
    orderno: 32,
    amount: 2000,
    status: ["Delivered"],
  },
  {
    key: "2",
    customer: "Jim Green",
    orderno: 42,
    amount: 3400,
    status: ["Cancelled"],
  },
  {
    key: "3",
    customer: "Joe Black",
    orderno: 32,
    amount: 1390,
    status: ["Pending"],
  },
  {
    key: "4",
    customer: "Joe Black",
    orderno: 32,
    amount: 1390,
    status: ["Pending"],
  },
  {
    key: "3",
    customer: "Joe Black",
    orderno: 32,
    amount: 1390,
    status: ["Delivered"],
  },
];

const Table: React.FC = () => (
  <AntTable
    columns={columns}
    dataSource={data}
    pagination={false}
    scroll={{ y: 300 }}
  />
);

export default Table;
