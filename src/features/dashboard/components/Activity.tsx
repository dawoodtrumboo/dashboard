"use client";

import { Card, Dropdown, MenuProps, Space, Typography } from "antd";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { dailyData } from "./data";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Item 1",
  },
  {
    key: "2",
    label: "Item 2",
  },
  {
    key: "3",
    label: "Item 3",
  },
];

export default function Activity() {
  const filterData = (data: any, interval: any) => {
    return data.filter((_: any, index: any) => index % interval === 0);
  };

  const filteredData = filterData(dailyData, 1);
  return (
    <div className="md:w-[65%]">
      <Card className="flex-1 shrink-0 ">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Activity</h2>
            <Dropdown
              menu={{
                items,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
              className="bg-white bg-opacity-15 px-4 py-1 rounded-full text-white text-xs "
            >
              <Typography.Link>
                <Space>Weekly</Space>
              </Typography.Link>
            </Dropdown>
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <BarChart data={filteredData}>
                <YAxis dataKey="revenue" />
                <XAxis dataKey="date" interval={1} />
                <Bar
                  dataKey="revenue"
                  fill="#7396FE"
                  className="fill-primary"
                  width={10}
                  shape={<RoundedBar />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </div>
  );
}

const RoundedBar = (props: {
  fill?: string;
  x?: number;
  y?: number;
  height?: number;
  width?: number;
}) => {
  const { fill, x, y, height } = props;

  return (
    <rect
      x={x}
      y={y}
      width="4%"
      height={height}
      rx="12px"
      ry="12px"
      fill={fill}
    />
  );
};
