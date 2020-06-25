import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Listings } from "./Listings";
import DashboardStyle from "./Styles/DashboardStyle";

const Dashboard = () => {
  return (
    <>
      <DashboardStyle>
        <Listings />
      </DashboardStyle>
    </>
  );
};

export default Dashboard;
