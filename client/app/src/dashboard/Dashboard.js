import React from "react"
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar"
import { Navigate } from "react-router-dom";
import Profil from "../components/NavBar/Profil";
import "./Dashboard.css"

function Dashboard(){
    return(
        <>
            <Navbar />
            {/* <Profil /> */}
            {/* <div className="dashboard-container"> */}
            <Outlet />
            {/* </div> */}
        </>
    )
}

export default Dashboard