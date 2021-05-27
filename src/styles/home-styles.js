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

  85% {
    opacity: 1;
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
  padding-right: auto;
  padding-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  .header-container {
    .logo-container {
      span {
        display: inline-block;
        text-align: left;
        font-size: 20px;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 400;
        color: var(--subtitle);
      }
    }

    .header-text {
      h1 {
        p {
          position: relative;
          font-weight: 800;
          text-align: left;
          line-height: 130%;
          letter-spacing: -0.03em;
          font-size: 64px;
        }
      }
    }

    h3 {
      font-weight: inherit;
      font-size: 24px;
      position: relative;
      text-align: left;
      color: var(--subtitle);
    }

    .scroll-button {
      animation: fade-in-bottom 0.5s ease-in-out 150ms both;
      position: absolute;
      bottom: 10px;
      left: 10px;
      border: none;
      background: none;
      font-size: 1rem;
      cursor: pointer;
      width: fit-content;
      span {
        color: var(--buttonColor);
      }
      .arrow-animation {
        display: inline-block;
      }
      &:hover {
        .arrow-animation {
          animation: ${bounce} 2s linear 500ms infinite alternate forwards;
        }
      }
    }

    .background-color-subheader {
      background-color: var(--backgroundSubHeader);
      left: 0;
      bottom: 0;
      position: absolute;
      height: 50%;
      width: 100%;
    }
    .theme-dots-container {
      display: flex;
      position: absolute;
      bottom: 10px;
      right: 25px;
      span {
        cursor: pointer;
        height: 30px;
        width: 30px;
        margin-left: 1rem;
        border: 1px solid black;
        border-radius: 50%;
      }
    }
  }

  @media (max-width: 800px) {
    .header-container {
      padding-left: 15px;
      padding-right: 15px;

      .logo-container {
        span {
          text-align: left;
          font-size: 15px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
      }

      .header-text {
        h1 {
          p {
            position: relative;
            font-weight: 800;
            text-align: left;
            line-height: 130%;
            letter-spacing: -0.03em;
            font-size: 35px;
          }
        }
      }

      h3 {
        font-size: 24px;
      }

      .scroll-button {
        position: absolute;
        bottom: 3px;
        right: 10px;
        font-size: 1.3rem;
        cursor: pointer;
        .arrow-animation {
          color: var(--secondaryText);
          display: inline-block;
        }
        &:hover {
          .arrow-animation {
            animation: ${bounce} 2s linear 500ms infinite alternate forwards;
          }
        }
      }
      .theme-dots-container {
        display: flex;
        position: absolute;
        bottom: 3px;
        right: 0rem;
        span {
          height: 30px;
          width: 30px;
        }
      }
    }
  }
  @media (max-width: 320px) {
    .header-container {
      .header-text {
        h1 {
          p {
            font-size: 25px;
          }
        }
      }
    }
  }
`;
