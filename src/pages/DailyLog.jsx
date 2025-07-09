import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DailyLog.css';

const dailyActivities = {
  1: ["Crawl to a toy", "Read picture book", "Peek-a-boo"],
  2: ["Pull up to stand", "Play with stacking cups", "Sing rhymes"],
  3: ["Walk holding furniture", "Touch nose/eyes/ears", "Clap with music"],
  4: ["Pick blocks from basket", "Show emotions with face", "Feed self snacks"],
  5: ["Roll ball back and forth", "Point to family photo", "Wave bye-bye"],
  6: ["Walk with push walker", "Imitate animal sounds", "Blow kisses"],
  7: ["Tummy time on soft mat", "Color toy matching", "Look in mirror"],
  8: ["Play with soft shapes", "Turn pages of book", "Dance with music"],
  9: ["Pick up puffs/raisins", "Smile when name is called", "Cuddle with parent"],
  10: ["Reach for toy from chair", "Touch & feel books", "Stack 2-3 blocks"],
  11: ["Bounce on parent's lap", "Tap to drum/toy beat", "Try drinking from cup"],
  12: ["Try taking steps", "Watch floating bubbles", "Hug a soft toy"],
  13: ["Push and pull toy", "Hand gestures (hi, no)", "Look at sky/clouds"],
  14: ["Crawl through tunnel", "Shake rattle", "Sit on lap and listen"],
  15: ["Climb on sofa safely", "Sort big vs small toys", "Name animals"],
  16: ["Play with soft ball", "Identify family members", "Point to body parts"],
  17: ["Follow mom/dad", "Open/close toy box", "Say “mama/dada”"],
  18: ["Foot tapping on music", "Touch textured cloths", "Point to favorite toy"],
  19: ["Step over small pillow", "Identify sound from toy", "Stack rings"],
  20: ["Crawl to hidden toy", "Hold spoon to eat", "Play “Where’s it?”"],
  21: ["Dance on baby tunes", "Name colors", "Give toy on request"],
  22: ["Walk in open space", "Scribble with crayon", "Listen to story"],
  23: ["Ride on rocking horse", "Peek from behind curtain", "Smile at mirror"],
  24: ["Stand on own", "Taste safe new food", "Watch other babies"],
  25: ["Roll across mat", "Respond to name call", "Copy a wave"],
  26: ["Play with pop-up book", "Try removing socks", "Name parts of face"],
  27: ["Reach for ball while standing", "Pet soft toy animal", "Say simple word"],
  28: ["Crawl into play tent", "Match lids to containers", "Sing with hand signs"],
  29: ["Pull toy with string", "Identify fruit toys", "Walk holding parent’s hand"],
  30: ["Climb stairs (with help)", "Imitate funny face", "Feed soft doll"],
  31: ["Hold and drop items", "Listen to animal sounds", "Play “touch and feel” game"],
};

const DailyLog = () => {
  const navigate = useNavigate();
  const [activityStatus, setActivityStatus] = useState({});
  const currentMonth = new Date().toISOString().slice(0, 7); // format: YYYY-MM

  // Load or reset data on first render
  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem('dailyActivityStatus')) || {};
    const savedMonth = localStorage.getItem('dailyLogMonth');

    if (savedMonth === currentMonth) {
      setActivityStatus(savedStatus);
    } else {
      // Clear old month data
      localStorage.removeItem('dailyActivityStatus');
      localStorage.setItem('dailyLogMonth', currentMonth);
      setActivityStatus({});
    }
  }, [currentMonth]);

  // Save updated activity status to localStorage
  useEffect(() => {
    localStorage.setItem('dailyActivityStatus', JSON.stringify(activityStatus));
  }, [activityStatus]);

  const handleStatusChange = (day, index, status) => {
    const key = `day${day}-activity${index}`;
    setActivityStatus((prev) => ({
      ...prev,
      [key]: status,
    }));
  };

  const isDayComplete = (day) =>
    dailyActivities[day].every((_, i) => activityStatus[`day${day}-activity${i}`] === 'done');

  return (
    <div className="dailylog-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h1 className="dailylog-title">📅 Daily Activity Tracker (1 Year Baby)</h1>
      <div className="dailylog-grid">
        {Object.entries(dailyActivities).map(([day, activities]) => (
          <div className="day-card" key={day}>
            <h3>Day {day}</h3>
            {activities.map((activity, i) => {
              const key = `day${day}-activity${i}`;
              return (
                <div key={i} className="activity-row">
                  <span>{activity}</span>
                  {activityStatus[key] === 'done' ? (
                    <span className="success-msg">✔ Done</span>
                  ) : activityStatus[key] === 'missed' ? (
                    <span className="miss-msg">✘ Missed</span>
                  ) : (
                    <div className="activity-buttons">
                      <button onClick={() => handleStatusChange(day, i, 'done')}>Done</button>
                      <button onClick={() => handleStatusChange(day, i, 'missed')} className="miss-btn">
                        Missed
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
            {isDayComplete(day) && <div className="day-complete">🏆 All activities done!</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyLog;
