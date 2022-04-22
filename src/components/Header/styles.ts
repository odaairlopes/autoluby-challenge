import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${() => css`
    background-color: var(--whiteColor);
    height: 12rem;
    box-shadow: 0px 2px 25px rgba(169, 169, 169, 0.2);
  `}
`;

export const Container = styled.div`
  ${() => css`
    max-width: 160rem;
    width: 100%;
    height: 100%;
    padding: 3.2rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Input = styled.input`
  color: var(--grayColor);
  box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
  border: 1px solid var(--whiteSemiColor);
  background-color: var(--whiteLightColor);
  padding: 1.6rem;
  padding-right: 3.8rem;
  display: inline-block;
  height: 100%;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 43rem;
  svg {
    margin-left: -3.2rem;
    transition: transform 0.3s;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      transform: translateY(-3px);
    }
    &:active {
      transform: translateY(-1px);
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
`;
