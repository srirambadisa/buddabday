import React, { useState } from 'react';
import './CakeSection.css';

function CakeSection() {
  const [isCutting, setIsCutting] = useState(false);

  const handleCut = () => {
    setIsCutting(true);
    setTimeout(() => setIsCutting(false), 3000); // reset after animation
  };

  return (
    <div className="cake-section">
      <h2 className="cake-heading">🎂 Let’s Celebrate with Cake!</h2>
      <p className="cake-sub-text">Click the knife to cut the cake and start the celebration!</p>

      <div className="cake-scene">
        <img src="/images/cake.webp" alt="Birthday Cake" className="cake-img" />
        <img
          src="/images/knife.png"
          alt="Knife"
          className={`knife-img ${isCutting ? 'cutting' : ''}`}
        />
      </div>

      <button className="cut-button" onClick={handleCut}>Cut the Cake 🎉</button>
    </div>
  );
}

export default CakeSection;
