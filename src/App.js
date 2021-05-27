import React, { useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
// import Navbar from "./components/Navbar/navbar";
import { setTheme } from "./utilities/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (!localStorage.getItem("theme")) {
      setTheme("light");
    } else {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  return (
    <div className="App">
      <Home />
      {/* <Navbar /> */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
