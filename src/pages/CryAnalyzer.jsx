import React from 'react';
import { useNavigate } from 'react-router-dom';

import './CryAnalyzer.css';

const CryAnalyzer = () => {
  const navigate = useNavigate(); // 🔁 Hook to handle navigation

  const handleBack = () => {
    navigate('/menubar'); // ✅ Navigate to MenuBar, not login
  };

  return (
    <div className="cry-analyzer-container">
      <button 
        className="back-btn" 
        onClick={handleBack}
      >
        Back
      </button>

      <h1 className="cry-analyzer-title">Cry Analyzer</h1>
      <p className="cry-analyzer-text">
        This tool helps parents understand different types of baby cries using AI. Future updates will include real-time sound analysis and feedback.
      </p>
      <p className="cry-analyzer-placeholder">
        📢 Feature Coming Soon!
      </p>
    </div>
  );
};

export default CryAnalyzer;
