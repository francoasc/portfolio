import React, { useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
// import Navbar from "./components/Navbar/navbar";
import { setTheme } from "./utilities/theme";

function App() {
  useEffect(() => {
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
    </div>
  );
}

export default App;
