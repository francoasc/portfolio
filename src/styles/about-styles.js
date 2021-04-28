import styled from "styled-components";

//Background colors
// #fff
// #192734
// #7e4c74
// #78866b

// #fc6058
// #fec02f
// #2aca3e

// #c1c1c1
// #164d56;

export const StyledAbout = styled.section`
  min-height: fit-content;
  min-width: 100%;
  background-color: #0a192f;
  color: #efefef;

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-template-areas: "about-me social-links";
    padding-bottom: 50px;
    padding-top: 50px;
    gap: 100px;
    height: fit-content;
    width: 100%;

    .about_me {
      grid-area: about-me;
      border: 2px solid red;
      margin-left: 0.3rem;
      padding-left: 5rem;
      display: flex;
      flex-wrap: wrap;

      .title {
        align-self: center;
        font-size: 26px;
      }
      .description {
        margin: 0;
        padding: 0;
        width: 100%;
        height: fit-content;
      }
      .description_2 {
        height: fit-content;
      }
    }

    .social_links {
      grid-area: social-links;
      margin-right: 0.3rem;
      border: 2px solid green;
    }
    #social_img {
      width: 100%;
    }
  }
`;
