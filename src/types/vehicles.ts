export type CarStatus = "Vendido" | "Reservado" | "Disponível";

export interface IVehicles {
  brand: string;
  chassi: string;
  color: string;
  km: number;
  model: string;
  status: CarStatus;
  value: number;
  yer: string;
}
