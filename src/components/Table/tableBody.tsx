import { ReactNode } from "react";
import { VehiclesRow } from "./vehicleRows";
import { IVehicles } from "../../types";
import { TableData } from ".";
import { EmployeesRow } from "./employeeRows";

type TableBody = {
  data: TableData;
};

const isVehicle = (data: TableData): data is IVehicles[] => {
  return (data[0] as IVehicles).brand !== undefined;
};

export const TableBody = ({ data }: TableBody) => {
  let rows: ReactNode[] = [];

  if (isVehicle(data)) {
    rows = data.map((vehicle) => (
      <VehiclesRow key={vehicle.chassi} vehicle={vehicle} />
    ));
  } else {
    rows = data.map((employee, index) => (
      <EmployeesRow key={`${employee.email}-${index}`} employee={employee} />
    ));
  }

  return <tbody>{rows}</tbody>;
};
