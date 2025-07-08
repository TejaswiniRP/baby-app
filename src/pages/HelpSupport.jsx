// src/pages/HelpSupport.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HelpSupport.css";

function HelpSupport() {
  const navigate = useNavigate();

  const handleOpenBot = () => {
    navigate("/chatbot");
  };

  const handleBack = () => {
    navigate("/menubar");
  };

  return (
    <div className="help-container">
      {/* Back Button */}
      <button className="back-btn" onClick={handleBack}>
        ← Back to Menu
      </button>

      {/* Header */}
      <section className="hero-section">
        <h1 className="hero-title">Help & Support</h1>
        <p className="hero-subtitle">
          We’re here to support you at every step of your parenting journey.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="cards-section">
        <div className="support-cards">
          <div className="contact-card">
            <div className="icon">📞</div>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-card">
            <div className="icon">💬</div>
            <h3>WhatsApp</h3>
            <p>+91 91234 56789</p>
          </div>

          <div className="contact-card">
            <div className="icon">📧</div>
            <h3>Email</h3>
            <p>support@babybloom.app</p>
          </div>

          <div className="contact-card">
            <div className="icon">🤖</div>
            <h3>AI Chatbot</h3>
            <p>Instant Support</p>
            <button className="chatbot-btn" onClick={handleOpenBot}>
              Open Bot
            </button>
          </div>
        </div>
      </section>

      {/* Info Box */}
      <section className="info-box">
        <h3 className="info-title">We usually reply within 24 hours.</h3>
        <p className="info-desc">
          Our support team is dedicated to helping you with any questions or concerns about your parenting journey.
        </p>
        <p className="info-phone">📞 For urgent help: +91 98765 43210</p>
        <p className="info-hours">⏰ Support hours: Mon–Sun, 9AM–9PM IST</p>
      </section>
    </div>
  );
}

export default HelpSupport;
