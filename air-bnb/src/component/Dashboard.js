import React, { useState, useEffect } from "react";
import axiosWithAuth  from '../utils/axiosWithAuth';
import { Listings } from "./Listings"

const Dashboard = () => {
    

    return (
       
        <>
            <Listings />
        </>
    );
};

export default Dashboard;