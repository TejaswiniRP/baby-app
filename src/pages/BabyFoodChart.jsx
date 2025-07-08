import React from "react";
import { useNavigate } from "react-router-dom";
import "./BabyFoodChart.css";

function BabyFoodChart() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/menubar");
  };

  return (
    <div className="baby-chart-container">
      <div className="chart-overlay">
        {/* Back Button */}
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>

        <div className="chart-wrapper">
          <h1 className="chart-title">🍼 Baby Food Chart (0–12 Months)</h1>
          <p className="chart-subtitle">Month-wise Homemade Foods | Tamil + English</p>

          <div className="chart-grid">
            {/* 0–5 Months */}
            <div className="chart-card">
              <h2 className="chart-month">0–5 Months</h2>
              <ul>
                <li>✅ Only Breast milk / Formula</li>
                <li>🚫 No solids, no water, no juice, no honey</li>
                <li>🛡 Baby’s nutrition is fully covered by milk</li>
              </ul>
            </div>

            {/* 6 Months */}
            <div className="chart-card">
              <h2 className="chart-month">6 Months</h2>
              <ul>
                <li>✓ ராகி கஞ்சி – Ragi porridge</li>
                <li>✓ வாழைப்பழம் – Mashed banana</li>
                <li>✓ ஆப்பிள் பியூரி – Steamed apple puree</li>
                <li>✓ பாசிப்பருப்பு நீர் – Moong dal water</li>
                <li>✓ அரிசி கஞ்சி – Rice cereal</li>
                <li>✓ வெண்ணெய் பழம் – Mashed avocado</li>
                <li>✓ பேரிக்காய் பியூரி – Pear puree</li>
                <li>✓ இட்லி + தாய்ப்பால் – Idli + breastmilk</li>
              </ul>
            </div>

            {/* 7 Months */}
            <div className="chart-card">
              <h2 className="chart-month">7 Months</h2>
              <ul>
                <li>✓ கேரட் பியூரி – Carrot puree</li>
                <li>✓ பப்பாளி – Mashed papaya</li>
                <li>✓ பருப்பு சாதம் – Dal rice mash</li>
                <li>✓ பூசணிக்காய் பியூரி – Pumpkin mash</li>
                <li>✓ ரவா கஞ்சி – Suji porridge</li>
                <li>✓ நெய் சாதம் – Ghee rice</li>
                <li>✓ பீட்ரூட் – Beetroot puree</li>
                <li>✓ ஓட்ஸ் பிஞ்சு – Mashed oats + fruit</li>
              </ul>
            </div>

            {/* 8 Months */}
            <div className="chart-card">
              <h2 className="chart-month">8 Months</h2>
              <ul>
                <li>✓ சர்க்கரைவள்ளிக்கிழங்கு – Sweet potato</li>
                <li>✓ உருளைக்கிழங்கு – Steamed potato</li>
                <li>✓ இட்லி + பருப்பு – Idli mashed in dal</li>
                <li>✓ காய்கறி உப்புமா – Veg upma</li>
                <li>✓ சுரைக்காய் சாதம் – Bottle gourd mash</li>
                <li>✓ சுரைக்காய் குழம்பு – Lauki curry (mild)</li>
                <li>✓ கீரை சாதம் – Rice + spinach mash</li>
              </ul>
            </div>

            {/* 9 Months */}
            <div className="chart-card">
              <h2 className="chart-month">9 Months</h2>
              <ul>
                <li>✓ தோசை துண்டுகள் – Soft dosa</li>
                <li>✓ தயிர் இட்லி – Steamed idli + curd</li>
                <li>✓ சாம்பார் சாதம் – Mild sambar rice</li>
                <li>✓ பட்டாணி மாஷ் – Boiled peas mash</li>
                <li>✓ கேரட் உருளை குழை – Carrot + potato</li>
                <li>✓ ரசம் சாதம் – Rasam rice</li>
                <li>✓ சேமியா கஞ்சி – Semiya kheer (no sugar)</li>
              </ul>
            </div>

            {/* 10 Months */}
            <div className="chart-card">
              <h2 className="chart-month">10 Months</h2>
              <ul>
                <li>✓ கோதுமை கஞ்சி – Wheat porridge</li>
                <li>✓ ரவா ஹல்வா – Suji halwa (no sugar)</li>
                <li>✓ காய்கறி பொங்கல் – Veg pongal</li>
                <li>✓ கலந்த காய்கறி பியூரி – Mixed veg puree</li>
                <li>✓ முட்டை மஞ்சள் – Cooked egg yolk</li>
                <li>✓ இடியாப்பம் + வாழைப்பழம் – Idiyappam + banana</li>
                <li>✓ மென்மையான ரவா தோசை – Soft rava dosa</li>
              </ul>
            </div>

            {/* 11 Months */}
            <div className="chart-card">
              <h2 className="chart-month">11 Months</h2>
              <ul>
                <li>✓ கேழ்வரகு/சாமை கஞ்சி – Millet porridge</li>
                <li>✓ பனீர் – Homemade soft paneer</li>
                <li>✓ காய்கறி உப்புமா – Mixed veg upma</li>
                <li>✓ பருப்பு சூப் – Lentil soup</li>
                <li>✓ கடலை பருப்பு குழை – Mashed chana dal</li>
              </ul>
            </div>

            {/* 12 Months */}
            <div className="chart-card">
              <h2 className="chart-month">12 Months</h2>
              <ul>
                <li>✓ சாம்பார் சாதம் – Mild sambar rice</li>
                <li>✓ தோசை + சட்னி – Dosa with mild chutney</li>
                <li>✓ இடியாப்பம் + பசும்பால் – Idiyappam + milk</li>
                <li>✓ பசும்பால் (மருத்துவரின் ஆலோசனையுடன்)</li>
                <li>✓ பழக் கலவை – Fruit bowl: mango, chikoo, banana (smashed)</li>
              </ul>
            </div>
          </div>

          <p className="chart-footer">
            ⚠ No honey, salt, sugar, whole milk or nuts before 1 year. Offer water after 6 months in sips. Always supervise baby while feeding and introduce new foods gradually.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BabyFoodChart;
