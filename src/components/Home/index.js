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
        <Flip left duration={1500}>
          <h3>FRANCO HERRERA ASCARATE</h3>
        </Flip>
        <Fade bottom>
          <h1>Full Stack Web Developer</h1>
        </Fade>
      </div>
      <div className="subheader-container">
        <Fade bottom delay={500}>
          <span className="background-subheader"></span>
        </Fade>

        <div className="subheader-text-container">
          <Fade bottom>
            <h1>& Mobile Developer</h1>
          </Fade>
          <Fade bottom duration={2000}>
            <h3>
              I build websites with a focus on accessibility and user experience
            </h3>
          </Fade>
        </div>
        <div className="buttons-container">
          <Link
            className="scroll-button"
            to="aboutSection"
            smooth={true}
            duration={500}
          >
            <Bounce bottom delay={900}>
              <div>
                <div className="arrow-animation">↓</div>
                <span>scroll</span>
              </div>
            </Bounce>
          </Link>
          <Bounce bottom delay={900}>
            <div className="theme-dots-container">
              {themeDots.map(({ theme, color }) => {
                return (
                  <div
                    onClick={() => setTheme(theme)}
                    style={{
                      backgroundColor: color,
                      height: "30px",
                      width: "30px",
                    }}
                    key={theme}
                  ></div>
                );
              })}
            </div>
          </Bounce>
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
