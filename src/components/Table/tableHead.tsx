import { TableType } from ".";

type TableHead = {
  type: TableType;
};

export const TableHead = ({ type }: TableHead) => {
  const head = {
    employee: ["Nome", "Email", "CPF", "Salário", "Bio"],
    vehicle: [
      "Marca",
      "Modelo",
      "Ano",
      "KM",
      "Cor",
      "Status",
      "Chassis",
      "Valor",
    ],
  };

  return (
    <thead>
      <tr>
        {head[type].map((head) => (
          <th key={head}>{head}</th>
        ))}
      </tr>
    </thead>
  );
};
