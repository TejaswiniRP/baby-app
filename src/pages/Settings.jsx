// src/pages/Settings.jsx
import React, { useState } from "react";
import "./settings.css";
import { useNavigate } from "react-router-dom";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  const navigate = useNavigate();

  const handleSave = () => {
    alert("Settings Saved Successfully!");
    navigate("/menu");
  };

  return (
    <div className={`settings-container ${darkMode ? "dark" : ""}`}>
      <div className="settings-card">
        <h1 className="settings-title">Settings</h1>

        <div className="setting-item">
          <label htmlFor="darkModeToggle">Dark Mode</label>
          <input
            type="checkbox"
            id="darkModeToggle"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <div className="setting-item">
          <label htmlFor="notificationsToggle">Notifications</label>
          <input
            type="checkbox"
            id="notificationsToggle"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <div className="setting-item">
          <label htmlFor="languageSelect">App Language</label>
          <select
            id="languageSelect"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Tamil</option>
            <option>Telugu</option>
          </select>
        </div>

        <div className="setting-item">
          <button className="save-button" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
