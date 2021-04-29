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
      /* border: 2px solid red; */
      width: 100%;
      margin: 0 1em;
      .title {
        font-size: 1.7rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .description {
        font-size: 1rem;
        margin-bottom: 1rem;
        word-wrap: break-word;
      }
      .description_2 {
        font-size: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid gray;
      }

      .skills_container {
        display: flex;
        flex-direction: column;
        h4 {
          font-size: 1.7rem;
          margin-top: 2rem;
        }
        p {
          margin-top: 1rem;
          span {
            cursor: pointer;
            text-decoration: underline;
            :hover {
            }
          }
        }
        .skills {
          width: 80%;
          display: flex;
          flex-wrap: wrap;
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
        /* color: #002d62; */

        .icon {
          /* width: 1.2rem;
          height: 1.2rem; */
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
`;

export const StyledSkillIcon = styled.span`
  transition: 0s;
  margin: 1.5rem;
  text-align: center;
  .icons {
    :hover {
      transition-duration: 0s;
      transition-delay: 0s;
      fill: ${({ children }) => children[0].props.theme};
    }
  }
`;
