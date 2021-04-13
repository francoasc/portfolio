import styled from "styled-components";

export const StyledHome = styled.section`
  min-height: 100vh;
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
    height: 100%;

    .logo-container {
      span {
        /* animation: tracking-in-expand 1s cubic-bezier(0.215, 0.61, 0.355, 1) both; */
        text-align: left;
        font-size: 20px;
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
          font-size: 64px;
        }
      }
    }

    h3 {
      font-weight: inherit;
      font-size: 24px;
    }

    .scrollButton {
      position: absolute;
      bottom: 3px;
      right: 10px;
      border: none;
      background: none;
      color: #efefef;
      font-size: 1rem;
      cursor: pointer;
    }

    .scrollButtonLogo {
      position: absolute;
      bottom: 2.2px;
      right: 3.1rem;
      border: none;
      background: none;
      color: #efefef;
      font-size: 1rem;
      &:hover {
        cursor: pointer;
        animation: animationFrames linear 0.8s;
        animation-iteration-count: 1;
        transform-origin: 50% 50%;

        @keyframes animationFrames {
          0% {
            transform: translate(0px, 0px);
          }
          15% {
            transform: translate(0px, -25px);
          }
          30% {
            transform: translate(0px, 0px);
          }
          45% {
            transform: translate(0px, -15px);
          }
          60% {
            transform: translate(0px, 0px);
          }
          75% {
            transform: translate(0px, -5px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
      }
    }
  }
`;
