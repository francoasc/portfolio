import React from "react";
import { StyledHome } from "../../styles/home-styles";
import { themeDots } from "../../utilities/icons";
import { setTheme } from "../../utilities/theme";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-scroll";

function Home() {
  return (
    <StyledHome>
      <div className="header-container">
        <div className="logo-container">
          <Flip left duration={1500}>
            <span>FRANCO HERRERA ASCARATE</span>
          </Flip>
        </div>
        <div className="header-text">
          <h1>
            <Fade bottom opposite={true}>
              <p>Full Stack Web Developer,</p>
            </Fade>
          </h1>
        </div>
        <Fade bottom delay={500}>
          <span className="background-color-subheader" />
        </Fade>
        <div className="header-text">
          <h1>
            <Fade bottom>
              <p>& Mobile Developer</p>
            </Fade>
          </h1>
          <Fade bottom duration={2000}>
            <h3>I build websites with a focus on accessibility</h3>
          </Fade>
        </div>
        <Bounce bottom delay={900}>
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
        </Bounce>
        <Link
          to="aboutSection"
          smooth={true}
          duration={500}
          className="scroll-button"
        >
          <Bounce bottom delay={900}>
            <div>
              <div className="arrow-animation">↓</div>
              <span>scroll</span>
            </div>
          </Bounce>
        </Link>
      </div>
    </StyledHome>
  );
}

export default Home;
