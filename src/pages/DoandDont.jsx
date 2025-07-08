import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DoAndDont.css';

const DoAndDont = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/menubar');
  };

  const doItems = [
    "Respond to your baby’s cries with comfort.",
    "Always lay your baby on their back to sleep.",
    "Follow a daily routine for feeding, sleeping, and playing.",
    "Talk, sing, and make eye contact with your baby.",
    "Keep up with regular pediatric check-ups and vaccinations.",
    "Give your baby tummy time daily while awake.",
    "Burp your baby after feeding.",
    "Wash your hands before handling your baby.",
    "Use a properly installed car seat during travel.",
    "Keep baby’s environment clean and smoke-free.",
  ];

  const dontItems = [
    "Don’t shake your baby.",
    "Don’t overfeed or force-feed your baby.",
    "Don’t skip tummy time.",
    "Don’t give honey before your baby turns one.",
    "Don’t leave your baby unattended on high surfaces.",
    "Don’t put soft toys or loose blankets in the crib.",
    "Don’t use a walker for your baby.",
    "Don’t ignore signs of illness or fever.",
    "Don’t expose your baby to loud noises or bright screens.",
    "Don’t compare your baby’s development with others.",
  ];

  return (
    <div className="container">
      <button className="back-button" onClick={handleBack}>← Back</button>
      <h2 className="title">
        <b>Do</b> and <b className="dont-title">don’t</b> for Parents of Babies (0–12 months)
      </h2>
      <div className="float-wrapper">
        <div className="column">
          <h3 className="column-title green">✅ DO</h3>
          {doItems.map((item, idx) => (
            <div key={idx} className="floating-card do-card">
              <span className="icon">✔</span> {item}
            </div>
          ))}
        </div>
        <div className="column">
          <h3 className="column-title red">❌ DON'T</h3>
          {dontItems.map((item, idx) => (
            <div key={idx} className="floating-card dont-card">
              <span className="icon">✘</span> {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoAndDont;
