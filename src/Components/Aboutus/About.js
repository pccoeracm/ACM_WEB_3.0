import { useEffect, useState } from "react";
import "./About.css";

const App = () => {
  // const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.body.className = theme;

    const handleScroll = () => {
      const abtPara = document.querySelector(".abtPara span");
      const scrollPosition = window.scrollY + window.innerHeight;
      if (
        abtPara.offsetTop < scrollPosition &&
        abtPara.offsetTop + abtPara.offsetHeight > window.scrollY
      ) {
        abtPara.style.animationPlayState = "running";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  return (
    <>
      <div className="App_container">
        <div className="abtDiv">
          <span className="abtTitle" data-text="About Us">
            About Us
          </span>
          <p className="abtPara">
            <span>
              PCCOE&R ACM Student Chapter has been founded for the technical
              development of students in the field of computing. The chapter
              provides a platform for the students to showcase their talents.
            </span>
          </p>
        </div>
      </div>
      {/* <button
        onClick={() => {
          setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
        }}
      >
        Change Mode
      </button> */}
    </>
  );
};

export default App;
