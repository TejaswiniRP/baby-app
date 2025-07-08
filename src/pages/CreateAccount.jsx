// src/pages/CreateAccount.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./CreateAccount.module.css";

function CreateAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create Account</h2>

        <form>
          <input type="email" placeholder="Email" required className={styles.input} />
          <input type="text" placeholder="Username" required className={styles.input} />
          <input type="password" placeholder="Password" required className={styles.input} />
          <input type="password" placeholder="Confirm Password" required className={styles.input} />
          <button type="submit" className={styles.button}>Sign Up</button>
        </form>

        <p className={styles.textCenter}>
          Already have an account?
          <Link to="/login" className={styles.link}> Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
