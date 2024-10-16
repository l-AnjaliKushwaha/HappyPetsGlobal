import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../page/Home.jsx"
import PetHealth from "../page/PetHealth.jsx"
import PetServices from "../page/PetService.jsx"
import AboutUs from "../page/AboutUs.jsx"
import PetEssential from "../page/PetEssential.jsx"


function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/PetHealth" element={<PetHealth/>} />
      <Route path="/PetServices" element={<PetServices/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/PetEssential" element={<PetEssential/>} />
    </Routes>
  );
}

export default Routers
