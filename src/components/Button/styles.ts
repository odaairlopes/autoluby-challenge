import styled, { css } from "styled-components";

const ButtonModifiers = {
  withIcon: () => css`
    span {
      display: flex;
      align-items: center;
    }
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  reverse: () => css`
    flex-direction: row-reverse;
  `,
};

type WrapperProps = {
  withIcon?: boolean;
  fullWidth?: boolean;
  reverse: boolean;
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ withIcon, fullWidth, reverse }) => css`
    background-color: var(--redColor);
    border: 0;
    border-radius: 3px;
    color: var(--whiteColor);
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1rem;
    height: 3.8rem;
    display: inline-flex;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
    ${withIcon && ButtonModifiers.withIcon()}
    ${fullWidth && ButtonModifiers.fullWidth()}
      ${reverse && ButtonModifiers.reverse()}
      transition: background-color 0.2s, border 0.2s;
    &:hover {
      background-color: #df3938;
    }
    &:focus {
      border: 1.5px solid #971212;
    }
  `}
`;
