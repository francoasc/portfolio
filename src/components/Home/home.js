import React from "react";
import { StyledHome } from "../../styles/home-styles";

function Home() {
  return (
    <StyledHome>
      <div className="header-container">
        <div className="logo-container">
          <span>FRANCO HERRERA ASCARATE</span>
        </div>
        <div className="header-text">
          <h1>
            <p>Full Stack Web Developer,</p>
            <p>School-taught Systems Engineer</p>
          </h1>
        </div>
        <h3>
          I build websites with a focus on responsive design and accessibility.
        </h3>
        <div>
          <span className="scrollButtonLogo">↓</span>
          <span className="scrollButton">scroll</span>
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
