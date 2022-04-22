import ReactPaginate from "react-paginate";
import { onPageChangeEvent } from "../../hooks/usePagination";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Container, Button } from "./styles";

type PaginationProps = {
  perPage: number;
  totalRecords: number;
  currentPage: number;
  onPageChange: onPageChangeEvent;
};

export const Pagination = ({
  perPage,
  totalRecords,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const pageCount = Math.ceil(totalRecords / perPage);

  return (
    <Container>
      <ReactPaginate
        containerClassName="pagination"
        previousLabel={
          <Button disabled={currentPage === 0}>
            <FiArrowLeft />
            Anterior
          </Button>
        }
        nextLabel={
          <Button disabled={currentPage === pageCount - 1}>
            Próximo <FiArrowRight />
          </Button>
        }
        pageCount={pageCount}
        breakLabel="..."
        onPageChange={onPageChange}
        pageLinkClassName="page-link"
        breakLinkClassName="page-link"
        activeClassName="active"
        forcePage={currentPage - 1 < 0 ? 0 : currentPage}
      />
    </Container>
  );
};
