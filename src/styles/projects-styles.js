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
    .projects_container {
      li {
        .project_image {
          width: 100%;
        }
      }
    }
  }
`;
//TODO: seguir haciendo los estilos de las cards
export const StyledProjectCard = styled.li`
  height: 300px;
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
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 0px;
    .project_title {
      font-size: 2rem;
      font-weight: 900;
      margin: 1rem 0;
      color: var(--mainText);
      text-align: center;
    }
    .project_description {
      color: var(--secondaryText);
      padding: 0 1.5rem;
      text-align: left;
    }
    .project_tech_list {
      padding: 1rem 1.5rem 0 1.5rem;
      color: var(--secondaryText);
      .tech {
        padding: 0 0.3rem;
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

    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr); */

    .project_content {
      flex: 2;
      display: flex;
      flex-direction: column;
      width: 100%;
      .project_title {
        font-size: 18px;
      }
      .project_description {
        font-size: 12px;
      }
    }
    .project_image {
      height: 180px;
    }
  }
`;

//TODO: terminar el responsive de project card
