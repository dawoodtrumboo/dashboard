import React, { Key, useState } from "react";
import { ConfigProvider, Layout, Menu } from "antd";
import * as SolarIconSet from "solar-icon-set";

const { Sider } = Layout;

type MenuItem = {
  label: string;
  key: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
};

function getItem(
  label: string,
  key: string,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}

const { Item } = Menu;
const SideBar = () => {
  const [isActive, setIsActive] = useState<string | undefined | Key>("/");

  const items: MenuItem[] = [
    getItem(
      "Home",
      "/",
      <SolarIconSet.Home
        iconStyle={`${isActive === "/" ? "BoldDuotone" : "LineDuotone"}`}
        size={20}
      />
    ),
    getItem(
      "Analytics",
      "/analytics",
      <SolarIconSet.ChartSquare
        iconStyle={`${
          isActive === "/analytics" ? "BoldDuotone" : "LineDuotone"
        }`}
        size={20}
      />
    ),
    getItem(
      "Notes",
      "/notes",
      <SolarIconSet.ClipboardCheck
        iconStyle={`${isActive === "/notes" ? "BoldDuotone" : "LineDuotone"}`}
        size={20}
      />
    ),
    getItem(
      "Wallet",
      "/wallet",
      <SolarIconSet.Wallet
        iconStyle={`${isActive === "/wallet" ? "BoldDuotone" : "LineDuotone"}`}
        size={20}
      />
    ),
    getItem(
      "cart",
      "/cart",
      <SolarIconSet.BagCheck
        iconStyle={`${isActive === "/cart" ? "BoldDuotone" : "LineDuotone"}`}
        size={20}
      />
    ),
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryBg: "none",
        },
      }}
    >
      <Sider
        breakpoint="sm"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        width={65}
      >
        <div className="demo-logo-vertical w-10 h-10" />
        <Menu defaultSelectedKeys={["/"]}>
          {items.map((item) => (
            <Item
              onClick={() => setIsActive(item?.key)}
              key={item?.key}
              title={item?.label}
              icon={item?.icon}
              className={`border-l-[#7396FE] mx-0 my-8  h-7 ${
                item?.key === isActive ? "border-l-[3px]" : ""
              }`}
            />
          ))}
        </Menu>
      </Sider>
    </ConfigProvider>
  );
};

export default SideBar;
