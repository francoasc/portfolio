import styled from "styled-components";

export const StyledProjects = styled.section`
  height: fit-content;
  width: 100%;
  background: var(--backgroundSubHeader);
  padding: 0 12rem;
  .container {
    padding: 3rem 0;
    h1 {
      text-align: center;
      font-size: 2rem;
      color: var(--mainText);
      margin-bottom: 2rem;
    }

    .projects_container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: auto;
      position: relative;
      justify-content: center;
    }
  }
  @media (max-width: 850px) {
    padding: 0;
    margin: 0;
    .container {
      .projects_container {
        display: grid;
        grid-template-columns: repeat(auto-fit, 320px);
        gap: 20px;
        justify-content: center;
        padding-bottom: 50px;
        li {
          .project_image {
            width: 100%;
          }
        }
      }
    }
  }
`;
export const StyledProjectCard = styled.li`
  height: 300px;
  max-width: 100%;
  display: flex;
  flex-direction: ${({ rowReverse }) =>
    rowReverse % 2 === 0 ? "row-reverse" : "row"};
  box-shadow: 0 20px 30px -15px var(--mainText);
  margin-bottom: 3rem;
  .project_content {
    position: relative;
    width: 50%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    grid-column-gap: 0px;

    .project_title {
      font-size: 2rem;
      font-weight: 900;
      margin: 1rem 0;
      color: var(--mainText);
      text-align: center;
    }

    .project_description {
      overflow-y: auto;
      p {
        color: var(--secondaryText);
        padding: 0 1.5rem;
        text-align: left;
        font-weight: 500;
        font-size: 18px;
      }
    }
    .project_links {
      position: absolute;
      right: ${({ rowReverse }) => (rowReverse % 2 === 0 ? 0 : 100)};
      bottom: 0;
      #icon {
        fill: var(--mainText);
        cursor: pointer;
        &:hover {
          transition: 0.5s;
          border-radius: 100%;
          border: 2px solid var(--mainText);
        }
      }
      #no-link {
        fill: gray;
        cursor: not-allowed;
      }
    }
  }
  .project_image {
    width: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 850px) {
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;

    .project_content {
      display: flex;
      flex-direction: column;
      width: 100%;
      .project_title {
        font-size: 24px;
        height: 30px;
      }
      .project_description {
        height: 160px;
        overflow-y: scroll;
        p {
          font-size: 16px;
        }
      }
      .project_links {
        position: static;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 0.5rem;

        #icon {
          height: 2rem;
          width: 2rem;
        }
        #no-link {
          height: 2rem;
          width: 2rem;
        }
      }
    }
    .project_image {
      height: 100%;
      width: 100%;
      img {
        display: block;
        height: 180px;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
