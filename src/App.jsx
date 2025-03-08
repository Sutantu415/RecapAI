import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MeetingPage from "./pages/meetingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meetingInfo" element={<MeetingPage />} />
    </Routes>
  );
}

export default App;