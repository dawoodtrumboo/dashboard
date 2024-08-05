import { ConfigProvider, Progress } from "antd";
import { useEffect, useState } from "react";
import { AltArrowDown, AltArrowUp } from "solar-icon-set";

const ProfitCard = ({
  increase = true,
  value = 23220,
  percentage = "3",
  goal = 44322,
}) => {
  const [size, setSize] = useState(100);

  const { innerWidth } = window;

  useEffect(() => {
    if (innerWidth > 1024) {
      setSize(80);
    } else {
      setSize(120);
    }
  }, [innerWidth]);
  return (
    <ConfigProvider
      theme={{
        components: {
          Progress: {
            circleTextColor: "#fff",
          },
          Card: {
            paddingLG: 0,
          },
        },
      }}
    >
      <div className="sm:w-[35%] bg-[#1F2029] rounded-2xl p-[12px] flex flex-row sm:flex-col justify-evenly lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col gap-2 justify-between sm:justify-normal xl:justify-between w-full h-full">
          <h5 className="text-white">Net Profit</h5>
          <h3 className="text-3xl text-white font-bold">$ {value}</h3>

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
        <div className="flex flex-col w-full items-center justify-center gap-2">
          <Progress
            type="circle"
            percent={parseInt(((value / goal) * 100).toFixed(0))}
            strokeColor="#7396FE"
            strokeWidth={12}
            trailColor="#2A3263"
            className="text-white"
            size={size}
          />
          <span className="text-xs text-gray-300 font-semibold w-full text-center ">
            The values has been rounded off.
          </span>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default ProfitCard;
