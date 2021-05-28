import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0% {
    animation-timing-function: ease-out;
    transform: translateY(0);
  }

  5% {
    animation-timing-function: ease-in;
    transform: translateY(-5px);
  }

  15% {
    animation-timing-function: ease-out;
    transform: translateY(0);
  }

  25% {
    animation-timing-function: ease-in;
    transform: translateY(-10px);
  }

  38% {
    animation-timing-function: ease-out;
    transform: translateY(0);
  }

  52% {
    animation-timing-function: ease-in;
    transform: translateY(-15px);
  }

  70% {
    animation-timing-function: ease-out;
    transform: translateY(0);
  }

  100% {
    transform: translateY(-17px);
  }
`;

export const StyledHome = styled.section`
  min-height: 100vh;
  min-width: 100%;
  background-color: var(--mainColor);
  color: var(--mainText);
  display: flex;
  flex-direction: column;

  .header-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    padding-left: clamp(1rem, 9vw, 20vw);
    h3 {
      font-size: clamp(16px, 4vw, 20px);
      letter-spacing: 1.2px;
      font-weight: 400;
      color: var(--subtitle);
      text-align: left;
      align-self: flex-start;
    }
    h1 {
      align-self: flex-start;
      text-align: left;
      font-weight: 800;
      letter-spacing: -0.03em;
      font-size: clamp(36px, 5vw, 70px);
    }
  }
  .subheader-container {
    padding-left: clamp(1rem, 9vw, 20vw);
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    .background-subheader {
      top: 0;
      left: 0;
      position: absolute;
      background-color: var(--backgroundSubHeader);
      width: 100%;
      height: 100%;
    }
    .subheader-text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 2 100%;
      h1 {
        align-self: flex-start;
        font-size: clamp(36px, 5vw, 70px);
        font-weight: 800;
        letter-spacing: -0.03em;

        text-align: left;
      }
      h3 {
        font-size: clamp(16px, 4vw, 20px);
        letter-spacing: 1.5px;
        font-weight: 200;
        color: var(--subtitle);
        text-align: left;
        align-self: flex-start;
      }
    }
    .buttons-container {
      padding-right: clamp(0px, 4vw, 9vw);

      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      padding-bottom: 5px;
      .scroll-button {
        flex: 1;
        div {
          cursor: pointer;
          width: fit-content;
          font-size: clamp(16px, 20px, 25px);
          .arrow-animation {
            display: inline-block;
          }
          &:hover {
            .arrow-animation {
              animation: ${bounce} 2s linear 500ms infinite alternate forwards;
            }
          }
        }
      }
      .theme-dots-container {
        flex: 1;
        width: fit-content;
        display: flex;
        justify-content: flex-end;
        div {
          cursor: pointer;
          border: 1.3px solid black;
          border-radius: 2rem;
          margin-left: clamp(5px, 1rem, 1.2rem);
        }
      }
    }
  }
`;
