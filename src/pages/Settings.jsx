// src/pages/Settings.jsx
import React, { useState, useEffect } from "react";
import "./Settings.css";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="settings-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h1 className="settings-title">⚙️ Settings</h1>

      <div className="settings-card">
        <div className="setting-item">
          <span>🌗 Dark Mode</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting-item">
          <span>🔔 Notifications</span>
          <label className="switch">
            <input type="checkbox" checked disabled />
            <span className="slider"></span>
          </label>
          <p className="setting-note">(Enabled by default)</p>
        </div>

        <div className="setting-item">
          <span>👤 Account Info</span>
          <button className="action-btn">Edit</button>
        </div>

        <div className="setting-item">
          <span>🔒 Change Password</span>
          <button className="action-btn">Change</button>
        </div>

        <div className="setting-item">
          <span>📱 App Version</span>
          <span className="static-info">v1.0.0</span>
        </div>

        <div className="setting-item">
          <span>🚪 Log Out</span>
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
