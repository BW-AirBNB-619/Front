import React, { useState, useEffect } from "react";
import axiosWithAuth  from '../utils/axiosWithAuth';
import Listings from "./Listings"

const Dashboard = () => {
    const [Listings, setListings] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/")
            .then(res => {
                setListings(res.data)
                console.log(res)
            })
            .cath(err => console.log(err))
    }, [])

    return (
        <>
            <Listings listings={Listings} updateListings={setListings} />
        </>
    );
};

export default Dashboard;