// src/pages/Menubar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menubar.module.css";

function Menubar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Milestone Tracker",
      icons: ["C", "B", "A"],
    },
    {
      title: "Feed, Diaper, Sleep",
      image: "https://storage.googleapis.com/a1aa/image/7be0b956-86fa-4a3b-78b9-6eeecdd1ac20.jpg",
    },
    {
      title: "Nutrition Chart",
      image: "https://storage.googleapis.com/a1aa/image/8521153a-7f9c-425f-f613-c31327047209.jpg",
    },
    {
      title: "Daily Log - Streaks",
      image: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
    },
    {
      title: "Rhyme Time",
      image: "https://storage.googleapis.com/a1aa/image/2e92044e-1ec1-4bb7-829f-aa09c50bf7aa.jpg",
    },
    {
      title: "Memories of Your Baby",
      image: "https://storage.googleapis.com/a1aa/image/4b5506dd-1cda-49ff-8e00-8dadddbf62ae.jpg",
    },
    {
      title: "Do’s & Don’ts",
      image: "https://storage.googleapis.com/a1aa/image/25ae8120-3d2f-4b20-507a-ae8d01a44e48.jpg",
    },
    {
      title: "Settings",
      image: "https://storage.googleapis.com/a1aa/image/6934ea4b-a3f4-48b4-e093-a3d9f5281347.jpg",
    },
    {
      title: "Help & Support",
      image: "https://storage.googleapis.com/a1aa/image/26d28efa-04a9-4a4a-f0e9-c9ebc8e85e20.jpg",
    },
  ];
const handleNavigation = (title) => {
  if (title === "Help & Support") {
    navigate("/help-support");
  } else if (title === "Settings") {
    navigate("/settings");
  } else if (title === "Nutrition Chart") {
    navigate("/babydetails");
  } else if (title === "Do’s & Don’ts") {
    navigate("/do-and-dont");
  } else if (title === "Rhyme Time") {
    navigate("/rhyme-time");
  } else if (title === "Daily Log - Streaks") {
    navigate("/daily-log");
  } else if (title === "Memories of Your Baby") {
    navigate("/memories");
  } else if (title === "Feed, Diaper, Sleep") {
    navigate("/feed-track");
  } else {
    alert(`Clicked: ${title}`);
  }
};


  return (
    <div className={styles.page}>
      <div className={styles.background}></div>

      <div className={styles.container}>
        <h1 className={styles.title}>Hi Parent ❤</h1>
        <div className={styles.grid}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardTitle}>{item.title}</div>

              {item.icons ? (
                <div className={styles.blocks}>
                  {item.icons.map((char, i) => (
                    <div key={i} className={styles.block}>
                      {char}
                    </div>
                  ))}
                </div>
              ) : (
                <img src={item.image} alt={item.title} className={styles.cardImage} />
              )}

              <button className={styles.button} onClick={() => handleNavigation(item.title)}>
                Click Here
              </button>
            </div>
          ))}
        </div>
      </div>

      <nav className={styles.navbar}>
        <div>🏠 Home</div>
        <div>👶 Baby</div>
        <div>⚙ Profile</div>
      </nav>
    </div>
  );
}

export default Menubar;
