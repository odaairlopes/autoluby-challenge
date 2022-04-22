import styled, { css } from "styled-components";
import { CarStatus } from "../../types";

type StatusProps = {
  status: CarStatus;
};

export const Container = styled.div`
  background-color: var(--whiteColor);
  border: 1px solid var(--whiteSemiColor);
  border-radius: 3px;
  box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
  padding: 2.5rem 3rem;
  overflow: auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const TableTitle = styled.h2`
  font-size: 2rem;
  color: var(--blackDarkColor);
`;

export const TableContent = styled.table`
  width: 100%;
  border-spacing: 0;
  margin-top: 2.5rem;
  thead {
    border-radius: 3px;
    background-color: var(--whiteLightColor);
    color: var(--grayDarkColor);
    font-size: 1.3rem;
    height: 7rem;
    padding: 0 3.5rem;
    text-align: left;
    text-transform: uppercase;
  }
  td,
  th {
    padding: 2rem;
  }
  td {
    font-size: 1.6rem;
    color: var(--blackDarkColor);
    font-weight: 500;
  }
`;

const StatusModifiers = {
  Vendido: () => css`
    color: var(--redColor);
    background-color: #f54a4833;
  `,
  Reservado: () => css`
    color: var(--orangeColor);
    background-color: #fac12f33;
  `,
  Disponível: () => css`
    color: var(--greenColor);
    background-color: #34c38f33;
  `,
};

export const Status = styled.span<StatusProps>`
  ${({ status }) => css`
    height: 3rem;
    width: 10.2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: 500;
    border-radius: 3px;
    ${!!status && StatusModifiers[status]};
  `}
`;
