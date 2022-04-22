import { IUser } from "../../types";
import { getCPFFormatted, getCurrencyFormatted } from "../../utils/format";

type RowEmployee = {
  employee: IUser;
};

export const EmployeesRow = ({ employee }: RowEmployee) => {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{getCPFFormatted(employee.cpf)}</td>
      <td>{getCurrencyFormatted(employee.salary)}</td>
      <td>{employee.bio}</td>
    </tr>
  );
};
