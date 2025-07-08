// src/pages/ChatbotPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChatbotPage.css";

function ChatbotPage() {
  const navigate = useNavigate();

  return (
    <div className="chatbot-container">
      <div className="top-center">
        <button className="back-button" onClick={() => navigate("/help-support")}>
          ⬅ Back
        </button>
      </div>

      <iframe
        src="https://www.chatbase.co/chatbot-iframe/hIZUyRTKqWYhx_dmOb9Gt"
        title="BabyBloom AI Chatbot"
        allow="microphone"
        className="chatbot-iframe"
      ></iframe>
    </div>
  );
}

export default ChatbotPage;
