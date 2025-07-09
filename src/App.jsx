import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import BitOnMe from "./pages/BitOnMe";
import MenuBar from "./pages/MenuBar";
import HelpSupport from "./pages/HelpSupport";
import ChatbotPage from "./pages/ChatbotPage";
import BabyDetails from "./pages/BabyDetails";
import Settings from "./pages/Settings";
import NutritionPage from "./pages/NutritionPage";
import DoAndDont from "./pages/DoAndDont";
import RhymeTime from './pages/RhymeTime';
import DailyLog from './pages/DailyLog';
import Memories from './pages/Memories';
import FeedTrack from "./pages/FeedTrack";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default redirect to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth + Account Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />

        {/* Core Pages */}
        <Route path="/bitonme" element={<BitOnMe />} />
        <Route path="/menubar" element={<MenuBar />} />
        <Route path="/babydetails" element={<BabyDetails />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/do-and-dont" element={<DoAndDont />} />
        <Route path="/rhyme-time" element={<RhymeTime />} />
        <Route path="/daily-log" element={<DailyLog />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/feed-track" element={<FeedTrack ageInMonths={6} />} />

        {/* Support + Utility Pages */}
        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
