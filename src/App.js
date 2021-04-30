import React, { useEffect } from "react";
import About from "./components/About/about";
import Home from "./components/Home/home";
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
    </div>
  );
}

export default App;
