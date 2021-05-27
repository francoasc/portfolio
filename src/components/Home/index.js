import React from "react";
import { StyledHome } from "../../styles/home-styles";
import { themeDots } from "../../utilities/icons";
import { setTheme } from "../../utilities/theme";

function Home() {
  return (
    <StyledHome>
      <div className="header-container">
        <div className="logo-container">
          <span data-aos="flip-left" data-aos-duration="2000">
            FRANCO HERRERA ASCARATE
          </span>
        </div>
        <div className="header-text">
          <h1>
            <p data-aos="fade-up">Full Stack Web Developer,</p>
          </h1>
        </div>
        <span className="background-color-subheader" />
        <div className="header-text">
          <h1>
            <p data-aos="fade-up">& Mobile Developer</p>
          </h1>
          <h3 data-aos="flip-right" data-aos-duration="2000">
            I build websites with a focus on accessibility
          </h3>
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
