import React, { useEffect, useState } from 'react';
import { Outlet, Route, Routes } from "react-router";
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import "antd/dist/antd.css";
// import * as React from "react";
// 1. import `NextUIProvider` component
// import { NextUIProvider } from "@nextui-org/react";
// import { Navbar, Button, Link, Text } from "@nextui-org/react";
// import { Layout } from "./components/Layout.js";
// import { AcmeLogo } from "./components/AcmeLogo.js";

import "./index.css";
import './App.css';
import Home from "./Pages/Home";
import PresidentLogin from "./Pages/PresidentLogin";
import AdminLogin from "./Pages/AdminLogin";
import AdminPanel from "./Pages/AdminPanel";
import Club from "./Pages/Club";
import StudentMail from "./Pages/StudentMail";
import UserContext from './UserContext';
import { fetUserData } from "./api";


function App({ Component }) {
  const [ user, setUser ] = useState({ isLoading: true });

  const fetchActiveUserData = () => {
    fetUserData().then((res) => setUser({ ...res.data, isLoading: false }));
  }

  useEffect(() => {
    fetchActiveUserData();
  }, []);

  // const [variant] = React.useState("floating");

  // const variants = ["floating"];
  // 2. Use at the root of your app

  const AdminLayout = () => {
    const { user } = useContext(UserContext);
    if(user.isLoading === true) {
      return null;
    }
    return user.isAuth && user.type === 'admin' ? <Outlet /> : <Navigate to='/adminlogin'/>
  }

  return (
    // <NextUIProvider>
    //   <Component />
    // </NextUIProvider>

    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Home callback={fetchActiveUserData}/>}/>
        <Route path="/presidentlogin" element={<PresidentLogin callback={fetchActiveUserData}/>}/>
        <Route path="/adminlogin" element={<AdminLogin callback={fetchActiveUserData}/>}/>
        <Route element={<AdminLayout/>}>
          <Route path="/adminpanel" element={<AdminPanel callback={fetchActiveUserData}/>} />
        </Route>
        <Route path="/codingclub" element={<Club id="codingclub" displayName="CODING CLUB" callback={fetchActiveUserData}/>}/>
        <Route path="/sportsclub" element={<Club id="sportsclub" displayName="SPORTS CLUB" callback={fetchActiveUserData}/>}/>
        <Route path="/culturalclub" element={<Club id="culturalclub" displayName="CULTURAL CLUB" callback={fetchActiveUserData}/>}/>
        <Route path="/personalityclub" element={<Club id="personalityclub" displayName="PERSONALITY CLUB" callback={fetchActiveUserData}/>}/>
        <Route path="/editorialclub" element={<Club id="editorialclub" displayName="EDITORIAL CLUB" callback={fetchActiveUserData}/>}/>
        <Route path="/facultyclub" element={<Club id="facultyclub" displayName="FACULTY CLUB" callback={fetchActiveUserData}/>}/>
        <Route path="/ecell" element={<Club id="ecell" displayName="E-CELL" callback={fetchActiveUserData}/>}/>
        <Route path="/tpcell" element={<Club id="tpcell" displayName="T&P-CELL" callback={fetchActiveUserData}/>}/>
        <Route path="/studentmail" element={<StudentMail callback={fetchActiveUserData}/>}/>
      </Routes>
    </UserContext.Provider>



      );
}

export default App;
