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
    }
  }
  .project_image {
    width: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
