import React from "react";

import { Avatar, Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "@src/navigation/SideBar";
import { Bell, Letter, Magnifer, Settings, UserRounded } from "solar-icon-set";
const { Header, Content } = Layout;

const BaseLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <SideBar />

        <Layout>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingInline: "24px",
            }}
          >
            <div className="flex items-center gap-2 h-7 bg-[#292B2F] rounded-md px-2 text-white py-1 w-[150px] md:w-[250px]">
              <Magnifer />
              <input
                className=" h-full !focus-within:outline-none !focus:outline-none !focus-visible:outline-none bg-transparent w-full"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  icon={<Letter />}
                  className="bg-white bg-opacity-25 rounded-full border-none text-white w-[30px] h-[30px]"
                />
                <Button
                  icon={<Settings />}
                  className="bg-white bg-opacity-25 rounded-full border-none text-white w-[30px] h-[30px]"
                />
                <Button
                  icon={<Bell />}
                  className="bg-white bg-opacity-25 rounded-full border-none text-white w-[30px] h-[30px]"
                />
              </div>

              <Avatar
                size={30}
                icon={<UserRounded />}
                className="bg-white bg-opacity-25 rounded-full border-none text-white"
              />
            </div>
          </Header>
          <Content style={{ padding: "0 24px 24px" }}>
            <h1 className="text-2xl font-semibold text-white  py-5">
              Dashboard
            </h1>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
