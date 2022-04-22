import { useEmployees } from "../../hooks/useEmployees";
import { Layout } from "../../components/Layout";
import { Navigate } from "react-router-dom";
import { Table } from "../../components/Table";

const Employees = () => {
  const {
    employees,
    totalRecords,
    isFetching,
    currentPage,
    perPage,
    handleChangePage,
    isLoggedIn,
  } = useEmployees();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Layout heading="Funcionários">
      {isFetching && !employees && <h3>Loading...</h3>}
      {!!employees && (
        <Table
          title="Listagem de funcionários da empresa"
          type="employee"
          data={employees}
          paginate={{
            currentPage,
            perPage,
            handleChangePage,
            totalRecords: totalRecords!,
          }}
        />
      )}
    </Layout>
  );
};

export default Employees;
