import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Template = lazy(() => import("../pages/index"));
const Employees = lazy(() => import("../pages/Employees"));
const Vehicles = lazy(() => import("../pages/Vehicles"));
const SoldVehicles = lazy(() => import("../pages/SoldVehicles"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/app" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="employees" element={<Employees />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="reserved-sold" element={<SoldVehicles />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
