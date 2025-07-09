// src/pages/FeedTrack.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeedTrack.css";

const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  return permission === "granted";
};

const FeedTrack = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState(() => JSON.parse(localStorage.getItem("careLogs")) || []);
  const [lastTimes, setLastTimes] = useState({});
  const [ageInMonths, setAgeInMonths] = useState(() => {
    const saved = localStorage.getItem("babyAge");
    return saved ? parseInt(saved) : "";
  });

  const types = ["feed", "diaper", "sleep"];

  useEffect(() => {
    localStorage.setItem("careLogs", JSON.stringify(logs));
    const latest = {};
    logs.forEach(log => {
      latest[log.type] = log.time;
    });
    setLastTimes(latest);
  }, [logs]);

  useEffect(() => {
    requestNotificationPermission();
    const interval = setInterval(() => {
      types.forEach((type) => {
        const last = lastTimes[type];
        const interval = type === "feed" ? 3 : type === "diaper" ? 2 : 4;
        if (last && Date.now() - new Date(last) > interval * 60 * 60 * 1000) {
          new Notification(`🔔 ${type.toUpperCase()} Reminder`, {
            body: `It's been over ${interval} hrs since last ${type}`,
          });
        }
      });
    }, 60000);
    return () => clearInterval(interval);
  }, [lastTimes]);

  const handleLog = (type) => {
    const newLog = { type, time: new Date().toISOString() };
    setLogs((prev) => [...prev, newLog]);
  };

  const formatTime = (iso) => {
    return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getSuggestion = (type) => {
    const last = lastTimes[type];
    if (!last) return "No log yet";
    const interval = type === "feed" ? 3 : type === "diaper" ? 2 : 4;
    const next = new Date(new Date(last).getTime() + interval * 60 * 60 * 1000);
    return `Next ${type} suggested at ${formatTime(next.toISOString())}`;
  };

  const getAgeSuggestion = (type) => {
    if (ageInMonths === "") return "👶 Please enter baby's age in months.";

    if (type === "feed") {
      if (ageInMonths <= 3) return "🍼 Feed every 2–3 hrs (breast/formula).";
      if (ageInMonths <= 7) return "🍎 Add semi-solids 2–3x/day + milk feeds.";
      return "🍽️ 3 solid meals + 2 snacks + 2 milk feeds per day.";
    }

    if (type === "diaper") {
      if (ageInMonths <= 3) return "🧷 8–12 changes/day. Change every 2–3 hrs.";
      if (ageInMonths <= 7) return "🧼 6–8 changes/day. Check every 3 hrs.";
      return "🧽 4–6 changes/day. Ensure night-time dryness.";
    }

    if (type === "sleep") {
      if (ageInMonths <= 3) return "😴 14–17 hrs/day incl. 3–4 naps.";
      if (ageInMonths <= 7) return "🛏️ 12–15 hrs/day incl. 2–3 naps.";
      return "🌙 11–14 hrs/day incl. 1–2 naps.";
    }
  };

  const getAverageInterval = (type) => {
    const filtered = logs.filter((l) => l.type === type);
    if (filtered.length < 2) return "⏱ Not enough data";
    const intervals = [];
    for (let i = 1; i < filtered.length; i++) {
      const diff = new Date(filtered[i].time) - new Date(filtered[i - 1].time);
      intervals.push(diff);
    }
    const avgMin = Math.round(intervals.reduce((a, b) => a + b) / intervals.length / 60000);
    return `📊 Typical interval: ${avgMin} mins`;
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAgeInMonths(value);
    localStorage.setItem("babyAge", value);
  };

  return (
    <div className="feedtrack-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <h1>🍼 Feed, Diaper & Sleep Tracker</h1>
      <p>Personalized suggestions based on your baby's age</p>

      <div className="age-input">
        <label>👶 Baby's Age (Months): </label>
        <input
          type="number"
          value={ageInMonths}
          onChange={handleAgeChange}
          placeholder="e.g. 6"
          min={0}
          max={12}
        />
      </div>

      {ageInMonths === "" ? (
        <p className="warning">⚠️ Please enter your baby's age to continue.</p>
      ) : (
        <>
          <div className="card-grid-3">
            {types.map((type) => (
              <div className="care-card" key={type}>
                <h2 className="card-title">
                  {type === "feed" && "🍼 "}
                  {type === "diaper" && "🧷 "}
                  {type === "sleep" && "😴 "}
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </h2>
                <p className="card-age-tip">{getAgeSuggestion(type)}</p>
                <p className="card-suggestion">{getSuggestion(type)}</p>
                <p className="card-interval">{getAverageInterval(type)}</p>
                <button className="log-button" onClick={() => handleLog(type)}>
                  Log {type}
                </button>
                <p className="last-log">
                  Last: {lastTimes[type] ? formatTime(lastTimes[type]) : "—"}
                </p>
              </div>
            ))}
          </div>

          <div className="log-history">
            <h3>📋 Log History</h3>
            <ul>
              {logs
                .slice()
                .reverse()
                .slice(0, 10)
                .map((log, i) => (
                  <li key={i}>
                    {log.type.toUpperCase()} at {formatTime(log.time)}
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default FeedTrack;
