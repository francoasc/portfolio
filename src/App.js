import React, { useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { setTheme } from "./utilities/theme";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("theme")) setTheme("light");
    else setTheme(localStorage.getItem("theme"));
  }, []);

  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
