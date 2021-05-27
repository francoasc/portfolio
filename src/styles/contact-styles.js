import styled from "styled-components";

export const StyledContact = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--mainColor);
  color: var(--mainText);
  padding: 60px 0 60px 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 1rem 0px 1rem;
    h2 {
      text-align: center;
      font-size: clamp(40px, 4vw, 60px);
      margin-bottom: 10px;
      color: var(--mainText);
    }
    p {
      color: var(--contactDescription);
      font-size: clamp(18px, 1vw, 24px);
      text-align: center;
      max-width: 250px;
    }
    button {
      border: 1px solid var(--colorBorder);
      background-color: transparent;
      text-decoration: none;
      border-radius: 4px;
      color: var(--buttonColor);
      padding: 1.25rem 1.75rem;
      cursor: pointer;
      margin-top: 2rem;
      line-height: 1;
      font-size: 15px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover {
        background-color: var(--secondaryColor);
      }
    }
  }
`;
