import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

const Template = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Template;
