import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 p-3 gap-3 ">
      <SideBar />
      <div className="col-span-10 w-full bg-gray-100 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;