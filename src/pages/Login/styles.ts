import styled, { css } from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
  img {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const WelcomeContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div`
  @media (max-height: 700px) {
    margin-top: 12rem;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 8rem;
  left: 12rem;
  @media (max-height: 700px) {
    top: 4rem;
    left: 5rem;
  }
`;

export const Heading = styled.h1`
  ${() => css`
    color: var(--fontColor);
    font-size: 3.8rem;
  `}
`;

export const SubHeading = styled.h2`
  ${() => css`
    color: var(--grayColor);
    font-size: 1.4rem;
  `}
`;

export const Form = styled.form`
  margin-top: 7rem;
`;

export const FormGroup = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
    label {
      font-size: 1.4rem;
      color: var(--blackSemiColor);
      font-weight: 600;
    }
  `}
`;

export const RadioGroup = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--redColor)
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 4rem;
    input[type="checkbox"] {
      display: inline-block;
      height: 20px;
      width: 20px;
      accent-color: var(--redColor);
    }
    a {
      margin-left: auto;
      text-decoration: none;
      &:visited,
      &:link {
        color: inherit;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;

type TextProps = {
  color?: "error";
};

export const Text = styled.p<TextProps>`
  ${({ color }) => css`
    color: var(--blackSemiColor);
    font-size: 1.4rem;
    font-weight: 500;
    margin-top: 4rem;
    a {
      text-decoration: none;
      color: var(--redColor);
    }
    ${color === "error" &&
    css`
      color: var(--orangeColor);
    `}
  `}
`;

export const MessageErrorWrapper = styled.div`
  margin-bottom: 0.8rem;
  ${Text} {
    margin: 0;
  }
`;
