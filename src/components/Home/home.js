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
          </h1>
        </div>
        <div>
          <h1>
            <p>School-taught Systems Engineer</p>
          </h1>
          <h3>
            I build websites with a focus on responsive design and
            accessibility.
          </h3>
        </div>
        <div className="scroll-button">
          <div className="arrow-animation">↓</div>
          scroll
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
