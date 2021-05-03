import React from "react";
import { StyledHome } from "../../styles/home-styles";
import { themeDots } from "../../utilities/icons";
import { setTheme } from "../../utilities/theme";

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
        <span className="background-color-subheader" />
        <div className="header-text">
          <h1>
            <p>& Mobile Developer</p>
          </h1>
          <h3>I build websites with a focus on accessibility</h3>
        </div>
        <div className="theme-dots-container">
          {themeDots.map(({ theme, color }) => {
            return (
              <span
                onClick={() => setTheme(theme)}
                style={{
                  background: color,
                }}
                key={theme}
              ></span>
            );
          })}
        </div>
        <div className="scroll-button">
          <div className="arrow-animation">↓</div>
          <span>scroll</span>
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
