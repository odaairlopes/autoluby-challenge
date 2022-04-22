import styled from "styled-components";

export const Container = styled.main`
  padding: 6rem 0;
  width: max-content;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  color: var(--blackDarkColor);
`;

export const Text = styled.p`
  color: var(--whiteDarkColor);
  font-size: 1.8rem;
`;

export const Content = styled.section`
  margin-top: 3rem;
`;

export const Card = styled.article`
  height: 20rem;
  width: 80rem;
  background-color: var(--whiteColor);
  box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
  border-radius: 3px;
  border: 1px solid var(--whiteSemiColor);
  display: flex;
  & + & {
    margin-top: 2rem;
  }
  transition: all 0.2s;
  backface-visibility: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 2px 25px rgba(169, 169, 169, 0.2);
    border-color: var(--redColor);
  }
`;

export const CardContent = styled.div`
  flex: 1;
  height: 100%;
  padding: 3rem;
  p {
    text-align: right;
  }
`;

export const CardTitle = styled.h2`
  color: var(--blackDarkColor);
  font-size: 2.6rem;
  line-height: 39px;
`;

export const CardDescription = styled.h3`
  color: var(--grayDarkColor);
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 27px;
`;

export const CardImg = styled.img``;

export const Total = styled.p`
  color: var(--redColor);
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 4.5rem;
`;
