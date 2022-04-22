import carMenu from "../../assets/carMenu.svg";
import carsMenu from "../../assets/carsMenu.svg";
import employeeMenu from "../../assets/employeeMenu.svg";

type Card = {
  title: string;
  description: string;
  total: string;
  imgSrc: string;
  imgAlt: string;
  role: "employees" | "vehicles" | "reserved-sold";
};

export const cards: Card[] = [
  {
    title: "Veículos reservados e vendidos",
    description: "Veículos reservados e vendidos por você",
    total: "147 veículos",
    imgSrc: carMenu,
    imgAlt: "Imagem de um carro",
    role: "reserved-sold",
  },
  {
    title: "Listagem geral de veículos",
    description: "Listagem geral de veículos de toda a empresa.",
    total: "180 veículos",
    imgSrc: carsMenu,
    imgAlt: "Imagem com alguns carros",
    role: "vehicles",
  },
  {
    title: "Funcionários da empresa",
    description: "Listagem de todos os funcionários da empresa.",
    total: "147 funcionários",
    imgSrc: employeeMenu,
    imgAlt: "Imagem de um funcionário da empresa",
    role: "employees",
  },
];
