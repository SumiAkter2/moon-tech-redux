import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 p-5  ">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-8 w-full bg-gray-100 rounded-lg mx-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
