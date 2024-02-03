import "./Aboutus.css";
import { useEffect, useState } from "react";

const Aboutus = () => {
  const [theme, setTheme] = useState("dark-theme");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <button
        onClick={() => {
          setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
        }}
      >
        Change Mode
      </button>
      <div className="App_container">
        <div className="abtDiv">
          <span className="abtTitle" data-text="About Us">
            About Us
          </span>
          <p className="abtPara">
            PCCOE&R ACM Student Chapter has been founded for the technical
            development of students in the field of computing. The chapter
            provides a platform for the students to showcase their talents.
          </p>
        </div>
      </div>
    </>
  );
};
export default Aboutus;
