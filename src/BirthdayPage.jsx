import React, { useState } from 'react';
import './BirthdayPage.css';
import './CakeSection.css';


function BirthdayPage() {
  const [isCutting, setIsCutting] = useState(false);

  const handleCut = () => {
    setIsCutting(true);
    setTimeout(() => setIsCutting(false), 3000); // reset after animation
  };

  return (
    <>
      <div className="welcome-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="main-heading animated-text">
            Happy Birth Day My Love...💖
          </h1>
          <p className="sub-text glow-text">
            "To the one who makes my heart smile — your special day is my favorite day."
          </p>
        </div>
      </div>

      <div className="body-container">


        <section className="personal-message-section">
          <h2>My Dearest Budda...,</h2>
          <p className="glowing-text">
            🎂💖 Happy Birthday My Sweet Budda 💖🎂 <br />

From the moment you came into my life, everything changed. <br />
Today is not just your birthday — it's a celebration of the most beautiful soul I’ve ever met. <br />
Your smile is my peace, your laugh is my favorite music, and your love is the most precious gift I’ve ever received. <br />

I still remember the first time we met... the way your eyes lit up, the way my heart whispered, “She’s the one.” <br />
Since then, every day with you has been a dream — and today, I want to make your dreams come true. <br />

On this first birthday of yours since we met, I want to promise you: <br />
🌸 I will love you more with each sunrise. <br />
🌸 I will stand by you in every season of life. <br />
🌸 I will protect your smile like it’s my world. <br />
🌸 I will celebrate you — not just today, but every day we breathe together. <br />

You are not just Budda to me — you are my love, my light, my forever. <br />

Happy Birthday, My Angel. <br />
May your heart be filled with as much joy as you bring to mine. <br />
I love you, endlessly. 💕🎁✨ <br />
          </p>
          <p className="glowing-text">I love you more than words can say!</p>
        </section>

        {/* moments */}
        <h2 className="categories-heading">✨ Birthday Vibes All Around ✨</h2>
        <div className="features-container">
          <div className="feature-card">
            <img src="/images/bb12.jpg" alt="bb1" className="category-image" />
          </div>
          <div className="feature-card">
            <img src="/images/bb6.jpg" alt="bb2" className="category-image" />
          </div>
          <div className="feature-card">
            <img src="/images/bb24.jpg" alt="bb3" className="category-image" />
          </div>
          <div className="feature-card">
            <img src="/images/bb4.jpg" alt="bb4" className="category-image" />
          </div>
          <div className="feature-card">
            <img src="/images/bb23.jpg" alt="bb3" className="category-image" />
          </div>
          <div className="feature-card">
            <img src="/images/bb10.jpg" alt="bb3" className="category-image" />
          </div>
          <div className="feature-card">
            <img src="/images/bb11.jpg" alt="bb3" className="category-image" />
          </div>
          <div className="feature-card">
            <img src="/images/bb22.jpg" alt="bb3" className="category-image" />
          </div>
        </div>

        {/* cake section */}
        {/* <div className="cake-section">
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
        </div> */}

        {/* Category Navigation */}
        <h2 className="categories-heading">💖 Sweet Memories 💖</h2>
        <div className="categories-container">

          <div className="category-card">
            <img src="/images/bb8.jpg" alt="Vegetables" className="category-image" />
          </div>
          <div className="category-card">
            <img src="/images/bb3.jpg" alt="Non-Veg" className="category-image" />
          </div>
          <div className="category-card">
            <img src="/images/bb1.jpg" alt="Milk" className="category-image" />
          </div>
          <div className="category-card">
            <img src="/images/bb9.jpg" alt="Chocolate" className="category-image" />
          </div>
        </div>


        <h2 className="journey-heading">💑 Our Journey Together 💖 </h2>
        <div className="categories-container">

          <div className="category-card">
            <img src="/images/ram/r1.jpg" alt="Vegetables" className="category-image" />
          </div>
          <div className="category-card">
            <img src="/images/ram/r9.jpg" alt="Non-Veg" className="category-image" />
          </div>
          <div className="category-card">
            <img src="/images/ram/r4.jpg" alt="Milk" className="category-image" />
          </div>
          <div className="category-card">
            <img src="/images/ram/r2.jpg" alt="Chocolate" className="category-image" />
          </div>

          <div className="category-card">
            <img src="/images/ram/r7.jpg" alt="Vegetables" className="category-image" />
          </div>
          <div className="category-card">
            <img src="/images/ram/r3.jpg" alt="Non-Veg" className="category-image" />
          </div>
          <div className="category-card">
            <img src="/images/ram/r8.jpg" alt="Milk" className="category-image" />
          </div>
          <div className="category-card">
            <img src="/images/ram/r5.jpg" alt="Chocolate" className="category-image" />
          </div>
        </div>
      </div>



      {/* <div className="famous-container-1">
        <img src="/images/grid1.jpg" alt="Chocolate" className="famous-container-1" />
      </div> */}

      {/* <div className="famous-container">
        <br />
        <div className="image-row">
          <img src="/images/bb8.jpg" alt="Banner 2" className="banner-img" />
          <img src="/images/bb9.jpg" alt="Banner 3" className="banner-img" />
          <img src="/images/bb10.jpg" alt="Banner 1" className="banner-img" />
          <img src="/images/bb8.jpg" alt="Banner 2" className="banner-img" />
          <img src="/images/bb9.jpg" alt="Banner 3" className="banner-img" />
          <img src="/images/bb10.jpg" alt="Banner 1" className="banner-img" />
        </div>
      </div> */}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} <strong>To My Love 💖</strong> — All moments with you are timeless.</p>
          <p className="footer-message">This page is made with endless love, joy, and a sprinkle of magic just for you. 🎉🎂</p>
          <p>Forever Yours, <strong>Raam.. 💌</strong></p>
        </div>
      </footer>

    </>
  );
}

export default BirthdayPage;