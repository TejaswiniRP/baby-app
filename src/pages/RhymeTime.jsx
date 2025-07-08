import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Required for navigation
import "./RhymeTime.css";

const rhymes = [
  {
    title: "Twinkle Twinkle",
    video: "./videos/rhyme.mp4",
    lyrics: `Twinkle, twinkle, little star,\nHow I wonder what you are!`,
  },
  // Add more rhymes here...
  {
    title: "  bommi bommi",
    video: " ./videos/rhyme2.mp4"
  }
];

function RhymeCard({ title, video, lyrics }) {
  const [showLyrics, setShowLyrics] = useState(false);

  return (
    <div className="rhyme-card">
      <h3>{title}</h3>
      <video className="video-player" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="lyrics-toggle" onClick={() => setShowLyrics(!showLyrics)}>
        {showLyrics ? "Hide Lyrics" : "Show Lyrics"}
      </button>
      {showLyrics && <pre className="lyrics">{lyrics}</pre>}
    </div>
  );
}

function RhymeTime() {
  const navigate = useNavigate();

  return (
    <div className="rhyme-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <h1 className="rhyme-title">🎬 Rhyme Time</h1>
      <p className="rhyme-subtitle">Enjoy 20 classic rhymes with your baby!</p>

      <div className="rhyme-grid">
        {rhymes.map((rhyme, index) => (
          <RhymeCard key={index} {...rhyme} />
        ))}
      </div>
    </div>
  );
}

export default RhymeTime;
