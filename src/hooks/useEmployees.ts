import { useEffect, useState } from "react";
import { usePagination } from "./usePagination";
import { Data, getEmployees } from "../services/api";
import { IUser } from "../types";
import { useUserAuth } from "../context/auth";

export const useEmployees = () => {
  const { isLoggedIn } = useUserAuth();
  const { currentPage, perPage, handleChangePage } = usePagination();
  const [data, setData] = useState<Data<IUser[]>>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) return;

    const fetch = async () => {
      setIsFetching(true);
      const data = await getEmployees(null, false, {
        page: currentPage + 1,
      });

      setData({
        totalRecords: data.totalRecords,
        records: data.employees,
      });
      setIsFetching(false);
    };

    fetch();
  }, [currentPage, isLoggedIn]);

  return {
    employees: data?.records,
    totalRecords: data?.totalRecords,
    isFetching,
    handleChangePage,
    currentPage,
    perPage,
    isLoggedIn,
  };
};
