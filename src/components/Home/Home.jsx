import React, { useState, useEffect } from "react";
import { homeData } from "../../cv";
const Home = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);
  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img src={homeData.homeImage} className="home__img" alt="" />
          <h1 className="home__title">
            {homeData.homeTitle1} <b> {homeData.homeTitle2}</b>
          </h1>
          <h3 className="home__profession"> {homeData.homeProfession}</h3>
          <img src={homeData.qr} className="qr" alt="" />
        </div>
      </div>
      {/* Theme change button */}
      <i
        onClick={() => setIsDark(!isDark)}
        className={`bx change-theme ${isDark ? "bx-sun" : "bx-moon"}`}
        title="Theme"
        id="theme-button"
      />
    </section>
  );
};

export default Home;
