// src/pages/BitOnMe.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BitOnMe.module.css";

function BitOnMe() {
  const [dob, setDob] = useState("");
  const [ageResult, setAgeResult] = useState("");
  const navigate = useNavigate();

  function calculateAgeInMonths() {
    if (!dob) {
      setAgeResult("Please select your birth date!");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    let months =
      (today.getFullYear() - birthDate.getFullYear()) * 12 +
      (today.getMonth() - birthDate.getMonth());

    if (today.getDate() < birthDate.getDate()) {
      months--;
    }

    if (months < 0) {
      setAgeResult("Date of birth is in the future!");
    } else if (months === 0) {
      setAgeResult("I am just born!");
    } else if (months === 1) {
      setAgeResult("I am 1 month old!");
    } else {
      setAgeResult(`I am ${months} months old!`);
    }
  }

  const goToDashboard = () => {
    navigate("/MenuBar");
  };

  return (
    <div className={styles.page}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.headerBox}>
          <h1 className={styles.title}>Bit on Me</h1>
          <div className={styles.banner}>Hospital Records</div>
        </div>

        <div className={styles.formBox}>
          <div>
            <label>Name of the Baby:</label>
            <input type="text" className={styles.input} />
          </div>

          <div>
            <label>Father Name:</label>
            <input type="text" className={styles.input} />
          </div>

          <div>
            <label>Mother Name:</label>
            <input type="text" className={styles.input} />
          </div>

          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className={styles.input}
            />
          </div>

          <button onClick={calculateAgeInMonths} className={styles.button}>
            Calculate Age
          </button>

          {ageResult && (
            <>
              <div className={styles.result}>{ageResult}</div>

              <button onClick={goToDashboard} className={styles.button} style={{ marginTop: "1rem" }}>
                Visit Dashboard
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BitOnMe;