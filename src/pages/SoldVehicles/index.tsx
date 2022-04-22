import { useSoldCars } from "../../hooks/useSoldCars";
import { Layout } from "../../components/Layout";
import { Navigate } from "react-router-dom";
import { Table } from "../../components/Table";

const SoldVehicles = () => {
  const {
    vehicles,
    isLoggedIn,
    currentPage,
    perPage,
    itemOffset,
    handleChangePage,
  } = useSoldCars();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Layout heading="Seus veículos">
      {!!vehicles && (
        <Table
          title="Listagem de veículos reservados e vendidos"
          type="vehicle"
          data={vehicles.slice(itemOffset, itemOffset + perPage)}
          paginate={{
            currentPage,
            perPage,
            handleChangePage,
            totalRecords: vehicles.length,
          }}
        />
      )}
    </Layout>
  );
};
export default SoldVehicles;
