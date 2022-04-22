import { Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/auth";
import {
  Container,
  Heading,
  Text,
  Content,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardImg,
  Total,
} from "./styles";
import { cards } from "./cards";

const Home = () => {
  const { user, companyData, isLoggedIn } = useUserAuth();
  const navigate = useNavigate();

  const total = {
    employees: companyData.totalEmployees,
    vehicles: companyData.totalVehicles,
    "reserved-sold": user?.vehicles?.length,
  };

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Container>
        <Heading>Bem vindo, {user?.name}</Heading>
        <Text>Menu</Text>
        <Content>
          {cards.map((card, index) => (
            <Card key={index} onClick={() => navigate(card.role)}>
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                <Total>{total[card.role]}</Total>
              </CardContent>
              <CardImg src={card.imgSrc} alt={card.imgAlt} />
            </Card>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Home;
