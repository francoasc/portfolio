import React from "react";
import { StyledAbout } from "../../styles/about-styles";
import coding_image from "../../images/coding_normal.svg";

function About() {
  return (
    <StyledAbout>
      <div className="container">
        <div className="about_me">
          <h1 className="title">More about me!</h1>
          <p className="description">
            I'm a full stack web developer and mobile developer currently based
            on Argentina. Since child my curiosity for the internet woke and I
            wanted to know how everything was built
          </p>
          <p className="description_2">
            I love programming and see how from nowhere you can build
            fascinating things like this web for example 😉
          </p>
        </div>
        <div className="social_links">
          <img
            style={{ width: "523px", height: "340px" }}
            id="social_img"
            alt="coding_image"
            src={coding_image}
          />
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;
