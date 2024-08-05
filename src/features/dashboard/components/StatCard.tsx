import { Card, ConfigProvider, Flex } from "antd";
import React from "react";
import { AltArrowDown, AltArrowUp } from "solar-icon-set";

type StatCardProps = {
  icon: React.ReactNode;
  color: string;
  title: string;
  value: number;
  percentage: number;
  increase: boolean;
};

const StatCard: React.FC<StatCardProps> = ({
  icon,
  color,
  title,
  value,
  percentage,
  increase,
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            paddingLG: 16,
          },
        },
      }}
    >
      <Card className="w-[46%] lg:w-[47%] lg:max-w-[200px]">
        <Flex vertical gap={12} justify="space-between">
          <div className="space-y-1 text-white font-semibold">
            <div
              style={{ backgroundColor: `${color}40` }}
              className="w-10 h-10 flex items-center justify-center rounded-lg "
            >
              {icon}
            </div>
            <p>{title}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-white text-2xl font-bold">{value}</p>
            <div
              className={`flex items-center gap-1 font-semibold ${
                increase ? "text-green-500" : "text-red-500"
              }`}
            >
              {increase ? (
                <AltArrowUp iconStyle="BoldDuotone" />
              ) : (
                <AltArrowDown iconStyle="BoldDuotone" />
              )}

              <span>{percentage}%</span>
            </div>
          </div>
        </Flex>
      </Card>
    </ConfigProvider>
  );
};

export default StatCard;
