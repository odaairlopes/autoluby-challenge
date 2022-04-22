import { useEffect, useState } from "react";
import { usePagination } from "./usePagination";
import { Data, getVehicles } from "../services/api";
import { IVehicles } from "../types";
import { useUserAuth } from "../context/auth";
export const useVehicles = () => {
  const { isLoggedIn } = useUserAuth();
  const { currentPage, perPage, handleChangePage } = usePagination();
  const [data, setData] = useState<Data<IVehicles[]>>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) return;

    const fetch = async () => {
      setIsFetching(true);
      const data = await getVehicles(null, false, {
        page: currentPage + 1,
      });

      setData({
        totalRecords: data.totalRecords,
        records: data.vehicles,
      });
      setIsFetching(false);
    };

    fetch();
  }, [currentPage, isLoggedIn]);

  return {
    vehicles: data?.records,
    totalRecords: data?.totalRecords,
    isFetching,
    handleChangePage,
    currentPage,
    perPage,
    isLoggedIn,
  };
};
