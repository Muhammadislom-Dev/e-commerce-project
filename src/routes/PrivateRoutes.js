import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile/Profile";

function PrivateRoutes() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default PrivateRoutes;
