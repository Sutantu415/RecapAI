import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MeetingPage from "./pages/meetingPage";
import ResultPage from "./pages/resultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meetingInfo" element={<MeetingPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;