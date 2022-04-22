import styled from "styled-components";

export const Container = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    list-style: none;
    color: var(--grayDarkColor);
  }
  .active {
    background-color: var(--redColor);
    color: var(--whiteColor);
    border-radius: 3px;
  }
  .page-link {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    cursor: pointer;
    border-radius: 3px;
    &:hover {
      background-color: var(--redColor);
      color: var(--whiteColor);
    }
  }
`;

export const Button = styled.button`
  height: 2.8rem;
  border: 0;
  color: var(--grayDarkColor);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.85rem;
  border-radius: 3px;
  background-color: transparent;
  transition: all 0.4s;
  &:hover {
    background-color: #ededed;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #ededed;
  }
`;
