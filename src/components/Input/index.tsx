import { InputHTMLAttributes } from "react";
import { ReactComponent as IconChecked } from "../../assets/inputValid.svg";
import { ReactComponent as IconInvalid } from "../../assets/inputError.svg";

import * as Container from "./styles";

export type Status = "invalid" | "check" | "empty";

type InputProps = {
  status?: Status;
} & InputHTMLAttributes<HTMLInputElement>;

const elements = {
  check: <IconChecked />,
  invalid: <IconInvalid />,
  empty: "",
};

export const Input = ({ status = "empty", ...props }: InputProps) => {
  const element = elements[status];

  return (
    <Container.Wrapper>
      <Container.Input status={status} {...props} />
      <span>{element}</span>
    </Container.Wrapper>
  );
};
