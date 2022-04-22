import { IVehicles } from "../../types";
import { getCurrencyFormatted, getKMFormatted } from "../../utils/format";
import { Status } from "./styles";

type RowVehicle = {
  vehicle: IVehicles;
};

export const VehiclesRow = ({ vehicle }: RowVehicle) => {
  return (
    <tr>
      <td>{vehicle.brand}</td>
      <td>{vehicle.model}</td>
      <td>{vehicle.yer}</td>
      <td>{getKMFormatted(vehicle.km)}</td>
      <td>{vehicle.color}</td>
      <td>
        <Status status={vehicle.status}>{vehicle.status}</Status>
      </td>
      <td>{vehicle.chassi}</td>
      <td>{getCurrencyFormatted(vehicle.value)}</td>
    </tr>
  );
};
