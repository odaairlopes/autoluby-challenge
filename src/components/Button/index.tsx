import * as Container from "./styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  withIcon?: ReactNode;
  fullWidth?: boolean;
  reverse?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  withIcon,
  fullWidth,
  children,
  reverse = false,
  ...props
}: ButtonProps) => {
  return (
    <Container.Wrapper
      withIcon={!!withIcon}
      fullWidth={!!fullWidth}
      reverse={reverse}
      {...props}
    >
      {children}
    </Container.Wrapper>
  );
};
