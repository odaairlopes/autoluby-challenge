import { IVehicles } from "../../types";
import { IUser } from "../../types";
import { Pagination } from "../Pagination";
import { onPageChangeEvent, PaginationProps } from "../../hooks/usePagination";
import { TableHead } from "./tableHead";
import { TableBody } from "./tableBody";
import { Container, Header, TableTitle, TableContent, Content } from "./styles";

export type TableData = IVehicles[] | IUser[];
export type TableType = "vehicle" | "employee";

type TableProps = {
  title: string;
  type: TableType;
  data: TableData;
  paginate: PaginationProps & {
    handleChangePage: onPageChangeEvent;
    totalRecords: number;
  };
};

export const Table = ({ title, type, data, paginate }: TableProps) => {
  const { currentPage, perPage, handleChangePage, totalRecords } = paginate;

  return (
    <Container>
      <Header>
        <Content>
          <TableTitle>{title}</TableTitle>
          <Pagination
            currentPage={currentPage}
            perPage={perPage}
            onPageChange={handleChangePage}
            totalRecords={totalRecords}
          />
        </Content>
        <TableContent>
          <TableHead type={type} />
          <TableBody data={data} />
        </TableContent>
      </Header>
    </Container>
  );
};
