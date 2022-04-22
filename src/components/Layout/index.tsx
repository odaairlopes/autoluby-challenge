import { ReactNode } from "react";
import { Container, Heading } from "./styles";

type LayoutProps = {
  heading: string;
  children: ReactNode;
};

export const Layout = ({ heading, children }: LayoutProps) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      {children}
    </Container>
  );
};
