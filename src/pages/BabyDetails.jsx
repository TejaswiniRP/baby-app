import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BabyDetails.module.css";

function BabyDetails() {
  const navigate = useNavigate(); // ✅ Hook to navigate

  const handleEnter = () => {
    // Optional: validate input or store data here
    navigate("/nutrition"); // ✅ Match the route in App.jsx exactly
  };

  return (
    <div className={styles.container}>
      <div className={styles.bgWrapper}></div>

      <h2 className={styles.title}>👶 Enter Baby Details</h2>

      <input
        type="text"
        placeholder="Baby's Weight (kg)"
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Baby's Height (cm)"
        className={styles.input}
      />

      <button className={styles.button} onClick={handleEnter}>
        Enter
      </button>

      <p className={styles.footer}>Your baby's growth is precious 💖</p>
    </div>
  );
}

export default BabyDetails;
