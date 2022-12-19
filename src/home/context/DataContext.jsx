import React, { createContext, useState, useEffect } from "react";
import { getData } from "../../services/getData";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [dataPerPage] = useState(12);

  useEffect(() => {
    getData()
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Obtengo la data
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  // Cambio de pagina
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const values = {
    dataLength: data.length,
    currentData,
    paginate,
    dataPerPage,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}
