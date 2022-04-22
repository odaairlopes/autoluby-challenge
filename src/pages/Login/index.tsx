import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/auth";
import { Button } from "../../components/Button";
import { LogoApp } from "../../components/LogoApp";
import { Status, Input } from "../../components/Input";
import { regexValidEmail } from "../../utils/validationEmail";
import loginBg from "../../assets/bgLogin.svg";
import {
  Container,
  WelcomeContent,
  LogoWrapper,
  Content,
  Form,
  FormGroup,
  RadioGroup,
  Text,
  Heading,
  SubHeading,
  MessageErrorWrapper,
} from "./styles";

const Login = () => {
  const { isLoggedIn, login } = useUserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusInputEmail, setStatusInputEmail] = useState<Status>("empty");
  const [statusInputPassword, setStatusInputPassword] =
    useState<Status>("empty");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);

    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!regexValidEmail.test(emailValue)) {
      setStatusInputEmail("invalid");
      return;
    }

    if (emailValue.length === 0) {
      setStatusInputEmail("empty");
      return;
    }

    setStatusInputEmail("check");
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    e.preventDefault();

    const response = await login({
      email,
      password,
    });

    if (response.error) {
      setError(true);
      setStatusInputEmail("invalid");
      setStatusInputPassword("invalid");
      setSubmitting(false);

      return;
    }

    setSubmitting(false);

    navigate("/app");
  };

  if (isLoggedIn) {
    return <Navigate to="/app" />;
  }

  return (
    <Container>
      <WelcomeContent>
        <LogoWrapper>
          <LogoApp />
        </LogoWrapper>
        <Content>
          <Heading>Bem vindo à AutoLuby</Heading>
          <SubHeading>Faça login para acessar sua conta.</SubHeading>
          <Form onSubmit={handleSubmit}>
            {error && (
              <MessageErrorWrapper>
                <Text color="error">
                  Falha na autenticação de login do usuário.
                </Text>
              </MessageErrorWrapper>
            )}
            <FormGroup>
              <label htmlFor="email">Endereço de email</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="@mail.com"
                required
                value={email}
                onChange={handleChangeEmail}
                status={statusInputEmail}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Senha:</label>
              <Input
                type="password"
                id="password"
                name="passowrd"
                placeholder="Senha"
                required
                value={password}
                onChange={handleChangePassword}
                status={statusInputPassword}
              />
            </FormGroup>
            <RadioGroup>
              <input type="checkbox" id="remember-password" value="false" />
              <label htmlFor="remember-passsword">Lembrar minha senha</label>
              <a href="#">Esqueceu senha?</a>
            </RadioGroup>

            <Button type="submit" fullWidth disabled={submitting}>
              {submitting ? "Autenticando..." : "Entrar"}
            </Button>
          </Form>
          <Text>
            Ainda não tem uma conta? <a href="#">Criar conta</a>
          </Text>
        </Content>
      </WelcomeContent>
      <img src={loginBg} alt="Background login" />
    </Container>
  );
};

export default Login;
