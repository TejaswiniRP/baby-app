// src/pages/Login.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔐 Add authentication later. For now, direct navigation.
    navigate("/bitonme");
  };

  return (
    <div className={styles.container}>
      {/* Background Image */}
      <img
        src="https://storage.googleapis.com/a1aa/image/e7e1bf97-ccb0-44bd-2888-344ed04c76cd.jpg"
        alt="Background family"
        className={styles.bgImage}
      />

      {/* Login Card */}
      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className={styles.input}
            required
          />

          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••"
            className={styles.input}
            required
          />

          <button type="submit" className={styles.button}>Sign In</button>
        </form>

        <p className={styles.textCenter}>
          Don’t have an account?
          <Link to="/create-account" className={styles.link}> Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;