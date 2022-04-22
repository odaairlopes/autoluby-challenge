import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/auth";
import { LogoApp } from "../LogoApp/index";
import { Button } from "../Button/index";
import {
  Wrapper,
  Container,
  InputWrapper,
  ButtonsWrapper,
  Input,
} from "./styles";
import { FiSearch, FiLogOut } from "react-icons/fi";

export const Header = () => {
  const { logout } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <LogoApp cursor="pointer" onClick={() => navigate("/")} />
        <InputWrapper>
          <Input type="text" />
          <FiSearch />
        </InputWrapper>
        <ButtonsWrapper>
          <Button onClick={handleLogout}>
            Sair
            <FiLogOut />
          </Button>
        </ButtonsWrapper>
      </Container>
    </Wrapper>
  );
};
