import styled, { css } from "styled-components";
import { Status } from ".";

type InputProps = {
  status: Status;
};

const InputModifiers = {
  check: () => css`
    border: 1.5px solid #34c38f;
  `,
  invalid: () => css`
    border: 1.5px solid #fa982f;
  `,
  empty: () => css``,
};

export const Wrapper = styled.div`
  position: relative;
  span {
    display: flex;
    align-items: center;
    position: absolute;
    right: 1.6rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Input = styled.input<InputProps>`
  ${({ status }) => css`
    width: 100%;
    border: 1px solid var(--whiteSemiColor);
    display: inline-block;
    height: 3.6rem;
    border-radius: 3px;
    background-color: var(--whiteLightColor);
    color: var(--grayColor);
    padding: 1.6rem;
    font-weight: 400;
    outline: 0;
    ${!!status && InputModifiers[status]};
  `}
`;
