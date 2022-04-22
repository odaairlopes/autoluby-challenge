import { useVehicles } from "../../hooks/useVehicles";
import { Layout } from "../../components/Layout";
import { Navigate } from "react-router-dom";
import { Table } from "../../components/Table";

const Vehicles = () => {
  const {
    vehicles,
    totalRecords,
    isFetching,
    currentPage,
    perPage,
    handleChangePage,
    isLoggedIn,
  } = useVehicles();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Layout heading="Todos veículos">
      {isFetching && !vehicles && <h3>Loading...</h3>}
      {!!vehicles && (
        <Table
          title="Listagem geral de veículos"
          type="vehicle"
          data={vehicles}
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

export default Vehicles;
