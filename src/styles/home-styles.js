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
    opacity: 0;
    transform: translateY(-17px);
  }
`;

export const StyledHome = styled.section`
  min-height: 100vh;
  min-width: 100%;
  background-color: #0a192f;
  color: #efefef;
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
        text-align: left;
        font-size: 20px;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 400;
        color: #8cb0d9;
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
      color: #8cb0d9;
    }

    .scroll-button {
      position: absolute;
      bottom: 3px;
      right: 10px;
      border: none;
      background: none;
      color: #efefef;
      font-size: 1rem;
      cursor: pointer;
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
      background-color: #002d62;
      left: 0;
      bottom: 0;
      position: absolute;
      height: 50%;
      width: 100%;
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
            font-size: 32px;
          }
        }
      }

      h3 {
        font-weight: inherit;
        font-size: 24px;
      }

      .scroll-button {
        position: absolute;
        bottom: 3px;
        right: 10px;
        border: none;
        background: none;
        color: #efefef;
        font-size: 1rem;
        cursor: pointer;
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
  }
`;
