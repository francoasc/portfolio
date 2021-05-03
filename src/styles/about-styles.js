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
  background-color: var(--mainColor);
  color: #efefef;
  padding: 0 5rem;
  .container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

    grid-template-areas: "about-me social-links";
    padding-bottom: 50px;
    padding-top: 50px;
    gap: 2rem;
    height: fit-content;
    width: 100%;
    .about_me {
      grid-area: about-me;
      width: 100%;
      margin: 0 1em;
      .title {
        font-size: 1.7rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        color: var(--mainText);
      }
      .description {
        font-size: 1rem;
        margin-bottom: 1.2rem;
        line-height: 1.3;
        color: var(--secondaryText);
      }
      .description_2 {
        line-height: 1.3;
        font-size: 1rem;
        margin-bottom: 1.5rem;
        color: var(--secondaryText);
      }
      .cv {
        margin-top: 1rem;
        border-bottom: 1px solid gray;
        padding-bottom: 1rem;
        color: var(--secondaryText);
        a {
          text-decoration: none;
        }
        span {
          color: #17a2b8;
          text-decoration: none;
          cursor: pointer;
          :hover {
            text-decoration: underline;
          }
        }
        #logo_cv {
          text-decoration: none;
          cursor: pointer;
        }
      }
      .skills_container {
        display: flex;
        flex-direction: column;
        h4 {
          align-self: center;
          margin-bottom: 1rem;
          font-size: 1.7rem;
          margin-top: 1rem;
          color: var(--mainText);
        }

        .skills {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
      }
    }

    .social_links {
      grid-area: social-links;
      margin-right: 0.3rem;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      div {
        width: 100%;
        display: flex;
        justify-content: center;

        #social_img {
          margin-top: 2.8rem;
          max-width: 100%;
          max-height: 340px;
        }
      }

      h3 {
        margin-top: 1.5rem;
        align-self: center;
        font-size: 1.7rem;
        color: var(--mainText);
      }

      #github-p {
        margin-bottom: 0.25rem;
        margin-top: 0.5rem;
      }

      p {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        text-decoration: none;
        color: #17a2b8;

        .icon {
          height: 1.2rem;
        }

        span {
          margin-left: 0.3rem;
          font-weight: 800;
        }
        &:hover {
          cursor: pointer;
          text-decoration-line: underline;
        }
      }
    }
  }

  @media (max-width: 850px) {
    padding: 0;
    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-bottom: 0;
      .about_me {
        margin: 0 1rem;
        /* border: 1px solid red; */
        .skills_container {
          margin-bottom: 2rem;
          .skills {
            width: 100%;
          }
          h4 {
            align-self: center;
          }
        }
      }
      .social_links {
        /* border: 1px solid green; */
        width: 100%;
        margin: 0;
        div {
          #social_img {
            margin: 0;
            width: 100%;
            height: 400px;
          }
        }
      }
    }
  }
`;

export const StyledSkillIcon = styled.span`
  text-align: center;
  margin-right: 0.5rem;

  .light {
    filter: drop-shadow(1px 1px 0px var(--mainText))
      drop-shadow(-1px 1px 0px var(--mainText))
      drop-shadow(1px -1px 0px var(--mainText))
      drop-shadow(-1px -1px 0px var(--mainText));
  }

  .icons {
    :hover {
      transition-duration: 0.1s;
      fill: ${(props) => console.log(props)};
    }
  }
  @media (max-width: 850px) {
    .icons {
      height: 5rem;
      width: 5rem;
    }
  }
`;
