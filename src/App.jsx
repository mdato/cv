import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Area/Main";
import Left from "./components/Area/Left";
import Right from "./components/Area/Right";
import Home from "./components/Home/Home";
import "./index.css";
import Social from "./components/Social/Social";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Interests from "./components/Interests";
const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      {/*========== HEADER ==========*/}
      <Header />
      <Main>
        <Left>
          <Home />
          <Social />
          <Profile />

        </Left>
        <Right>
          <Education />
          <Experience />
          <Languages />
          <Interests />
          <Skills />
        </Right>
      </Main>
      {isVisible && (
        <span
          className="scrolltop show-scroll"
          onClick={scrollToTop}
          id="scroll-top"
        >
          <i className="bx bxs-up-arrow-alt scrolltop__icon"></i>
        </span>
      )}
    </>
  );
}

export default App;
