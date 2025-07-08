// src/pages/NutritionPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NutritionPage.module.css";

const babyFoodData = [
  {
    month: "0 to 5 Months",
    items: [
      "✅ Only Breast milk / Formula",
      "🚫 No solids, no water, no juice, no honey",
      "🛡 Baby’s nutrition is fully covered by milk",
    ],
  },
  {
    month: "6 Months",
    items: [
      "✓ ராகி கஞ்சி – Ragi porridge",
      "✓ வாழைப்பழம் – Mashed banana",
      "✓ ஆப்பிள் பியூரி – Apple puree",
      "✓ பாசிப்பருப்பு நீர் – Moong dal water",
      "✓ அரிசி கஞ்சி – Rice cereal",
      "✓ வெண்ணெய் பழம் – Mashed avocado",
      "✓ பேரிக்காய் பியூரி – Pear puree",
      "✓ இட்லி + தாய்ப்பால் – Idli + breastmilk",
    ],
  },
  {
    month: "7 Months",
    items: [
      "✓ கேரட் பியூரி – Carrot puree",
      "✓ பப்பாளி – Mashed papaya",
      "✓ பருப்பு சாதம் – Dal rice mash",
      "✓ பூசணிக்காய் – Pumpkin mash",
      "✓ ரவா கஞ்சி – Suji (rava) porridge",
    ],
  },
  {
    month: "8 Months",
    items: [
      "✓ கிச்சடி – Khichdi (rice + moong dal + veg)",
      "✓ சர்க்கரைவள்ளிக்கிழங்கு – Sweet potato mash",
      "✓ உருளைக்கிழங்கு – Steamed potato",
      "✓ கீரை சாதம் – Spinach rice mash",
    ],
  },
  {
    month: "9 to 12 Months",
    items: [
      "✓ தோசை துண்டுகள் – Soft dosa pieces",
      "✓ சப்பாத்தி + பருப்பு – Chapati + dal",
      "✓ பாஸ்தா – Soft pasta (no salt)",
      "✓ சாம்பார் சாதம் – Sambar rice (no spice)",
      "✓ பழக் கலவை – Fruit mash (banana, chikoo, mango)",
    ],
  },
];

const NutritionPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {/* Menu button top-right */}
      <button className={styles.menuButton} onClick={() => navigate("/menubar")}>
        ☰ Menu
      </button>

      <h2 className={styles.title}>🍼 Baby Food Chart</h2>

      {/* Grid of cards */}
      <div className={styles.grid}>
        {babyFoodData.map(({ month, items }, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.month}>{month}</h3>
            <ul className={styles.list}>
              {items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Floating Buttons */}
      <div className={styles.floatingButtons}>
        <button
          className={`${styles.floatingButton} ${styles.float1}`}
          onClick={() => alert("Previous")}
        >
          ⬅
        </button>
        <button
          className={`${styles.floatingButton} ${styles.float2}`}
          onClick={() => alert("Next")}
        >
          ➡
        </button>
      </div>

      <div className={styles.footer}>
        ⚠ Avoid honey, sugar, salt, cow milk & nuts before 1 year.
      </div>
    </div>
  );
};

export default NutritionPage;
